import React from 'react'
import {useParams} from 'react-router-dom'
import NavBar from '../Components/NavBar'
import anonce from '../Images/annonce.png'
const UneAnonce = () => {
    const {id} = useParams();
    return (
    	<div>	

            <NavBar/>
            <div class ="flex items-center m-auto bg-[#1B1825] "> 
                <div class ="w-1/2 h-screen m-20 ml-12 mr-0 "><img class="rounded-t-lg w-full" src={anonce} alt=""/></div>
                <div class= "h-screen">
                    <div class="flex">
                        <div class="w-5/6">
                            <h1 class ="font-['Cabin'] text-5xl font-bold text-[#F4D303] block pt- pl-10 ">Appartment{id}</h1>
                            <br />
                            <div>   
                                <p1 class ="font-['Cabin'] text-2xl text-[#ffffff] p-10 pb-0 pt-0">Username</p1>
                            </div>
                            <p class ="text-[#F4D303] font-bold text-2xl block w-full m-auto pb-0 pt-3 p-10 font-['Cabin'] ">Details</p>
                        </div>
                        
                        <div class ="flex-center gap-x-8 m-auto ml-12 mt-12 w-full mt-6">
                            <button  class = "msgbtn rounded-full font-['Cabin']  text-[#F4D303] border-[#F4D303] border-2 text-sm block  w-1/2 m-auto pb-0 pt-3 p-10 center hover:bg-[#AAAAAA]">Send Message</button>
                        </div>
                        
                    </div>
                    <p class ="text-[#ffffff]  text-xl block w-full m-auto pb-0 pt-3 p-10 font-['Cabin'] ">Year : 2022 <br/> Surface : 160 Km <br/> Type : Appartment <br/> Category : For sale <br/> Price : 8.700.000 DA <br/> wilaya : Algiers <br/> Town : Cheraga <br/></p>
                </div>
                
            </div>


    	</div>
    );
};

export default UneAnonce;