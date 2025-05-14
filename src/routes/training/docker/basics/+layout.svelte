<script lang="ts">
    import 'prismjs/themes/prism-okaidia.css';
    import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
    import CodeCopyEnhancer from '$lib/components/CodeCopyEnhancer.svelte';
  </script>
  
  <main class="markdown-content-body">
    <CodeCopyEnhancer />
    <slot />
  </main>
  
  <style>
    .markdown-content-body {
      background-color: rgba(25, 35, 50, 0.6);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 8px;
      color: #bac8d8;
      line-height: 1.7;
      max-width: 800px;
      
      /* Alignment and Spacing as per your last provided version */
      margin-left: auto;  /* Center horizontally */
      margin-right: auto; /* Center horizontally */
      margin-top: 0px;    /* As per your last provided version */
      margin-bottom: 2rem; /* Keep some bottom margin */
  
      padding: 1.5rem 2rem; /* Internal padding */
    }
  
    /* Global styles for Markdown-generated HTML elements */
    :global(.markdown-content-body h1),
    :global(.markdown-content-body h2),
    :global(.markdown-content-body h3),
    :global(.markdown-content-body h4) {
        color: #ffffff;
        margin-top: 1.5em;
        margin-bottom: 0.75em;
    }
    :global(.markdown-content-body h1) { font-size: 2.2em; }
    :global(.markdown-content-body h2) { font-size: 1.8em; }
    :global(.markdown-content-body h3) { font-size: 1.5em; }
  
    :global(.markdown-content-body p) {
        margin-bottom: 1.2em;
        color: #c8d6e5;
    }
  
    :global(.markdown-content-body a) {
        color: #79b8ff;
        text-decoration: none;
    }
    :global(.markdown-content-body a:hover) {
        text-decoration: underline;
    }
  
    :global(.markdown-content-body ul),
    :global(.markdown-content-body ol) {
        margin-bottom: 1.2em;
        padding-left: 1.8em;
    }
  
    :global(.markdown-content-body li) {
        margin-bottom: 0.5em;
    }
  
    :global(.markdown-content-body blockquote) {
        border-left: 4px solid rgba(59, 130, 246, 0.5);
        padding-left: 1em;
        margin-left: 0;
        margin-right: 0;
        font-style: italic;
        color: #a0b0c0;
    }
  
    /* Styles for <pre> and <code> blocks for syntax highlighting appearance */
    :global(.markdown-content-body pre) {
        background-color: rgba(10, 20, 30, 0.85);
        border: 1px solid rgba(59, 130, 246, 0.25);
        border-radius: 6px;
        padding: 1.2em 1.5em;
        overflow-x: auto;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
        margin: 1.8em 0;
    }
    
  
    :global(.markdown-content-body pre code) {
        font-family: 'Fira Code', 'Operator Mono', 'Consolas', 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.65;
        background: none; 
        color: inherit; /* Base color; Prism theme spans will provide specific token colors */
    }
  </style>