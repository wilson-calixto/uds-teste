const { z } = require("zod");

const githubUserSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  description: z.string().nullable(),
  stars: z.number().int().nonnegative(),
  language: z.string().nullable(),
});

const githubUserListSchema = z.array(githubUserSchema);

module.exports = {
  githubUserSchema,
  githubUserListSchema
};