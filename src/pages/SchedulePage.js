import React from 'react'
import classes from './SchedulePage.module.css'
import scheduleImage from '../assets/schedule/schedule.png'

export default function SchedulePage() {
  return (
    <div className={classes.schedule}>
      <img className={classes.scheduleImage} src={scheduleImage} alt="Schedule" />
    </div>
  )
}
