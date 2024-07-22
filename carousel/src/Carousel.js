import { useState } from "react";
import "./Carousel.css";
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ props }) {
  const [CardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx]
  const total = props.cardData.length
  const goForward = () => setCardIdx(cardIdx + 1)
  const goBackwards = () => setCardIdx(cardIdx - 1)
  const hideLeftArrow = cardIdx === 0 ? 'hidden' : ''
  const hideRightArrow = cardIdx === total -1 ? 'hidden' : ''
  
  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${hideLeftArrow}`}
          onClick={goBackwards}
          data-testid='left-arrow'
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${hideRightArrow}`}
          onClick={goForward}
          data-testid='right-arrow'
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: 'Photo by Richard Pasquarella on Unsplash'
    },
    {
      src: image2,
      caption: 'Photo by Pratik Patel on Unsplash'
    },
    {
      src: image3,
      caption: 'Photo by Josh Post on Unsplash'
    }
  ],
  title: 'Shells'
}

export default Carousel;
