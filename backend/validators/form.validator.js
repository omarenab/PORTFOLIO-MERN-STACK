const { z } = require("zod");

const formRequestSchema = z.object({
  name: z.string().trim()
    .min(2).max(100),

  email: z.string().trim()
    .email("Please enter a valid email address")
    .max(254)
    .transform((value) => value.toLowerCase()),

  subject: z.string().trim()
    .min(3).max(150),

  message: z.string().trim()
    .min(10).max(5000),
});

module.exports = { formRequestSchema };