import React from 'react'
import Day from './Day'
import { Child_prop } from './Child_prop'
import Brands from '../Brands'
import Rem from './Rem'
import "./App.css"

const App = () => {
  const day={
    day:"Monday",
    time:12,
    degree:"45 deg"
  }
  const age=41
  const Mobiles={
    brand1:"Samsung",
    brand2:"Oneplus",
    brand3:"Nokie",
    brand4:"iphone"
  }
const remote={
  name1:"samsung remote",
  name2:"sony remote",
  name3:"panasonic remote"
}

  return (
    <div id='css'>
      <Day dy={day}></Day>
      <Child_prop>
        {age}
      </Child_prop>
   <Brands mob={Mobiles}></Brands>
   <Rem>
    {remote}
   </Rem>

    </div>
  )
}

export default App