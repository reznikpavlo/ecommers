import { Outlet } from "react-router-dom";
import Header from "./Header";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import TopFooter from "./TopFooter";
 // importing Signin component from /auth/Signin
import SignInButton from "../auth/SignInButton";
import LanguageFooter from "./LanguageFooter";
import BottomFooter from "./BottomFooter";

const Layout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TopNavbar />
      <BottomNavbar />
      <Outlet />

      <TopFooter />
      <SignInButton/>
      <LanguageFooter />
      <BottomFooter />
    </div>
  );
};

export default Layout;
