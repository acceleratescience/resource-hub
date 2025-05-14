<script lang="ts">
    // No new script logic needed for a pure CSS hover dropdown.
    // For accessibility or click-to-open, we'd add script.
  
    // Placeholder for workshop links. In a real app, this might come from a store or props if very dynamic.
    const trainingSubLinks = [
      { title: 'Docker Deep Dive', path: '/training/docker-deep-dive' },
      { title: 'Foundations of Dev', path: '/training/workshop1' }, // Assuming workshop1 is "Foundations"
      { title: 'Advanced SvelteKit', path: '/training/workshop2' },
      // Add more key workshops here or a "View All Workshops..." link
      { title: 'All Workshops', path: '/training' }
    ];
  </script>
  
  <nav class="navbar">
    <div class="nav-container">
      <a href="/" class="site-title">
        Accelerate Hub
      </a>
      <ul class="nav-links">
        <li class="nav-item dropdown-container">
          <a href="/training" class="nav-link main-link">Training</a>
          <div class="dropdown-menu">
            {#each trainingSubLinks as subLink (subLink.path)}
              <a href={subLink.path} class="dropdown-link">{subLink.title}</a>
            {/each}
          </div>
        </li>
        <li class="nav-item"><a href="/software" class="nav-link main-link">Software</a></li>
        <li class="nav-item"><a href="/community" class="nav-link main-link">Community</a></li>
      </ul>
    </div>
  </nav>
  
  <style>
    .navbar {
      background-color: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(8px);
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(59, 130, 246, 0.3);
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      box-sizing: border-box;
    }
  
    .nav-container {
      width: 100%;
      max-width: 1300px; /* Should match .site-main-content max-width */
      margin-left: auto;
      margin-right: auto;
      padding: 0 2rem; /* Should match .site-main-content horizontal padding */
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .site-title {
      font-size: 1.6rem;
      font-weight: bold;
      color: #e0e6f0;
      text-decoration: none;
      transition: color 0.2s ease;
    }
  
    .site-title:hover {
      color: #ffffff;
    }
  
    .nav-links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center; /* Align items vertically */
      gap: 0.5rem; /* Reduced gap slightly to accommodate dropdown spacing */
    }
  
    .nav-item {
      position: relative; /* Crucial for dropdown positioning */
    }
  
    .nav-link.main-link { /* Target only main navbar links for consistent styling */
      display: block; /* Make the link fill the li for better hover area */
      color: #b0c0d0;
      text-decoration: none;
      font-size: 1rem;
      padding: 0.75rem 1rem; /* Consistent padding for all main links */
      border-radius: 4px; /* Slight rounding for hover background */
      position: relative; /* For the ::after pseudo-element */
      transition: color 0.2s ease, background-color 0.2s ease;
    }
  
    .nav-link.main-link:hover {
      color: #ffffff;
      background-color: rgba(59, 130, 246, 0.1); /* Subtle background on hover */
    }
  
    /* Underline effect for main links (excluding dropdown trigger if desired, or style differently) */
    .nav-link.main-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 5px; /* Adjust position of underline */
      left: 50%;
      transform: translateX(-50%);
      background-color: #67e8f9;
      transition: width 0.3s ease;
    }

    /* 1. Highlight for direct hover/focus on ANY main link */
    .nav-link.main-link:hover,
    .nav-link.main-link:focus {
        color: #ffffff; /* Active text color */
        background-color: rgba(59, 130, 246, 0.1); /* Active background highlight */
    }

  /* 2. Ensure highlight REMAINS for the "Training" link (or any dropdown trigger)
     when its parent dropdown-container is hovered or has focus within */
  .dropdown-container:hover > .nav-link.main-link,
  .dropdown-container:focus-within > .nav-link.main-link {
    color: #ffffff; /* Keep active text color */
    background-color: rgba(59, 130, 246, 0.1); /* Keep active background highlight */
  }
  
    .nav-link.main-link:hover::after {
      width: calc(100% - 2rem); /* Make underline slightly less than full width (padding aware) */
    }
    
    /* Specific style for the dropdown trigger link if needed, or it can inherit .main-link */
    /* .dropdown-container > .nav-link.main-link {} */
  
    .nav-item:not(.dropdown-container) > .nav-link.main-link:hover::after,
    .nav-item:not(.dropdown-container) > .nav-link.main-link:focus::after,
    .dropdown-container:hover > .nav-link.main-link::after,
    .dropdown-container:focus-within > .nav-link.main-link::after {
        width: calc(100% - 2rem); /* Width of the underline, accounting for 1rem padding on each side of the link */
    }
  
    /* Dropdown Menu Styles */
    .dropdown-menu {
        /* display: none; REMOVE THIS */
        visibility: hidden; /* Hidden by default */
        opacity: 0;       /* Fully transparent */
        position: absolute;
        top: 100%; /* Position directly below the parent li's bottom edge, NO GAP */
        left: 0;
        background-color: rgba(25, 35, 55, 0.95);
        backdrop-filter: blur(8px);
        border-radius: 6px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        min-width: 220px;
        z-index: 1100;
        padding: 0.5rem 0;
        border: 1px solid rgba(59, 130, 246, 0.2);
        
        /* Add transitions */
        transition: opacity 0.2s ease-in-out, visibility 0s linear 0.2s;
        /* - opacity transitions over 0.2s
        - visibility changes instantly (0s) but is DELAYED by 0.2s when hiding.
            This means when you mouse out, opacity starts fading, but it remains 'visible' for 0.2s.
        */
    }

    .dropdown-container:hover .dropdown-menu,
    .dropdown-container:focus-within .dropdown-menu {
        /* display: block; REMOVE THIS */
        visibility: visible; /* Make it visible */
        opacity: 1;          /* Make it fully opaque */
        transition-delay: 0s, 0s; /* Remove any delay when showing, apply opacity transition immediately */
        /* Or more explicitly:
        transition: opacity 0.15s ease-in-out, visibility 0s linear 0s;
        */
    }

    .dropdown-link {
        display: block;
        padding: 0.6rem 1.2rem;
        color: #c0d0e0;
        text-decoration: none;
        font-size: 0.95rem;
        white-space: nowrap;
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    .dropdown-link:hover {
        background-color: rgba(59, 130, 246, 0.3);
        color: #ffffff;
    }
  
    /* Basic responsiveness for navbar (from previous) */
    @media (max-width: 700px) { /* Adjusted breakpoint for when nav items might wrap/get too crowded */
      .nav-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .nav-links {
        flex-direction: column; /* Stack main nav items */
        align-items: flex-start; /* Align stacked items to the left */
        width: 100%; /* Make nav links take full width */
        margin-top: 0.5rem;
        gap: 0.25rem;
      }
      .nav-item {
        width: 100%; /* Make list items take full width */
      }
      .nav-link.main-link {
        padding: 0.75rem; /* Adjust padding for stacked view */
        width: 100%;
        box-sizing: border-box;
      }
      .nav-link.main-link::after { /* Adjust or remove underline for stacked view if it looks odd */
          bottom: 2px;
          width: calc(100% - 1.5rem);
      }
  
      .dropdown-menu {
          /* Adjust dropdown position for stacked nav if needed */
          /* For instance, make it full width or position differently */
          left: 0;
          right: 0; /* Allow it to span width of parent */
          min-width: auto; /* Reset min-width */
          top: 100%; /* Position below the stacked Training link */
      }
    }
  </style>