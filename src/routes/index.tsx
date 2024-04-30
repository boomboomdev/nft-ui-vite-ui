import React ,{FC} from 'react'
import { useRoutes } from "react-router-dom"
import DefaultLayout from '../layouts/Default';
import FrameLayout from '../layouts/Frame';

const IndexPage=React.lazy(()=>import("../pages/index"));
const MarketplacePage=React.lazy(()=>import("../pages/marketplace"))


const AppRoutes:FC<any>=(props)=>{
    const routes=[
        {
            path:"/",
            element:<DefaultLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<IndexPage {...props} />
                }
            ]
        },
        {
            path:"/",
            element:<FrameLayout {...props} />,
            children:[
                {
                    path:"marketplace",
                    element:<MarketplacePage {...props} />
                }
            ]
        }
    ]
    return useRoutes(routes);
}
export default AppRoutes;