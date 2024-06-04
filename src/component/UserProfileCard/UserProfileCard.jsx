//import React from 'react'
import './UserProfileCard.css'
import HOV from '../assets/HOV.jpg'

export default function UserProfileCard() {
  return (
    <div className='upc'>
       <div className='gradiant'></div>
       <div className='profile-down'>
         <img src={HOV} alt='' />
         <div className='profile-title'>ESSEME AUDREY</div>
         <div className='profile-description'>
          I am a Full stack React DEV
         </div>
       </div>
       <div className="profile-button"><a href="mailto:audreyesseme@gmail.com">audreyesseme@gmail.com</a></div>

    </div>
  )
}
