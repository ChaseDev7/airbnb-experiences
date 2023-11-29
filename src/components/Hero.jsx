import groupImage from '../images/Group77.png'

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-image">
          <img src={groupImage} className="group-image" alt="Group Image" />
        </div>
        <div className="hero-main">
          <h1 className="hero-title">Online Experiences</h1>
          <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </div>
    </>
  )
}