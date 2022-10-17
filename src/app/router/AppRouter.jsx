import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import HomeLayout from "../pages/Home";
import RegisterPage from "../pages/Register";

const AppRouter = () => {
    const { data } = useContext(AppContext);
    return <>{data?.auth?.user_id ? <HomeLayout /> : <RegisterPage />}</>;
  };
  
  export default AppRouter;
