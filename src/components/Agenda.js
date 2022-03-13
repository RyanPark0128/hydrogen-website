import './Agenda.css'

const list = [{
  session: 'Opening Session',
  content: [{
    time: '19:00 - 19:03',
    title: 'Opening Address',
    speaker: ['Keung Ryong Chang (Korean Ambassador, Canada)']
  }, {
    time: '19:03 - 19:10',
    title: 'Welcoming Speech',
    speaker: ['Mollie Johnson(Assistant Deputy Minister,Natural Resources Canada)', 'Jaedo Moon (Chairman, H2Korea)']
  }]
}, {
  session: 'Plenary Session',
  content: [{
    time: '19:10 - 19:20',
    title: 'Hydrogen Strategy of Canada',
    speaker: ['Aaron Hoskin (Director, Natural Resources Canada)']
  }, {
    time: '19:20 - 19:30',
    title: 'Hydrogen Strategy of Korea',
    speaker: ['Nak Hyun Kwon (General Director, H2Korea)']
  }, {
    time: '19:30 - 19:40',
    title: 'Role of Clean Hydrogen for Suncor in Decarbonization and Energy Expansion',
    speaker: ['Bradley Wamboldt (General Manager, Suncor Energy)']
  }, {
    time: '19:40 - 19:50',
    title: 'Storage & Transportation of Hydrogen',
    speaker: ['Sungpyo Wi (Senior Manager, Korea Gas Corporation)']
  }, {
    time: '19:50 - 20:00',
    title: 'PEM Fuel Cell Scale Up in Stationary Power and Mobility',
    speaker: ['Alan Kneisz (Business Development Director, Cummins Inc.)']
  }, {
    time: '20:00 - 20:10',
    title: 'Introduction of Hydrogen Vehicles in Korea',
    speaker: ['Don Romano (President and CEO, Hyundai Auto Canada Corp.)']
  }, {
    time: '20:10 - 20:20',
    title: 'Canadian Hydrogen and Fuel Cell Capabilities, Companies and Major Projects',
    speaker: ['Mark Kirby (President and CEO, CHFCA)']
  }, {
    time: '20:20 - 20:30',
    title: 'The Canadian Investment Advantage',
    speaker: ['Nathalie Béchamp (Chief Investor Services, Invest in Canada)']
  }]
}, {
  session: 'Closing Session',
  content: [{
    time: '20:30 - 20:40',
    title: 'Q & A',
    speaker: []
  }]
}]

const listItems = list.map((item, index) =>
  <div key={index} className="agenda--session__one">
    <div className="agenda--session__name">
      {item.session}
    </div>
    <div className="agenda--hidden__line" />
    {item.content.map((block, index) =>
      <div key={index} className="agenda--block__container">
        <div className="agenda--block__dot">
          <div className="agenda--block__subdot" />
          <div className="agenda--block__line" />
        </div>
        <div className="agenda--block__time">
          {block.time}
        </div>
        <div className="agenda--block__content">
          <div className="agenda--block__title">
            {block.title}
          </div>
          <div className="agenda--block__speakers">
            {block.speaker.map((speak, index) =>
              <li key={index}>
                {speak}
              </li>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
)

const Agenda = ({ refAgenda }) => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return <div ref={refAgenda} className="agenda--container">
    <div className="agenda--content__container">
      <div className="agenda--content__date">
        Tues 20th July
      </div>
      {listItems}
      <div className="agenda--please__note">
        *Please note that the schedule may be subject to change under certain circumstances
    </div>
    </div>

    <div onClick={() => openInNewTab('https://form.jotform.com/211725467358058')} className="agenda--register">
      Join us at 2021 Korea-Canada Hydrogen Energy Forum!
    </div>
  </div>
}

export default Agenda