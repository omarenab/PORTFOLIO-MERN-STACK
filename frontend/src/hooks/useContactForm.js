import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../validations/formSchema";
import { submitForm } from "../services/formService";
import { useState } from "react";

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function useContactForm() {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values) => {
    setStatus({ type: "", message: "" });
    try {
      const response = await submitForm(values);
      setStatus({
        type: "success",
        message: response.message || "Your message has been sent successfully",
      });

      setTimeout(() => {
        setStatus("");
      }, 2000);
      

    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Failed to send your message. Pleaese try again.",
      });
      setTimeout(() => {
      setStatus("");
    }, 2000);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    status,
  };
}
