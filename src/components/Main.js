import './Main.css'

const Main = ({ refSpeaker, refAgenda, refContact, executeScroll }) => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return <div className='main--container'>
    <div className='main--content__container'>
      <div className='main--content__header'>
        <div className="main--content__head">
          <div className='main--content__text'>
            <div className='main--content__title'>
              2021 KOREA-CANADA Energy Forum (Hydrogen)
          </div>
            <div className='main--content__date'>
              Tues 20th July 19:00 - 20:40 (EST)
          </div>
          </div>
          <div className='main--logo__container'>
            <img alt='' src='files/logo_white.png' className='main--logo' />
          </div>
        </div>
      </div>
      <img alt='' className='main--content__background' src='files/main.jpg' />
    </div>
    <div className='main--nav__container'>
      <div onClick={() => openInNewTab('https://form.jotform.com/211725467358058')} className="main--nav__item">
        REGISTER
      </div>
      <div onClick={() => openInNewTab('files/presentation.pdf')} className="main--nav__item main--nav__present">
        PRESENTATION FILE
      </div>
      <div className='main--nav__items'>
        <div onClick={() => executeScroll(refSpeaker)} className="main--nav__item">
          SPEAKERS
      </div >
        <div onClick={() => executeScroll(refAgenda)} className="main--nav__item">
          AGENDA
        </div>
        <div onClick={() => executeScroll(refContact)} className="main--nav__item">
          CONTACT
        </div>
      </div>
    </div>
  </div>
}

export default Main