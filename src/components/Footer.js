import './Footer.css'

const Footer = ({ refContact }) => {
  return <div ref={refContact} className="footer--background">
    <div className="footer--container">
      <div className="footer--logo__container">
        <div className="footer--logo__image">
          <img alt='' className="footer--logo__image" src='files/logo_white2.png' />
        </div>
        <div className="footer--copyright">
          Copyright @ 2021. KOTRA Vancouver. All rights reserved.
      </div>
      </div>
      <div className="footer--contact__container">
        <div className="footer--contact__title">
          KOTRA Vancouver
      </div>
        <div>
          <p className="footer--contact__info">
            Suite 780, 999 Canada Place,
      </p>
          <p className="footer--contact__info">
            Vancouver, BC, Canada V6C 3E1
      </p>
          <p className="footer--contact__info">
            Tel:  604. 683. 1820
      </p>
          <p className="footer--contact__info">
            Fax: 604. 687. 6249
      </p>
          <p style={{ marginTop: '10px' }} className="footer--contact__info">
            ironman@kotra.or.kr
      </p>
        </div>
      </div>
    </div>
  </div>
}

export default Footer