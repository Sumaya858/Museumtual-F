// import React from 'react'
import React, {useState} from 'react'
import axios from 'axios'

import{BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Acropolis from './Acropolis'
import Saudi from './Saudi'
import Harvard from './Harvard'
// import UserProfile from '../profile/UserProfile'


export default function (museums) {

  return (
    <div>
        <Acropolis>{Acropolis}</Acropolis>
        <Saudi>{Saudi}</Saudi>
        <h1> {Harvard} </h1>
        <Harvard> {Harvard}</Harvard>
        {/* <UserProfile>{UserProfile}</UserProfile> */}

      </div>
  )
}
