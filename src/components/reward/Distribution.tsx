import { FC } from "react"
// components
import LItem from "./Distribution/LItem"
// assets
import avatar1 from "../../assets/reward/Distribution/avatar1.png";
import avatar2 from "../../assets/reward/Distribution/avatar2.png";
import avatar3 from "../../assets/reward/Distribution/avatar3.png";
interface Props{

}
const Distribution:FC<Props>=()=>{
  return (
    <>
      <div className="bg-[#170F44] rounded-2xl flex flex-col pb-4">
        <p className="text-white text-xl leading-relaxed pl-4 pt-4 pb-4" >Prize Distribution</p>
        <LItem sequence="01" name="Johnas Wans" win="$23,80" date="23-04-24" image={avatar1} />
        <LItem sequence="02" name="Johnas Wans" win="$23,80" date="23-04-24" image={avatar2} />
        <LItem sequence="03" name="Johnas Wans" win="$23,80" date="23-04-24" image={avatar3} />
      </div>
    </>
  )
}
export default Distribution