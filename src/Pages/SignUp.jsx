import React from 'react'
import Logo from '../Images/signin_logo.png'



const SignUp = () => {
    return (

    	<div id = "cntr_sign" class = "w-full flex items-center flex-d mx-auto">	

        {/* <img src = {welcomeImage} class="w-50 h-screen absolute bottom-0 right-0" alt="..." /> */}
        {/*  class ="w-1/6 h-screen" */}
        <div class ="w-1/6 h-screen"></div>
        <div>
                <div class="slogan">
                    <img src={Logo} alt="...." />
                </div>
        </div>
        <div class ="w-1/6 h-screen"></div>
        <div class = "sign_info">
        {/* <img src = {Logo} class = "w-1/2 center block m-auto"  alt="..." /> */}
            
            <div className="flex items-center gap-x-8 m-auto " > 
                
                <div class="tabs" >
                    <div class="sign_title">
                        <span>Welcome to Da</span><span class="text-[#F4D303]">Ri</span>
                    </div>
                    <input class="mb-6 bg-[#1B1825] text-[#FFFFFF] text-sm block w-full p-4 " type="text" id="UserName"  placeholder="Username"/>
                    <input class="mb-6 bg-[#1B1825] text-[#FFFFFF] color-[#FFFFFF] text-sm block w-full p-4 " type="date" id="bday" placeholder="Date of birth" />
                    {/* <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']" type="password" id="Password" placeholder="Password" />
                    <input class="focus:text-[#000000] rounded-2xl mb-6 bg-[#F0EFFF] text-[#A7A3FF] text-sm block w-full p-4 font-['poppins']"type="text" id="E-mail Adress"  placeholder="E-mail Adress"/>*/}
                    <input class="mb-6  bg-[#1B1825] text-[#FFFFFF] text-sm block w-full p-4 " list="wilaya"  placeholder="Wilaya"/> 
                    <datalist id="wilaya">
                        <option value="01. Adrar " />
                        <option value="02. Chlef " />
                        <option value="03. Laghouat " />
                        <option value="04. Oum El Bouaghi " />
                        <option value="05. Batna " />
                        <option value="06. Bejaïa " />
                        <option value="07. Biskra " />
                        <option value="08. Béchar " />
                        <option value="09. Blida " />
                        <option value="10. Bouira " />
                        <option value="11. Tamanrasset " />
                        <option value="12. Tebessa   "  />
                        <option value="13. Tlemcen " />
                        <option value="14. Tiaret " />
                        <option value="15. Tizi Ouzou " />
                        <option value="16. Alger " />
                        <option value="17. Djelfa " />
                        <option value="18. Djijel " />
                        <option value="19. Sétif " />
                        <option value="20. Saïda " />
                        <option value="21. Skikda " />
                        <option value="22. Sidi Bel Abbès  " />
                        <option value="23. Annaba    " />
                        <option value="24. Guelma        " />
                        <option value="25. Constantine     " />
                        <option value="26. Médéa      " />
                        <option value="27. Mostaganem       " />
                        <option value="28. M'Sila       " />
                        <option value="29. Mascara      " />
                        <option value="30. Ouargla     " />
                        <option value="31. Oran    " />
                        <option value="32. El Bayadh      " />
                        <option value="33. Illizi  " />
                        <option value="34. Bordj Bou Arreridj " />
                        <option value="35. Boumerdès  " />
                        <option value="36. El Tarf  " />
                        <option value="37. Tindouf  " />
                        <option value="38. Tissemsilt " />
                        <option value="39. El Oued " />
                        <option value="40. Khenchela " />
                        <option value="41. Souk Ahras " />  
                        <option value="42. Tipaza " />
                        <option value="43. Mila " />
                        <option value="44. Aïn Defla  " />
                        <option value="45. Naâma  " />  
                        <option value="46. Aïn Témouchent " />  
                        <option value="47. Ghardaia " />  
                        <option value="48. Relizane  " />
                        <option value="49.Timimoun   " />
                        <option value="50.Bordj Badji Mokhtar " />
                        <option value="51.Ouled Djellal   " />
                        <option value="52.Béni Abbès     " />
                        <option value="53.ain Salah     " />
                        <option value="54.ain Guezzam     " />
                        <option value="55.Touggourt     " />
                        <option value="56.Djanet      " />
                        <option value="57.El MGhair  " />
                        <option value="58.El Meniaa" />
                    </datalist>
                    <input class="mb-6 bg-[#1B1825] text-[#FFFFFF] text-sm block w-full p-4 " type="tel" id="Tel" placeholder="Phone Number" />
    
        

                </div>
  
          
            </div>        
            <div className="flex items-center  m-auto ">
                <p class = "text-xs w-full text-[#FFFFFF]">Already have an account? <a href = {``} class = "text-xs text-[#F4D303] text-sm font-bold"> Login Here!</a></p>
                <a href = {`/Anonces/`}><button href = {`/Anonces/`} id="signbtn" class = " bg-[#F4D303] text-[#FFFFFF] text-sm block m-auto p-4 hover:bg-[#FFDC2C] ">Sign up</button></a>
            </div>     
        </div>
        
        <div class ="w-1/6 h-screen"> </div> 

    </div>

    );
};

export default SignUp;