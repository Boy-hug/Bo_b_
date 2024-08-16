document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var message = document.getElementById('message').value;
    var chatId = document.getElementById('chatId').value;
    
    var botToken = '7200129734:AAFnzXSYiZVXVl_l6EwQM0G8_dynW8VA0IY'; // Replace with your bot token
    var url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    var data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
});