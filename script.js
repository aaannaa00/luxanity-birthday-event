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

    document.querySelector(".hidden-card").innerHTML = `

    <h2>
    ANASTASIJA
    </h2>

    <p>
    SECRET CHAMPION
    </p>


    <div>

    ✓ Surprise
    <br>
    ✓ Support Buff
    <br>
    ✓ Memory Creation

    </div>

    `;

}

function showAbilities(){

    changeScreen(
        "profile",
        "abilities"
    );

}
