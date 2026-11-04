import { useTheme } from "../../hooks/useTheme";
import GenericCard from "../shared/GenericCard";
import useService from "../../hooks/useService";
import RevealSection from "../common/RevealSection";
import { serviceIcons } from "../../data/serviceData";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";

const Services = () => {
  const { darkMode } = useTheme();
  const { services, error, loading } = useService();

  if (loading) {
    return <LoadingSpinner message="Loading about information..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  if (!services) return null;
  return (
    <section
      id="services"
      className={` ${darkMode ? "bg-surface-dark" : "bg-creamy"} py-15  px-6 lg:py-20 `}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2
            className={`text-3xl ${darkMode ? "text-primary" : "text-theme"} uppercase font-family  tracking-[0.2em] md:text-5xl `}
          >
            Services
          </h2>
          <hr
            className={`max-w-1/4 mx-auto my-4 ${darkMode ? `text-primary` : `text-theme`}`}
          />
          <p
            className={`mt-4 ${darkMode ? "text-primary" : "text-theme"} text-sm uppercase tracking-[0.3em] text-primary`}
          >
            WHAT I OFFER
          </p>
        </div>

        <RevealSection>
          <div className="grid grid-cols-1 mx-8 sm:mx-2 gap-4 sm:grid-cols-2  lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <GenericCard
                  key={service._id}
                  Icon={Icon}
                  item={service}
                  flex={"flex"}
                  darkMode={darkMode}
                  size={23}
                />
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Services;
