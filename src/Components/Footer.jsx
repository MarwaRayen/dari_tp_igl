import React from 'react'
import {useState,useEffect,useContext} from 'react'
import footer from '../Images/footerBg.png'



const Footer = () => {


    return (
    	<div >	
            <footer className="footer">
                <div className="flex" >
                    <div class="w-1/6">

                    </div>
                    <div className="foot w-3/6" >
                        {/* <p className="text-5xl font-extrabold text-red-500">With DARI find your new home!</p><br/> */}
                        <h1 className="Footer_title">With DARI find your new home</h1>
                        <p  className="footer_text" >The platform is the best way to sell,<br/> rent & buy apartments, homes, <br/>lands, bungalows..etc</p>
                    </div>
                    <div className='w-1/6'>
                        <div className="flex mt-16 gap-4 w-fit mx-auto">

                            {/* <a href="instagram.com"> <img src={fb} /></a>
                            <a href="https://twitter.com/?lang=fr"> <img src={tw} /></a>
                            <a href="youtube.com"> <img src={yt} /></a>
                            <a href="https://web.facebook.com/?_rdc=1&_rdr"> <img src={ins} /></a>
                            <a href="https://www.linkedin.com/onboarding/start/"> <img src={ln} /></a> */}
                        </div>
                        <p className="Footer_title" >Contact us at :</p>
                        <a class="footer_text" href="https://mail.google.com/mail/u/0/#starred?compose=GTvVlcSHxjNTQXrmhdDrhPmmTVxrqkQLVhPLvmChfBNKvnlxCkBzwKXNHDwPwMWCBCBPftbCdTljs">contact@dari.dz</a>
                    </div>
                    <div class="w-1/6">

                    </div>
                </div>
                    
            </footer>
        </div>
    );
};

export default Footer;