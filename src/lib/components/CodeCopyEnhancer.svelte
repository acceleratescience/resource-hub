<script lang="ts">
    import { onMount } from 'svelte';
  
    onMount(() => {
      const blocks = document.querySelectorAll('.markdown-content-body pre');
  
      blocks.forEach((block) => {
        if (block.querySelector('.copy-button')) return;
        

  
        const button = document.createElement('button');
        button.innerHTML = 'Copy'; // or replace with icon + text
        button.className = 'copy-button';
  
        button.addEventListener('click', () => {
          const code = block.querySelector('code');
          if (!code) return;
  
          navigator.clipboard.writeText(code.innerText).then(() => {
            button.innerHTML = '✅ Copied!';
            setTimeout(() => {
              button.innerHTML = 'Copy';
            }, 1500);
          });
        });
  
        if (block instanceof HTMLElement) {
            block.style.position = 'relative';
            }
        block.appendChild(button);
      });
    });
  </script>
  
  <style>
    :global(.copy-button) {
      position: absolute;
      top: 0.6rem;
      right: 0.7rem;
      background-color: rgba(59, 130, 246, 0.15);
      color: #cbd5e1;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 4px;
      cursor: pointer;
      z-index: 10;
      transition: background-color 0.2s, border-color 0.2s;
      backdrop-filter: blur(4px);
    }
  
    :global(.copy-button:hover) {
      background-color: rgba(59, 130, 246, 0.25);
      border-color: rgba(59, 130, 246, 0.5);
      color: white;
    }
  
    :global(.markdown-content-body pre) {
      position: relative; /* Ensure button placement works */
    }
  </style>
  