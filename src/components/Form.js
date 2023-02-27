import { Link } from '@mui/material';
import React from 'react'
 import bgImg from './otherimg/logo12.jpg';

//import '../components/Form.css';
 
 export default function  Form() {
   return (
    <section>
    <div className="register">
    <div className="col-1">
    <h2>Sign Up
    </h2>
    <span>register and enjoy the service</span>

    <form id='form' className='flex flex-col'>
    <input type="text" placeholder='username'/>
    <input type="text" placeholder='password'/>
    <input type="text" placeholder='conform password'/>
    <input type="text" placeholder='mobile no'/>
    </form>
    
    
    
    
    </div>
    <div className="col-2">
    <img src={bgImg} alt="nothing" />
    
    </div>
    </div>
    </section>
    )
}
// <Link href='/Home'><button>Activate</button></Link>