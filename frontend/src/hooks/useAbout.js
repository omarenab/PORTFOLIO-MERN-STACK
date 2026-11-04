import { useEffect, useState } from "react";
import { getAbout } from "../services/aboutService";

const useAbout = () => {
  const [about, setAbout] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await getAbout();
        setAbout(data);
      } catch (err) {
        setError(err.message || "Failed to fetch about information.");
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);
  return { error, about, loading };
};
export default useAbout;
