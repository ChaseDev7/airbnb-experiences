import starImage from '../images/Star1.png'

export default function Card(props) {

  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} className="swimmer-image" />
      <div className="card-info">
        <div className="card-rating">
          <img src={starImage} className="star-image" />
          <p>{props.rating}&thinsp;</p>
          <p className="gray-text">({props.reviewCount})&thinsp;</p>
          <p className="gray-text">&bull;&thinsp;</p>
          <p className="gray-text">{props.location}</p>
        </div>
        <div className="card-title">
          <p>{props.title}</p>
        </div>
        <div className="card-pricing">
          <p><strong>From ${props.price} </strong>/ person</p>
        </div>
      </div>
    </div>
  )
}