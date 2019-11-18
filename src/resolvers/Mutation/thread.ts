
import {  getUserId, Context } from '../../utils'

// todo: update all of this to refer to thread not not meme
export const thread = {
    
    async meme(parent, {
        id,
        memeItems,
        tags
    }, ctx: Context, info) {
        const userId = getUserId(ctx)
        // const test = await ctx.prisma.$exists.

        if (!userId) {
            throw new Error(`not authorised!!`)
        }

        if (!!id) {
            const memeExists = await ctx.prisma.$exists.meme({
                id,
            })
    
            if (memeExists) {
                // return ctx.prisma.createMeme({
    
                // })
    
                // todo: functionality to create meme
                // todo: functionality to edit meme
            } else {
                // if meme does not exist, create a new meme.
                return ctx.prisma.createMeme({
                    author:  {
                        connect: { id: userId },
                    },
                    memeItems: {
                        create: memeItems.map(({
                            type,
                            meta,
                            value,
                            style,
                            tags
                        }) => ({
                            type,
                            meta,
                            value,
                            style,
                            tags: {
                                create: tags.map(({ name }) => [
                                    {
                                        name
                                    }
                                ])
                            }
                        }))
                    }
                })
            }
        } else {

        }
    }
}
