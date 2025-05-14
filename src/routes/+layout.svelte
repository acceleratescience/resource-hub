<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
  </script>
  
  <Navbar />
  
  <main class="site-main-content">
    <slot />
  </main>
  
  <style>
    .site-main-content {
      width: 100%; /* Ensures it tries to take up available space */
      max-width: 1300px; /* << KEY: Set an overall maximum width for your content area. Adjust as you like (e.g., 1200px, 1400px, 1600px) */
      margin-left: auto; /* << KEY: Center the block */
      margin-right: auto; /* << KEY: Center the block */
      padding: 1rem 2rem; /* Adds some breathing room inside the content area, especially on smaller screens or when at max-width. Adjust Y padding as needed. */
      box-sizing: border-box; /* Ensures padding doesn't add to the max-width */
    }
  
    /* If you add a footer and want it styled: */
    /*
    footer {
      width: 100%;
      max-width: 1300px; // Same max-width if you want it aligned with main content
      margin: 2rem auto 0 auto; // Top margin, centered, no bottom margin
      padding: 2rem;
      box-sizing: border-box;
      text-align: center;
      color: #a0b0c0; // Adjust color for readability
      border-top: 1px solid rgba(59, 130, 246, 0.3); // Subtle top border
    }
    */
  </style>