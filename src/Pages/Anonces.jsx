import React from 'react'
import CarsList from '../Components/CarsList'
import Car from '../Components/Car'
import Anovoiture from '../Components/Anovoiture'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import bg from '../Images/bghome3.png'
import icon from '../Images/Vector.png'


const Anonces = () => {

 const carsList = [
        {   id : 1,
            CarName : "Maruti",
            Description : "fersha"
        },
        {   id : 2,
            CarName : "tesla",
            Description : "haadak houwa"
        },
        {   id : 3,
            CarName : "ferrari",
            Description : "l7aja"
        }
    ]
    

    return ( 
        <div>
        <NavBar/>
        <div class="intro">
            <div class="w-1/6">

            </div>
            <div class="intro1 w-2/6 m-8">
                <h1 class="titleH m-3">
                <span>Find your new Home in Algeria </span><span class="text-[#F4D303]">.</span>
                </h1>
                <p class="m-3">
                Search, Find, Book & Rent!
                </p>

                <h1 class="titleH m-3"> 
                    OR 
                </h1>

                {/* <img class="" src={logo} alt="" /> */}
                <div class="flex">
                    <span><a class ="p-2 flex font-['Cabin'] hover:text-[#F4D303]" href={'/Ajouter/'}><button>Publish your own</button></a></span>
                    <span>
                        <img class="flex items-center mt-3" src={icon} alt="" />
                    </span>
                </div>
                
            </div>
            <div class="intro_name">
                <img src={bg} alt="" />
            </div>
        </div>
        {/* <div>
            <div class="intro1 w-2/6 m-8">
                <h1 class="titleH m-3">
                    <span>With Dari everything is possible</span><span class="text-[#F4D303]">!</span>
                </h1>
                <p class="m-3">
                
                </p>
                <div class="home_btns">
                
                    <a class ="p-2" href = {`/SignUp/`}><button href = {`/SignUp/`} id="signbtn" class = " bg-[#F4D303] text-[#FFFFFF] text-sm block m-auto p-4 hover:bg-[#FFDC2C] ">Explore Now</button></a>
                        
                    <a class ="p-2 flex" href=""><button>About us</button></a>
                    
                </div>
            </div>
            <div class="intro_name">
                <img src={Intro} alt="" />
            </div>
        </div> */}

        <div class="annonces">
            <input class="focus:text-[#000000] w-1/2 m-auto rounded-2xl bg-[#47729C] text-[#000000] text-sm block w-full p-4 font-['Bodoni Moda']" type="text" id="Search"  placeholder="Describe your future home ..."/>
            <div className="bg-#010000 w-full flex items-center pt-8" >
                <div className = " bg-[#47729C] w-1/4 h-screen  mr-16 mt-0 mb-0 ">
                    <p class ="text-[#000000] font-bold text-2xl block w-full p-6 font-['Bodoni Moda'] text-center">Filter</p>
                    <label class =" p5font-['Cabin'] text-center w-full block">Price</label>
                    <div class ="w-full flex items-center gap-x-8 m-auto w-full">
                        <input class=" ml-5 focus:text-[#000000] rounded-2xl mb-6 bg-[#1F3F5F] text-[#ffffff] text-sm block w-1/3 p-4 font-['Cabin']" type="text" id="min"  placeholder="Min"/>
                        <input class=" focus:text-[#000000] rounded-2xl mb-6 bg-[#1F3F5F] text-[#ffffff] text-sm block w-1/3 p-4 font-['Cabin']" type="text" id="max" placeholder="Max" />

                    </div>
                    <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#1F3F5F] text-[#ffffff] text-sm block w-full p-4 font-['Cabin']" type="text" id="Fuel Type" placeholder="Type" />
                    <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#1F3F5F] text-[#ffffff] text-sm block w-full p-4 font-['Cabin']" type="text" id="Transmissions"  placeholder="Category"/>
                    <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#1F3F5F] text-[#ffffff] text-sm block w-full p-4 font-['Cabin']" type="text" id="Owner"  placeholder="Surface"/>
                    <input class="w-2/3 m-auto focus:text-[#000000] rounded-2xl mb-6 bg-[#1F3F5F] text-[#ffffff] text-sm block w-full p-4 font-['Cabin']" type="text" id="Seats"  placeholder="wilaya"/>
                    <a class ="p-2" href = {``}><button href = {``}  class = " w-2/3 m-auto hover:bg-[#1B1825] rounded-2xl mb-6 bg-[#1F3F5F] text-[#ffffff] text-sm block w-full p-4 font-['Cabin']">Filter</button></a>
                </div>
            <div className="flex items-center relative gap-x-16 w-3/4 mr-16 mb-20">
            {carsList.map((Anonce) => (<Anovoiture Anonce = {Anonce} key={Anonce.id}/>))}
            </div>


            </div>
        </div>

       
        <Footer/>
        </div>

        );
};

export default Anonces;