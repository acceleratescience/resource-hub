<script lang="ts">
  import { page } from '$app/stores'; // To get current path for active link styling

  export let sections: Array<{ title: string; path: string }> = [];
  export let baseWorkshopPath: string = ''; // e.g., /training/docker-deep-dive
</script>

<aside class="workshop-sidebar">
  <nav aria-label="Workshop sections">
    <ul>
      <li>
        <a
          href={baseWorkshopPath}
          class:active={$page.url.pathname === baseWorkshopPath}
        >
          Workshop Overview
        </a>
      </li>
      {#each sections as section (section.path)}
        <li>
          <a
            href={section.path}
            class:active={$page.url.pathname === section.path || $page.url.pathname.startsWith(section.path + '/') }
          >
            {section.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>

<style>
  .workshop-sidebar {
    background-color: rgba(25, 35, 50, 0.6);
    backdrop-filter: blur(5px);
    padding: 1rem 1rem;
    border-radius: 8px;
    min-width: 200px;
    border: 1px solid rgba(59, 130, 246, 0.2);

    /* --- Make the sidebar sticky --- */
    position: sticky;
    top: 60px; /* Adjust this value based on your layout (e.g., if you have a fixed header) */
    align-self: start; /* Ensures it sticks to the start of its flex/grid container if applicable */

    /* --- Handle potentially long sidebar content --- */
    /* Set a max-height to prevent the sidebar from becoming taller than the viewport */
    /* 100vh is viewport height. 40px accounts for top (20px) and some bottom margin (20px). */
    max-height: calc(100vh - 40px); 
    overflow-y: auto; /* Allows scrolling within the sidebar if content exceeds max-height */

    /* Remove or comment out height: fit-content; as max-height now controls its vertical size */
    /* height: fit-content; */ 
  }

  .workshop-sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .workshop-sidebar li a {
    display: block;
    padding: 0.5rem 0.5rem;
    color: #bac8d8;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 0.25rem;
    transition: background-color 0.2s ease, color 0.2s ease;
    font-size: 0.8rem;
  }

  .workshop-sidebar li a:hover {
    background-color: rgba(59, 130, 246, 0.2);
    color: #ffffff;
  }

  .workshop-sidebar li a.active {
    background-color: rgba(59, 130, 246, 0.4);
    color: #ffffff;
    font-weight: 600;
  }
</style>