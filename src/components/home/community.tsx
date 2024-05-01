import { FC } from "react"
// components
import Card from "./community/card";
// assets
interface Props{

}
const Community:FC<Props>=()=>{
    return (
        <>
          <p className="text-white text-7xl leading-relaxed" >Our Community</p>
          <div className="w-full flex space-x-4 items-center">
            <div className="w-[50px] h-[50px] bg-transparent text-[#E73583] text-3xl border-[#E73583] rounded-full border-2 flex justify-center items-center flex-none">
              <p>&lt;</p>
            </div>
            <div className="flex-1 flex space-x-4">
              <div className="basis-1/2">
                <Card />
              </div>
              <div className="basis-1/2">
                <Card />
              </div>
            </div>
            <div className="w-[50px] h-[50px] bg-[#E73583] text-white text-3xl border-[#E73583] rounded-full border-2 flex justify-center items-center flex-none">
              <p>&gt;</p>
            </div>
          </div>
        </>
    )
}
export default Community