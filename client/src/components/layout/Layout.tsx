import { Outlet } from "react-router-dom";
import Header from "./Header";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import TopFooter from "./TopFooter";
import SignIn from "./SignIn";
import LanguageFooter from "./LanguageFooter";
import BottomFooter from "./BottomFooter";

const Layout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TopNavbar />
      <BottomNavbar />
      <Outlet />
      <SignIn />
      <TopFooter />
      <LanguageFooter />
      <BottomFooter />
    </div>
  );
};

export default Layout;
