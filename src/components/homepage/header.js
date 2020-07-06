import React from 'react';
import picture from '../../public/captain_marvel_still_7.jpg'
import picture2 from '../../public/hiclipart.com.png';
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
                <li class="gray-border">
                    <a class="margin-top" href="/characters/captain-marvel-carol-danvers">
                          <span class="margin-top">OVERVIEW</span>
                    </a></li>
                <li class="gray-border">
                    <a class="masthead__tabs__link" href="/characters/captain-marvel-carol-danvers/in-comics/profile">
                          <span class="">IN COMICS<br/> PROFILE</span>
                    </a>
                </li>
                <li class="">
                    <a class="masthead__tabs__link" href="/characters/captain-marvel-carol-danvers/in-comics">
                        <span class="">IN COMICS<br/> FULL REPORT</span>
                    </a>
                </li>
            </ul>
        </nav>
        <section className = "flex-container">
            <img class = "image2" src = {picture2} />
            <div>
                <article>
                    
CAPTAIN MARVEL
Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to to prevent a full invasion by shapeshifting aliens, the Skrulls.
                </article>
            </div>
        </section>
    </div>
    )
}