import './Content.css'

const text = {
  title1: 'Hydrogen empowering global energy transition',
  content1: 'The Hydrogen Energy Industry is attracting attention as the new leading industry in the low-carbon economy. With limitless potential there are active efforts among countries to claim the market. Canada has long advocated an “energy transition to net zero” and has been trying to expand the development and use of renewable energy, including hydrogen energy. Korea also suggested a national hydrogen energy roadmap including a framework that can make a hydrogen economy replace carbon-based fossil fuels entirely by 2050.',
  title2: 'Canada-Korea, most optimal hydrogen partnerships',
  content2: `Expectations for this event are high as it is believed that the partnership between these specific two countries is the ideal one to usher in the era of the hydrogen economy. Korea has shown itself as the world’s strongest competitor for the utility aspects of hydrogen such as mobility and power generation, but it is relatively behind with their hydrogen production technology. On the other hand, Canada is one of the world's major hydrogen producers and maintains a leading position in the field of source technology but is lacking in domestic commercialization compared to major advanced countries. Due to specializing and having a significant advantage in different areas, Canada and Korea are optimal partners that can complement each other perfectly.`,
  title3: 'What this forum offers',
  content3: `This event will be a place to share hydrogen energy policies and technical development trends between Canada and Korea, and further explore opportunities for cooperation between the two countries within the Hydrogen Energy Industry. First, Natural Resources Canada and H2Korea will introduce each country's hydrogen energy policy. Then, Suncor will present what role clean hydrogen is playing for their clean energy future, while KOGAS and Cummins will elaborate on their unique hydrogen and fuel cell technologies. Next, Hyundai Canada will introduce its hydrogen car lineup and production status. After that, CHFCA will offer insight into the current state of the Canadian hydrogen and fuel cell sector. And finally, Invest in Canada will walk you through Canada's foreign investment environment. In order to support hydrogen cooperation between business partners, KOTRA will hold online one-on-one business meetings for companies in the hydrogen industry of both countries. `,
  title4: `Sustainable momentum powered by Hydrogen Energy`,
  content4: `Due to its unprecedented high potential for growth, it is certain that hydrogen will become a key driver for the energy paradigm shift of the two countries soon. The support of both countries to expand the market will highly accelerate the investment and use of technological equipment. For the two global leaders, this event will be a great opportunity for technical cooperation in the hydrogen field, while expanding human networks, and taking the global lead in the fast-growing hydrogen economic market.`
}

const Content = () => {
  return <div className="content--container">
    <div className="content--logo__container">
      <div className="content--partner__title">
        Organizers
      </div>
      <div className="content--logo">
        <img className='content--present__image1' alt='' src='files/present1.png' />
        {/* <img className='content--present__image2' alt='' src='files/present2.png' /> */}
        <img className='content--present__image3' alt='' src='files/logo_white2.png' />
      </div>
    </div>
    <hr className="content--divider" />

    <div className="content--logo__container">
      <div className="content--partner__title">
        Partners
      </div>
      <div className="content--logo">
        <img className='content--present__image4' alt='' src='files/partner1.png' />
        <img className='content--present__image5' alt='' src='files/CHFCA.png' />
      </div>
    </div>
    <div className="content--container__one">
      <div className="blue--label" />
      <div className="content--background__white">
        <div className="content--title__one">
          <div>
            1.
        </div>
          <div className="content--number__position">
            {text.title1}
          </div>
        </div>
        <div className="content--content__one">
          {text.content1}
        </div>
      </div>
    </div>


    <div className="content--container__two">
      <div className='blue--label' />
      <div className="content--image__two">
        <img alt='' src="files/korea-canada.png" className="content--image__twobig" />
        <img className="content--image--twosmall" alt='' src='files/picture2.png' />
      </div>
      <div className="content--text__two">
        <div className="content--title__two">
          <div>
            2.
          </div>
          <div className="content--number__position">
            {text.title2}
          </div>
        </div>
        <div className="content--content__two">
          {text.content2}
        </div>
      </div>
    </div>

    <div className="content--container__three">
      <div className="blue--label" />
      <img alt='' className="content--three__background" src='files/picture3.png' />
      <div className="content--text__three">
        <div className="content--title__three">
          <div>
            3.
          </div>
          <div className="content--number__position">
            {text.title3}
          </div>
        </div>
        <div className="content--content__three">
          {text.content3}
        </div>
      </div>
    </div>

    <div className="content--container__four">
      <div className="blue--label" />
      <img alt='' className="content--image__four" src='files/picture4.png' />
      <div className="content--text__four">
        <div className="content--title__four">
          <div>
            4.
          </div>
          <div className="content--number__position">
            {text.title4}
          </div>
        </div>
        <div className="content--content__four">
          {text.content4}
        </div>
      </div>
    </div>

    <hr className="content--divider" />
  </div>
}

export default Content