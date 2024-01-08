import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='ecom-about-page-container container-fluid p-0'>
      <div className='ecom-about-page-team-image'>
      </div>
      <h2 className='ecom-about-page-heading-main'>Discover Our Story: Who We Are and What We Stand For</h2>
      <div className='ecom-about-page-body container'>
          <div className='ecom-about-page-title'>About Us</div>
          <div className='ecom-about-page-heading'>At ARCollection.com, our purpose is simple: to live and deliver WOW.</div>
          <div className='ecom-about-page-descripiton'>Twenty years ago. We began a small online retailer that only sold shoes. Today, we still sell shoes - as well as clothing, handbags, 
            accessories, and more. That 'more' is providing the very best customer service, customer experience, and company culture. We aim to inspire 
            the world by showing it's possible to simulataneously deliver happiness to customers, employees, vendors, shareholders, and the community in 
            a long term, sustainable way.
          </div>
          <div className='ecom-about-page-conclusion'>
            We hope that in the future people won't even realize we started selling shoes online. Instead, they'll know AR Collection as a service company that just happens to sell...
          </div>
      </div>
    </div>
  )
}

export default About