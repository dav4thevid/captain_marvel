import React from 'react';
import picture from '../../public/captain_marvel_still_7.jpg'
// captain-marvel\src\public\captain_marvel_still_7.jpg


export default function header() {
     
    return (
    <div class = "">
       <img className = "image" src = {picture} />
       <p class = "header-text">
           <span class = "header1">CAROL DANVERS</span><br/>
           <span class = "header2">CAPTAIN MARVEL</span><br/>
           <span class = "header3">Carol Danvers becomes one of the universe's most powerful heroes <br/>when Earth is caught in the middle of a galactic war between two <br/> alien races.</span>     
        </p>
        <h2 class = "header-text"></h2>
        <h6 class = "header-text"></h6>
    </div>
    )
}