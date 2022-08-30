import React from 'react'
import './Popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <img src='/images/close.png' className='close-btn' onClick={()=>props.setTrigger(false)}/>
            {props.children}
        </div>
    </div>
  ):"";
}

export default Popup