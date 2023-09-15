import React , {useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'



const About = () => {
  // learning how it works
  // const a = useContext(noteContext)
  // useEffect(()=>{
  //   a.update()
  //   // eslint-disable-next-line
  // },[])
  return (
    <div>
      {/* this is about {a.state.name} AND CLASS {a.state.class} */}
      this is about page
    </div>
  )
}

export default About
