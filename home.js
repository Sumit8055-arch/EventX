To create a homepage similar to [V3 Events](https://www.v3events.in/), which is a premium event management company specializing in weddings, corporate events, and destination celebrations, we can design a modern, responsive layout using HTML, CSS, and JavaScript. Below is a simplified version of their homepage structure, focusing on key sections like the header, hero section, services overview, and footer.

---

### 🖥️ HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>V3 Events - Event Management</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header>
    <div class="container">
      <h1 class="logo">V3 Events</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-content">
      <h2>Your Dream Event, Our Expertise</h2>
      <p>Crafting unforgettable experiences with elegance and precision.</p>
      <a href="#contact" class="cta-btn">Get in Touch</a>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="services">
    <div class="container">
      <h3>Our Services</h3>
      <div class="service-cards">
        <div class="card">
          <h4>Weddings</h4>
          <p>Destination and luxury weddings tailored to your vision.</p>
        </div>
        <div class="card">
          <h4>Corporate Events</h4>
          <p>Professional event planning for seminars, conferences, and more.</p>
        </div>
        <div class="card">
          <h4>Entertainment</h4>
          <p>Celebrity management, fashion shows, and live performances.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery" class="gallery">
    <div class="container">
      <h3>Event Highlights</h3>
      <div class="gallery-grid">
        <!-- Example images, replace with actual event images -->
        <img src="event1.jpg" alt="Event 1">
        <img src="event2.jpg" alt="Event 2">
        <img src="event3.jpg" alt="Event 3">
        <img src="event4.jpg" alt="Event 4">
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="contact">
    <div class="container">
      <p>&copy; 2025 V3 Events & Entertainments Pvt. Ltd.</p>
      <p>Email: info@v3events.in | Phone: +91-8506000001</p>
    </div>
  </footer>

  <script src="scripts.js"></script>
</body>
</html>
```

---

### 🎨 CSS Styling (styles.css)

```css
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

/* Header */
header {
  background-color: #2d89ef;
  color: white;
  padding: 20px 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  font-size: 1.8rem;
  font-weight: bold;
}

header nav ul {
  list-style: none;
  display: flex;
}

header nav ul li {
  margin-left: 20px;
}

header nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

header nav ul li a:hover {
  color: #ffd700;
}

/* Hero Section */
.hero {
  background: url('hero-image.jpg') no-repeat center center/cover;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 600px;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.cta-btn {
  background-color: #ffd700;
  color: #2d89ef;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-btn:hover {
  background-color: #ffcc00;
}

/* Services Section */
.services {
  padding: 40px 0;
  background-color: #ffffff;
}

.services .container {
  text-align: center;
}

.services h3 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.service-cards {
  display: flex;
  justify-content: space-around;
}

.card {
  background-color: #f8f8f8;
  padding: 20px;
  width: 30%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  color: #555;
}

/* Gallery Section */
.gallery {
  padding: 40px 0;
  background-color: #f4f4f4;
}

.gallery .container {
  text-align: center;
}

.gallery h3 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.gallery-grid img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
  background-color: #2d89ef;
  color: white;
  padding: 20px 0;
  text-align: center;
}

footer p {
  font-size: 1rem;
}
```

---

### 📜 JavaScript for Smooth

