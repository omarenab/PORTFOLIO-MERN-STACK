import { useTheme } from "../../hooks/useTheme";

const BluredBackground = ({ imageURL }) => {
   const { darkMode } = useTheme();
  return (
    <>
      <div
      className={` absolute inset-0 ${darkMode ? "blur-[5px]": "blur-[2px]" } -z-20 scale-105 bg-cover bg-center`}
        style={{
          backgroundImage: `url('${imageURL}')`,
        }}
      />
    </>
  );
};

export default BluredBackground;
