
const personalityResults = [
    "You’re not antisocial; it’s just that other humans are exhausting. Search again; it’s safe here.",
    "Your code works? Enjoy it. That’s a temporary state. Try another search to see how long it lasts.",
    "You’re the ‘silent genius’ type, but mostly just silent. Click again and let your code speak for you.",
    "You’re introverted, which means you have more meaningful conversations… with yourself. Search again if that resonates.",
    "Coding is 10% logic and 90% wondering what went wrong. Search again for answers you’ll never get.",
    "Debugging: staring at your code until you want to cry. Try another search; maybe this time it’ll show mercy.",
    "You say you 'optimize code,' but we both know you just make it work and pray. Search again to keep the magic alive.",
    "Every coder's best friend: the ‘Undo’ button. Search again, no regrets!",
    "If bugs were dollars, you’d be a millionaire. Care to add another search to your 'net worth'?",
    "You love coding because it doesn’t involve people – just bugs. Click again for more quality bug-time.",
    "You're a ‘people person’… when people aren't around. Search again for some more alone time.",
    "You're an introvert who 'works best alone' – mostly because nobody else understands your code. Try again to keep it that way.",
    "You’re living the dream: caffeine, regret, and questionable life choices. Care for another click?",
    "Introvert level: avoiding eye contact with yourself in the mirror. Search again, no mirrors involved.",
    "If you were paid per line of broken code, you'd be set for life. Search again to keep the wealth rolling in.",
    "You could socialize… but you’d rather have a staring contest with your error logs. Click again, your only audience is code.",
    "You’re a night owl because, honestly, people are asleep then. Click again, your secret’s safe here.",
    "You love silence – especially when it’s the sound of bugs disappearing. One more search won’t disturb the peace.",
    "You think you’re unique, but your bugs look awfully familiar. Care for another search, clone?",
    "Your coding speed: slow, but not as slow as your social life. Try again, at least this button doesn’t judge.",
    "You’re better at talking to your computer than to humans. Search again; it doesn’t bite.",
    "Your life motto? ‘It’s not a bug; it’s a feature.’ Search again for more ‘features’.",
    "You’ve been working ‘so hard’ that you almost convinced yourself you were productive. Search again to break the illusion.",
    "You’re a genius at finding solutions… just not the right ones. Try again; maybe the right answer’s waiting.",
    "The only debugging tool you trust is your own rage. Care to channel it with one more click?",
    "You give ‘minimalist’ vibes… mostly because your social calendar is empty. Search again if you don’t have any plans.",
    "You’re the king/queen of procrastination… and yet here you are, still searching. Click again, the irony continues.",
    "You could change the world… if you could just get out of bed. Search again; no energy required.",
    "You dream of coding perfectly – and then you wake up. Care to search again for that elusive perfection?",
    "Your greatest skill is fixing problems… for everyone but yourself. Click again and see what’s left to fix.",
    "Your code works… except when it doesn’t. Search again for more plot twists.",
    "Your idea of ‘problem-solving’ is hitting Refresh until it stops breaking. Try one more click; it might just work this time.",
    "You’re like a database: complex, occasionally useful, and prone to crashing. Search again for a reboot.",
    "You thought you could avoid human interaction, but your bugs are way too chatty. Try searching again, just to avoid them.",
    "You have friends… in your error logs. Search again and maybe they’ll say ‘hi’.",
    "Your code is 99% caffeine and 1% desperation. Click again if you’re still caffeinated.",
    "You’re great at breaking ice… as long as it’s not real people. Search again if small talk terrifies you.",
    "You love code because it doesn’t judge you – unlike humans. Care for another search in this judgment-free zone?",
    "You wanted to ‘follow your passion,’ and here you are… stuck debugging at 2 AM. Search again to feel less alone.",
    "Your future’s bright… as soon as you find the right syntax. Try one more click for motivation.",
    "Your best friend is Google, and honestly, you both know it. Search again; it’s just between us."
  ];
  
  
  function generatePersonalityResult(query) {
    
    let result = "Hmm... mysterious, aren’t we?"; 
    if (query.toLowerCase().includes("How")) {
      result = "Bro You are Awesome, Do it yourself!!";
    } else if (query.toLowerCase().includes("Why")) {
      result = "Its the choice of the Almighty, Dont Question it!!:)";
    } else if (query.toLowerCase().includes("When")) {
      result = "Long time ago, in a galaxy far, far away... (More than this id Confidetial. -by NASA)";
    } else if (query.toLowerCase().includes("Who")) {
      result = "The one and Only Convincing Star!!!, You!";
    } else {
      result = personalityResults[Math.floor(Math.random() * personalityResults.length)];
    }
    return result;
  }
  
  let searchCount = 0;

  function search() {
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message');
    const searchBar = document.getElementById('search-bar');
    const mysteryGiftButton = document.getElementById('mystery-gift');
    
    loading.style.display = 'block';
    errorMessage.innerHTML = ""; 
  
    const query = searchBar.value;

    if (searchBar.value.trim() === "") {
        errorMessage.innerHTML = "Please enter something to search!";
        loading.style.display = 'none';
        errorMessage.style.color = "red"; 
        return;

      }
   else {
    setTimeout(() => {
    
      loading.style.display = 'none';

      const personalityMessage = generatePersonalityResult(query);
      errorMessage.innerHTML = personalityMessage;
    }, 2000); 

    setTimeout(() => {
        loading.style.display = 'none';
       
        const personalityMessage = personalityResults[Math.floor(Math.random() * personalityResults.length)];
        errorMessage.innerHTML = personalityMessage;
       
        searchCount++;

        if (searchCount%3 == 0) {
          mysteryGiftButton.style.display = 'inline-block';
        }
        else {
            mysteryGiftButton.style.display = 'none';
        }
      }, 2000); 
    }
  
  }
  function revealMysteryGift() {
    const mysteryGiftMessage = document.getElementById('mystery-gift-message');
  
    const gifts = [
        "🎉 Congratulations! You’ve won… absolutely nothing!",
        "🎁 A lifetime supply of imaginary cookies!",
        "🚀 You unlocked... the secret to the universe! (Just kidding)",
        "✨ You win a virtual high-five! ✋",
        "🏆 A trophy for being an amazing clicker!",
        "🎲 Your prize: endless entertainment right here!",
        "🎈 You’re the proud owner of an invisible balloon!",
        "🧩 Here's your Mystery Gift... It’s a piece of HTML code!",
        "🐱 You’ve unlocked… a virtual cat! Meow!",
        "🍕 A digital slice of pizza - no calories included!",
        "🔑 Here’s the key to success… it only works on Tuesdays.",
        "🏆 A certificate for perfecting the art of procrastination!",
        "🕶 You’re getting… a virtual pair of shades to hide from reality.",
        "🍀 A four-leaf clover that doesn’t work. Just like your last code fix.",
        "🌐 Free Wi-Fi password: 'ILoveSearching' (doesn’t actually work).",
        "🕶 You’ve won a pair of invisible sunglasses! Look cool anytime.",
        "🎉 Confetti blast! Just imagine it, though.",
        "🍫 An invisible chocolate bar. It’s 100% guilt-free!",
        "📚 You’ve unlocked knowledge... by clicking a button!",
        "💰 A fortune that says ‘Keep clicking for good luck!’",
        "🎤 A free karaoke performance by… your imagination.",
        "🍀 A digital four-leaf clover for luck. It’s totally real… we swear!",
        "🧩 A puzzle piece – now go find the other 999 pieces!",
        "💡 You’ve won… a bright idea! Use it wisely.",
        "📸 You’re famous! In an alternate universe, anyway.",
        "🎬 Here’s your ticket to an imaginary movie night!",
        "🎧 A pair of invisible earbuds. Perfect for listening to silence.",
        "🧋 A virtual bubble tea. Shake your screen to enjoy!",
        "🏆 Achievement unlocked: ‘Clicked a button multiple times!’"
      ];
      
  mysteryGiftMessage.innerHTML = "The Mystery Gift You Won : " + gifts[Math.floor(Math.random() * gifts.length)];
  mysteryGiftMessage.style.display = 'block';

      if (searchCount%3 != 0) {
        mysteryGiftMessage.style.display = '';  
    }
    }
