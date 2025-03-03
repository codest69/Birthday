const messages = [
    "Knowledge is power.",
    "Hack the planet.",
    "Cybersecurity is a mindset.",
    "The key is hidden in plain sight.",
    "Encrypt everything.",
    "Think like a hacker."
];

const shift = 13; // ROT13 Encryption

function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, function(char) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26) + base);
    });
}

const randomMessage = messages[Math.floor(Math.random() * messages.length)];
const encryptedMessage = caesarCipher(randomMessage, shift);

document.getElementById("encryptedMessage").innerText = encryptedMessage;

function checkDecryption() {
    const userInput = document.getElementById("decryptInput").value.trim();
    
    if (userInput.toLowerCase() === randomMessage.toLowerCase()) {
        alert("Correct! Access granted.");
        window.location.href = "../pages/darkweb.html";
    } else {
        alert("Wrong decryption! Try again.");
    }
}