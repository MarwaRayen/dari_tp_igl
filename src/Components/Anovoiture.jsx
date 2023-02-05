import React from 'react'
import {useNavigate} from "react-router-dom"
import sample from '../Images/sample.png'

const Anovoiture = ({Anonce}) => {
const navigate=useNavigate()
    return (
    	<div className=" rounded-lg shadow-lg text-white cursor-pointer w-full flex items-center "  onClick={()=>navigate(`/Anonces/${Anonce.id}`)} 
        >	
         
        
           
  <div class=" w-full">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg w-full" src={sample} alt=""/>
    </a>
    <div class="p-6">
      <h5 class=" text-xl font-medium mb-2">Cheraga, Algiers</h5>
      <p class="text-base mb-4 text-[#F4D303]">
        published on 24/12/2022
      </p>
      <p class=" text-base mb-4">
        8.700.000 DA
      </p>
      {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Saved</button> */}
    </div>
  </div>

    	</div>

    	);
};

export default Anovoiture;