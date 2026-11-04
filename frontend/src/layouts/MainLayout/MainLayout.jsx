import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToHash from "../../components/shared/ScrollToHash";

const MainLayout = () => {
  return (
    <>
      <ScrollToHash/>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  );
};

export default MainLayout;
