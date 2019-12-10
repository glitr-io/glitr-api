import { Context } from '../utils'

export const Meme = {
  author: ({ id }, args, ctx: Context) => {
    return ctx.prisma.meme({ id }).author()
  },
  memeItems: ({ id }, args, ctx: Context) => {
    return ctx.prisma.meme({ id }).memeItems()
  },
  tags: ({ id }, args, ctx: Context) => {
    return ctx.prisma.meme({ id }).tags()
  },
}
