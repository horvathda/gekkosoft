import React from 'react';

function SectionItem(props) {
  return (
    <div className={props.classdiv} id={props.id} >
        <div className={props.class_box}>

        <h1 className={props.title_color}>{props.title}</h1>
        <p className={props.class_text}>{props.text}</p>
        {props.numbers}
        </div>
        
    </div>
  );
}

export default SectionItem;
