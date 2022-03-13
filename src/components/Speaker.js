import './Speaker.css'

// const list1 = [
//   {
//   name: 'Byung Won Chung',
//   title: 'Consul General of Vancouver',
//   image: 'files/JungByungWon.png'
// }, 
// {
//   name: 'Keung Ryong Chang',
//   title: 'Korean Ambassador to Canada',
//   image: 'files/ChangKyungRyong.png'
// }, {
//   name: 'Mollie Johnson',
//   title: 'Assistant Deputy Minister of Natural Resources Canada',
//   image: 'files/Johnson.png'
// }]

// const list2 = [{
//   name: 'Jaedo Moon',
//   title: 'Chairman of H2Korea',
//   image: 'files/MoonJeDo.png'
// }, {
//   name: 'Aaron Hoskin',
//   title: 'Director of Natural Resources Canada',
//   image: 'files/Hoskin.png'
// }, {
//   name: 'Nak Hyun Kwon',
//   title: 'General Director of H2Korea',
//   image: 'files/NakHyunKwon.png'
// }]

// const list3 = [{
//   name: 'Bradley Wamboldt',
//   title: 'General Manager of Suncor Energy',
//   image: 'files/Bradley.png'
// }, {
//   name: 'Sungpyo Wi',
//   title: 'Senior Manager of Korea Gas Corporation',
//   image: 'files/Sungpyo.png'
// }, {
//   name: 'Alan Kneisz',
//   title: 'Business Development Director of Cummins Inc.',
//   image: 'files/AlanKneisz.png'
// }]

// const list4 = [{
//   name: 'Don Romano',
//   title: 'President and CEO of Hyundai Auto Canada Corp.',
//   image: 'files/DonRomano.png'
// }, {
//   name: 'Mark Kirby',
//   title: 'President and CEO of CHFCA',
//   image: 'files/Kirby.png'
// }, {
//   name: 'Nathalie Bechamp',
//   title: 'Chief Investor Services of Invest in Canada',
//   image: 'files/Nat.png'
// }]

const Speaker = ({ refSpeaker }) => {
  const list1 = [
    {
      name: 'Keung Ryong Chang',
      title: 'Korean Ambassador to Canada',
      image: 'files/ChangKyungRyong.png'
    }, {
      name: 'Mollie Johnson',
      title: 'Assistant Deputy Minister of Natural Resources Canada',
      image: 'files/Johnson.png'
    }, {
      name: 'Jaedo Moon',
      title: 'Chairman of H2Korea',
      image: 'files/MoonJeDo.png'
    }]

  const list2 = [{
    name: 'Aaron Hoskin',
    title: 'Director of Natural Resources Canada',
    image: 'files/Hoskin.png'
  }, {
    name: 'Nak Hyun Kwon',
    title: 'General Director of H2Korea',
    image: 'files/NakHyunKwon.png'
  }, {
    name: 'Bradley Wamboldt',
    title: 'General Manager of Suncor Energy',
    image: 'files/Bradley.png'
  }]

  const list3 = [{
    name: 'Sungpyo Wi',
    title: 'Senior Manager of Korea Gas Corporation',
    image: 'files/Sungpyo.png'
  }, {
    name: 'Alan Kneisz',
    title: 'Business Development Director of Cummins Inc.',
    image: 'files/AlanKneisz.png'
  }, {
    name: 'Don Romano',
    title: 'President and CEO of Hyundai Auto Canada Corp.',
    image: 'files/DonRomano.png'
  }]

  const list4 = [{
    name: 'Mark Kirby',
    title: 'President and CEO of CHFCA',
    image: 'files/Kirby.png'
  }, {
    name: 'Nathalie Béchamp',
    title: 'Chief Investor Services of Invest in Canada',
    image: 'files/Nat.png'
  }]
  const listItem = (list) => {
    return list.map((item, index) =>
      <div key={index} className="speakers--block__container">
        <div>
          <div className="speakers--image__container">
            <img alt='' className="speakers--block__image" src={item.image} />
          </div>
          <div className="speakers--block__position">
            <div className="speakers--block__box">
              <div className="speakers--block__title">
                {item.name}
              </div>
              <div className="speakers--block__occupation">
                {item.title}
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
  return <div>
    <div ref={refSpeaker} className="speakers--section__container">
      <div className="speakers--title">
        Speakers
    </div>
      <div className="speakers--container">
        {listItem(list1)}
      </div>
      <div className="speakers--container">
        {listItem(list2)}
      </div>
      <div className="speakers--container">
        {listItem(list3)}
      </div>
      <div className="speakers--container">
        {listItem(list4)}
      </div>
    </div>
    <hr className="content--divider" />
  </div>
}

export default Speaker