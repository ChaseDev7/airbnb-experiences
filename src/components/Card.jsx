import starImage from '../../public/images/Star1.png'

export default function Card(props) {

  let badgeText;

  if (props.cardData.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.cardData.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../../public/images/${props.cardData.coverImg}`} className="swimmer-image" />
      <div className="card-info">
        <div className="card-rating">
          <img src={starImage} className="star-image" />
          <p>{props.cardData.stats.rating}&thinsp;</p>
          <p className="gray-text">({props.cardData.stats.reviewCount})&thinsp;</p>
          <p className="gray-text">&bull;&thinsp;</p>
          <p className="gray-text">{props.cardData.location}</p>
        </div>
        <div className="card-title">
          <p>{props.cardData.title}</p>
        </div>
        <div className="card-pricing">
          <p><strong>From ${props.cardData.price} </strong>/ person</p>
        </div>
      </div>
    </div>
  )
}