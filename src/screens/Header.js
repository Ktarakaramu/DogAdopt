import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/Logo.png';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import {FiHeart} from 'react-icons/fi';
import {BiUserCircle} from 'react-icons/bi';


class Header extends React.Component
{
	constructor()
	{
	  super();
	  this.state={
		
	  }
	}

	render()
	{
		return <header id="main_header">
			<div style={{width :'100%',height:'50px'}}>
				<div className="headerLeftDiv">
					<img src={logo} alt="not found" id="header_image"/>
					<span className="logoText">Dog Adopt</span>
				</div>
				<div>
				<ul>
				{/* ()=>this.props.screen("login")} */}
					<li><span className="navigatorId" title="home"  onClick={(oEvent)=>this.onLinkClicked(oEvent,"home")}>Home</span></li>
					<li><span className="navigatorId" title="dogs"  onClick={(oEvent)=>this.onLinkClicked(oEvent,"dogs")}>Dogs</span></li>
					<li><span className="navigatorId"  title="details"  onClick={(oEvent)=>this.onLinkClicked(oEvent,"details")}>Articles</span></li>
					<li><span className="navigatorId" id="wishlistId" style={{display:'none'}} title="wishlist" onClick={(oEvent)=>this.onLinkClicked(oEvent,"wishlist")}>
						<FiHeart id="wishlistIcon"/>Wishlist</span>
					</li>
					<li><span className="navigatorId" id="userId" style={{display:'none'}} title="user" onClick={(oEvent)=>this.onLinkClicked(oEvent,"user")}>
						<BiUserCircle id="userIdIcon" />User</span>
					</li>
					<li><span className="navigatorId" id="loginBtnId" title="login"  onClick={()=>this.showLoginPopup()}>Login</span></li>
					<button className="signInBtn" id="signupBtnId" title="signup" onClick={()=>this.showSignupPopup()}>SignUp</button>
				</ul>
				</div>
			</div>
		</header>
	}


	onLinkClicked(oEvent,strScreen)
	{
		this.activeState(oEvent)
		this.props.screen(strScreen);
	}

	activeState(oEvent)
	{
		var oRows = document.getElementsByClassName("navigatorId");
		for (var nIndex = 0; nIndex < oRows.length; nIndex++) {
			oRows[nIndex].className = oRows[nIndex].className.replace(" active", "");
		}
		oEvent.currentTarget.className += " active";
	}

	showLoginPopup()
	{
        ReactDOM.render(<LoginPage/>,document.getElementById('loginPopup'));
	}

	showSignupPopup()
	{
		ReactDOM.render(<SignUp/>,document.getElementById('loginPopup'));
	}

	navigateToDogList()
	{
		document.getElementById("workArea").innerHTML="";
	}
}

export default Header;