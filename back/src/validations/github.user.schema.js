const { z } = require("zod");




 

const githubUserSchema = z.object({
      id: z.number().int().nonnegative(),
      name: z.string(),
      gender: z.string().nullable(),  
   });

const githubUserListSchema = z.array(githubUserSchema);

module.exports = {
  githubUserSchema,
  githubUserListSchema
};