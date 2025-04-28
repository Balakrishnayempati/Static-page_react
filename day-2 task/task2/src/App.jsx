import Nav_bar from './Nav_bar'
import './App.css'
import Front from './Front'
import Css_skills from './Css_skills'
import Html_skills from './Html_skills'
import Js from './Js'
import Boot from './Boot'
import Back from './Back'
import Python from './Python'
import Java from './Java'
import Mean from './Mean'
import Mern from './Mern'
function App() {
  return (
    <>
      <div>
        <div>
        <Nav_bar></Nav_bar>
        </div>
        <div id='front'>
          <Front></Front>
          </div>
          <div id='fs'>
            <div><Html_skills></Html_skills></div>
            <div><Css_skills></Css_skills></div>
            <div><Js></Js></div>
            <div><Boot></Boot></div>
          </div>
          <div id='back'>
          <Back></Back>
          </div>
          <div id='bs'>
            <div><Python></Python></div>
            <div><Java></Java></div>
            <div><Mern></Mern></div>
            <div><Mean></Mean></div>
          </div>
        
      </div>
    </>
  )
}

export default App
