
import {  getUserId, Context } from '../../utils'
import { create } from 'domain'

export const meme = {
    
    async meme(parent, {
        id,
        memeItems = [],
        tags = [],
        blocked = undefined
    }, ctx: Context, info) {
        const userId = await getUserId(ctx)

        if (!userId) {
            throw new Error(`not authorised!!`)
        }

        if (!!id) {
            const memeExists = await ctx.prisma.$exists.meme({
                id,
            })
    
            if (!!memeExists) {
                return await ctx.prisma.updateMeme({
                    where: { id },
                    data: {
                        blocked: (typeof blocked === 'boolean' ? !!blocked : undefined),
                        memeItems: {
                            update: memeItems
                                .filter(({ id }) => !!id)
                                .map(({ id, ...memeItemProps }) => ({
                                    where: { id },
                                    data: { ...memeItemProps }
                                })),
                            create: memeItems
                                .filter(({ id }) => !id)
                                .map(meme => ({ ...meme }))
                        },
                        tags: {
                            update: tags.map(({ id, ...tagProps }) => ({
                                where: { id },
                                data: { ...tagProps }
                            }))
                        }
                        
                    }
                })
            } else {
                throw new Error(`meme with that id not found`)
            }
        } else {
            console.log('creating meme')
            return await ctx.prisma.createMeme({
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
        }
    }
}