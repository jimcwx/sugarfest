import React from 'react'
import classes from './MainNavigation.module.css'
import { Link } from 'react-router-dom'
import homeLogo from '../assets/icons/home.png'
import scheduleLogo from '../assets/icons/schedule.png'
import faqLogo from '../assets/icons/faq.png'
import discordLogo from '../assets/icons/discord.png'
import youtubeLogo from '../assets/icons/youtube.png'
import twitterLogo from '../assets/icons/twitter.png'
import bandcampLogo from '../assets/icons/bandcamp.png'

export default function MainNavigation() {
  return (
    <div className={classes.navBar}>
      <div className={classes.wrapper}>
        <nav>
          <ul className={classes.internalNav}>
            <li className={classes.listItem}>
              <Link className={classes.link} to='/'>
                <img src={homeLogo} alt="Home icon" />
              </Link>
              <p className={classes.linkText}>Home</p>
            </li>
            <li className={classes.listItem}>
              <Link className={classes.link} to='/schedule'>
                <img src={scheduleLogo} alt="Schedule icon" />
              </Link>
              <p className={classes.linkText}>Schedule</p>
            </li>
            <li className={classes.listItem}>
              <Link className={classes.link} to='/faqs'>
                <img src={faqLogo} alt="schedule icon" />
              </Link>
              <p className={classes.linkText}>Faq</p>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className={classes.internalNav}>
            <li className={classes.listItem}>
              <a target="_blank" rel="noopener noreferrer" className={classes.link} href='https://astateofsugar.com/discord'>
                <img src={discordLogo} alt="Discord Icon" />
              </a>
              <p className={classes.linkText}>Discord</p>
            </li>
            <li className={classes.listItem}>
              <a target="_blank" rel="noopener noreferrer" className={classes.link} href='https://twitter.com/astateofsugar'>
                <img src={twitterLogo} alt="Twitter icon" />
              </a>
              <p className={classes.linkText}>Twitter</p>
            </li>
            <li className={classes.listItem}>
              <a target="_blank" rel="noopener noreferrer" className={classes.link} href='https://www.youtube.com/astateofsugar?sub_confirmation=true'>
                <img src={youtubeLogo} alt="Youtube icon" />
              </a>
              <p className={classes.linkText}>Youtube</p>
            </li>
            <li className={classes.listItem}>
              <a target="_blank" rel="noopener noreferrer" className={classes.link} href='https://astateofsugar.bandcamp.com/follow_me'>
                <img src={bandcampLogo} alt="Bandcamp icon" />
              </a>
              <p className={classes.linkText}>Bandcamp</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
