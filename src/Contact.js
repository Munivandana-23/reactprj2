import React from 'react';
import './Contact.css';
export default function Contact() {
  return (
    <div className='box3'>
    <div className='box4'>
      <h1><b>Contact Us</b></h1>
      <form>
        <div>
          <span>Name</span><br/>
          <input type='text' placeholder='Enter your name'/>
        </div>
        <div>
          <span>Email</span><br/>
          <input type='text' placeholder='Enter your email'/>
        </div>
        <div>
          <span>Issue</span><br/>
          <textarea placeholder='Describe your issue'></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  );
}
