const Form = require("../models/Form");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);
const createForm = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.validatedBody;
    const form = await Form.create({
      name,
      email,
      subject,
      message,
    });
    const { error } = await resend.emails.send({
      from: process.env.FORM_FROM,
      to: [process.env.FORM_RECEIVER],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
You have received a new message from your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

------------------------------
Form ID: ${form._id}
      `,
    });

    if (error) {
      console.error("Resend email error:", error);

      return res.status(502).json({
        success: false,
        message:
          "Your message was saved, but the email notification could not be sent.",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully.",
      data: { id: form._id },
    });
  } catch (error) {
    next(error);
  }
};

const removeForm = async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Message has been deleted successfully",deletedForm});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json({message :"Forms retrived successfully", forms});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { createForm , getForms , removeForm };
