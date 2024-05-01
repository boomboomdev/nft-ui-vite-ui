import { FC } from "react"
// assets
import join_us from '../../src/assets/home/join_us.png';
import nft_grid_1 from '../../src/assets/home/nft_grid_1.png';
import nft_grid_2 from '../../src/assets/home/nft_grid_2.png';
import nft_grid_3 from '../../src/assets/home/nft_grid_3.png';
import nft_grid_4 from '../../src/assets/home/nft_grid_4.png';
import nft_grid_5 from '../../src/assets/home/nft_grid_5.png';
import nft_grid_6 from '../../src/assets/home/nft_grid_6.png';
// components
import About from "../components/home/about";
import Featured from "../components/home/featured";
import Ongoing from "../components/home/ongoing";
import Community from "../components/home/community";
import Footer from "../components/layouts/footer";
interface Props{

}
const IndexPage:FC<Props>=()=>{
    return (
        <>
            <div className="w-full mt-[100px] md:container mx-auto px-4 py-3" >
                <div className="flex flex-row" >
                    <div className="basis-1/2 " >
                        <p className="text-white text-7xl leading-relaxed" >Welcome to Your</p>
                        <p className="text-white text-7xl leading-relaxed" >Gateway to NFT</p>
                        <p className="text-white text-7xl leading-relaxed" >Creativity</p>
                        <p className="text-white text-7xl leading-relaxed" >Creativity</p>
                        <p className="text-white text-lg">Discover a vibrant community where artists and collectors meet to create, trade, and celebrate digital art. Whether you're here to mint your first NFT or to find unique artworks, our platform provides all the tools you need for a seamless and enriching experience</p>
                        
                        <img className=""  src={join_us}  />
                    </div>
                    <div className="basis-1/2" >
                        <div className="flex flex-col">
                            <div className="basis-1/3 flex m-4 mb-0">
                                <div className="basis-1/3 m-4">
                                    <img className="w-full h-full"  src={nft_grid_1}  />
                                </div>
                                <div className="basis-1/3 m-4">
                                    <img className="w-full h-full"  src={nft_grid_2}  />
                                </div>
                                <div className="basis-1/3 m-4">
                                    <img className="w-full h-full"  src={nft_grid_3}  />
                                </div>
                            </div>
                            <div className="basis-2/3 flex m-4">
                                <div className="basis-2/3 m-4">
                                    <img className="w-full h-full"  src={nft_grid_4}  />
                                </div>
                                <div className="basis-1/3 flex flex-col">
                                    <div className="basis-1/2 m-4">
                                        <img className="w-full h-full"  src={nft_grid_5}  />
                                    </div>
                                    <div className="basis-1/2 m-4">
                                        <img className="w-full h-full"  src={nft_grid_6}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-col">
                    <About />
                </div>
                <div className="flex items-center flex-col">
                    <Featured />
                </div>
                <div className="flex items-center flex-col">
                    <Ongoing />
                </div>
                <div className="flex items-center flex-col">
                    <Community />
                </div>
            </div>
            <div>
                <div className="flex items-center flex-col mt-24">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default IndexPage