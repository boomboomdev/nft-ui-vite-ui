import { FC } from "react"
import Sidebar from "../components/layouts/sidebar"
import All from "../components/marketplace/all"
import Hot from "../components/marketplace/hot"
import SHeader from "../components/layouts/SHeader"
interface Props{

}
const MarketplacePage:FC<Props>=()=>{
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 md:container mx-auto px-4 py-3">
                    <SHeader />
                    <Hot />
                    <All />
                </div>
            </div>
        </>
    )
}
export default MarketplacePage