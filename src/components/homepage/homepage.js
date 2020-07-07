import React from 'react';
import picture from '../../public/captain_marvel_still_7.jpg'
import picture2 from '../../public/hiclipart.com.png';
import Generation from '../../public/Generation.jpg';


export default function Homepage() {
     
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
                <article class = "article">
                    <h2>CAPTAIN MARVEL</h2>
                    <p>
                    Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to to prevent a full invasion by shapeshifting aliens, the Skrulls.
                    </p>

                    <button class = "button">WATCH NOW</button>

                </article>
            </div>
        </section>

        <section className = "latest-news">
                <h2 class = "latest-news-header">
                    LATEST NEWS
                </h2>  
            <div class = "card">
                <div class = "container">
                   
                        <img  class = "card-img" src= {Generation} alt="Avatar"/>
                  
                    <h4>Comics</h4>
                    <p>Artist Cory Smith Joins 'Captain Marvel' As Carol Danvers Enters as the Accuser</p>
                </div>
                <div class = "container">
                <img  class = "card-img" src= {Generation} alt="Avatar"/>
                    <h4>Comics</h4>
                    <p>Artist Cory Smith Joins 'Captain Marvel' As Carol Danvers Enters as the Accuser</p>
                </div>
                <div class = "container">
                        <img class = "card-img" src= {Generation} alt="Avatar"/>
                   
                    <h4>Comics</h4>
                    <p>Artist Cory Smith Joins 'Captain Marvel' As Carol Danvers Enters as the Accuser</p>
                </div>
                <div class = "container">
                <img  class = "card-img" src= {Generation} alt="Avatar"/>
                    <h4>Comics</h4>
                    <p>Artist Cory Smith Joins 'Captain Marvel' As Carol Danvers Enters as the Accuser</p>
                </div>
            </div>

        </section>

        <section class = "latest-videos">

        </section>
    </div>
    )
}