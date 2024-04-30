import { FC } from "react";
import { Outlet } from "react-router-dom";

const FrameLayout:FC=props=>{
    return (
        <>
            <p>Frame Layout</p>
            <Outlet {...props} />
        </>
    )
}
export default FrameLayout;