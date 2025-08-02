window.onload = () => {
  document.body.classList.remove("container");

  // Typewriter effect
  const text = `Happy Birthday, dear Celuny,  
a beacon in my life's grand sea.  
You mean so much, truly, profoundly,  
my precious friend, for all to see.

And beyond the bond of friendship's grace,  
you shine so bright, in every space.  
My precious girl, with heart so pure,  
a gentle soul, of whom I'm sure.

May this new year, with skies so vast,  
bring endless joy, a joy to last.  
May grand adventures find your way,  
each rising sun, a brighter day.

Happy Birthday sweet Celuny,  
may life’s best gifts now come to thee.`;

  let i = 0;
  const speed = 50;
  const container = document.getElementById("typewriter-text");

  function typeWriter() {
    if (i < text.length) {
      container.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  // Random heart effect
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 20 + 10;
    heart.style.width = heart.style.height = `${size}px`;
    heart.style.animationDuration = (Math.random() * 4 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 300);

  // Audio playback
  const music = document.getElementById("music");
  music.volume = 0.5;

  const playAudio = () => {
    music.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
    document.removeEventListener("click", playAudio);
  };
  document.addEventListener("click", playAudio);
};
