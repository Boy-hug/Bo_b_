document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const message = document.getElementById('message').value;
    
    if (!message) {
        document.getElementById('responseMessage').textContent = 'Please enter a message.';
        return;
    }
    
    fetch('https://api.telegram.org/bot7200129734:AAFnzXSYiZVXVl_l6EwQM0G8_dynW8VA0IY/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '6244550071',
            text: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('responseMessage').textContent = 'Message sent successfully!';
        } else {
            document.getElementById('responseMessage').textContent = 'Failed to send message.';
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Error: ' + error.message;
    });
});