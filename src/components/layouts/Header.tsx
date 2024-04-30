import { FC } from "react"

const Header:FC=props=>{
    return (
        <div className="flex" >
            <div className="flex-none" >
                <h1 className="text-3xl text-white " >LOGO</h1>
            </div>
            <div className="grow " >
                <div className="flex justify-center w-100" >
                    <div className="text-white" >Home</div>
                    <div className="text-white" >About</div>
                    <div className="text-white" >Featured NFT's</div>
                    <div className="text-white" >Competition</div>
                    <div className="text-white" >Testimonials</div>
                </div>
            </div>
            <div className="flex-none" >
                <div className="bg-gradient-to-r from-#E73583 via-#7C65FF to-#50B4FF w-[100px] h-[100px]" >

                </div>
            </div>
        </div>
    )
}
export default Header;