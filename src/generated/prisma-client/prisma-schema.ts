// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateMeme {
  count: Int!
}

type AggregateMemeItem {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateThread {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Meme {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  author: User!
  memeItems(where: MemeItemWhereInput, orderBy: MemeItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MemeItem!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
}

type MemeConnection {
  pageInfo: PageInfo!
  edges: [MemeEdge]!
  aggregate: AggregateMeme!
}

input MemeCreateInput {
  id: ID
  blocked: Boolean
  author: UserCreateOneInput!
  memeItems: MemeItemCreateManyInput
  tags: TagCreateManyInput
}

input MemeCreateOneInput {
  create: MemeCreateInput
  connect: MemeWhereUniqueInput
}

type MemeEdge {
  node: Meme!
  cursor: String!
}

type MemeItem {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  type: MemeItemType!
  meta: String!
  value: String!
  style: String!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
}

type MemeItemConnection {
  pageInfo: PageInfo!
  edges: [MemeItemEdge]!
  aggregate: AggregateMemeItem!
}

input MemeItemCreateInput {
  id: ID
  blocked: Boolean
  type: MemeItemType!
  meta: String!
  value: String!
  style: String!
  tags: TagCreateManyInput
}

input MemeItemCreateManyInput {
  create: [MemeItemCreateInput!]
  connect: [MemeItemWhereUniqueInput!]
}

type MemeItemEdge {
  node: MemeItem!
  cursor: String!
}

enum MemeItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  blocked_ASC
  blocked_DESC
  type_ASC
  type_DESC
  meta_ASC
  meta_DESC
  value_ASC
  value_DESC
  style_ASC
  style_DESC
}

type MemeItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  type: MemeItemType!
  meta: String!
  value: String!
  style: String!
}

input MemeItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  type: MemeItemType
  type_not: MemeItemType
  type_in: [MemeItemType!]
  type_not_in: [MemeItemType!]
  meta: String
  meta_not: String
  meta_in: [String!]
  meta_not_in: [String!]
  meta_lt: String
  meta_lte: String
  meta_gt: String
  meta_gte: String
  meta_contains: String
  meta_not_contains: String
  meta_starts_with: String
  meta_not_starts_with: String
  meta_ends_with: String
  meta_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  style: String
  style_not: String
  style_in: [String!]
  style_not_in: [String!]
  style_lt: String
  style_lte: String
  style_gt: String
  style_gte: String
  style_contains: String
  style_not_contains: String
  style_starts_with: String
  style_not_starts_with: String
  style_ends_with: String
  style_not_ends_with: String
  AND: [MemeItemScalarWhereInput!]
  OR: [MemeItemScalarWhereInput!]
  NOT: [MemeItemScalarWhereInput!]
}

type MemeItemSubscriptionPayload {
  mutation: MutationType!
  node: MemeItem
  updatedFields: [String!]
  previousValues: MemeItemPreviousValues
}

input MemeItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemeItemWhereInput
  AND: [MemeItemSubscriptionWhereInput!]
  OR: [MemeItemSubscriptionWhereInput!]
  NOT: [MemeItemSubscriptionWhereInput!]
}

enum MemeItemType {
  CANVAS
  IMAGE
  TEXT
}

input MemeItemUpdateDataInput {
  blocked: Boolean
  type: MemeItemType
  meta: String
  value: String
  style: String
  tags: TagUpdateManyInput
}

input MemeItemUpdateInput {
  blocked: Boolean
  type: MemeItemType
  meta: String
  value: String
  style: String
  tags: TagUpdateManyInput
}

input MemeItemUpdateManyDataInput {
  blocked: Boolean
  type: MemeItemType
  meta: String
  value: String
  style: String
}

input MemeItemUpdateManyInput {
  create: [MemeItemCreateInput!]
  update: [MemeItemUpdateWithWhereUniqueNestedInput!]
  upsert: [MemeItemUpsertWithWhereUniqueNestedInput!]
  delete: [MemeItemWhereUniqueInput!]
  connect: [MemeItemWhereUniqueInput!]
  set: [MemeItemWhereUniqueInput!]
  disconnect: [MemeItemWhereUniqueInput!]
  deleteMany: [MemeItemScalarWhereInput!]
  updateMany: [MemeItemUpdateManyWithWhereNestedInput!]
}

input MemeItemUpdateManyMutationInput {
  blocked: Boolean
  type: MemeItemType
  meta: String
  value: String
  style: String
}

input MemeItemUpdateManyWithWhereNestedInput {
  where: MemeItemScalarWhereInput!
  data: MemeItemUpdateManyDataInput!
}

input MemeItemUpdateWithWhereUniqueNestedInput {
  where: MemeItemWhereUniqueInput!
  data: MemeItemUpdateDataInput!
}

input MemeItemUpsertWithWhereUniqueNestedInput {
  where: MemeItemWhereUniqueInput!
  update: MemeItemUpdateDataInput!
  create: MemeItemCreateInput!
}

input MemeItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  type: MemeItemType
  type_not: MemeItemType
  type_in: [MemeItemType!]
  type_not_in: [MemeItemType!]
  meta: String
  meta_not: String
  meta_in: [String!]
  meta_not_in: [String!]
  meta_lt: String
  meta_lte: String
  meta_gt: String
  meta_gte: String
  meta_contains: String
  meta_not_contains: String
  meta_starts_with: String
  meta_not_starts_with: String
  meta_ends_with: String
  meta_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  style: String
  style_not: String
  style_in: [String!]
  style_not_in: [String!]
  style_lt: String
  style_lte: String
  style_gt: String
  style_gte: String
  style_contains: String
  style_not_contains: String
  style_starts_with: String
  style_not_starts_with: String
  style_ends_with: String
  style_not_ends_with: String
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  AND: [MemeItemWhereInput!]
  OR: [MemeItemWhereInput!]
  NOT: [MemeItemWhereInput!]
}

input MemeItemWhereUniqueInput {
  id: ID
}

enum MemeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  blocked_ASC
  blocked_DESC
}

type MemePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
}

type MemeSubscriptionPayload {
  mutation: MutationType!
  node: Meme
  updatedFields: [String!]
  previousValues: MemePreviousValues
}

input MemeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemeWhereInput
  AND: [MemeSubscriptionWhereInput!]
  OR: [MemeSubscriptionWhereInput!]
  NOT: [MemeSubscriptionWhereInput!]
}

input MemeUpdateDataInput {
  blocked: Boolean
  author: UserUpdateOneRequiredInput
  memeItems: MemeItemUpdateManyInput
  tags: TagUpdateManyInput
}

input MemeUpdateInput {
  blocked: Boolean
  author: UserUpdateOneRequiredInput
  memeItems: MemeItemUpdateManyInput
  tags: TagUpdateManyInput
}

input MemeUpdateManyMutationInput {
  blocked: Boolean
}

input MemeUpdateOneRequiredInput {
  create: MemeCreateInput
  update: MemeUpdateDataInput
  upsert: MemeUpsertNestedInput
  connect: MemeWhereUniqueInput
}

input MemeUpsertNestedInput {
  update: MemeUpdateDataInput!
  create: MemeCreateInput!
}

input MemeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  author: UserWhereInput
  memeItems_every: MemeItemWhereInput
  memeItems_some: MemeItemWhereInput
  memeItems_none: MemeItemWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  AND: [MemeWhereInput!]
  OR: [MemeWhereInput!]
  NOT: [MemeWhereInput!]
}

input MemeWhereUniqueInput {
  id: ID
}

type Mutation {
  createMeme(data: MemeCreateInput!): Meme!
  updateMeme(data: MemeUpdateInput!, where: MemeWhereUniqueInput!): Meme
  updateManyMemes(data: MemeUpdateManyMutationInput!, where: MemeWhereInput): BatchPayload!
  upsertMeme(where: MemeWhereUniqueInput!, create: MemeCreateInput!, update: MemeUpdateInput!): Meme!
  deleteMeme(where: MemeWhereUniqueInput!): Meme
  deleteManyMemes(where: MemeWhereInput): BatchPayload!
  createMemeItem(data: MemeItemCreateInput!): MemeItem!
  updateMemeItem(data: MemeItemUpdateInput!, where: MemeItemWhereUniqueInput!): MemeItem
  updateManyMemeItems(data: MemeItemUpdateManyMutationInput!, where: MemeItemWhereInput): BatchPayload!
  upsertMemeItem(where: MemeItemWhereUniqueInput!, create: MemeItemCreateInput!, update: MemeItemUpdateInput!): MemeItem!
  deleteMemeItem(where: MemeItemWhereUniqueInput!): MemeItem
  deleteManyMemeItems(where: MemeItemWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createThread(data: ThreadCreateInput!): Thread!
  updateThread(data: ThreadUpdateInput!, where: ThreadWhereUniqueInput!): Thread
  updateManyThreads(data: ThreadUpdateManyMutationInput!, where: ThreadWhereInput): BatchPayload!
  upsertThread(where: ThreadWhereUniqueInput!, create: ThreadCreateInput!, update: ThreadUpdateInput!): Thread!
  deleteThread(where: ThreadWhereUniqueInput!): Thread
  deleteManyThreads(where: ThreadWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum PermissionType {
  USER
  ADMIN
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  name: String!
  meme: Meme!
  author: User!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  blocked: Boolean
  name: String!
  meme: MemeCreateOneInput!
  author: UserCreateOneInput!
  tags: TagCreateManyInput
}

input PostCreateManyInput {
  create: [PostCreateInput!]
  connect: [PostWhereUniqueInput!]
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  blocked_ASC
  blocked_DESC
  name_ASC
  name_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  name: String!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateDataInput {
  blocked: Boolean
  name: String
  meme: MemeUpdateOneRequiredInput
  author: UserUpdateOneRequiredInput
  tags: TagUpdateManyInput
}

input PostUpdateInput {
  blocked: Boolean
  name: String
  meme: MemeUpdateOneRequiredInput
  author: UserUpdateOneRequiredInput
  tags: TagUpdateManyInput
}

input PostUpdateManyDataInput {
  blocked: Boolean
  name: String
}

input PostUpdateManyInput {
  create: [PostCreateInput!]
  update: [PostUpdateWithWhereUniqueNestedInput!]
  upsert: [PostUpsertWithWhereUniqueNestedInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyMutationInput {
  blocked: Boolean
  name: String
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithWhereUniqueNestedInput {
  where: PostWhereUniqueInput!
  data: PostUpdateDataInput!
}

input PostUpsertWithWhereUniqueNestedInput {
  where: PostWhereUniqueInput!
  update: PostUpdateDataInput!
  create: PostCreateInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  meme: MemeWhereInput
  author: UserWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  meme(where: MemeWhereUniqueInput!): Meme
  memes(where: MemeWhereInput, orderBy: MemeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meme]!
  memesConnection(where: MemeWhereInput, orderBy: MemeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemeConnection!
  memeItem(where: MemeItemWhereUniqueInput!): MemeItem
  memeItems(where: MemeItemWhereInput, orderBy: MemeItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MemeItem]!
  memeItemsConnection(where: MemeItemWhereInput, orderBy: MemeItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemeItemConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  thread(where: ThreadWhereUniqueInput!): Thread
  threads(where: ThreadWhereInput, orderBy: ThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Thread]!
  threadsConnection(where: ThreadWhereInput, orderBy: ThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ThreadConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  meme(where: MemeSubscriptionWhereInput): MemeSubscriptionPayload
  memeItem(where: MemeItemSubscriptionWhereInput): MemeItemSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  thread(where: ThreadSubscriptionWhereInput): ThreadSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  name: String!
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  id: ID
  blocked: Boolean
  name: String!
}

input TagCreateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  blocked_ASC
  blocked_DESC
  name_ASC
  name_DESC
}

type TagPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  name: String!
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateDataInput {
  blocked: Boolean
  name: String
}

input TagUpdateInput {
  blocked: Boolean
  name: String
}

input TagUpdateManyDataInput {
  blocked: Boolean
  name: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyMutationInput {
  blocked: Boolean
  name: String
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  data: TagUpdateDataInput!
}

input TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  update: TagUpdateDataInput!
  create: TagCreateInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
}

type Thread {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
}

type ThreadConnection {
  pageInfo: PageInfo!
  edges: [ThreadEdge]!
  aggregate: AggregateThread!
}

input ThreadCreateInput {
  id: ID
  blocked: Boolean
  posts: PostCreateManyInput
  tags: TagCreateManyInput
}

input ThreadCreateManyInput {
  create: [ThreadCreateInput!]
  connect: [ThreadWhereUniqueInput!]
}

type ThreadEdge {
  node: Thread!
  cursor: String!
}

enum ThreadOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  blocked_ASC
  blocked_DESC
}

type ThreadPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
}

input ThreadScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  AND: [ThreadScalarWhereInput!]
  OR: [ThreadScalarWhereInput!]
  NOT: [ThreadScalarWhereInput!]
}

type ThreadSubscriptionPayload {
  mutation: MutationType!
  node: Thread
  updatedFields: [String!]
  previousValues: ThreadPreviousValues
}

input ThreadSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ThreadWhereInput
  AND: [ThreadSubscriptionWhereInput!]
  OR: [ThreadSubscriptionWhereInput!]
  NOT: [ThreadSubscriptionWhereInput!]
}

input ThreadUpdateDataInput {
  blocked: Boolean
  posts: PostUpdateManyInput
  tags: TagUpdateManyInput
}

input ThreadUpdateInput {
  blocked: Boolean
  posts: PostUpdateManyInput
  tags: TagUpdateManyInput
}

input ThreadUpdateManyDataInput {
  blocked: Boolean
}

input ThreadUpdateManyInput {
  create: [ThreadCreateInput!]
  update: [ThreadUpdateWithWhereUniqueNestedInput!]
  upsert: [ThreadUpsertWithWhereUniqueNestedInput!]
  delete: [ThreadWhereUniqueInput!]
  connect: [ThreadWhereUniqueInput!]
  set: [ThreadWhereUniqueInput!]
  disconnect: [ThreadWhereUniqueInput!]
  deleteMany: [ThreadScalarWhereInput!]
  updateMany: [ThreadUpdateManyWithWhereNestedInput!]
}

input ThreadUpdateManyMutationInput {
  blocked: Boolean
}

input ThreadUpdateManyWithWhereNestedInput {
  where: ThreadScalarWhereInput!
  data: ThreadUpdateManyDataInput!
}

input ThreadUpdateWithWhereUniqueNestedInput {
  where: ThreadWhereUniqueInput!
  data: ThreadUpdateDataInput!
}

input ThreadUpsertWithWhereUniqueNestedInput {
  where: ThreadWhereUniqueInput!
  update: ThreadUpdateDataInput!
  create: ThreadCreateInput!
}

input ThreadWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  AND: [ThreadWhereInput!]
  OR: [ThreadWhereInput!]
  NOT: [ThreadWhereInput!]
}

input ThreadWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  email: String!
  displayName: String!
  passwordHash: String!
  confirmed: Boolean!
  permissions: [PermissionType!]!
  threads(where: ThreadWhereInput, orderBy: ThreadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Thread!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  blocked: Boolean
  email: String!
  displayName: String!
  passwordHash: String!
  confirmed: Boolean
  permissions: UserCreatepermissionsInput
  threads: ThreadCreateManyInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [PermissionType!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  blocked_ASC
  blocked_DESC
  email_ASC
  email_DESC
  displayName_ASC
  displayName_DESC
  passwordHash_ASC
  passwordHash_DESC
  confirmed_ASC
  confirmed_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  blocked: Boolean!
  email: String!
  displayName: String!
  passwordHash: String!
  confirmed: Boolean!
  permissions: [PermissionType!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  blocked: Boolean
  email: String
  displayName: String
  passwordHash: String
  confirmed: Boolean
  permissions: UserUpdatepermissionsInput
  threads: ThreadUpdateManyInput
}

input UserUpdateInput {
  blocked: Boolean
  email: String
  displayName: String
  passwordHash: String
  confirmed: Boolean
  permissions: UserUpdatepermissionsInput
  threads: ThreadUpdateManyInput
}

input UserUpdateManyMutationInput {
  blocked: Boolean
  email: String
  displayName: String
  passwordHash: String
  confirmed: Boolean
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [PermissionType!]
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  blocked: Boolean
  blocked_not: Boolean
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  displayName: String
  displayName_not: String
  displayName_in: [String!]
  displayName_not_in: [String!]
  displayName_lt: String
  displayName_lte: String
  displayName_gt: String
  displayName_gte: String
  displayName_contains: String
  displayName_not_contains: String
  displayName_starts_with: String
  displayName_not_starts_with: String
  displayName_ends_with: String
  displayName_not_ends_with: String
  passwordHash: String
  passwordHash_not: String
  passwordHash_in: [String!]
  passwordHash_not_in: [String!]
  passwordHash_lt: String
  passwordHash_lte: String
  passwordHash_gt: String
  passwordHash_gte: String
  passwordHash_contains: String
  passwordHash_not_contains: String
  passwordHash_starts_with: String
  passwordHash_not_starts_with: String
  passwordHash_ends_with: String
  passwordHash_not_ends_with: String
  confirmed: Boolean
  confirmed_not: Boolean
  threads_every: ThreadWhereInput
  threads_some: ThreadWhereInput
  threads_none: ThreadWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`