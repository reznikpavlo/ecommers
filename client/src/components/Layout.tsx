import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <h1>Layout Header</h1>
      <Outlet/>
      <h2>Layout Footer</h2>
    </div>
  );
}

export default Layout;
