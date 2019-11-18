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

	async user(parent, { email, password }, ctx: Context) {
		const userId = getUserId(ctx)
		const user = await ctx.prisma.user({ id: userId })
		if (!user) {
		  	throw new Error(`No such user found for email: ${email}`)
		}

		// todo: functionality to update user from id
	},
}
