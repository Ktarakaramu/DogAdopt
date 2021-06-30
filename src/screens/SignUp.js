import React from 'react';
import ReactDOM from 'react-dom';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import signupImg from '../images/register.jpg';
import logo from '../images/Logo.png';


class SignUp extends React.Component
{
    render()
    {
       return(
        <div className="popupDialogWithNoClick">
         <div className="messageDialog">
          <div className="headerLabel"><AiOutlineCloseCircle onClick={()=> this.closeDialog()}/></div>
           <div style={{width:"100%"}}>
                <div className="loginLeftDiv" style={{height:"350px"}}>
                    <img src={signupImg} alt="not found"  className="loginImage"/>
                </div>
                <div className="loginRightDiv" style={{height:"350px"}}>
                    <img src={logo} alt="not found" id="login_header_image"/>
                    {this.buildEmailField()}<br/>
                    {this.buildPasswordField()}<br/>
                    {this.buildConfirmPasswordField()}<br/>
                    <button className="signupLoginInBtn">Register</button><br/><br/>
                    <button className="userExistBtn">Already a user</button>
                </div>
           </div>
        </div>
    </div>
       )
    }

    buildEmailField()
    {
       return <div style={{textAlign:'left',marginLeft:'20px'}}>
                <label style={{fontWeight:'700',color:'rgb(255, 174, 0)'}}>Email</label><br/>
                <input type="text" className="textBoxes" placeholder="eg: dogadopt@gmail.com"/>
             </div>
    }

    buildPasswordField()
    {
        return <div style={{textAlign:'left',marginLeft:'20px'}}>
                  <label style={{fontWeight:'700',color:'rgb(255, 174, 0)'}}>Password</label><br/>
                  <input type="text" className="textBoxes" placeholder="Enter Password"/>
               </div>
    }

    buildConfirmPasswordField()
    {
        return <div style={{textAlign:'left',marginLeft:'20px'}}>
                  <label style={{fontWeight:'700',color:'rgb(255, 174, 0)'}}>Confirm Password</label><br/>
                  <input type="text" className="textBoxes" placeholder="Confirm Password"/>
               </div>
    }

    closeDialog()
    {
        ReactDOM.unmountComponentAtNode(document.getElementById("loginPopup"))
    }
}

export default SignUp;