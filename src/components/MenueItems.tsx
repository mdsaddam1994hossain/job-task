import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import dashboardLogo from "../assets/dashboardlogo.png"
import userLogo from "../assets/userlogo.png"

export interface MenueType{
     label: string;
     path:string;
     imgs:string;
}

export const Menues :MenueType[]  =[
     {label:"Dashboard",path:"/dashboard",imgs:dashboardLogo},
     {label:"Users",path:"/users",imgs:userLogo},
    
]

const MenueItems = () => {
    const location = useLocation();
    return (
        <div className='muneStyle'>
            <p className='text-style-12 ml-12'>PAGES</p>
            {Menues.map((menu:MenueType,index)=>{
                const {path,label,imgs}=menu;
                return(
                   
                    <div key={index} className={location.pathname === path ? "select-menuItem" : "menuItem" } >
                        <img src={imgs} className='menu-logo' height={"16px"} width={"16px"}/>
                        <NavLink className="menue-item"   to={path}    >{label}</NavLink>
                    </div>
                   
                )
            })}
            
        </div>
    );
};

export default MenueItems;