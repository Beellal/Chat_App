import React from "react";
import './LogoSearch.css';
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () =>{
    return(
        <div className="LogoSearch">
            <img src={Logo} style={{width:'55px'}} alt='' />
        <div className="Search">
           <input type='text' placeholder="#Ex : @Beellal"/> 
           <div className="s-icon">
            <UilSearch />
           </div>
        </div>
        </div>
    )
}

export default LogoSearch