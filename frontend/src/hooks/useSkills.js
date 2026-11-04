import { useEffect, useState } from "react";
import { Code2, Server, Wrench } from "lucide-react";

import { getSkills } from "../services/skillsService";
const useSkills = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        const formattedSkills = [
          {
            title: "Frontend Technologies",
            skills: data.frontend,
            icon: Code2,
          },
          {
            title: "Backend Technologies",
            skills: data.backend,
            icon: Server,
          },
          {
            title: "Tools & Workflow",
            skills: data.toolsAndWorkflow,
            icon: Wrench,
          },
        ];

        setSkills(formattedSkills);
      } catch (err) {
        setError(err.message || "Failed to fetch skills information.");
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);
  return { error, skills, loading };
};

export default useSkills;
