import { FC } from "react"
import GradientButton from "../common/gradient_button";
import { Link } from "react-router-dom";

const Header:FC=()=>{
    return (
        <div className="flex w-full items-center mt-4" >
            <div className="flex-none flex items-center" >
                <h1 className="text-3xl text-white " >LOGO</h1>
            </div>
            <div className="grow " >
                <div className="flex w-full items-center" >
                    <div className="grow" ></div>
                    <Link to="/" ><div className="text-white mx-4" >Home</div></Link>
                    <div className="text-white mx-4" >About</div>
                    <Link to="/nft" ><div className="text-white mx-4" >Featured NFT's</div></Link>
                    <div className="text-white mx-4" >Competition</div>
                    <div className="text-white mx-4" >Testimonials</div>
                    <div className="grow" ></div>
                </div>
            </div>
            <div className="flex-none" >
                <GradientButton value="Login" />
            </div>
        </div>
    )
}
export default Header;