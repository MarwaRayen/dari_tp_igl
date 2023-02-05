import React from 'react'
import NavBar from '../Components/NavBar'

import Logo from '../Images/dari_logo.svg'

import Footer from '../Components/Footer'
const Ajouter = () => {
    return (
        <div >
            <NavBar/>
            <div class = "ajout bg-[#1B1825] w-full flex items-center mx-auto">
            {/* <img src = {ForSale} class="w-200 h-screen absolute top-40 bottom-0 right-0" alt="..." /> */}

                <div class ="w-1/6 h-screen"> </div>
                <div class = "bg-[#1B1825] w-5/6 ">
                    <h1 class ="pt-15 pb-2 font-['Cabin'] text-4xl font-bold text-[#ffffff]">Publish a new</h1>
                    <h1 class = "pb-10 pt-0 font-['Cabin'] text-4xl font-bold text-[#ffffff]">Announcment</h1>
                    <div className="flex items-center gap-x-8 m-auto w-full" > 
                        <div class="w-1/2" >
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#000000] text-sm block w-full p-4 font-['Cabin']" type="text" id="CarsName"  placeholder="Category"/>
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#000000] text-sm block w-full p-4 font-['Cabin']" type="text" id="Fuel Type" placeholder="Type" />
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#000000] text-sm block w-full p-4 font-['Cabin']" type="text" id="Year" placeholder="Surface" />
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#000000] text-sm block w-full p-4 font-['Cabin']" type="text" id="Transmissions"  placeholder="Wilaya"/>
                            {/* <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Number of Previous Owners" placeholder="Location" />
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Mielage" placeholder="Price" /> */}
            
                        </div >  
                        <div class="w-1/2">
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#000000] text-sm block w-full p-4 font-['Cabin']" type="text" id="Kilometers Driven"  placeholder="Location"/>
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#000000] text-sm block w-full p-4 font-['Cabin']" type="text" id="Number of seats" placeholder="Price" />
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#000000] text-sm block w-full p-4 font-['Cabin']"type="text" id="Seller Type"  placeholder="Town"/>
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#000000] text-sm block w-full p-4 font-['Cabin']" type="text" id="Max Power" placeholder="Small description" />
                            {/* <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']"type="text" id="Engine"  placeholder="Engine"/>
                            <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="text" id="Type"  placeholder="Type"  /> */}
                        </div>      
                    </div>
                    <input class="focus:text-[#000000] mb-6 bg-[#F0EFFF] rounded-2xl text-[#000000] text-sm text-bold block w-1/2 p-4 font-['Cabin'] m-auto block" type="file" id="Add pic"  placeholder="Add a Picture"  />
                    <div class ="flex items-center m-auto w-full">
                        <div class ="w-5/6"></div>
                        {/* <button class = "mt-5 mb-20 rounded-full font-['poppins'] bg-[#CA4343] text-[#FFFFFF] text-sm block  w-3/6 m-auto p-5 hover:bg-[#FF4343]">Post</button> */}
                        <a href = {``}><button href = {``} id="signbtn" class = " w-1/6 bg-[#F4D303] text-[#FFFFFF] text-sm block m-auto p-5 hover:bg-[#FFDC2C] ">Post</button></a>

        
                    </div >  
                </div>
                <div class ="w-2/6 h-screen mb-20"></div>
            </div>
            <Footer/>
        </div>
    );
};

export default Ajouter;