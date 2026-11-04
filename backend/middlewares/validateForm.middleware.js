const { formRequestSchema } = require("../validators/form.validator");

const validateForm = (req, res, next) => {
  const result = formRequestSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Please check your submitted information.",
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  req.validatedBody = result.data;
  next();
};

module.exports = validateForm;
