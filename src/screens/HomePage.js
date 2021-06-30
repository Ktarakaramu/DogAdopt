import React from 'react';
import coverImage from '../images/coverPicture.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {FiHeart} from 'react-icons/fi';
import DogController from '../controllers/DogController';
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

class HomePage extends React.Component
{
   render()
   {
       return(
            <div className="homePage">
                {this.buildHomePageCoverImage()}
                {this.buildScrollCards()}
                <span style={{fontSize:'30px',marginTop:'10px'}}>
                    <label style={{color:'#FFAE00'}}>Find Some, </label>
                    <label style={{color:'#ff0000',fontWeight:'800'}}> ARTICLES</label>
                </span>
                <div style={{margin:'2% 8%'}}>
                  {this.buildNormalCardDiv()}
                </div>
                <div style={{height:'250px',marginTop:'20px',backgroundColor:'white'}}>
                </div>
                <Footer/>
            </div>
       )
   } 

    buildHomePageCoverImage()
    {
        return(
            <div>
            <img src={coverImage} alt="not found" className="coverImage"/>
            <button className="imageBtn">Lets Adopt</button><br/>
                <span style={{fontSize:'30px'}}>
                    <label style={{color:'#FFAE00'}}>Don't Buy, </label>
                    <label style={{color:'#ff0000',fontWeight:'800'}}> ADOPT!</label>
                </span><br/>
                <span style={{fontSize:'20px'}}>
                    <label>Pets Available For, </label>
                    <label style={{fontWeight:'600'}}> Adoption</label>
                </span>
        </div>
        )
    }

    buildScrollCards()
    {
        return(
            <div style={{padding:'0.5%',backgroundColor:'#F3EBEB',marginTop:'40px',marginBottom:'20px'}}>
                <div style={{padding:'5%'}}>
                 <Carousel 
                        responsive={responsive}
                        ssr={true} 
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={2000}
                        customTransition="all .5">
                        {this.buildSliderCardDiv()}
                 </Carousel>
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
                <div className="sliderCards"  onClick={()=>this.onSliderCardClicked(oDogData)}>
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

    buildNormalCardDiv()
    {
        var arrNormalCardData = [];
        var arrData = oDogController.getNormalSliderData();
        arrData.map(oDogData => {
        return arrNormalCardData.push(
            <div onClick={()=>this.getDogDetails()}>
                <div className="card">
                    <img src={oDogData.image} alt="Avatar" className="normalCardImg"/>
                    <div className="container">
                        <h4><b>{oDogData.title}</b></h4> 
                    </div>
                </div>
            </div>)})
        return arrNormalCardData;
    }

    getDogDetails()
    {
        this.props.screen("details");
    }
}

export default HomePage;