//shared layout for all pages

import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <>
        <Navbar />
        <Main >
            <Outlet />
        </Main>
        <Navbar />
        </>
    );
}