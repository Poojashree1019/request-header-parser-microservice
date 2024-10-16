document.getElementById('requestButton').addEventListener('click', function () {
    fetch('/api/whoami')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p><strong>IP Address:</strong> ${data.ipaddress}</p>
                <p><strong>Language:</strong> ${data.language}</p>
                <p><strong>Software:</strong> ${data.software}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
