/* --- CONFIGURATION --- */
const mainLetter = "As last time, I still hope you remember the date, my love. | | It’s January 12 — what was supposed to be our 2-month anniversary. | But we couldn’t make it. | | Last month was so different from this. | At this exact time, I was waiting for you to talk to me, and you were busy — actually, you were crying because you were upset knowing you’d be busy and wouldn’t get time to talk to me. | | And now here we are, where you don’t want to talk to me even when you’re free. | And that hurts, yaar. | | I don’t know how to process this. | It’s hard to even accept. | Where did all our love go? | Why can’t we have all the love of our life back? | Why can’t we? | Why the fuck can’t we? | | I don’t know what else to say. | I don’t even know if you’re going to open this or not. | The chances feel high that you won’t. | | I hope I’m wrong. | God, please make me wrong. | Please let you open this and realize that we were meant to be together — that what we had was real. | | I’m exhausted, confused, and broken trying to understand how we reached here. | I’m still holding on to what we were, even when it feels like I’m the only one holding it now.";

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
