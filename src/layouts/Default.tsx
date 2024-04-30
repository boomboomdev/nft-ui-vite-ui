import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import star_1 from '../assets/star-1.png'
const DefaultLayout:FC=props=>{
    return (
        <>
            <Header/>
            <img className="absolute left-[2%] top-[160px] w-[4%]"  src={star_1}  />
            <img className="absolute left-[55%] top-[169px] w-[6%]"  src={star_1}  />
            <img className="absolute left-[55%] top-[569px] w-[4%]"  src={star_1}  />
            <Outlet {...props} />
        </>
    )
}
export default DefaultLayout;