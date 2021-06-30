import React from 'react';
import DogController from '../controllers/DogController';
import {FiHeart} from 'react-icons/fi';
import Footer from './Footer';

var oDogController = new DogController();
class DogList extends React.Component
{

    render()
    {
        return(<div>
                <div style={{marginLeft:'8%',marginRight:'8%',marginBottom:'20px',display:'table'}}>
                    {this.buildMainHeader()}
                    {this.buildSearchArea()}
                    {this.buildListScreen()}
                </div>
                <div style={{height:'10px',marginTop:'20px',backgroundColor:'white'}}>
                   </div>
                <Footer/>
            </div>
            )
    }

    buildMainHeader()
    {
        return(
            <div style={{textAlign : 'center',marginBottom:'30px'}}>
                <span style={{fontSize:'30px'}}>
                    <label style={{color:'#FFAE00'}}>Want a Dog for your loved one's? </label>
                </span><br/>
                <span style={{fontSize:'30px'}}>
                    <label style={{color:'#FFAE00'}}>Don't Buy, </label>
                    <label style={{color:'#ff0000',fontWeight:'800'}}> Adopt Today!!!</label>
                </span>
            </div>
        )
    }
    buildSearchArea()
    {
        return(
            <div className="searchDogDiv">
                    <span style={{fontSize:'15px'}}>
                        <select className="searchDropdown">
                            <option>select Breed</option>
                            <option>German Shepherd</option>
                            <option>Labrador Retriever</option>
                            <option>Doberman</option>
                            <option>Chow Chow</option>
                        </select>
                        <select className="searchDropdown">
                            <option>select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            
                        </select>
                        <select className="searchDropdown">
                            <option>select Age</option>
                            <option>Puppy</option>
                            <option>young</option>
                            <option>Adult</option>
                            
                        </select>
                        <select className="searchDropdown">
                            <option>select Color</option>
                            <option>Black</option>
                            <option>Brown</option>
                            <option>Black&Brown</option>
                            <option>white</option>
                        </select>
                        <button className="searchBtn">Search</button>
                    </span>
            </div>
        )
    }

    buildListScreen()
    {
        var arrNormalCardData = [];
        var arrData = oDogController.getDogListData();
        arrData.map(oDogData => {
        return arrNormalCardData.push(
            <div key={Math.random()} onClick={()=>this.getDogDetails()}>
                <div className="cardList">
                    <img src={oDogData.image} alt="Avatar" className="normalCardImg"/>
                    <div className="cardInfoDiv">
                                <div style={{textAlign:'center'}}>
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
            </div>)})
        return arrNormalCardData;
    }

    getDogDetails()
    {
        this.props.screen("details");
    }
}

export default DogList;