import { useEffect, useState } from "react";
import { getHeroData } from "../services/heroService";
const useHero = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await getHeroData();
        setHeroData(data);
      } catch (err) {
        setError(err.message || "Failed to fetch hero section information.");
      } finally {
        setLoading(false);
      }
    };
    fetchHero();
  }, []);
  return { error, heroData, loading };
};

export default useHero;
