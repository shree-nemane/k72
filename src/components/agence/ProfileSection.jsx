// src/components/ProfileSection.jsx
import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import BlackThemeContent from "./BlackThemeContent";

const ProfileSection = () => {
  const { theme, setTheme } = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.1) {
          setTheme("black");
        } else {
          setTheme("white");
        }
      },
      { threshold: [0.1] }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setTheme]);

  return (
    <div ref={sectionRef} className="mt-[30vw]">

      <BlackThemeContent theme={theme} />
          
    </div>
  );
};

export default ProfileSection;
