import React from 'react';
import ReactDOM from 'react-dom';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import loginImg from '../images/loginImg.jpg';
import logo from '../images/Logo.png';
import googleIcon from '../images/Google.png';
import facebookIcon from '../images/fbLogin.png';
import DisplayMessageView from './DisplayMessageView';


class LoginPage extends React.Component
{

    constructor()
    {
         super();
         this.state={
             m_bIsLoggedIn : false,
         }
    }

    render()
    {
       return(<div className="popupDialogWithNoClick">
             <div className="messageDialog">
              <div className="headerLabel"><AiOutlineCloseCircle onClick={()=> this.closeDialog()}/></div>
                <div style={{width:"100%"}}>
                    <div className="loginLeftDiv" style={{height:"350px"}}>
                        <img src={loginImg} alt="not found"  className="loginImage"/>
                    </div>
                    <div className="loginRightDiv" style={{height:"350px"}}>
                        <img src={logo} alt="not found" id="login_header_image"/>
                        <span>Dont Have an Account?<label style={{color:'blue'}}>Sign Up</label></span>
                        {this.buildLoginPageButtons()}
                        {this.buildLoginDivider()}
                        {this.buildEmailField()}<br/>
                        {this.buildPasswordField()}<br/>
                        {this.buildLables()}
                        <button className="loginInBtn" onClick={()=>this.submitForm()}>Login</button>
                    </div>
                 </div>
            </div>
            <div id="messageDialog"></div>
        </div>
       )
    }

    submitForm()
    {
       var strEmail =  document.getElementById("email_id").value;
       var strPassword =  document.getElementById("password_id").value;
       if(strEmail === "vaish.bly@gmail.com" && strPassword === "vaish95")
       {
         document.getElementById("wishlistId").style.display = "block";
         document.getElementById("userId").style.display = "block";
         document.getElementById("loginBtnId").style.display = "none";
         document.getElementById("signupBtnId").style.display = "none";
         ReactDOM.render(<DisplayMessageView strMessage ="Loggedin Successfully" buttonName="Ok"/>,document.getElementById('messageDialog'));
         this.setState({m_bIsLoggedIn : true});
         localStorage.setItem("USER",true)
         this.closeDialog();
        }
        else
        {
            document.getElementById("wishlistId").style.display = "none";
            document.getElementById("userId").style.display = "none";
            document.getElementById("loginBtnId").style.display = "block";
            document.getElementById("signupBtnId").style.display = "block";
            ReactDOM.render(<DisplayMessageView strMessage ="invalid Credentials"  buttonName="Ok"/>,document.getElementById('messageDialog'));
            this.setState({m_bIsLoggedIn : false});
            localStorage.setItem("USER",false)        
        }
       
    }

    buildLoginPageButtons()
    {
        return(
        <div style={{textAlign:'left',marginLeft:'20px',height:'40px'}}>
            <div style={{width:'15%',float:'left',marginTop:'5px',marginLeft:'20px'}}><img src={googleIcon} alt="not found"  className="googleIcon"/></div>
            <div style={{width:'15%',float:'left',marginTop:'12px',fontWeight:"500",marginLeft:'15px'}}><label>Google</label></div>
            <div style={{width:'15%',float:'left',marginTop:'5px',marginLeft:'20px'}}><img src={facebookIcon} alt="not found"  className="googleIcon"/></div>
            <div style={{width:'15%',float:'left',marginTop:'12px',fontWeight:"500",marginLeft:'15px'}}><label>Google</label></div>
         </div>
        )
    }

    buildLoginDivider()
    {
        return <div class="test">
                 <span>or use your email account</span>
              </div>
    }

    buildEmailField()
    {
       return <div style={{textAlign:'left',marginLeft:'20px'}}>
                <label style={{fontWeight:'700',color:'rgb(255, 174, 0)'}}>Email</label><br/>
                <input type="text" className="textBoxes" id="email_id" placeholder="eg: dogadopt@gmail.com"/>
             </div>
    }

    buildPasswordField()
    {
        return <div style={{textAlign:'left',marginLeft:'20px'}}>
                  <label style={{fontWeight:'700',color:'rgb(255, 174, 0)'}}>Password</label><br/>
                  <input type="password" className="textBoxes" id="password_id" placeholder="Enter Password"/>
               </div>
    }

    buildLables()
    {
        return <div style={{textAlign:'left',marginLeft:'20px'}}>
                 <div style={{width:'8%',float:'left'}}><input type="checkbox"/></div>
                 <div><label style={{fontWeight:'700',color:'rgb(255, 174, 0)'}}>save password</label>
                 <label style={{fontWeight:'700',color:'rgb(255, 174, 0)',float:'right',marginRight:'30px'}}>Forgot password?</label></div><br/>
              </div>
    }

    closeDialog()
    {
        ReactDOM.unmountComponentAtNode(document.getElementById("loginPopup"))
    }
}

export default LoginPage;