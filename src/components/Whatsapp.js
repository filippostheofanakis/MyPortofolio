import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
// import logo from '../assets/logo192.png';
// import logo2 from '../assets/logo512.png';
import logo1 from '../assets/img/github1.svg';

const WhatsApp = () => {

  return (
      <FloatingWhatsApp 
        accountName='Felipe'
        avatar = { logo1 }
        phoneNumber= '41762224283'
        statusMessage = 'Typically replies within 10 Minutes'
        chatMessage = 'Hello there!'
        styles={{backgroundImage: "assets.logo192"}}
      />
  )
}

export default WhatsApp;