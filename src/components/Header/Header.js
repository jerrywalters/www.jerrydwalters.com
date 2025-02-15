import React from 'react'
import classNames from 'classnames'
// import portrait from '../../images/portrait-small.jpg'
import portraitShort from '../../images/portrait-short.jpg'

const Header = ({ location }) => {
  // for smaller portrait
  // let isMobile = false
  // const width = window.innerWidth
  // if (width < 1036) isMobile = true
  

  const headerClasses = classNames({
    'header' : true,
    'header--stuck' : location.pathname !=='/'
  })

  function stopClickThrough(e) {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  return (
    <header className={ headerClasses } onClick={(e) => stopClickThrough(e)}>
      <div className="header__top">
        <section className="header-bio">
          <h1 className="header-bio__name">Jerry Walters</h1>
          <p className="header-bio__bio"> 
            I'm a strong front end developer with an eye for design, and an affinity for full stack development. 
            <br /><br />
            I've built an identity around my love for making things, and I spend most of my free time working on web projects, trying to build games, or sanding bondo in my studio.
          </p>
          <p className="header-bio__bio bio__secret">
            I also love long, coffee-fueled walks, <span className='bio__super-secret'>impulse buying a motorcycle</span>, and wrestling around with my cat River.
          </p> 
        </section>
        <section className="header-contact">
          <img src={/*!isMobile ? portrait :*/ portraitShort} alt="jerry portrait" className="header__portrait" />
          <div className="header-contact__container">
            <ul className="header-contact__info">
              <li className="header-contact__info--item"> jerrydwalters@gmail.com </li>
              <li className="header-contact__info--item"> (757) 318-1934 </li>
            </ul>
            <div className="header-contact__links">
              <a className="link-icon" href="http://github.com/jerrywalters"><i className="fa fa-github" aria-hidden="true"></i></a>
              <a className="link-icon link-icon--2" href="https://www.linkedin.com/in/jerry-walters-4b03a495/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header