import React from 'react'
import Day from './Day'
import { Child_prop } from './Child_prop'

const App = () => {
  const day={
    day:"Monday",
    time:12,
    degree:"45 deg"
  }
  const age=41
  return (
    <div>
      <Day dy={day}></Day>
      <Child_prop>
        {age}
      </Child_prop>
    </div>
  )
}

export default App