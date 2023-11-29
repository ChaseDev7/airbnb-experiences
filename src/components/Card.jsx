import swimmerImage from '../images/image12.png'
import starImage from '../images/Star1.png'

export default function Card() {
  return (
    <div className="card-container">
      <img src={swimmerImage} className="swimmer-image" />
      <div className="card-info">
        <div className="card-rating">
          <img src={starImage} className="star-image" />
          <p>5.0&thinsp;</p>
          <p className="gray-text">(6)&thinsp;</p>
          <p className="gray-text">&bull;&thinsp;</p>
          <p className="gray-text">USA</p>
        </div>
        <div className="card-title">
          <p>Life lessons with Katie Zaferes</p>
        </div>
        <div className="card-pricing">
          <p><strong>From $136 </strong>/ person</p>
        </div>
      </div>
    </div>
  )
}