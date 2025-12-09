/* --- CONFIGURATION --- */
const mainLetter = "Hey love, | | I hope you remember what date it is. | | It’s our 1-month anniversary. | I know we just celebrated 10 days... but look at us. | Here we are. | | Who could have guessed that after a messed-up relationship of just 5 days... | We would make it to a fucking 30 days? | | And 30 days means we made a month. | | Ek question che— | | Am I really that tall and handsome as hell? | | But seriously... | How did a boy with no knowledge of English... | A guy who doesn’t even know how to pronounce 'Satan'... | Get a girl like you? | | It’s shocking to accept. | Even for me. | | The month of December will always be huge for you. | What you’ve been through is hard to even imagine. | But from Nov 12 to Dec 12... | We got each other. | | And that is a fucking good thing to remember. | | And don’t you think your man has done only this much... | For the Diamond of the Season? | | We have a lot to go through. | | When you can have the best... | Why stop at just a mere glimpse of the start? | | By the way... | While writing this, I’m talking to my inspiration. | | Any guess who she might be?";

const pastStory = "Hey baby, | | As you know, I’m making something for you—and I hate that you know it. | And now I hate myself even more that you’re asking about it, but I can’t tell you the truth. | I’m sorry for that. | And now I’m carrying the burden of being perfect and nice, but I can handle it—because it’s for you, and because we are together. | | You know the time from May 31 to November 12—how hard those days were. | Wherever I went, I only thought of you. | And I swear, I never want to live that time again. | Those days were worse than a fucking nightmare. | I hope we’re never in a place again where we have to face that kind of life—the life without each other. | | You know, at that time I grew my hair long. | I stopped everything that made me feel like myself. | And how can I forget about that call and those texts? | I mean, that was a hell of a night. | But you know, I never lost hope of you and me becoming an “us.” | You know I’m madly in love with you, just like Gomez is with Morticia. | | But saying that I always knew you were coming back would be a lie. | In fact, I was in the worst phase of my life. | And the day we came to talk again, that same day I talked with Jay about you. | As you know, I also started smoking during those days. | We were smoking, and the only thing I could think about was you. | | How can I forget how that time took away the most important thing in my life—my humor. | My ability to make others laugh. | And when I say I make people laugh, I really do. | | Back then, I was constantly fighting with my family, with Jay, with Yug—with everyone. | I really can’t imagine those days again. | | Losing you once already felt unbearable. | Promise me you’ll never leave. | I always say nothing you do can hurt me—but the day you left, I just broke. | And I’m being 100% honest: I didn't like you for that. | | And Taylor Swift played a huge role in making me more depressed... | “Guilty As Sin,” | “I’m Gonna Get You Back,” | “Down Bad,” | and “Fresh Out the Slammer.” | | These songs killed me every time I listened to them, but I still love them because they reminded me of you. | | And I really hope I never see those kinds of days again. | I don’t want to live without you.";

const presentStory = "So, as you read about our beginning, it was all very lame things—pain, sadness, and stuff like that. | That whole thing is actually a shit box, in my opinion. | Like, really, who even cares about all that? | | Because look at us—we are happier than we ever were. | We are more in love than we ever were. | We are just at our best. | So who cares about all that? | | We are so good with each other. | I even saved you from a kidnapper, even though that kidnapper was a cutie. | But a kidnapper is a kidnapper, and no one can take you from me—no matter if it’s you yourself. | And if you try, I will be the kidnapper. | I swear about that. | | And by a cute kidnapper, I remember my two divine things: | THE EYES. | Your eyes, which actually belong to me. | They are so beautiful. | I love them. | I want them. | I want to see them. | I really want to see them. | Where are they? | | But I have to say, we have come a long way from all that. | And now we talk about anime, about the LGBTQ+ community, about how I look at your friend and say, “I love you more than Kahish.” | Now we wake up with the thought of who is missing whom first and who wins. | | And also, we are rivals too—you Red Bull and Ferrari, and me the winning Papaya. | You MI, me CSK. | You, the one who loves English; me, the one who just hates grammar. | And also THEM—he is a BKL, to be honest. | | But yeah, all this makes us us. | | You, the divine power. | Me, the chosen one. | Just made for each other.";

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