import { FC } from "react"
interface Props{

}
const IndexPage:FC<Props>=(props)=>{
    return (
        <>
            <div className="w-full mt-[100px]" >
                <div className="flex flex-row" >
                    <div className="basis-1/2 " >
                        <p className="text-white text-7xl leading-relaxed" >Welcome to Your</p>
                        <p className="text-white text-7xl leading-relaxed" >Gateway to NFT</p>
                        <p className="text-white text-7xl leading-relaxed" >Creativity</p>
                    </div>
                    <div className="basis-1/2" >

                    </div>
                </div>
            </div>
        </>
    )
}
export default IndexPage