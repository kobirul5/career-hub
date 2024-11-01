import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";

const Root = () => {
    return (
        <div>
            <section className="bg-[#9873ff11] p-0">
            <Header></Header>
            <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Root;