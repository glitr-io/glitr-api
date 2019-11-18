
import {  getUserId, Context } from '../../utils'

export const meme = {
    
    async meme(parent, {
        id,
        memeItems,
        tags = []
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
    
            if (!!memeExists) {
                // return ctx.prisma.createMeme({
    
                // })
    
                // todo: functionality to create meme
                // todo: functionality to edit meme
            } else {
                // todo: do stuff here
            }
        } else {
            // if meme does not exist, create a new meme.
            console.log('creating meme', memeItems);
            const newMeme = await ctx.prisma.createMeme({
                author:  {
                    connect: { id: userId },
                },
                memeItems: {
                    create: memeItems.map(({
                        type,
                        meta,
                        value,
                        style,
                        tags = []
                    }) => ({
                        type,
                        meta,
                        value,
                        style,
                        tags: {
                            create: tags.map(({ name = '' }) => (
                                {
                                    name
                                }
                            ))
                        }
                    }))
                },
                tags: {
                    create: tags.map(({ name = '' }) => (
                        {
                            name
                        }
                    ))
                }
            });

            console.log('newMeme', newMeme);

            const test1 = await ctx.prisma.meme({ id: newMeme.id });

            console.log('test1', test1)
            return test1;
        }
    }
}