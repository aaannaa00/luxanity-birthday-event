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




function showEvent(){

    changeScreen(
        "profile",
        "abilities"
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

    document.querySelector("#duo .card").innerHTML = `


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


}

function showAbilities(){

    changeScreen(
        "profile",
        "abilities"
    );

}

function showLoot(){

    changeScreen(
        "duo",
        "loot"
    );

}



function openLoot(){

    document.querySelector("#loot .card").innerHTML = `


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



<p class="title">

Achievement unlocked:

<br>

"Best Support Teammate"

</p>


`;

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
