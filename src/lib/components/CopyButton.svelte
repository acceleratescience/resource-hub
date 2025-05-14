<script lang="ts">
    import { onMount } from 'svelte';
  
    export let codeText: string; // The code to be copied, passed as a prop
  
    let buttonText = 'Copy';
    let copyIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    `;
    let successIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
    let currentIcon = copyIcon;
  
    async function copyToClipboard() {
      if (!navigator.clipboard) {
        // Fallback for older browsers (less common now)
        try {
          const textArea = document.createElement('textarea');
          textArea.value = codeText;
          textArea.style.position = 'fixed'; // Avoid scrolling to bottom
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          buttonText = 'Copied!';
          currentIcon = successIcon;
        } catch (err) {
          buttonText = 'Failed';
          console.error('Fallback: Oops, unable to copy', err);
        }
      } else {
        try {
          await navigator.clipboard.writeText(codeText);
          buttonText = 'Copied!';
          currentIcon = successIcon;
        } catch (err) {
          buttonText = 'Failed';
          console.error('Async: Could not copy text: ', err);
        }
      }
  
      setTimeout(() => {
        buttonText = 'Copy';
        currentIcon = copyIcon;
      }, 2000); // Reset button text after 2 seconds
    }
  </script>
  
  <button on:click={copyToClipboard} title="Copy code to clipboard" class="copy-code-button">
    {@html currentIcon}
    <span class="button-text">{buttonText}</span>
  </button>
  
  <style>
    .copy-code-button {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      background-color: rgba(75, 85, 99, 0.7); /* Tailwind gray-600 with opacity */
      color: #e5e7eb; /* Tailwind gray-200 */
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 0.375rem; /* Tailwind rounded-md */
      padding: 0.3rem 0.6rem;
      font-size: 0.75rem; /* Tailwind text-xs */
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      opacity: 0.7; /* Initially less visible */
      transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
    }
  
    :global(pre:hover) .copy-code-button, /* Show on pre hover */
    .copy-code-button:hover,
    .copy-code-button:focus {
      opacity: 1; /* Fully visible on hover/focus */
      background-color: rgba(59, 130, 246, 0.6); /* Brighter on hover */
    }
  
    .copy-code-button svg {
      stroke: currentColor;
    }
  
    .button-text {
      line-height: 1;
    }
  </style>