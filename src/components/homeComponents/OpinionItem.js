import React from 'react';

function OpinionItem(props) {
  return (
 <div className="opinion__text">
   <p className="opinion__text--box">{props.opinion}</p>
   <h1 className="opinion__user--box">{props.user}</h1>


 </div>
  );
}

export default OpinionItem;
