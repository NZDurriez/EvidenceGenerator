function generateEvidenceText() {
    // Get field values
    const caseText = document.getElementById("case").value.trim() || "N/A";
    const platform = document.getElementById("platform").value || "N/A";
    let discordId = document.getElementById("discord").value.trim() || "N/A";
    const background = document.getElementById("background").value.trim() || "N/A";
    const evidence = document.getElementById("evidence").value.trim() || "N/A";
    const finalRes = document.getElementById("finalRes").value.trim() || "N/A";
    const idType = document.getElementById("idType").value || "N/A";
    const idValue = document.getElementById("idValue").value.trim() || "N/A";

    // Ensure Discord ID is numeric only
    discordId = discordId.replace(/\D/g, '') || "N/A";

    // Construct output text
    let outputText = `Case: ${caseText}\n`;
    outputText += `Platform: ${platform}\n`;
    outputText += `Discord: ${discordId !== "N/A" ? `<@${discordId}>` : "N/A"}\n`;
    outputText += `Background: ${background}\n`;
    outputText += `Evidence:\n${evidence}\n`;
    outputText += `Final Res: ${finalRes}\n`;
    outputText += `${idType}: ${idValue}`;

    // Display formatted output
    const outputElement = document.getElementById("output");
    if (outputElement) {
        outputElement.innerText = outputText;
        outputElement.style.display = "block";
    } else {
        console.error("Output element not found.");
    }
}

// Copy to clipboard function
function copyToClipboard() {
    const outputText = document.getElementById("output").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        const copyBtn = document.getElementById("copyBtn");
        copyBtn.innerText = "Copied!";
        setTimeout(() => {
            copyBtn.innerText = "Copy";
        }, 1500);
    });
}

// Ensure button click events work
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateBtn").addEventListener("click", generateEvidenceText);
    document.getElementById("copyBtn").addEventListener("click", copyToClipboard);
});
