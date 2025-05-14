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
      margin-left: auto;
      margin-right: auto;
      margin-top: 0px;
      margin-bottom: 2rem;
      padding: 1.5rem 2rem;
    }
  
    /* Headings */
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
  
    /* Paragraphs */
    :global(.markdown-content-body p) {
      margin-bottom: 1.2em;
      color: #c8d6e5;
    }
  
    /* Links */
    :global(.markdown-content-body a) {
      color: #79b8ff;
      text-decoration: none;
    }
    :global(.markdown-content-body a:hover) {
      text-decoration: underline;
    }
  
    /* Lists */
    :global(.markdown-content-body ul),
    :global(.markdown-content-body ol) {
      margin-bottom: 1.2em;
      padding-left: 1.8em;
    }
    :global(.markdown-content-body li) {
      margin-bottom: 0.5em;
    }
  
    /* Blockquotes */
    :global(.markdown-content-body blockquote) {
      border-left: 4px solid rgba(59, 130, 246, 0.5);
      padding-left: 1em;
      margin-left: 0;
      margin-right: 0;
      font-style: italic;
      color: #a0b0c0;
    }
  
    /* Images */
    :global(.markdown-content-body img) {
      display: block;
      max-width: 100% !important;
      width: auto !important;
      height: auto;
      margin: 1em auto;
      border-radius: 6px;
      object-fit: contain;
      box-sizing: border-box;
    }
  
    /* --- Code Block Styling --- */
  
    /* Base style for all <pre> blocks */
    :global(.markdown-content-body pre) {
      background-color: rgba(10, 20, 30, 0.85);
      border: 1px solid rgba(59, 130, 246, 0.25);
      border-radius: 6px;
      padding: 1.2em 1.5em;
      overflow-x: auto;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
      margin: 1.8em 0;
      font-size: 0.85rem;
      line-height: 1.4;
    }
  
    /* Shared code styling */
    :global(.markdown-content-body pre code) {
      font-family: 'Fira Code', 'Operator Mono', 'Consolas', 'Menlo', 'Monaco', 'Courier New', monospace;
      background: none;
      color: inherit;
      display: block;
      white-space: pre-wrap;
      word-break: break-word;
    }
  
    /* Highlighted blocks — restore more generous spacing and font */
    :global(.markdown-content-body pre > code[class*="language-"]) {
      font-size: 0.9rem;
      line-height: 1.65;
    }
  
    /* Jupyter-style output blocks with no class */
    :global(.markdown-content-body pre > code:not([class])),
    :global(.markdown-content-body pre > code[class=""]),
    :global(.markdown-content-body pre > code.language-text) {
      font-size: 0.85rem;
      line-height: 1.3;
    }
    /* 🔧 Tighten all pre/code blocks by default */
:global(.markdown-content-body pre code) {
  line-height: 1.3;
  font-size: 0.85rem;
}

/* 🧠 Loosen only Prism-highlighted code blocks */
:global(.markdown-content-body pre code[class*="language-"]),
:global(.markdown-content-body pre code span.token) {
  line-height: 1.65;
  font-size: 0.9rem;
}
/* 🔒 Force tight spacing on all code blocks */
:global(.markdown-content-body pre > code) {
  line-height: 1.3 !important;
  font-size: 0.85rem !important;
  display: block;
  white-space: pre-wrap;
  word-break: break-word;
}

/* 🧹 Loosen spacing only if Prism highlighting is applied */
:global(.markdown-content-body pre > code span.token) {
  line-height: 1.65 !important;
  font-size: 0.9rem !important;
}

  </style>
  