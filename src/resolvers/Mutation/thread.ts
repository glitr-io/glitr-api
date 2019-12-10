
import {  getUserId, Context } from '../../utils'
import { create } from 'domain'

export const thread = {
    
    async thread(parent, {
        id,
        posts = [],
        tags = [],
        blocked = undefined
    }, ctx: Context, info) {
        const userId = await getUserId(ctx)

        if (!userId) {
            throw new Error(`not authorised!!`)
        }

        if (!!id) {
            const threadExists = await ctx.prisma.$exists.thread({
                id,
            })
    
            if (!!threadExists) {
                return await ctx.prisma.updateThread({
                    where: { id },
                    data: {
                        blocked: (typeof blocked === 'boolean' ? !!blocked : undefined),
                        posts: {
                            update: posts
                                .filter(({ id }) => !!id)
                                .map(({ id, ...postsProps }) => ({
                                    where: { id },
                                    data: { ...postsProps }
                                })),
                            create: posts
                                .filter(({ id }) => !id)
                                .map(post => ({ ...post }))
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
                throw new Error(`thread with that id not found`)
            }
        } else {
            console.log('creating thread')
            return await ctx.prisma.createThread({
                posts: {
                    create: posts
                        .map(post => ({ ...post }))
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