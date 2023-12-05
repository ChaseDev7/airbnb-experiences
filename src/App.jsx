import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'

function App() {

  const cards = data.map(cardData => {
    return <Card
      key={cardData.id}
      title={cardData.title}
      price={cardData.price}
      coverImg={cardData.coverImg}
      rating={cardData.stats.rating}
      reviewCount={cardData.stats.reviewCount}
      location={cardData.location}
      openSpots={cardData.openSpots}
      />
  })

  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards-array-container">
        {cards}
      </div>
      
    </>
  )
}

export default App