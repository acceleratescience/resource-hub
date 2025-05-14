<script lang="ts">
    // Define workshop data - easy to expand later
    const workshops = [
      {
        id: 'docker',
        title: 'Docker for Science',
        description: 'Essential concepts and tools for today\'s software development landscape.',
        link: '/training/docker',
      },
      {
        id: 'handson-llms',
        title: 'Hands-on with LLMs',
        description: 'Master advanced SvelteKit features for building robust web applications.',
        link: '/training/handson-llms',
      },
      {
        id: 'packaging',
        title: 'EPackaging and Publishing in Python',
        description: 'Implement automated build, test, and deployment workflows.',
        link: '/training/packaging',
      }
    ];
  </script>
  
  <div class="training-page-wrapper">
    <div class="hero-section">
      <h1>Training Hub</h1>
      <p>Welcome! Browse our workshops designed to enhance your skills and knowledge.</p>
    </div>
  
    <div class="card-container">
      {#each workshops as workshop (workshop.id)}
        <a href={workshop.link} class="card">
          <div class="card-content">
            <h2>{workshop.title}</h2>
            <p>{workshop.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
  
  <style>
    /* training-page-wrapper provides an optional overall wrapper if needed, but styling might be minimal */
    .training-page-wrapper {
      width: 100%;
    }
  
    /* Re-use hero-section styles from homepage for consistency */
    .hero-section {
      text-align: center;
      padding: 2rem 1rem; /* Or 3rem 1rem if that's what homepage uses */
      margin-bottom: 2.5rem; /* Or 3rem */
    }
  
    .hero-section h1 {
      font-size: 2.8rem; /* Or 3rem, match homepage */
      margin-bottom: 1rem;
      color: #ffffff;
      text-shadow: 0 0 8px rgba(0, 183, 255, 0.5);
    }
  
    .hero-section p {
      font-size: 1.2rem; /* Or 1.3rem, match homepage */
      color: #c0d0e0;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  
    /* Card container and card styles, adapted from homepage for consistency */
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center; /* Center cards in the container */
      gap: 2rem; /* Space between cards */
      padding: 0 1rem; /* Horizontal padding if cards might touch edges of .site-main-content */
      margin-bottom: 2rem;
    }
  
    .card {
      background-color: rgba(20, 30, 40, 0.75); /* Consistent with homepage cards */
      backdrop-filter: blur(5px);
      color: #d0d8e0;
      border: 1px solid #3b82f680;
      border-radius: 12px;
      /* padding is handled by card-content now if using an image */
      width: clamp(300px, calc(33.333% - 2rem * 2/3), 380px); /* Adjust for 3 cards, considering gap */
      text-decoration: none;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      display: flex;
      flex-direction: column;
      overflow: hidden; /* If using card images that might poke out */
    }
    
    /* Adjust width for 2 cards per row on medium screens */
    @media (max-width: 1023px) and (min-width: 641px) {
      .card {
        width: clamp(300px, calc(50% - 1rem), 420px);
      }
    }
    /* Adjust for 1 card per row on small screens */
     @media (max-width: 640px) {
      .card-container {
        padding: 0; /* Full width cards might not need container padding */
      }
      .card {
        width: clamp(280px, 90%, 500px); /* Allow cards to be wider */
      }
    }
  
  
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      border-color: #60a5fa;
    }
  
    .card-image { /* Optional style for workshop card images */
      width: 100%;
      height: 180px; /* Or your desired height */
      object-fit: cover; /* Crop image to fit */
      /* border-bottom: 1px solid #3b82f680; */ /* Optional separator */
    }
  
    .card-content {
      padding: 1.5rem 2rem; /* Padding for text content */
      display: flex;
      flex-direction: column;
      flex-grow: 1; /* Allows content to take up space */
    }
  
    .card h2 {
      margin-top: 0;
      font-size: 1.5rem; /* Slightly adjusted for workshop cards */
      color: #67e8f9; /* Consistent heading color */
      margin-bottom: 0.75rem;
    }
  
    .card p {
      font-size: 0.9rem; /* Slightly adjusted for workshop card descriptions */
      line-height: 1.5;
      color: #b0c0d0; /* Consistent text color */
      flex-grow: 1; /* Pushes 'learn more' to bottom */
      margin-bottom: 1rem;
    }
  
    .learn-more {
      display: inline-block;
      font-weight: bold;
      color: #87ceeb;
      margin-top: auto; /* Pushes it to the bottom of the card content */
      align-self: flex-start; /* Aligns to the left */
      padding-top: 0.5rem; /* Some space above */
      transition: color 0.2s ease;
    }
  
    .card:hover .learn-more {
      color: #a7d8ef;
    }
  </style>