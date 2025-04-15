const { z } = require("zod");

const githubUserSchema = z.object({
      id: z.number().int().nonnegative(),
      name: z.string(),
      mass:z.number().int().nullable(),
      height:z.number().int().nullable(),
      gender: z.string().nullable(),  
   });

const githubUserListSchema = z.array(githubUserSchema);

module.exports = {
  githubUserSchema,
  githubUserListSchema
};