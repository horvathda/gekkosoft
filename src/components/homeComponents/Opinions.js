import React from 'react';
import './section.css'
import OpinionItem from './OpinionItem';



function Opinion(){
    return(
    <div className="opinion__box">
        <OpinionItem 
        opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        user="Kiss Balázs"
        />
        <OpinionItem 
        opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        user="Nagy Ervin"
        />
        <OpinionItem 
        opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        user="Hát Izsák"
        />
        <OpinionItem 
        opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        user="Szabó Noémi"
        />
        <OpinionItem 
        opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        user="Dr. Kiss Erika"
        />
        <OpinionItem 
        opinion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        user="Soós Dániel"
        />





    </div>
        
    

   

);
};
export default Opinion;