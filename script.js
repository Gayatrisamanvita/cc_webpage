document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email }),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('status').innerText = 'Data submitted successfully!';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('status').innerText = 'Error submitting data';
    });
});
