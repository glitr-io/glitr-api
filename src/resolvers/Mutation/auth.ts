import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context, getUserId } from '../../utils'

export const auth = {

	async signup(parent, { password, email, displayName }, ctx: Context) {
		const passwordHash = await bcrypt.hash(password, 10)
		const user = await ctx.prisma.createUser({ email, displayName, passwordHash })
	
		return {
			token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
			user,
		}
	},

	async login(parent, { email, password }, ctx: Context) {
		const user = await ctx.prisma.user({ email })
		if (!user) {
		  	throw new Error(`No such user found for email: ${email}`)
		}
	
		const valid = await bcrypt.compare(password, user.passwordHash)
		if (!valid) {
		 	 throw new Error('Invalid password')
		}
	
		return {
			token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
			user,
		}
	},

	async user(parent, {
		email = '',
		blocked = undefined,
		displayName = '',
		confirmed = undefined,
		permissions = [],
		threads = []
	}, ctx: Context) {
		const userId = getUserId(ctx)
		if (!userId) {
            throw new Error(`not authorised!!`)
		}
		
		const userExisits = await ctx.prisma.$exists.user({ id: userId })
		if (!userExisits) {
		  	throw new Error(`No such user found for email: ${email}`)
		}

		return await ctx.prisma.updateUser({
			where: { id: userId },
			data: {
				blocked: (typeof blocked === 'boolean' ? !!blocked : undefined),
				confirmed: (typeof blocked === 'boolean' ? !!confirmed : undefined),
				displayName,
				permissions: {
					set: permissions
				},
				threads: {
					update: threads
						.filter(({ id }) => !!id)
						.map(({ id, ...threadProps }) => ({
							where: { id },
							data: { ...threadProps }
						})),
					create: threads
						.filter(({ id }) => !id)
						.map(thread => ({ ...thread }))
				}
			}
		})

		// todo: functionality to update user from id
	},
}
