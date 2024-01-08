import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='ecom-contact-container container-fluid p-0'>
        <div className='ecom-contact-bg-image'></div>
        <h2 className='ecom-contact-heading'>Get in touch with us</h2>
        <div className='ecom-contact-body container justify-content-xl-between justify-content-sm-center'>
            <div className='ecom-contact-section'>
                <div className='ecom-contact-section-main'>Hours Of Operations</div>
                <div className='ecom-contact-section-sub'>9.00 to 18.00. Mon-Fri (Excluding Holidays)</div>
            </div>
            <div className='ecom-contact-section'>
                <div className='ecom-contact-section-main'>Phone 📞</div>
                <div className='ecom-contact-section-sub'>+918500569845</div>
            </div>
            <div className='ecom-contact-section'>
                <div className='ecom-contact-section-main'>General Inquiries</div>
                <div className='ecom-contact-section-sub'>rahamtullah8500@gmail.com</div>
            </div>
        </div>
            <div className='ecom-contact-conclusion'>Our customer service team is waiting to assist you.</div>
    </div>
  )
}

export default Contact