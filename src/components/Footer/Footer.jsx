import React from 'react'
import './Footer.css'
import * as images from '../../assets/footer_images/footer_images'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={images.footer_icon} alt="" />
        <img src={images.instagram_icon} alt="" />
        <img src={images.twitter_icon} alt="" />
        <img src={images.youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
