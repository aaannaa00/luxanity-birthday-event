(() => {
    "use strict";

    const SCREEN_IDS = [
        "loading",
        "profile",
        "abilities",
        "achievements",
        "patch-intro",
        "patch-notes-1",
        "patch-notes-2",
        "patch-notes-3",
        "event",
        "duo",
        "loot"
    ];

    const cursor = document.getElementById("cursor");
    const particleContainer = document.getElementById("cursor-particles");

    let lastParticleTime = 0;

    function getScreen(id) {
        return document.getElementById(id);
    }

const hoverSound = document.getElementById("hover-sound");
const clickSound = document.getElementById("click-sound");
const revealSound = document.getElementById("reveal-sound");

let soundEnabled = true;

function playSound(audio, volume = 0.3) {

    if (!soundEnabled || !audio) {
        return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.volume = volume;

    audio.play().catch(() => {
        // Browser može blokirati zvuk pre prve korisničke interakcije.
    });
}
    
let isTransitioning = false;

function changeScreen(nextId) {

    if (!SCREEN_IDS.includes(nextId)) {
        console.error(`Unknown screen: ${nextId}`);
        return;
    }

    if (isTransitioning) {
        return;
    }

    const currentScreen = SCREEN_IDS
        .map(getScreen)
        .find(screen => screen && !screen.classList.contains("hidden"));

    const nextScreen = getScreen(nextId);

    if (!nextScreen || currentScreen === nextScreen) {
        return;
    }

    isTransitioning = true;

    if (!currentScreen) {
        nextScreen.classList.remove("hidden");
        isTransitioning = false;
        return;
    }

    currentScreen.classList.add("screen-exit");

    setTimeout(() => {

        currentScreen.classList.add("hidden");
        currentScreen.classList.remove("screen-exit");

        nextScreen.classList.remove("hidden");
        nextScreen.classList.add("screen-enter");

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {
                nextScreen.classList.add("screen-enter-active");
            });

        });

        setTimeout(() => {

            nextScreen.classList.remove(
                "screen-enter",
                "screen-enter-active"
            );

            isTransitioning = false;

            if (nextId === "achievements") {
                animateAchievements();
            }

        }, 380);

    }, 350);
}
    function animateAchievements() {

        const cards =
            document.querySelectorAll(".achievement-card");

        cards.forEach(card => {
            card.classList.remove(
                "show",
                "is-flipped"
            );
        });

        cards.forEach((card, index) => {

            setTimeout(() => {

                card.classList.add("show");

            }, index * 150);

        });

    }

    function revealChampion() {

        playSound(revealSound, 0.45);
        const card =
            document.querySelector("#duo .card");

        if (!card) return;

        card.innerHTML = `
            <p class="eyebrow">
                ✦ SCANNING ✦
            </p>

            <h1>
                ANALYZING...
            </h1>

            <p class="title">
                CHECKING CHAMPION DATA
            </p>

            <div class="profile-box scan-progress">

                <span>
                    LOADING SYNERGY...
                </span>

                <div class="scan-bar">

                    <div class="scan-fill"></div>

                </div>

            </div>
        `;

        setTimeout(() => {

            card.innerHTML = `

                <p class="eyebrow">
                    ✦ CHAMPION REVEALED ✦
                </p>

                <h1>
                    ANASTASIA
                </h1>

                <p class="title">
                    SECRET SUPPORT
                </p>

                <div class="profile-box">

                    <span class="label">
                        PASSIVE
                    </span>

                    <strong>
                        Always Has Your Back
                    </strong>

                </div>

                <div class="profile-box">

                    <span class="label">
                        SPECIAL ABILITY
                    </span>

                    <strong>
                        Legendary Duo
                    </strong>

                </div>

                <div class="profile-box">

                    <span class="label">
                        SYNERGY
                    </span>

                    <strong>
                        ∞
                    </strong>

                </div>

                <button
                    type="button"
                    data-next="loot">

                    CLAIM REWARD

                </button>

            `;

            bindInteractiveElements(card);

        }, 2500);

    }

    function openLoot() {
       playSound(revealSound, 0.45);
        const card =
            document.querySelector("#loot .card");

        if (!card) return;

        card.innerHTML = `

            <p class="eyebrow">
                ✦ UNLOCKING LOOT ✦
            </p>

            <h1>
                OPENING...
            </h1>

            <div class="profile-box scan-progress">

                <span>
                    ANALYZING REWARD DATA...
                </span>

                <div class="scan-bar">

                    <div class="scan-fill"></div>

                </div>

            </div>

        `;

        setTimeout(() => {

            card.innerHTML = `

                <p class="eyebrow">
                    ✦ REWARD OBTAINED ✦
                </p>

                <h1>
                    MYTHIC LOOT
                </h1>

                <div class="profile-box loot-list">

                    <strong>
                        Gaming Collection
                    </strong>

                    <span>
                        ✦ Hollow Knight Artifact
                    </span>

                    <span>
                        ✦ Crash Bandicoot Memory
                    </span>

                    <span>
                        ✦ Legendary Duo Buff
                    </span>

                </div>

                <div class="profile-box">

                    <span class="label">
                        ACHIEVEMENT UNLOCKED
                    </span>

                    <strong>
                        Best Support Teammate
                    </strong>

                </div>

            `;

        }, 2500);

    }

     function bindCursorMode(element) {

        if (!cursor || element.dataset.cursorBound === "true") {
            return;
        }

        element.dataset.cursorBound = "true";

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("scan");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("scan");
        });

    }

    function bindInteractiveElements(root = document) {

        root.querySelectorAll("[data-next]").forEach(button => {

            if (button.dataset.navigationBound === "true") {
                return;
            }

            button.dataset.navigationBound = "true";

         button.addEventListener("click", () => {

            playSound(clickSound, 0.35);
        
            changeScreen(
                button.dataset.next
            );

         });

        button.addEventListener("mouseenter", () => {
            playSound(hoverSound, 0.15);
        });

            });

        });

        root
            .querySelectorAll(
                "button, .achievement-card"
            )
            .forEach(bindCursorMode);

    }

    function bindAchievementFlip() {

        document
            .querySelectorAll(".achievement-card")
            .forEach(card => {

                card.addEventListener("click", () => {

                    card.classList.toggle(
                        "is-flipped"
                    );

                });

                card.addEventListener("keydown", e => {

                    if (
                        e.key === "Enter" ||
                        e.key === " "
                    ) {

                        e.preventDefault();

                        card.classList.toggle(
                            "is-flipped"
                        );

                    }

                });

            });

    }

    function bindSpecialButtons() {

        document
            .getElementById("scan-button")
            ?.addEventListener(
                "click",
                revealChampion
            );

        document
            .getElementById("open-loot-button")
            ?.addEventListener(
                "click",
                openLoot
            );

    }

    function bindCursorMovement() {

        if (!cursor || !particleContainer) {
            return;
        }

        document.addEventListener(
            "mousemove",
            e => {

                cursor.style.left =
                    e.clientX + "px";

                cursor.style.top =
                    e.clientY + "px";

                const now =
                    performance.now();

                if (
                    now - lastParticleTime <
                    35
                ) {
                    return;
                }

                lastParticleTime = now;

                const particle =
                    document.createElement("div");

                particle.className =
                    "cursor-particle";

                if (
                    cursor.classList.contains(
                        "scan"
                    )
                ) {

                    particle.classList.add(
                        "scan-particle"
                    );

                }

                particle.style.left =
                    e.clientX + "px";

                particle.style.top =
                    e.clientY + "px";

                particleContainer.appendChild(
                    particle
                );

                setTimeout(() => {

                    particle.remove();

                }, 760);

            }

        );

    }

    function init() {

        bindInteractiveElements();

        bindAchievementFlip();

        bindSpecialButtons();

        bindCursorMovement();

        setTimeout(() => {

            changeScreen(
                "profile"
            );

        }, 3500);

    }

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

})();
