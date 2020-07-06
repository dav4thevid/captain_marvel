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

        <nav aria-label="all about Captain Marvel" class="masthead__tabs">
            <ul class="masthead__tabs-wrapper">
                <li class="masthead__tabs__li">
                    <a class="masthead__tabs__link masthead__tabs__link--active" href="/characters/captain-marvel-carol-danvers">
                          <span class="masthead__tabs__link-text">Overview</span>
                    </a></li>
                <li class="masthead__tabs__li">
                    <a class="masthead__tabs__link" href="/characters/captain-marvel-carol-danvers/in-comics/profile">
                          <span class="masthead__tabs__link-text">In Comics Profile</span>
                    </a>
                </li>
                <li class="masthead__tabs__li">
                    <a class="masthead__tabs__link" href="/characters/captain-marvel-carol-danvers/in-comics">
                        <span class="masthead__tabs__link-text">In Comics Full Report</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    )
}