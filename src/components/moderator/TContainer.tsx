import { FC } from "react"
// components
// assets
import divider from "../../assets/profile_other/Info/divider.png";
import bottom_divider from "../../assets/profile_other/TContainer/divider.png";

interface Props{

}
const TContainer:FC<Props>=()=>{
    return (
        <>
          <div className="bg-[#170F44] p-4 rounded-lg flex justify-start pl-8 pr-8 flex relative mb-4">
            <div className="flex space-x-2 items-center relative justify-center">
              <p className="text-white text-xl leading-relaxed" >Submission Queue</p>
              <p className="text-[#E73583] text-xl">16</p>

              <div className="absolute bottom-0">
                <img src={bottom_divider} />
              </div>
            </div>
            <div className="ml-16 mr-16">
              <img src={divider} />
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-white text-xl leading-relaxed opacity-60" >Art Type/Category</p>
              <p className="text-[#E73583] text-xl">16</p>
            </div>
            <div className="ml-16 mr-16">
              <img src={divider} />
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-white text-xl leading-relaxed opacity-60" >Art Type/Category</p>
              <p className="text-[#E73583] text-xl">16</p>
            </div>
          </div>
        </>
    )
}
export default TContainer