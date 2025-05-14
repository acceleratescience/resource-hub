<script lang="ts">
    import { onMount, tick } from 'svelte';
    import { marked } from 'marked';
    import Prism from 'prismjs';
    import CodeCopyEnhancer from '$lib/components/CodeCopyEnhancer.svelte';
  
    import 'prismjs/themes/prism-okaidia.css';
    import 'prismjs/components/prism-python';
    import 'prismjs/components/prism-bash';
    import 'prismjs/components/prism-javascript';
  
    export let markdown: string;
  
    let html = '';
    let showCopyEnhancer = false;
  
    onMount(async () => {
      // Strip blank lines from inside code blocks
      const cleanedMarkdown = markdown.replace(/```([\s\S]*?)```/g, (match) =>
        match.replace(/\n\s*\n/g, '\n')
      );
  
      html = marked.parse(cleanedMarkdown);
      await tick();
      Prism.highlightAll();
      await tick();
      showCopyEnhancer = true;
    });
  </script>
  
  <main class="markdown-content-body">
    {@html html}
    {#if showCopyEnhancer}
      <CodeCopyEnhancer />
    {/if}
  </main>
  