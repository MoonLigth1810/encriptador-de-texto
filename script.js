function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText); // Simple Base64 encoding for demonstration
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const encryptedText = document.getElementById('inputText').value;
    const decryptedText = atob(encryptedText); // Simple Base64 decoding for demonstration
    document.getElementById('outputText').value = decryptedText;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}

function downloadText() {
    const outputText = document.getElementById('outputText').value;
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'encrypted.txt';
    link.click();
}
