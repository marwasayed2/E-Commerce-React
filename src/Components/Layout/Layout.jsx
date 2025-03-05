import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </>
    )
}
