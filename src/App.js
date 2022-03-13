import React, { useRef, useEffect, useState } from 'react'
import Main from './components/Main'
import Content from './components/Content'
import Speaker from './components/Speaker'
import Agenda from './components/Agenda'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [scroll, setScroll] = useState(0)
  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const refSpeaker = useRef(null)
  const refAgenda = useRef(null)
  const refContact = useRef(null)
  const scrollTop = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, [])

  return <div ref={scrollTop}>
    <Main executeScroll={executeScroll} refSpeaker={refSpeaker} refAgenda={refAgenda} refContact={refContact} />
    <Content />
    <Speaker refSpeaker={refSpeaker} />
    <Agenda refAgenda={refAgenda} />
    <Footer refContact={refContact} />
    {scroll > 100 ? <div onClick={() => executeScroll(scrollTop)} className="scroll-top">
      <img alt='' src='files/top.svg' />
    </div> : <div />}
  </div>
}

export default App