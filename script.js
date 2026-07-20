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


`;

}

function showAbilities(){

    changeScreen(
        "profile",
        "abilities"
    );

}
