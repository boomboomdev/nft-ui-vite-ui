import { FC } from "react"

const Header:FC=props=>{
    return (
        <div className="flex w-full items-center" >
            <div className="flex-none  " >
                <h1 className="text-3xl text-white " >LOGO</h1>
            </div>
            <div className="grow " >
                <div className="flex w-full items-center" >
                    <div className="grow" ></div>
                    <div className="text-white mx-4" >Home</div>
                    <div className="text-white mx-4" >About</div>
                    <div className="text-white mx-4" >Featured NFT's</div>
                    <div className="text-white mx-4" >Competition</div>
                    <div className="text-white mx-4" >Testimonials</div>
                    <div className="grow" ></div>
                </div>
            </div>
            <div className="flex-none" >
                <div className="bg-gradient-to-r from-[#E73583] text-center via-[#7C65FF] to-[#50B4FF] w-[100px] h-[100px] rounded-full w-[180] h-[30px]" >
                    <div className="text-white" >Login</div>
                </div>
            </div>
        </div>
    )
}
export default Header;