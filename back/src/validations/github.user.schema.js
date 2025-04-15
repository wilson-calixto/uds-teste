const { z } = require("zod");

const githubUserSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string(),
  mass: z.number().nullable(),
  height: z.number().nullable(),
  gender: z.string().nullable(),  
});


const githubUserListSchema = z.array(githubUserSchema);

module.exports = {
  githubUserSchema,
  githubUserListSchema
};