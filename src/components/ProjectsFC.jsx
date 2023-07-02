import React from "react";

export const ProjectList = ({items}) => {
  const arrLineOne = [];
  const arrLineTwo = [];
  const arrLineThree = [];
  let key = 1;
  items.forEach(item => {
    if (key === 1) {
      arrLineOne.push(item)
    } else if (key === 2) {
      arrLineTwo.push(item)
    } else if (key === 3) {
      arrLineThree.push(item)
    };
    key += 1;
    if (key > 3) {
      key = 1;
    };
  })

  return (
    <>
    <div className="column-img">
      <LineCards cards={arrLineOne} />
    </div>
    <div className="column-img">
      <LineCards cards={arrLineTwo} />
    </div>
    <div className="column-img">
      <LineCards cards={arrLineThree} />
    </div>
    </>
  )
}

const LineCards = ({cards}) => {
  const arrOut = [];
  cards.forEach(card => {
    arrOut.push(<img className="img-item" src={card.img} />);
  })
  return (
    <>{arrOut}</>
  )
}
