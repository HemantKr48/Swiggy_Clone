import Profile from "./Profile";
import { Outlet } from "react-router-dom";
const About=()=>{
   return (
       <div>
        About me
        <Outlet/>
       </div> 
    )
}

export default About;