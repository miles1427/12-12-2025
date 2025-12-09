/* --- CONFIGURATION --- */
const mainLetter = "Hey love, | | I hope you remember what date it is. | | It’s our 1-month anniversary. | I know we just celebrated 10 days... but look at us. | Here we are. | | Who could have guessed that after a messed-up relationship of just 5 days... | We would make it to a fucking 30 days? | | And 30 days means we made a month. | | Ek question che— | | Am I really that tall and handsome as hell? | | But seriously... | How did a boy with no knowledge of English... | A guy who doesn’t even know how to pronounce 'Satan'... | Get a girl like you? | | It’s shocking to accept. | Even for me. | | The month of December will always be huge for you. | What you’ve been through is hard to even imagine. | But from Nov 12 to Dec 12... | We got each other. | | And that is a fucking good thing to remember. | | And don’t you think your man has done only this much... | For the Diamond of the Season? | | We have a lot to go through. | | When you can have the best... | Why stop at just a mere glimpse of the start? | | By the way... | While writing this, I’m talking to my inspiration. | | Any guess who she might be?";

const pastStory = "Hey baby, | | As you know, I’m making something for you—and I hate that you know it. | And I hate myself even more that you’re asking about it, but I can’t tell you the truth. | I’m sorry for that. | | I’m carrying the burden of being perfect and nice, but I can handle it—because it’s for you. | | You know the time from May 31 to November 12... | God, how hard those days were. | Wherever I went, I only thought of you. | I swear, I never want to live that time again. | Those days were worse than a fucking nightmare. | | You know, at that time I grew my hair long. | I stopped everything that made me feel like myself. | And how can I forget about that call and those texts? | That was a hell of a night. | | But I never lost hope of 'Us'. | You know I’m madly in love with you, just like Gomez is with Morticia. | | We have the same kind of love—the love that never died. | We will be long gone, but our tales will be eternally spread across the world, and this website too. | | You, the beauty with brains. | Me, the one who loves that beauty with brains. | | But the best part is, they were someone’s imagination—and we are real. | That’s why being a couple like this is impossible… | And only we can do it.";

const presentStory = "Even with the distance, having you in my life makes every day brighter. | You are my peace in the chaos. | Just hearing your voice changes my whole mood.";

const futureStory = "One day, this distance will close. | I will hold your hand, and I won't let go. | We will walk this bridge together.";

const speed = 50; 

/* --- JOURNEY START --- */
function startJourney() {
    const landingPage = document.getElementById('landing-page');
    const letterPage = document.getElementById('letter-page');
    const contentDiv = document.querySelector('.content'); 
    const music = document.getElementById('bg-music');
    const btn = document.querySelector('.enter-btn');

    btn.innerHTML = "Listening..."; 
    btn.style.pointerEvents = "none"; 
    
    music.volume = 0.9; 
    music.play().catch(e => console.log("Music blocked"));

    contentDiv.style.transition = "opacity 1.5s ease";
    contentDiv.style.opacity = '0';

    setTimeout(() => {
        landingPage.style.transition = "opacity 1s ease";
        landingPage.style.opacity = '0';

        setTimeout(() => {
            landingPage.style.display = 'none';
            letterPage.classList.remove('hidden');
            letterPage.style.display = 'flex';
            
            setTimeout(() => {
                letterPage.style.opacity = '1';
                setTimeout(() => {
                    typeWriter("ghost-text", mainLetter, 0); 
                }, 1500); 
            }, 100);
        }, 2000); 
    }, 2000); 
}

/* --- TYPEWRITER (FIXED SCROLLING) --- */
function typeWriter(elementId, text, index, callback) {
    if (index < text.length) {
        const char = text.charAt(index);
        const element = document.getElementById(elementId);

        if (char === '|') {
            element.innerHTML += "<br>";
        } else {
            element.innerHTML += char;
        }
        
        // --- FIXED SCROLL LOGIC ---
        // This checks if the element being typed into (Letter OR Story) 
        // has a scrollbar, and scrolls it to the bottom.
        if (element.classList.contains('letter-text') || element.classList.contains('story-text')) {
             element.scrollTop = element.scrollHeight;
        }

        setTimeout(() => {
            typeWriter(elementId, text, index + 1, callback);
        }, speed);
    } else {
        if (callback) callback();
    }
}

/* --- NEXT PAGE (Letter -> Bridge) --- */
function nextPage() {
    const letterPage = document.getElementById('letter-page');
    const memoryPage = document.getElementById('memory-page');

    letterPage.style.transition = "opacity 2s ease";
    letterPage.style.opacity = '0';

    setTimeout(() => {
        letterPage.style.display = 'none';
        memoryPage.classList.remove('hidden');
        memoryPage.style.display = 'flex';
        
        setTimeout(() => {
            memoryPage.style.opacity = '1';
        }, 100);
    }, 2000);
}

/* --- NEW PAGE LOGIC (Bridge -> Full Page) --- */
let readStatus = { past: false, present: false, future: false };

function openFullPage(pageType) {
    const memoryPage = document.getElementById('memory-page');
    const targetPage = document.getElementById(`page-${pageType}`);
    const textId = `text-${pageType}`;

    // Fade out bridge
    memoryPage.style.opacity = '0';

    setTimeout(() => {
        memoryPage.style.display = 'none';
        
        // Show new page
        targetPage.classList.remove('hidden');
        targetPage.style.display = 'flex';

        setTimeout(() => {
            targetPage.style.opacity = '1';
            
            // Start typing if not read yet
            let storyText = "";
            if (pageType === 'past') storyText = pastStory;
            if (pageType === 'present') storyText = presentStory;
            if (pageType === 'future') storyText = futureStory;

            if (!readStatus[pageType]) {
                setTimeout(() => {
                    typeWriter(textId, storyText, 0);
                    readStatus[pageType] = true;
                }, 1000);
            }
        }, 100);

    }, 1000); // Fixed delay (was 3000ms, changed to 1000ms for smoothness)
}

function backToBridge(pageType) {
    const currentPage = document.getElementById(`page-${pageType}`);
    const memoryPage = document.getElementById('memory-page');

    // Fade out current story page
    currentPage.style.opacity = '0';

    setTimeout(() => {
        currentPage.style.display = 'none';
        currentPage.classList.add('hidden');

        // Show bridge again
        memoryPage.style.display = 'flex';
        setTimeout(() => {
            memoryPage.style.opacity = '1';
        }, 100);
    }, 1000);
}