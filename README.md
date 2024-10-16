# request-header-parser-microservice
Building a Request Header Parser Microservice is a great project to enhance your full-stack JavaScript skills. This microservice will parse the request headers and return the client's information in a structured format.

### Project Overview
The Request Header Parser Microservice will extract information such as the user's IP address, language, and software from the request headers and return it in JSON format.

### Project Structure
You will use Node.js for the backend with Express and a simple frontend using HTML and JavaScript.

#### Project Directory Structure
```
request-header-parser-microservice/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── server.js
├── package.json
└── README.md
```

### Step 1: Initialize the Project

1. **Create the Project Directory**:
   ```bash
   mkdir request-header-parser-microservice
   cd request-header-parser-microservice
   ```

2. **Initialize Node.js**:
   ```bash
   npm init -y
   ```

3. **Install Dependencies**:
   ```bash
   npm install express
   ```

### Step 2: Create the Backend

Create a file named `server.js` in the root directory:

```javascript
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route for handling request header parsing
app.get('/api/whoami', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const language = req.headers['accept-language'].split(',')[0];
    const software = req.headers['user-agent'];

    res.json({
        ipaddress: ip,
        language: language,
        software: software
    });
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 3: Create the Frontend

#### 3.1 HTML File
Create a file named `index.html` inside the `public` directory:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request Header Parser Microservice</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Request Header Parser Microservice</h1>
        <button id="requestButton">Get My Header Information</button>
        <div id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### 3.2 CSS File
Create a file named `styles.css` inside the `public` directory:

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.container {
    text-align: center;
}

button {
    padding: 10px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#result {
    margin-top: 20px;
    font-size: 18px;
}
```

#### 3.3 JavaScript File
Create a file named `script.js` inside the `public` directory:

```javascript
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
```

### Step 4: Run Your Application

1. **Start the Server**:
   ```bash
   node server.js
   ```

2. **Open Your Browser**:
   Navigate to `http://localhost:3000` to see your Request Header Parser Microservice.

### Testing Your Microservice
- Click the "Get My Header Information" button to see your IP address, language, and software displayed on the page.

### Conclusion
You have built a simple Request Header Parser Microservice using Node.js and Express. This application provides valuable information about the client's request headers in a structured format.

Feel free to expand this project further, such as adding error handling, improving the UI, or deploying it to a cloud service like Heroku or Vercel.

If you have any questions or need further assistance, feel free to ask!
