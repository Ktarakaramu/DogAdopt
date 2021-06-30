import React from 'react';
import {FiPhone,FiMail} from 'react-icons/fi';
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {IoLogoGooglePlaystore} from 'react-icons/io5';
import {SiAppstore} from 'react-icons/si';


class Footer extends React.Component
{
    render ()
    {
            return <div id="main_footer">
                    <div style={{marginTop:'3px'}}>
                        {this.buildContactDetails()}
                        {this.buildFooterMain()}
                        {this.buildActionButtons()}
                    </div> 
                   </div>
} 

    buildContactDetails()
    {
        return(
            <div className="mainFooter">
            <div style={{marginTop:'5px'}}>
                <div className="circle">
                  <FiPhone style={{marginTop:'4px'}}/>
                </div>
                <label className="contactText">+45435534553</label><br/>
                <label className="contactText">+48956757656</label>
            </div><br/>
            <div>
                <div className="circle">
                    <FiMail style={{marginTop:'4px'}}/>
                </div>
                <label className="contactEmail">dogadopt@gmail.com</label><br/>
            </div>
        </div>
        )
    }

    buildFooterMain()
    {
        return(
            <div style={{float:'left'}} >
                <label className="copyRightHeader">DogAdopt</label><br/>
                <a href="www.gmail.com" className="contactDetails">
                &copy;Copyright dog adopt
                </a> 
            </div>
        )
    }

    buildActionButtons()
    {
        return(
            <div style={{float:'right',marginRight: '30px'}}>
            <div>
                <div className="actionButtons">
                    <label>Follow on</label>
                </div>
                <div style={{float:'left'}}>
                   <FaFacebook id="facebook_icon"/>
                   <AiFillTwitterCircle id="twitter_icon"/>
                </div>
            </div><br/>
            <div>
                <div className="actionButtons">
                    <label>Download on</label>
                </div>
                <div style={{float:'left'}}>
                   <IoLogoGooglePlaystore id="google_playstore_icon"/>
                   <SiAppstore id="apple_store_icon"/>
                </div>
            </div><br/>
        </div>)
    }
}

export default Footer;