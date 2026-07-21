function changeScreen(current, next){

    document
    .getElementById(current)
    .classList.add("hidden");


    document
    .getElementById(next)
    .classList.remove("hidden");

}


setTimeout(()=>{

    changeScreen(
        "loading",
        "profile"
    );

},3500);




function showAbilities(){

    changeScreen(
        "profile",
        "abilities"
    );

}

function showEvent(){

    changeScreen(
        "achievements",
        "event"
    );

}


function showEventFinal(){

    changeScreen(
        "abilities",
        "event"
    );

}



function showDuo(){

    changeScreen(
        "event",
        "duo"
    );

}



function revealChampion(){


const card =
document.querySelector("#duo .card");



card.innerHTML = `


<p class="gold">
✦ SCANNING ✦
</p>


<h1>
ANALYZING...
</h1>


<p class="title">
Checking champion data
</p>


<div class="profile-box">

LOADING SYNERGY...

<br><br>

██████░░░░

</div>


`;



setTimeout(()=>{


card.innerHTML = `


<p class="gold">
✦ CHAMPION REVEALED ✦
</p>



<h1>
ANASTASIA
</h1>



<p class="title">
SECRET SUPPORT
</p>



<div class="profile-box">

PASSIVE

<br>

<strong>
Always has your back
</strong>

</div>



<div class="profile-box">

SPECIAL ABILITY

<br>

<strong>
Legendary Duo
</strong>

</div>



<div class="profile-box">

SYNERGY

<br>

<strong>
∞
</strong>

</div>



<button onclick="showLoot()">
CLAIM REWARD
</button>


`;



},2500);



}


function showAchievements(){

    changeScreen(
        "abilities",
        "achievements"
    );

    setTimeout(()=>{
        animateAchievements();
    },150);

}

function showLoot(){

    changeScreen(
        "duo",
        "loot"
    );

}



function openLoot(){


const card =
document.querySelector("#loot .card");


card.innerHTML = `


<p class="gold">
✦ UNLOCKING LOOT ✦
</p>


<h1>
OPENING...
</h1>


<div class="profile-box">

ANALYZING REWARD DATA...

<br><br>

████░░░░░░

</div>


`;



setTimeout(()=>{


card.innerHTML = `


<p class="gold">
✦ REWARD OBTAINED ✦
</p>


<h1>
MYTHIC LOOT
</h1>



<div class="profile-box">

🎮 Gaming Collection

<br><br>

✦ Hollow Knight Artifact

<br>

✦ Crash Bandicoot Memory

<br>

✦ Legendary Duo Buff


</div>



<div class="profile-box">


ACHIEVEMENT UNLOCKED

<br>

<strong>
Best Support Teammate
</strong>


</div>


`;


},2500);


}
document.addEventListener(
"mousemove",
(e)=>{

const cursor =
document.getElementById("cursor");


cursor.style.left =
e.clientX + "px";


cursor.style.top =
e.clientY + "px";


});

const cursor =
document.getElementById("cursor");


document
.querySelectorAll("button")
.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{

cursor.classList.add("scan");

});


button.addEventListener(
"mouseleave",
()=>{

cursor.classList.remove("scan");

});


});

const particleContainer =
document.getElementById("cursor-particles");


document.addEventListener(
"mousemove",
(e)=>{


const particle =
document.createElement("div");


particle.className =
"cursor-particle";


particle.style.left =
e.clientX + "px";


particle.style.top =
e.clientY + "px";



particleContainer.appendChild(particle);



setTimeout(()=>{

particle.remove();

},800);



});

function animateAchievements(){

const cards =
document.querySelectorAll(".achievement-card");

cards.forEach(card=>{

card.classList.remove("show");

});

cards.forEach((card,index)=>{

setTimeout(()=>{

card.classList.add("show");

},250*index);

});

}

