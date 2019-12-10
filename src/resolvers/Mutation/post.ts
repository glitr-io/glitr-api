
import {  getUserId, Context } from '../../utils'

export const post = {
    
    async post(parent, {
        id,
        name = '',
        meme = { id: null },
        tags = [],
        blocked = undefined
    }, ctx: Context, info) {
        const userId = await getUserId(ctx)

        if (!userId) {
            throw new Error(`not authorised!!`)
        }

        const {
          id: memeId,
          ...memeData
        } = meme

        if (!!id) {
            const postExists = await ctx.prisma.$exists.post({
                id,
            })
    
            if (!!postExists) {
                return ctx.prisma.updatePost({
                    where: { id },
                    data: {
                        blocked: (typeof blocked === 'boolean' ? !!blocked : undefined),
                        name,
                        meme: {
                          update: {
                            ...memeData
                          }
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
                throw new Error(`post with that id not found`)
            }
        } else {
            console.log('creating post')
            return await ctx.prisma.createPost({
                author:  {
                    connect: { id: userId },
                },
                name,
                meme: memeData,
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
