import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {FiHeart} from 'react-icons/fi';
import {GrDocumentTime} from "react-icons/gr";
import slideImg1 from '../images/bob.jpg';
import slideImg2 from '../images/eddy.jpg';
import slideImg3 from '../images/nyke.jpg';
import slideImg4 from '../images/leo.jpg';
import slideImg5 from '../images/rockey.jpg';
import DogController from '../controllers/DogController';
import LoginPage from '../screens/LoginPage';
import Footer from './Footer';

var oDogController = new DogController();

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class DogDetails extends React.Component
{

    constructor()
    {
        super();
        this.state={

        }
    }
   render()
   {
       return(<div>
           <div style={{marginRight:'15%',marginLeft:'15%',backgroundColor:'#f1f1f1'}}>
               <div style={{fontSize:'30px',marginLeft:'6%'}}>
                    <label style={{color:'#FFAE00'}}>Leo(german shepherd) </label>
                </div><br/>
                <div>
               {this.buildImageSlider()}
               {this.buildDogDetails()}
               {this.buildParagraph()}
           </div>
           </div>
        {this.buildScrollCards()}
        <Footer/>
        </div>
       )
   } 

   buildDogDetails()
   {
       return(
           <div className="dogDetailsMainDiv">
               <div style={{marginBottom:'30px'}}><label style={{fontWeight:'700',fontSize:'15px'}}>Leo </label></div>
               <div style={{width:'100%'}}>
                   <div style={{width:'70%',float:'left'}}>
                    {this.buildGeneralInfoDetails()}
                    {this.buildHealthInfoDetails()}
                    {this.buildBreedInfoDetails()}
                   </div>
                   <div style={{width:'30%',float:'left',marginTop:'30px'}}>
                      <button className="addToWishListBtn"><FiHeart className="wishlistIcon"/>Add to Wishlist</button><br/><br/>
                      <button className="addToWishListBtn"  onClick={()=> this.navigateToScheduleVisit()}><GrDocumentTime className="wishlistIcon"/>Schedule Visit</button>
                   </div>
               </div>
           </div>    
       )
   }

   buildGeneralInfoDetails()
   {
       return(
        <div style={{width:'100%',height:'60px',marginBottom:'5px',borderBottom:'1px solid gray'}}>
                <div style={{width:'25%',float:'left',marginTop:'10px'}}>
                    <label style={{fontWeight:'700'}}>Info:</label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>age</label><br/>
                    <label>2 Years</label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>Gender</label><br/>
                    <label>Male</label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>Color</label><br/>
                    <label>Black</label>
                </div>
        </div>
       )
   }

   buildHealthInfoDetails()
   {
       return(
        <div style={{width:'100%',height:'60px',marginBottom:'10px',borderBottom:'1px solid gray'}}>
                <div style={{width:'25%',float:'left',marginTop:'10px'}}>
                    <label style={{fontWeight:'700'}}>Health Info:</label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>Vaccination up to date</label><br/>
                    <label></label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>Neutered</label><br/>
                    <label></label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>Dewarmed</label><br/>
                    <label></label>
                </div>
        </div>
       )
   }

   buildBreedInfoDetails()
   {
       return(
        <div style={{width:'100%',height:'60px',marginBottom:'10px'}}>
                <div style={{width:'25%',float:'left',marginTop:'10px'}}>
                    <label style={{fontWeight:'700'}}>Health Info:</label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>Vaccination up to date</label><br/>
                    <label></label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>Neutered</label><br/>
                    <label></label>
                </div>
                <div style={{width:'25%',float:'left'}}>
                    <label>Dewarmed</label><br/>
                    <label></label>
                </div>
        </div>
       )
   }

   buildParagraph()
   {
       return(
        <div>
            <label className="dogDetailsAboutHeader">About</label><br/>
            <p className="dogDetailText">The first impression of a good German Shepherd Dog is that of a strong, agile, well muscled animal, alert and full of life. It is well balanced, with harmonious development of the forequarter and hindquarter. The dog is longer than tall, deep-bodied, and presents an outline of smooth curves rather than angles. It looks substantial and not spindly, giving the impression, both at rest and in motion, of muscular fitness and nimbleness without any look of clumsiness or soft living. The ideal dog is stamped with a look of quality and nobility – difficult to define, but unmistakable when present. Secondary sex characteristics are strongly marked, and every animal gives a definite impression of masculinity or femininity, according to its sex.</p>
        </div>
       )
   }

   buildImageSlider()
   {
    //var arrImages = oDogController.getSliderImages();
       return(
        <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={1500}>
          <img src={slideImg1} alt="not found"style={{width:'100%',height:'100%'}}/>
          <img src={slideImg2} alt="not found"style={{width:'100%',height:'100%'}}/>
          <img src={slideImg3} alt="not found"style={{width:'100%',height:'100%'}}/>
          <img src={slideImg4} alt="not found"style={{width:'100%',height:'100%'}}/>
          <img src={slideImg5} alt="not found"style={{width:'100%',height:'100%'}}/>
        </Carousel>
       )
   }
   buildScrollCards()
    {
        return(
            <div style={{padding:'0.5%',backgroundColor:'#F3EBEB',marginTop:'40px',marginBottom:'20px'}}>
                <div style={{fontSize:'20px',marginLeft:'6%'}}>
                    <label style={{color:'#FFAE00'}}>Similar Pets </label>
                </div><br/>
                <div>
                 <MultiCarousel 
                        responsive={responsive}
                        ssr={true} 
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={2000}
                        customTransition="all .5">
                        {this.buildSliderCardDiv()}
                 </MultiCarousel>
                 </div>
            </div>
        )
    }

    
    buildSliderCardDiv()
    {
        var arrDogSlideData = [];
        var arrData = oDogController.getDogSliderData();
        arrData.map(oDogData => {
            return arrDogSlideData.push(
                <div key={Math.random()} className="sliderCards"  onClick={()=>this.onSliderCardClicked(oDogData)}>
                    <div style={{height : '25vh'}}>
                       <img src={oDogData.image} alt="not found"  className="sliderCardImage"/>
                        <div className="cardInfoDiv">
                                <div>
                                    <label style={{fontWeight:'700'}}>{oDogData.name}</label>
                                </div>
                                <div className="sliderTextDiv">
                                    <label>age: {oDogData.age}</label><br/>
                                    <label>Gender: {oDogData.gender}</label><br/>
                                    <label>Color: {oDogData.color}</label><br/>                          
                                </div>
                                <div className="cardIiconDiv">
                                    <FiHeart className="cardHeartIcon"/><br/>
                                </div>
                        </div>
                    </div>
                </div>)
        })
       return arrDogSlideData;
    }

    onSliderCardClicked(oDogData)
    {
        alert("you clicked "+oDogData.name)
    }
    
    navigateToScheduleVisit()
    {
        var isUserLoggedIn = localStorage.getItem("USER");
        if(isUserLoggedIn === "true")
        {
            this.props.screen("visit");
        }
        else
        {
            ReactDOM.render(<LoginPage/>,document.getElementById('loginPopup'));
        }
        this.setState({});
    }
}

export default DogDetails;
