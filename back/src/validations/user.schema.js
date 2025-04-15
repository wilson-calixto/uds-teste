const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().optional(),
});

module.exports = userSchema;