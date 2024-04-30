import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";

const DefaultLayout:FC=props=>{
    return (
        <>
            <Header/>
            <p>Frame Layout</p>
            <Outlet {...props} />
        </>
    )
}
export default DefaultLayout;