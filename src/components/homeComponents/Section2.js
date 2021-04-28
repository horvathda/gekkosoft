import React from 'react';
import './section.css'
import SectionItem from './SectionItem';



function Section2(){
    return(
        <React.Fragment>

<div className="section3">
    
    <SectionItem
    
    classdiv="bg1 section "
    id="height-small"
    class_box="class__box left"
    title="Válasszon további szoftvereink közül!"
    title_color="title__left section__title"
    class_text="section__text"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis placerat lacus. Nunc ut orci vel magna cursus tristique. Maecenas faucibus urna sem, non consequat mi tincidunt eu. Ut a mollis erat. Maecenas et nibh a dui vehicula efficitur. Etiam volutpat lacus non neque imperdiet, eget laoreet dui porttitor."
    />
    </div>
    
    <div className="section3">


    <SectionItem 
    classdiv="bg2 section "
    id="height-small"
        class_box="class__box right "
    title_color="title__right section__title"
    title="Minden, ami informatika"
    class_text="text-right section__text"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis placerat lacus. Nunc ut orci vel magna cursus tristique. Maecenas faucibus urna sem, non consequat mi tincidunt eu. Ut a mollis erat. Maecenas et nibh a dui vehicula efficitur. Etiam volutpat lacus non neque imperdiet, eget laoreet dui porttitor."
    />
    </div>
    <div className="section3">
    <SectionItem
    classdiv="bg3 section "
    id="height-large"
    class_box="class__box left"
    title_color="title__left section__title"
    title="Tudjon meg rólunk többet!"
    class_text="section__text"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis placerat lacus. Nunc ut orci vel magna cursus tristique. Maecenas faucibus urna sem, non consequat mi tincidunt eu. Ut a mollis erat. Maecenas et nibh a dui vehicula efficitur. Etiam volutpat lacus non neque imperdiet, eget laoreet dui porttitor."
    numbers={[
    <div className='numbers'>
    <p className='numbers__text'><span>14</span> <br/> év tapasztalat</p>
    <p className ='numbers__Text'> <span>487</span> <br/> üzleti partner</p>
    </div>

    ]}
    />
    </div>
    

   
</React.Fragment>

);
};
export default Section2;