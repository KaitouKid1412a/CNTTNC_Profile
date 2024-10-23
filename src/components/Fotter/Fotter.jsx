import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import './style.css'
export default function Fotter() {
  return (
    <div className='canchinh bg-black'>
   <div className='px-[300px]'>
   <div className="wrapperfotter">
            <div className="boxft">
                <div className="title"><span><FaShoppingBag /></span> MyJob</div>
                <div className="call">Call now: <span> (319) 555-0115</span></div>
                <div className="adress">6391 Elgin St. Celina, Delaware 10299, New York, United States of America</div>
            </div>
            <div className="boxft">
                <div className="title">Quick Link</div>
                <div className="call">About</div>
                <div className="adress">Contact</div>
                <div className="adress">Pricing</div>
                <div className="adress">Blog</div>
            </div>
            <div className="boxft">
                <div className="title">Candidate</div>
                <div className="call">Browse Jobs</div>
                <div className="adress">Browse Employers</div>
                <div className="adress">Candidate Dashboard</div>
                <div className="adress">Saved Jobs</div>
            </div>
            <div className="boxft">
                <div className="title">Employers</div>
                <div className="call">Post a Job</div>
                <div className="adress">Browse Candidates</div>
                <div className="adress">Employers Dashboard</div>
                <div className="adress">Applications</div>
            </div>
            <div className="boxft">
                <div className="title">Support</div>
                <div className="call">Faqs</div>
                <div className="adress">Privacy Policy</div>
                <div className="adress">Terms & Conditions</div>
                <div className="adress"></div>
            </div>
            
        </div>
   </div>
    </div>
  )
}
