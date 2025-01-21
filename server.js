const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'assets'))); // Serve static files from 'assets' folder
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// Home Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// About Page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Services Page
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

// Booking Page
app.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, 'booking.html'));
});

// Contact Page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle Booking Form Submission
app.post('/submit-booking', (req, res) => {
  const { name, phone, date } = req.body;
  if (!name || !phone || !date) {
    return res.status(400).send('कृपया सभी आवश्यक जानकारी प्रदान करें।');
  }
  // Save booking to database (dummy example)
  console.log('New Booking:', { name, phone, date });
  res.send('आपकी बुकिंग सफलतापूर्वक प्राप्त हो गई है। धन्यवाद!');
});

// Handle Contact Form Submission
app.post('/submit-contact', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).send('कृपया नाम और संदेश प्रदान करें।');
  }
  // Save contact message to database (dummy example)
  console.log('New Contact Message:', { name, message });
  res.send('आपका संदेश सफलतापूर्वक भेजा गया है। धन्यवाद!');
});

// 404 Page (if no route matches)
app.use((req, res) => {
  res.status(404).send('पृष्ठ नहीं मिला।');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});