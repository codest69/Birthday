const output = document.getElementById("output");
const input = document.getElementById("commandInput");


const fakeLogs = [
    "[INFO] Connecting to the dark web...",
    "[WARNING] Unauthorized access detected...",
    "[ERROR] Encrypted file requires decryption...",
    "[ALERT] Hack in progress...",
    "[SUCCESS] Key decryption complete...",
    "\n[INSTRUCTION] Type 'decrypt' to continue..."
];

let logIndex = 0;

function addFakeLog() {
    if (logIndex < fakeLogs.length) {
        output.innerText += "\n" + fakeLogs[logIndex];
        logIndex++;
        setTimeout(addFakeLog, 2000);
    } else {
        output.innerText += "\n\nEnter command to continue...";
    }
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const command = input.value.trim().toLowerCase();
        output.innerText += "\n> " + command;

        if (command === "decrypt") {
            window.location.href = "pages/decryption.html";
        } else {
            output.innerText += "\n[ERROR] Invalid command!";
        }

        input.value = "";
    }
});

addFakeLog();

