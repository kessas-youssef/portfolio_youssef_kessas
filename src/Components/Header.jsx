import React, { useState } from 'react'
import linkedinLogo from '../Images/socialMedia/linkedinLogo.svg'
import emailLogo from '../Images/socialMedia/emailLogo.svg'
import githubLogo from '../Images/socialMedia/githubLogo.svg'
import xLogo from '../Images/socialMedia/xtwitter.svg'
import '../Style/Header.css'
import Toast from './Toast'


const Header = () => {

  const copiedText = 'youcef.kessas.pro@gmail.com';
  const [toast, setToast] = useState(false);


  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(copiedText);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <>
      <div className='header__placeHolder'></div>
      <div className='header'>
        <nav className='header__nav'>
          <li className='headerNav__items'>About</li>
          <li className='headerNav__items'>Experience</li>
          <li className='headerNav__items'>Projects</li>
        </nav>
        <h1 className={`header__name`}>
          Youcef KESSAS
        </h1>
        <div className='header__contactLogosContainer'>
          <img className='header__contactLogo' src={linkedinLogo} alt="LinkedIn Logo" title='LinkedIn' />
          <img className='header__contactLogo' src={emailLogo} alt="Email Logo" title='Email' onClick={handleCopyToClipboard} />
          <img className='header__contactLogo' src={githubLogo} alt="Github Logo" title='GitHub' />
          <img className='header__contactLogo' src={xLogo} alt="X twitter Logo" title='X twitter' />
        </div >
      </div>
      {toast && <Toast toastText={'Email Copied to clipboard !'} />}
    </>
  )
}

export default Header