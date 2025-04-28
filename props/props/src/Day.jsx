import React from 'react'

function Day(abc) {
    // const dd=abc
    console.log(abc)
  return (
    <div>
      <h2>{abc.dy.day}</h2>
      <h1>{abc.dy.time}</h1>
      <h1>{abc.dy.degree}+-</h1>
    </div>
  )
}

export default Day