import { useTheme } from "../../../hooks/useTheme";
import { Mail, MapPin } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import IconTemplate from "../../shared/IconTemplate";

const ContactInfo = () => {
  const { darkMode } = useTheme();
  return (
    <div>
      <aside
        className={`relative overflow-hidden rounded-3xl  mx-4 sm:mx-2  p-7 sm:p-12 ${
          darkMode ? " bg-secondary" : " bg-surface"
        }`}
      >
        <h3 className="text-3xl font-semibold py-2">Let's Connect</h3>

        <p className={`mt-3 leading-7 `}>
          Have a project in mind, an exciting opportunity, or just want to talk
          about technology? I'd love to hear from you.
        </p>

        <div className="mt-10 space-y-6">
          <a
            href="mailto:omar.enab36@gmail.com"
            className="group flex items-center gap-4"
          >
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-theme not-only:${darkMode ? `bg-lightblue` : `bg-beige`} text-primary transition-colors`}
            >
              <Mail size={20} />
            </span>
            <span className="min-w-0">
              <span className={`block text-md font-semibold text-primary `}>Email </span>
              <span className="mt-1 block break-all font-medium transition-colors">
                omar.enab36@gmail.com
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4">
            <span
              className={`flex border border-theme h-12 w-12 shrink-0 items-center justify-center rounded-xl  not-only:${darkMode ? `bg-lightblue` : `bg-beige`} text-primary `}
            >
              <MapPin size={20} />
            </span>
            <span>
              <span className={`block text-md font-semibold text-primary `}>Location</span>
              <span className="mt-1 block font-medium">New Cairo, Egypt</span>
            </span>
          </div>
        </div>

        <div
          className={`my-9 border-t ${darkMode ? "border-primary" : "border-theme"}`}
        />

        <p className={`mb-8 text-lg font-heading font-bold `}>Find me online</p>

        <div className="flex gap-3">
          <IconTemplate
            darkMode={darkMode}
            href={"https://github.com/omarenab"}
          >
            <FaGithub size={24} />
          </IconTemplate>
          <IconTemplate
            darkMode={darkMode}
            href={"https://linkedin.com/omarenab"}
          >
            <FaLinkedin size={24} />
          </IconTemplate>
          <IconTemplate
            darkMode={darkMode}
            href={"https://facebook.com/omarenab"}
          >
            <FaFacebook size={24} />
          </IconTemplate>
          <IconTemplate
            darkMode={darkMode}
            href={"https://instagram.com/omarenab"}
          >
            <FaInstagram size={24} />
          </IconTemplate>
          <IconTemplate
            darkMode={darkMode}
            href={`https://api.whatsapp.com/send/?phone=201024710496`}
          >
            <FaWhatsapp size={24} />
          </IconTemplate>
        </div>
      </aside>
    </div>
  );
};

export default ContactInfo;
