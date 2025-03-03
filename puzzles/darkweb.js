document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");

    function typeEffect(text, speed = 50) {
        let i = 0;
        function type() {
            if (i < text.length) {
                output.innerText += text[i];
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    function disableUserInput() {
        document.onkeydown = function (event) {
            event.preventDefault();
        };
        document.onmousedown = function (event) {
            event.preventDefault();
        };
        document.oncontextmenu = function (event) {
            event.preventDefault();
        };
    }

    function glitchScreen() {
        let glitchInterval = setInterval(() => {
            document.body.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            document.body.style.filter = `blur(${Math.random()}px)`;
        }, 100);
        setTimeout(() => clearInterval(glitchInterval), 5000);
    }

    setTimeout(() => {
        alert("⚠️ WARNING: SYSTEM COMPROMISED!");
        document.body.style.backgroundColor = "red";
        document.body.classList.add("glitch");

        glitchScreen();

        setTimeout(() => {
            document.body.style.backgroundColor = "black";
            document.body.classList.remove("glitch");

            typeEffect("\n\n[ERROR] SYSTEM BREACH DETECTED!", 50);

            setTimeout(() => {
                document.body.style.backgroundColor = "#0f0f0f";
                output.innerText += "\n\n[CRITICAL] Security override failed!";
                
                setTimeout(() => {
                    document.body.style.backgroundColor = "red";
                    document.body.style.color = "white";
                    output.innerText += "\n\n[FATAL ERROR] SYSTEM MELTDOWN IMMINENT!";
                    
                    disableUserInput();

                    // Mouse movement restriction
                    document.onmousemove = function () {
                        document.body.style.cursor = "none";
                    };

                    setTimeout(() => {
                        output.innerText += "\n\n[ALERT] UNKNOWN ENTITY DETECTED!";

                        // Random glitching text
                        let glitchText = setInterval(() => {
                            output.innerHTML += `<span style="color:red;"> ${Math.random().toString(36).substring(2, 6)}</span>`;
                        }, 200);
                        setTimeout(() => clearInterval(glitchText), 5000);

                        setTimeout(() => {
                            output.innerText += "\n\n[ALERT] WEBCAM ACTIVATED!";

                            setTimeout(() => {
                                document.body.innerHTML = `
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }
    </style>
    <img src="../images/giphy.gif" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: -1;">
`;
                                setTimeout(() => {
                                    window.location.href = "../pages/final_message.html";
                                }, 5000);
                            }, 3000);

                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 3000);
        }, 3000);
    }, 3000);
});