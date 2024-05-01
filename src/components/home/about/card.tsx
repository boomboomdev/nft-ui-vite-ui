import { FC } from "react"
interface Props {
  image: string;
  title: string;
  description: string;
}
const Card:FC<Props>=(props)=>{
    return (
        <>
          <div className="h-[181px] w-full border-2 border-[#848383] rounded-lg flex p-3">
            <div className="flex-none mr-4 ml-3 mt-5">
              <img className=""  src={props.image}  />
            </div>
            <div className="flex-auto">
              <p className="text-[#BCBBBB] text-3xl">{props.title}</p>
              <p className="text-white text-lg">{props.description}</p>
            </div>
          </div>
        </>
    )
}
export default Card