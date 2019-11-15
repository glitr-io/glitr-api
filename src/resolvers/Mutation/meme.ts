
import {  getUserId, Context } from '../../utils'

export const meme = {
    
    async meme(parent, { id, }, ctx: Context, info) {
        const userId = getUserId(ctx)
        // const test = await ctx.prisma.$exists.
        const memeExists = await ctx.prisma.$exists.meme({
            id,
        })

        if (!memeExists) {
            // return ctx.prisma.createMeme({

            // })
        }
    }
}
