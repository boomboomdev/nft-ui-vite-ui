import { FC } from "react"
// components
import Item from "./sidebar/item"
// assets
import home from "../../assets/common/sidebar/home.png";
import dashboard_active from "../../assets/common/sidebar/dashboard-active.png";
import profile from "../../assets/common/sidebar/profile.png";
import nft from "../../assets/common/sidebar/nft.png";
import moderator from "../../assets/common/sidebar/moderator.png";
import reward from "../../assets/common/sidebar/reward.png";
import voting from "../../assets/common/sidebar/voting.png";
import logout from "../../assets/common/sidebar/logout.png";
interface Props{

}
const Sidebar:FC<Props>=()=>{
    return (
        <>
            <div className="w-[250px] h-screen bg-[#170F44]">
                <h1 className="text-3xl text-white mt-12 ml-12 mb-16" >LOGO</h1>
                <div className="flex flex-col">
                    <Item image={home} title="Home Page" />
                    <Item active_image={dashboard_active} title="NFT Marketplace" active />
                    <Item image={profile} title="My Profile" />
                    <Item image={nft} title="NFT Submission" />
                    <Item image={moderator} title="Moderator Panel" />
                    <Item image={reward} title="Rewards & Payout" />
                    <Item image={voting} title="Voting & Competition" />
                    <Item image={logout} title="Log Out" />
                </div>
            </div>
        </>
    )
}
export default Sidebar