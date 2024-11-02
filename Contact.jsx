import React from'react';
import './Contact.css'

export default function Contact(){
    return (

        <div className="Contact">
            <h2> Let's Grow your <br/> &emsp;&emsp;&emsp;&emsp;&emsp; personal presence.</h2>

            <div className="page">
                <h4> If you are ready to get start , get in touch with us! 👇 </h4>
                <br></br>
                <br></br>
                <br></br>
                <hr className='hr_top'></hr>
                <p> Hi!👋 what's your name ?</p>
                <div className='form_page'>
                
                <input type='text' placeholder='Name' className='but_text'></input>
                <input type='text' placeholder='Company' className='but_text'></input>
                <input type='text' placeholder='Email' className='but_text'></input>
                </div>
<br></br>
<br></br>
<br></br>
<br></br>

                <div></div>


                <button type="button">Next</button>
            </div>
            
        </div>

    );
}