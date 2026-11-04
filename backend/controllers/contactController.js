const Contact = require("../models/Contact");

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    if (!contact) {
      return res.status(404).json({ error: "Contact Not Found !!" });
    }
    res.status(200).json(contact);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get contact data", error: err.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const { name_input, email_input, phone_input } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      "",
      {
        name_input,
        email_input,
        phone_input,
      },
      { new: true },
    );
    res
      .status(200)
      .json({ message: "Contact has been updated", data: contact });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update contact !", error: err.message });
  }
};
module.exports = { getContact, updateContact };
