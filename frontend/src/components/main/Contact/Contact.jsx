import { useTheme } from "../../../hooks/useTheme";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="contact"
      className={`relative isolate ${darkMode ? "bg-surface-dark" : "bg-creamy"} scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 lg:py-28`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center ">
          <span
            className={`text-3xl lg:text-5xl  ${darkMode ? `text-primary` : `text-theme`} uppercase tracking-[0.1em] `}
          >
            Get In Touch
          </span>

          <hr
            className={`max-w-1/5 mx-auto my-4 ${darkMode ? `text-primary` : `text-theme`}`}
          />
          <h2
            className={`mt-4 ${darkMode ? "text-primary" : "text-theme"} text-xs uppercase tracking-[0.3em] text-primary`}
          >
            Let's build something together
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
