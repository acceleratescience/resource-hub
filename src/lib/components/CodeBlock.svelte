<script lang="ts">
  // ... (your existing script with line number generation and copy logic) ...
  export let code: string = '';
  export let language: string | null = null;
  export let filename: string | null = null;

  const displayLanguage = language && language.toLowerCase() !== 'plaintext' ? language.toUpperCase() : null;

  let lineNumbersText = '';
  $: {
    const numLines = code.trimEnd().split('\n').length;
    lineNumbersText = Array.from({ length: numLines }, (_, i) => i + 1).join('\n');
  }

  const SVG_COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`;
  const SVG_CHECK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>`;

  let currentCopyIcon = SVG_COPY_ICON;
  let copyButtonTitle = 'Copy code';

  async function handleCopyCode() {
    try {
      await navigator.clipboard.writeText(code.trim());
      currentCopyIcon = SVG_CHECK_ICON;
      copyButtonTitle = 'Copied!';
    } catch (err) {
      console.error('Failed to copy code:', err);
      copyButtonTitle = 'Failed to copy';
    } finally {
      setTimeout(() => {
        currentCopyIcon = SVG_COPY_ICON;
        copyButtonTitle = 'Copy code';
      }, 2000);
    }
  }
</script>

<div class="code-block-wrapper">
  {#if filename}
    <div class="code-block-filename">{filename}</div>
  {/if}
  <div class="code-block-outer-container {filename ? 'with-filename' : ''}">
    <button class="copy-button" on:click={handleCopyCode} title={copyButtonTitle} aria-label="Copy code to clipboard">
      {@html currentCopyIcon}
    </button>
    <div class="code-block-main-content">
      <pre class="line-numbers" aria-hidden="true">{lineNumbersText}</pre>
      <pre class="code-content language-{language || 'plaintext'}" data-language={displayLanguage}><code>{code.trimEnd()}</code></pre>
    </div>
  </div>
</div>

<style>
  .code-block-wrapper {
    margin: 1.8em 0;
    position: relative;
  }

  .code-block-filename {
    background-color: rgba(40, 50, 70, 0.85);
    color: #b0c0d0;
    padding: 0.4em 0.9em;
    font-size: 0.8rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid rgba(59, 130, 246, 0.15);
    border-bottom: none;
    display: inline-block;
    font-family: Arial, sans-serif;
    margin-bottom: -1px;
    position: relative;
    z-index: 1;
  }

  .code-block-outer-container {
    background-color: rgba(10, 20, 30, 0.85); /* Base background for the code area */
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 6px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;
  }

  .code-block-outer-container.with-filename {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .copy-button {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    background-color: rgba(70, 80, 100, 0.7);
    color: #e0e8f0;
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 4px;
    padding: 0.4em;
    cursor: pointer;
    z-index: 10;
    opacity: 0.6;
    transition: opacity 0.2s ease, background-color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .copy-button:hover {
    opacity: 1;
    background-color: rgba(59, 130, 246, 0.3);
  }

  .copy-button svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  .code-block-main-content {
    display: flex;
    overflow-x: auto; /* Horizontal scroll for the combined line numbers + code */
  }

  /* Common font settings for alignment */
  .line-numbers,
  .code-content code { /* Apply to the <code> tag as it directly holds the text */
    font-family: 'Fira Code', 'Operator Mono', 'Consolas', 'Menlo', 'Monaco', 'Courier New', monospace; /* IDENTICAL FONT STACK */
    font-size: 0.9rem;   /* IDENTICAL FONT SIZE */
    line-height: 1.65; /* IDENTICAL LINE HEIGHT */
    white-space: pre;    /* Keep newlines and spaces */
    display: block;      /* Ensure block behavior for consistent line rendering */
  }

  .line-numbers {
    color: #707f8f;
    user-select: none;
    text-align: right;
    padding: 1.2em 0.8em 1.2em 1.2em; /* T R B L */
    background-color: rgba(15, 25, 40, 0.3);
    border-right: 1px solid rgba(59, 130, 246, 0.1);
    margin: 0;
    flex-shrink: 0; /* Prevent shrinking */
    /* The 'display: block' is inherited from the common rule above if not overridden by 'pre' specific display.
       Since it's a <pre> tag, white-space: pre handles line breaks internally. */
  }

  .code-content { /* This is the <pre> tag wrapping the <code> */
    flex-grow: 1;
    background: none; /* Background is on .code-block-outer-container or .line-numbers */
    padding: 0; /* Padding will be on the inner <code> or managed carefully */
    margin: 0;
    min-width: 0;
    position: relative; /* For language indicator */
    /* white-space: pre; is inherited by <code> but good to be explicit on code container */
    /* The display:flex child (this pre) should not need display:block itself */
  }
  
  /* The <code> tag now specifically gets the padding and inherits font settings */
  .code-content code {
    padding: 1.2em 1.5em 1.2em 1.2em; /* T R B L - this matches line-numbers top/bottom */
    color: #c8d6e5; /* Code text color */
    /* Other font properties are inherited from the common rule */
  }


  .code-content[data-language]::after {
    content: attr(data-language);
    position: absolute;
    top: 0.5em;
    right: 3.5em;
    background-color: rgba(59, 130, 246, 0.35);
    color: #ffffff;
    font-size: 0.7em;
    padding: 0.25em 0.6em;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.9;
    z-index: 5;
  }

  .code-content:not([data-language])::after,
  .code-content[data-language=""]::after {
    content: none;
  }
</style>