// import { useEffect, useState } from "react";
// import { getHeroData } from "../services/heroService";
// const useNav = () => {
//   const [error, setError] = useState(null);
//   const [heroData, setHeroData] = useState(null);
//    const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const fetchNav = async () => {
//       try {
//         const data = await getHeroData();
//         setHeroData(data);
//       } catch (err) {
//         setError(err.message || "Failed to fetch hero section information.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchHero();
//   }, []);
//   return { error, heroData, loading };
// };

// export default useHero;
