import { Query } from './Query'
// import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { thread } from './Mutation/thread'
import { post } from './Mutation/post'
import { meme } from './Mutation/meme'
import { User } from './User'
import { Post } from './Post'

// todo create missing files here create crate and edit functionality

export default {
  Query,
  Mutation: {
    ...auth,
    ...thread,
    ...post,
    ...meme,
  },
  // Subscription,
  // User,
  // Post,
}
