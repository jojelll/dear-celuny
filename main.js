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
};                <div class="flower__grass--top"></div>
                <div class="flower__grass--bottom"></div>
                <div class="flower__grass__leaf flower__grass__leaf--1"></div>
                <div class="flower__grass__leaf flower__grass__leaf--2"></div>
                <div class="flower__grass__leaf flower__grass__leaf--3"></div>
                <div class="flower__grass__leaf flower__grass__leaf--4"></div>
                <div class="flower__grass__leaf flower__grass__leaf--5"></div>
                <div class="flower__grass__leaf flower__grass__leaf--6"></div>
                <div class="flower__grass__leaf flower__grass__leaf--7"></div>
                <div class="flower__grass__leaf flower__grass__leaf--8"></div>
                <div class="flower__grass__overlay"></div>
            </div>
            <div class="flower__g-long">
                <div class="flower__g-long__top"></div>
                <div class="flower__g-long__bottom"></div>
            </div>
            <div class="flower__g-right flower__g-right--1">
                <div class="leaf"></div>
            </div>
            <div class="flower__g-right flower__g-right--2">
                <div class="leaf"></div>
            </div>
            <div class="flower__g-front">
                <div class="flower__g-front__line"></div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                    <div class="flower__g-front__leaf"></div>
                </div>
            </div>
            <div class="flower__g-fr">
                <div class="leaf"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
            </div>
            <div class="long-g long-g--1">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--2">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--3">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--4">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--5">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--6">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--7">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
        </div>
        <div class="flower flower--2">
            <div class="flower__line">
                <div class="flower__line__leaf flower__line__leaf--1"></div>
                <div class="flower__line__leaf flower__line__leaf--2"></div>
                <div class="flower__line__leaf flower__line__leaf--3"></div>
                <div class="flower__line__leaf flower__line__leaf--4"></div>
            </div>
            <div class="flower__leafs flower__leafs--2">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__white-circle"></div>
            </div>
            <div class="flower__light flower__light--1"></div>
            <div class="flower__light flower__light--2"></div>
            <div class="flower__light flower__light--3"></div>
            <div class="flower__light flower__light--4"></div>
            <div class="flower__light flower__light--5"></div>
            <div class="flower__light flower__light--6"></div>
            <div class="flower__light flower__light--7"></div>
            <div class="flower__light flower__light--8"></div>
            <div class="flower__grass flower__grass--1">
                <div class="flower__grass--top"></div>
                <div class="flower__grass--bottom"></div>
                <div class="flower__grass__leaf flower__grass__leaf--1"></div>
                <div class="flower__grass__leaf flower__grass__leaf--2"></div>
                <div class="flower__grass__leaf flower__grass__leaf--3"></div>
                <div class="flower__grass__leaf flower__grass__leaf--4"></div>
                <div class="flower__grass__leaf flower__grass__leaf--5"></div>
                <div class="flower__grass__leaf flower__grass__leaf--6"></div>
                <div class="flower__grass__leaf flower__grass__leaf--7"></div>
                <div class="flower__grass__leaf flower__grass__leaf--8"></div>
                <div class="flower__grass__overlay"></div>
            </div>
            <div class="flower__g-long">
                <div class="flower__g-long__top"></div>
                <div class="flower__g-long__bottom"></div>
            </div>
            <div class="flower__g-right flower__g-right--1">
                <div class="leaf"></div>
            </div>
            <div class="flower__g-right flower__g-right--2">
                <div class="leaf"></div>
            </div>
            <div class="flower__g-front">
                <div class="flower__g-front__line"></div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                    <div class="flower__g-front__leaf"></div>
                </div>
            </div>
            <div class="flower__g-fr">
                <div class="leaf"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
            </div>
            <div class="long-g long-g--1">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--2">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--3">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--4">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--5">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--6">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--7">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
        </div>
        <div class="flower flower--3">
            <div class="flower__line">
                <div class="flower__line__leaf flower__line__leaf--1"></div>
                <div class="flower__line__leaf flower__line__leaf--2"></div>
                <div class="flower__line__leaf flower__line__leaf--3"></div>
                <div class="flower__line__leaf flower__line__leaf--4"></div>
            </div>
            <div class="flower__leafs flower__leafs--3">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__white-circle"></div>
            </div>
            <div class="flower__light flower__light--1"></div>
            <div class="flower__light flower__light--2"></div>
            <div class="flower__light flower__light--3"></div>
            <div class="flower__light flower__light--4"></div>
            <div class="flower__light flower__light--5"></div>
            <div class="flower__light flower__light--6"></div>
            <div class="flower__light flower__light--7"></div>
            <div class="flower__light flower__light--8"></div>
            <div class="flower__grass flower__grass--1">
                <div class="flower__grass--top"></div>
                <div class="flower__grass--bottom"></div>
                <div class="flower__grass__leaf flower__grass__leaf--1"></div>
                <div class="flower__grass__leaf flower__grass__leaf--2"></div>
                <div class="flower__grass__leaf flower__grass__leaf--3"></div>
                <div class="flower__grass__leaf flower__grass__leaf--4"></div>
                <div class="flower__grass__leaf flower__grass__leaf--5"></div>
                <div class="flower__grass__leaf flower__grass__leaf--6"></div>
                <div class="flower__grass__leaf flower__grass__leaf--7"></div>
                <div class="flower__grass__leaf flower__grass__leaf--8"></div>
                <div class="flower__grass__overlay"></div>
            </div>
            <div class="flower__g-long">
                <div class="flower__g-long__top"></div>
                <div class="flower__g-long__bottom"></div>
            </div>
            <div class="flower__g-right flower__g-right--1">
                <div class="leaf"></div>
            </div>
            <div class="flower__g-right flower__g-right--2">
                <div class="leaf"></div>
            </div>
            <div class="flower__g-front">
                <div class="flower__g-front__line"></div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                    <div class="flower__g-front__leaf"></div>
                </div>
                <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                    <div class="flower__g-front__leaf"></div>
                </div>
            </div>
            <div class="flower__g-fr">
                <div class="leaf"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
            </div>
            <div class="long-g long-g--1">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--2">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--3">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--4">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--5">
                <div class="leaf leaf--0"></div>
                <div class="leaf leaf--1"></div>
                <div class="leaf leaf--2"></div>
                <div class="leaf leaf--3"></div>
            </div>
            <div class="long-g long-g--6">
       // Random heart effect
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 10 + 15;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
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
</DOCUMENT>  // Random heart effect
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 10 + 15;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
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
</DOCUMENT>  // Random heart effect
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 10 + 15; // Adjusted size range for better visibility
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.setProperty('--before-width', `${size}px`);
    heart.style.setProperty('--before-height', `${size}px`);
    heart.style.setProperty('--after-width', `${size}px`);
    heart.style.setProperty('--after-height', `${size}px`);
    heart.style.animationDuration = (Math.random() * 4 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 300);

  // Audio playback
  const music = document.getElementById("music");
  music.volume = 0.5;

  // Play audio on user interaction
  const playAudio = () => {
    music.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
    document.removeEventListener("click", playAudio);
  };
  document.addEventListener("click", playAudio);
};
</DOCUMENT>  // Random heart effect
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 10 + 15; // Adjusted size range for better visibility
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.setProperty('--before-width', `${size}px`);
    heart.style.setProperty('--before-height', `${size}px`);
    heart.style.setProperty('--after-width', `${size}px`);
    heart.style.setProperty('--after-height', `${size}px`);
    heart.style.animationDuration = (Math.random() * 4 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 300);

  // Audio playback
  const music = document.getElementById("music");
  music.volume = 0.5;

  // Play audio on user interaction
  const playAudio = () => {
    music.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
    document.removeEventListener("click", playAudio);
  };
  document.addEventListener("click", playAudio);
};
</DOCUMENT>  function createHeart() {
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
};
