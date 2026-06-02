const secretCode = "030605";

function unlockSite() {

    let value =
        document.getElementById("password").value;

    if (value === secretCode) {

        document.getElementById(
            "lockScreen"
        ).style.display = "none";

        document.getElementById(
            "mainContent"
        ).style.display = "block";

        startTyping();

    }

    else {

        document.getElementById(
            "error"
        ).innerText =
            "Nice Try 😂 Only Rajeshree Can Enter";

    }
}

const text =
    "Oiiiiiiiiiiiiiiiii Thangoooooooooooo 😘💗";

let index = 0;

function startTyping() {

    let interval =
        setInterval(() => {

            document.getElementById(
                "typing"
            ).innerHTML += text[index];

            index++;

            if (index >= text.length) {
                clearInterval(interval);
            }

        }, 100);

}

document.getElementById("letterText").innerHTML = `
Hey Thangoo ❤️ Happy Birthday 🎂🥳
<br><br>

Nee enaku kedacha periya gift 💎
<br><br>

Nee en first baby girl 👶
<br>
Nee en second mother 💗
<br><br>

Unaku onnu na,
un anna enga irundhalum anga erupan 🫂
<br><br>

Yaarukagavum unna vittu kuduka maatan ❤️
<br><br>

Thank you for every smile 😊
<br>
Thank you for every memory 📸
<br>
Thank you for correcting me when I was wrong ❤️
<br>
Thank you for always being there for me 🫂
<br><br>

Nee 5 vayasu aana...
<br>
Nee 15 vayasu aana...
<br>
Nee 25 vayasu aana...
<br><br>

Enaku nee eppovume baby girl dhan 👶💖
<br><br>

Love You 😘
<br>
Miss You 🥺
<br>
Need You 🫂
<br>
Always ❤️
<br><br>

<b>— Your Annoying Anna 🤪</b>
`;

let letterStarted = false;

window.addEventListener("scroll", () => {

    const letterSection =
        document.querySelector(".letter-section");

    if (!letterSection) return;

    const position =
        letterSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 150
        && !letterStarted) {

        letterStarted = true;

        let i = 0;

        function typeLetter() {
            if (i < letter.length) {
                document.getElementById("letterText").innerHTML += letter.charAt(i);
                i++;
                setTimeout(typeLetter, 30);
            }
        }

        typeLetter();

    }

});

function openGift() {

    const msg =
        document.getElementById("giftMessage");

    msg.style.display = "block";

    document.querySelector(".gift-box")
        .innerHTML = "💝";

    msg.scrollIntoView({
        behavior: "smooth"
    });
}