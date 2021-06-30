import React  from 'react';
import ReactDOM  from 'react-dom';
import Footer from './Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import visitPageImg from  '../images/leo.jpg';
import {GoLocation} from 'react-icons/go';
import {FiPhone,FiMail} from 'react-icons/fi';
import JTimepicker from 'reactjs-timepicker';
import DisplayMessageView from './DisplayMessageView';

class ScheduleVisit extends React.Component
{
    render()
    {
        return(<div style={{width:"100%"}}>
                 <div style={{margin : '30px',backgroundColor:'#d9d9d9'}}>
                        <div style={{width:'100%',marginLeft:'3%',marginBottom:'20px',display:'table',padding:'5%'}}>
                        <div style={{width:'40%',height:'620px',float:'left',marginRight:'5px',textAlign:'center',backgroundColor:'#bfbfbf',borderRadius:'10px'}}>
                              <label style={{fontSize:'20px'}}>Dog Profile</label><br/><br/>
                              <img src={visitPageImg} alt="not found"  className="scheduleImage"/><br/>
                              <label style={{fontSize:'20px',color:'#FFAE00',fontWeight:'700'}}>Leo</label><br/><br/>
                               {this.buildDetailsData()}
                               {this.buildContactDetails()}
                            </div>
                                {this.buildCalenderDiv()}
                        </div>
                            <div style={{height:'10px',marginTop:'20px',backgroundColor:'white'}}>
                            </div>
                        </div>
                    <Footer/>
                    <div id="messageDialog"></div>
            </div>)
    }

    ScheduleVisit()
    {
        ReactDOM.render(<DisplayMessageView strMessage="Successfully Scheduled Appointment" buttonName="Download"/>,document.getElementById('messageDialog'))
    }

    buildDetailsData()
    {
        return(
            <div>
                <div style={{width :'100%',marginBottom:'20px'}}>
                    <div style={{width :'49%',float:'left',textAlign:'right'}}>
                      <label style={{fontSize:'15px',marginRight:'10px'}}>Age :</label>
                    </div>
                    <div style={{width :'49%',float:'left',textAlign:'left'}}>
                      <label style={{fontSize:'15px',marginRight:'10px'}}> 2 years</label>
                    </div>
                </div>
                <div style={{width :'100%'}}>
                    <div style={{width :'49%',float:'left',textAlign:'right'}}>
                      <label style={{fontSize:'15px',marginRight:'10px'}}>Gender :</label>
                    </div>
                    <div style={{width :'49%',float:'left',textAlign:'left'}}>
                      <label style={{fontSize:'15px',marginRight:'10px'}}> Male</label>
                    </div>
                </div>
                <div style={{width :'100%'}}>
                    <div style={{width :'49%',float:'left',textAlign:'right'}}>
                      <label style={{fontSize:'15px',marginRight:'10px'}}>Color :</label>
                    </div>
                    <div style={{width :'49%',float:'left',textAlign:'left'}}>
                      <label style={{fontSize:'15px',marginRight:'10px'}}> Black</label>
                    </div>
                </div><br/><br/><br/><br/>
            </div>
        )
    }

    buildContactDetails()
    {
        return(
            <div style={{marginTop:'20px'}}>
                <div style={{width :'100%',height:'62px'}}>
                    <div style={{width :'45%',float:'left',textAlign:'right'}}>
                      <label style={{fontSize:'18px',marginRight:'10px',color:'red'}}><GoLocation/></label>
                    </div>
                    <div style={{width :'54%',float:'left',textAlign:'left'}}>
                        <label style={{fontSize:'15px',marginRight:'10px',fontWeight:'700'}}>Meet Pet</label><br/>
                        <label style={{fontSize:'12px',marginRight:'10px'}}>L25</label><br/>
                        <label style={{fontSize:'12px',marginRight:'10px'}}>68161-Mannheim</label><br/>
                        <label style={{fontSize:'12px',marginRight:'10px'}}>Germany</label><br/>
                        </div>
                    </div><br/>
                    <div style={{width :'100%',height:'30px'}}>
                        <div style={{width :'45%',float:'left',textAlign:'right'}}>
                            <label style={{fontSize:'15px',marginRight:'10px',color:'red'}}><FiPhone/></label>
                        </div>
                        <div style={{width :'54%',float:'left',textAlign:'left'}}>
                            <label style={{fontSize:'15px',marginRight:'10px'}}>+492389324348</label><br/>
                        </div><br/>
                    </div>
                    <div style={{width :'100%'}}>
                        <div style={{width :'45%',float:'left',textAlign:'right'}}>
                          <label style={{fontSize:'15px',marginRight:'10px',color:'red'}}><FiMail/></label>
                        </div>
                        <div style={{width :'54%',float:'left',textAlign:'left'}}>
                          <label style={{fontSize:'15px',marginRight:'10px'}}>adoptpet@gmail.com</label>
                        </div><br/><br/><br/><br/>
                    </div>
             </div>
        )
    }

    buildCalenderDiv()
    {
        return(
            <div style={{width:'43%',height:'620px',float:'left',textAlign:'center',backgroundColor:'#bfbfbf',borderRadius:'10px'}}>
                <label style={{fontSize:'20px',color:'red',fontWeight:'700'}}>Schedule visit</label><br/>
                <label style={{fontSize:'15px',color:'#cc7a00',fontWeight:'500'}}>Pick Date And Time For Appointment</label><br/><br/>
                <div style={{height:'400px'}}>
                    <Calendar  className="calenderClass"/><br/>
                </div>
                <div style={{marginLeft:'10%',width:'100%'}}>
                    <div style={{width:'40%',float:'left',marginTop:'10px'}}>
                        <JTimepicker inputVisible={true}/>
                    </div>
                    <div style={{width:'40%',float:'left'}}>
                       <button className="addToWishListBtn" onClick={()=>this.ScheduleVisit()}>Schedule Visit</button><br/><br/>
                    </div>
                </div>
          </div>
        )
    }

    onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }
    
}

export default ScheduleVisit;

