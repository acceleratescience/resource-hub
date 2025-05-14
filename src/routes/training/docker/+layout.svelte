<script lang="ts">
    import WorkshopSidebar from '$lib/components/WorkshopSidebar.svelte';
  
    const baseWorkshopPath = '/training/docker';
  
    // Define the sections for this specific workshop
    const workshopSections = [
      { title: 'Reproducibility', path: `${baseWorkshopPath}/reproducibility` },
      { title: 'Basics', path: `${baseWorkshopPath}/basics` },
      { title: 'Building', path: `${baseWorkshopPath}/building` },
      { title: 'Devcontainers', path: `${baseWorkshopPath}/devcontainers` },
      // Add more sections as you create them
    ];
  </script>


<div class="workshop-page-layout">
  <WorkshopSidebar sections={workshopSections} {baseWorkshopPath} />
  <div class="workshop-content-area">
    <slot />
  </div>
</div>

<style>
  .workshop-page-layout {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2.5rem;
    /* padding-top: 1rem; */ /* REMOVE or comment out this line */
  }

  .workshop-content-area {
    min-width: 0;
  }

  @media (max-width: 768px) {
    .workshop-page-layout {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>