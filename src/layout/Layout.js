import React, { useState } from 'react'
import MainNavigation from './MainNavigation'
import Footer from './Footer'
import classes from './Layout.module.css';
import cloudOne from '../assets/clouds/PixelClouds1.png'
import cloudTwo from '../assets/clouds/PixelClouds2.png'
import cloudThree from '../assets/clouds/PixelClouds3.png'
import ThreeBarsIcon from '../assets/icons/ThreeBars'

const clouds = [cloudOne, cloudTwo, cloudThree]
const randomizeCloud = (clouds) => clouds[Math.floor(Math.random() * clouds.length)]

export default function Layout(props) {
  const [toggle, setToggle] = useState(true);

  const toggleHeaderFooter = () => {
    setToggle(!toggle);
    console.log("toggled");
  }
  
  return (
    <div className={classes.wholePage}>
      {toggle ? <MainNavigation /> : null}
      <ThreeBarsIcon toggle={toggleHeaderFooter}/>
      <main className={classes.main}>
        <img className={`${classes.cloud} ${classes.cloudOne}`} src={randomizeCloud(clouds)} alt="Pixlated Cloud" />
        <img className={`${classes.cloud} ${classes.cloudTwo}`} src={randomizeCloud(clouds)} alt="Pixlated Cloud" />
        <img className={`${classes.cloud} ${classes.cloudThree}`} src={randomizeCloud(clouds)} alt="Pixlated Cloud" />
        <img className={`${classes.cloud} ${classes.cloudFour}`} src={randomizeCloud(clouds)} alt="Pixlated Cloud" />
        <img className={`${classes.cloud} ${classes.cloudFive}`} src={randomizeCloud(clouds)} alt="Pixlated Cloud" />
        <img className={`${classes.cloud} ${classes.cloudSix}`} src={randomizeCloud(clouds)} alt="Pixlated Cloud" />
        <img className={`${classes.cloud} ${classes.cloudSeven}`} src={randomizeCloud(clouds)} alt="Pixlated Cloud" />
        {props.children}
      </main>
      {toggle ? <Footer /> : null}
    </div>
  )
}


