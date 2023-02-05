import React from 'react'
import account from "../Images/profile.png"
import posts from "../Images/myposts.png"
import msg from "../Images/messagerie.png"
import Profil from "../Images/Profil.png"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const Profile = () => {
    return (
        <div>
            <NavBar/>
            <div className="flex bg-[#1B1825]">  
                <div className="w-1/4 ml-20 mt-20 bg-black-500 m-4 text-[#ffffff]">
            
                    <div className="flex mt-4" ><img src={account} /><h1 id="nav" class = "pl-4 ">My account</h1><a  href="" ></a></div>

                    <div className="flex items-center mt-4"><img src={posts} /><h1 id="nav" className="pl-4 hover:text[#F4D303]">My Posts    </h1>  <a class="hover:text[#F4D303]" href="" ></a></div>

                    <div className="flex items-center mt-4"><img src={msg} /> <h1 id="nav" className="pl-4 "> My messages</h1>  <a class="hover:text[#F4D303]" href="" > </a></div>
                    <br />
                    {/* <h1 className="items-center text-red-500"><a class = "p-16" href={`/`}> logout</a> </h1> */}
                    <a href = {`/`}><button href = {`/`} id="signbtn" class = "bg-[#F4D303] text-[#FFFFFF] text-sm block m-0 p-4 pt-0 pb-0 hover:bg-[#FFDC2C]">  Log Out  </button></a>
                </div>

                <div className="w-3/4 mr-4">   
                    <div className="w-full m-auto mt-5 text-[#ffffff] flex"> 
                        <div class="w-2/5 "></div>
                        <div class="w-1/5 ">
                            <br/>
                            <img src={Profil} class=" mb-5 "/>
                            <div className="flex"><label class="mr-2">Edit</label> <input type="file" id="image" name="image"/></div>
                            <br/> 
                            <p >Username : Andrew_NG</p>
                            <p>E-mail Address : ja_ng@esi.dz</p>
                            <p>Phone Number : 06798816646</p>
                            <p>Biography : text goes here</p>
                            <br />
                        </div>
                
                    </div> 

                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Profile;