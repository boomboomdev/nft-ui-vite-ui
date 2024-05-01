import { FC } from "react";
// components
import GradientButton from "../common/gradient_button";
import TransparentButton from "../common/transparent_button";
import Card from "./featured/card";
// assets
import card_img from "../../assets/home/featured/card_img.png";
interface Props{

}
const Featured:FC<Props>=()=>{
    return (
        <>
          <p className="text-white text-7xl leading-relaxed" >Featured NFT</p>
          <p className="text-white text-lg">Discover a vibrant community where artists and collectors meet to create, trade, </p>
          <p className="text-white text-lg mb-8"> and celebrate digital art. Whether you're here to mint your first NFT or t</p>

          <div className="flex justify-between w-full">
            <div className="flex space-x-4">
              <TransparentButton value="Most Recent" />
              <GradientButton value="Gaming NFT" />
              <TransparentButton value="Top Rated" />
            </div>
            <div className="flex">
              <TransparentButton value="Search nft" />
            </div>
          </div>

          <div className="flex w-full space-x-9 mb-9 mt-9">
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
          </div>
          <div className="flex w-full space-x-9 mb-9">
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
          </div>

          <GradientButton value="See All" />
        </>
    )
}
export default Featured