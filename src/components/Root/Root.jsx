import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;