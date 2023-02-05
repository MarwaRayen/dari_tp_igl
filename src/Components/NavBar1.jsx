import React from 'react'
import Logo from '../Images/dari_logo.svg'
import {useState,useEffect,useContext} from 'react'
import messagerie from '../Icons/messagerie.svg'
import help from '../Icons/help.svg'
import publier from '../Icons/publier.svg'
import MyContext from '../utils/MyContext'
 


const NavBar1 = () => {
    const {userName} = useContext(MyContext);


    return (
    	<div >	
        <nav class ="bg-[#1B1825] flex " >
                <img src = {Logo} class="mt-3 mb-3 ml-5 h-12"  alt="..." />
                <div class='nav'>
               {/* <a  href = {`/ProfileO/`} id='nav' class = "flex items-center text-[#FFFFFF] "><p class = "ml-3">Home </p> </a> */}
               <a  href = {`/Anonces/`} id='nav' class = "flex items-center text-[#FFFFFF] "><p class = "ml-3">Home</p> </a>
               {/* <a  href = {`/Ajouter/`} id='nav' class = "flex items-center text-[#FFFFFF] "><p class = "ml-3">Publish</p> </a> */}
               <a  href = {`/`} id='nav' class = "flex items-center text-[#FFFFFF] "><p class = "ml-3">About </p></a>
                </div>
                <a  href = {`/SignUp`} id='nav' class = "flex items-center text-[#FFFFFF] mr-10"> <p class = "ml-3"> Connect</p></a>
                
        </nav>
        
    	</div>

    	);
};

export default NavBar1;