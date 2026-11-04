import { useEffect, useState } from "react";
import { getServices } from "../services/servicesService";
const useService = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        setError(err.message || "Failed to fetch services information.");
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, []);
  return { error, services, loading };
};

export default useService;
