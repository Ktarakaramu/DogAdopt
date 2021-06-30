import React from 'react';
import ReactDOM  from 'react-dom';
import {TiTick} from 'react-icons/ti';

class DisplayMessageView extends React.Component
{
    constructor()
    {
        super();
        this.state={
            
        }
    }
    render()
    {
        return(
            <div className="popupDialogWithNoClick">
                <div className="confirmView"  style={{fontSize:"15px",textAlign:'center',color:'green'}}>
                    <p style={{marginLeft:"10px",textAlign:'left',color:'green'}}><TiTick size={20} style={{marginBottom:'-4px'}}/>{this.props.strMessage}</p>
                    <button className="addToWishListBtn" onClick={this.onConfirm.bind(this)}>
                        {this.props.buttonName}
                    </button>
                </div>
            </div>
        );
    }   

    onConfirm()
    {
        ReactDOM.unmountComponentAtNode(document.getElementById('messageDialog'));
    }
}
export default DisplayMessageView;