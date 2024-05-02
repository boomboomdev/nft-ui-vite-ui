import { FC } from "react"
import { Link } from "react-router-dom";
// components
import Item from "./sidebar/item"
// assets
import home from "../../assets/common/sidebar/home.png";
import dashboard from "../../assets/common/sidebar/dashboard.png";
import dashboard_active from "../../assets/common/sidebar/dashboard-active.png";
import profile from "../../assets/common/sidebar/profile.png";
import profile_active from "../../assets/common/sidebar/profile-active.png";
import nft from "../../assets/common/sidebar/nft.png";
import nft_active from "../../assets/common/sidebar/nft-active.png";
import moderator from "../../assets/common/sidebar/moderator.png";
import moderator_active from "../../assets/common/sidebar/moderator-active.png";
import reward from "../../assets/common/sidebar/reward.png";
import reward_active from "../../assets/common/sidebar/reward-active.png";
import voting from "../../assets/common/sidebar/voting.png";
import logout from "../../assets/common/sidebar/logout.png";
interface Props{
    active: string;
}
const Sidebar:FC<Props>=(props)=>{
  return (
    <>
      <div className="w-[250px] bg-[#170F44] min-h-screen">
        <h1 className="text-3xl text-white mt-12 ml-12 mb-16" >LOGO</h1>
        <div className="flex flex-col">
          <Link to="/" ><Item image={home} title="Home Page" /></Link>
          <Link to="/marketplace" ><Item image={dashboard} active_image={dashboard_active} title="NFT Marketplace" active={props.active === "dashboard"} /></Link>
          <Link to="/profile_mine" ><Item image={profile} active_image={profile_active} title="My Profile" active={props.active === "profile"} /></Link>
          <Link to="/nft" ><Item image={nft} active_image={nft_active} title="NFT Submission" active={props.active === "nft"} /></Link>
          <Link to="/moderator" ><Item image={moderator} active_image={moderator_active} title="Moderator Panel" active={props.active === "moderator"} /></Link>
          <Link to="/reward" ><Item image={reward} active_image={reward_active} title="Rewards & Payout" active={props.active === "reward"} /></Link>
          <Link to="/profile_other" ><Item image={voting} title="Voting" /></Link>
          <Link to="/nft" ><Item image={logout} title="Log Out" /></Link>
        </div>
      </div>
    </>
  )
}
export default Sidebar