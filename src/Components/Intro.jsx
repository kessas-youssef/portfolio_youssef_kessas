import React from 'react'
import '../Style/Intro.css'
import ImageBlob from './imageBlob'

const Intro = () => {
  return (
    <div className='intro'>
      <p className='intro__text'>
        Hey, I am <span className='intro__highlightedText'>Youcef</span>.<br /><br />

        As a passionate <span className='intro__highlightedText'>Web Developer</span>, I specialize in crafting <span className='intro__highlightedText'>dynamic</span> and <span className='intro__highlightedText'>user-friendly</span> websites.<br/><br/>
        With a strong command of the <span className='intro__highlightedText'>latest</span> web technologies and programming languages, I am <span className='intro__highlightedText'>dedicated</span> to turning your <span className='intro__highlightedText'>digital dreams</span> into <span className='intro__highlightedText'>reality</span>.<br /><br />
        <span className='intro__smallerText'>Currently, I am<span className='intro__highlightedText'> freelancing</span>.</span>
      </p>
      <ImageBlob />
    </div>
  )
}

export default Intro