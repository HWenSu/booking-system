// import React from 'react'
import footerLogo from "/public/modals/images/logo2.png"

const Footer = () => {
  return (
    <div className=" flex bg-tertiary h-[70px] justify-center items-center">
      <img src={footerLogo} alt="miu miu spa" className=" max-h-[50px]" />
    </div>
  );
}

export default Footer