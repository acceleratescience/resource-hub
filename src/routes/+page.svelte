<script lang="ts">
    // Homepage specific logic (if any) can go here
  </script>
  
  <div class="hero-section">
    <h1>Accelerate Resource Hub</h1>
    <p>Welcome to Accelerate Science's Resource Hub for researchers.</p>

        <p>Artificial Intelligence has become an indispensable tool for researchers across disciplines. Accelerate Science’s programme offers tailored support to unblock these bottlenecks. This resource hub is a place for you to find the help and support you need.</p>
  </div>
  
  <div class="card-container">
    <a href="/training" class="card">
      <h2>Training</h2>
      <p>Explore our comprehensive workshops, learning materials, and skill development resources.</p>
    </a>
  
    <a href="/software" class="card">
      <h2>Software</h2>
      <p>Find information on supported software, tools, and best practices for your projects.</p>
    </a>
  
    <a href="/community" class="card">
      <h2>Community</h2>
      <p>Connect with peers, join discussions, and find out about community events.</p>
    </a>
  </div>
  
  <style>
    .hero-section {
      text-align: center;
      padding: 3rem 1rem; /* Increased padding for more impact */
      margin-bottom: 3rem; /* More space before cards */
      /* The text color will be inherited from body, or you can override */
    }
  
    .hero-section h1 {
      font-size: 3rem; /* Slightly larger */
      margin-bottom: 1rem;
      color: #ffffff; /* Bright white for the main title */
      text-shadow: 0 0 8px rgba(0, 183, 255, 0.5); /* Optional: subtle glow matching background highlights */
    }
  
    .hero-section p {
      font-size: 1.3rem; /* Slightly larger */
      color: #c0d0e0; /* A lighter, softer shade than default body text */
      max-width: 700px; /* Prevent it from becoming too wide */
      margin-left: auto;
      margin-right: auto;
    }
  
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto 2rem auto;
    }
  
    .card {
      /* For cards, consider a semi-transparent background or a solid dark that contrasts the main bg */
      /* Option 1: Semi-transparent dark background */
      background-color: rgba(20, 30, 40, 0.75); /* Dark, semi-transparent slate blue/grey */
      backdrop-filter: blur(5px); /* Optional: frosted glass effect (check browser support) */
      
      /* Option 2: Solid, slightly different dark color (if blur isn't desired/supported) */
      /* background-color: #1f2937; /* A dark cool grey */
  
      color: #d0d8e0; /* Default text color for card paragraph */
      border: 1px solid #3b82f680; /* Border using a semi-transparent brighter blue from your image */
      border-radius: 12px; /* More rounded */
      padding: 2rem;
      width: clamp(280px, 30%, 300px);
      text-decoration: none;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35); /* Enhanced shadow */
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      display: flex;
      flex-direction: column;
    }
  
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      border-color: #60a5fa; /* Brighter blue border on hover */
    }
  
    .card h2 {
      margin-top: 0;
      font-size: 1.9rem; /* Slightly larger */
      /* Pick a bright color that pops, possibly matching a highlight in your image */
      color: #67e8f9; /* A bright cyan, like the highlights in your image */
      margin-bottom: 1rem;
    }
  
    .card p {
      font-size: 1rem;
      line-height: 1.6;
      flex-grow: 1;
      color: #b0c0d0; /* Slightly lighter than default card text for differentiation if needed */
    }
  
    /* Responsive adjustments (can remain similar) */
    @media (max-width: 960px) {
      .card {
         width: clamp(280px, 45%, 400px);
      }
    }
  
    @media (max-width: 640px) {
      .card-container {
        flex-direction: column;
        align-items: center;
      }
      .card {
        width: clamp(280px, 85%, 500px);
      }
    }
  </style>