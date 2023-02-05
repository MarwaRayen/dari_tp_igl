import React from 'react'
import NavBar from '../Components/NavBar1'
import Formm from '../Components/Formm'
import Logo from '../Images/dari_logo.svg'
import Intro from '../Images/bg_home.png'
import Intro2 from '../Images/homebg2.png'
import Footer from '../Components/Footer'
import NavBar1 from '../Components/NavBar1'

const Home = () => {
    return(
        <div >
            <NavBar1/>
            <div class= "intro">
                <div class="w-1/6">

                </div>
                <div class="intro1 w-2/6 m-8">
                    <h1 class="titleH m-3">
                        <span>With Dari everything is possible</span><span class="text-[#F4D303]">!</span>
                    </h1>
                    <p class="m-3">
                    Using Dri you can  sell your real estate <br />
                    or put it up to rental. <br />
                    You can lso check out, rent or buy real <br />
                    estate from all over the country
                    </p>
                    <div class="home_btns">
            
                        <a class ="p-2" href = {`/SignUp/`}><button href = {`/SignUp/`} id="signbtn" class = " bg-[#F4D303] text-[#FFFFFF] text-sm block m-auto p-4 hover:bg-[#FFDC2C] ">Explore Now</button></a>
                    
                        <a class ="p-2 flex" href=""><button>About us</button></a>
                   
                    </div>
                </div>
                <div class="intro_name">
                    <img src={Intro} alt="" />
                </div>

            </div>

            {/* ////////////////////////////////////////////////////////////////////////////////////// */}

            <div class="about">
                {/* <div class="w-1/6">

                </div> */}
                <div class="intro2 w-3/6 m-7 p-7">
                    <img src={Intro2} alt="....." />
                </div>
                <div class="w-1/6">

                </div>
                <div class="about1 w-3/6 m-7 p-7">
                    <h1 class="titleH m-3">
                        About Us
                    </h1>
                    <p class="m-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Home;