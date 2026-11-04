import useContactForm from "../../../hooks/useContactForm";
import { useTheme } from "../../../hooks/useTheme";
import { Send, LoaderCircle } from "lucide-react";
import FormLabel from "./FormLabel";
import Button from "../../shared/Button";

const ContactForm = () => {
  const { darkMode } = useTheme();
  const { register, handleSubmit, isSubmitting, onSubmit, status, errors } =
    useContactForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={`rounded-3xl  p-7 mx-4 sm:mx-2 sm:p-9 ${
        darkMode ? "bg-secondary" : "bg-surface"
      }`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormLabel
          darkMode={darkMode}
          register={register}
          error={errors.name}
          maxLength={100}
          name="name"
          type="text"
          placeholder={`John Doe`}
        >
          Your Name
        </FormLabel>
        <FormLabel
          darkMode={darkMode}
          register={register}
          error={errors.email}
          maxLength={100}
          name="email"
          type="email"
          placeholder={`JohnDoe@example.com`}
        >
          Email address
        </FormLabel>
      </div>
      <FormLabel
        darkMode={darkMode}
        register={register}
        error={errors.subject}
        name="subject"
        type="text"
        placeholder={`Your Inquiry..`}
        className={`mt-5`}
      >
        Subject
      </FormLabel>
      <FormLabel
        darkMode={darkMode}
        register={register}
        error={errors.message}
        name="message"
        type="text"
        maxLength={5000}
        placeholder={`Leave your message here`}
        className={`mt-5`}
        rows={6}
      >
        Your Message
      </FormLabel>
      <div className="flex justify-center ">
        <Button
          type="submit"
          className={`mt-15 gap-2`}
          variant={darkMode ? `dark` : `light`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <LoaderCircle size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </Button>
      </div>

      {status.message && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
          error={errors.message}
          className={`mt-4 rounded-lg mx-auto max-w-sm text-center border px-2 py-3 text-sm ${
            status.type === "success"
              ? "border-green-500/30 bg-green-500/10 text-green-500"
              : "border-red-500/30 bg-red-500/10 text-red-500"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
