<script lang="ts">
  // Minimal animate-in demo for the conformance audit. The audit disables
  // transitions before running axe, so the resting state is asserted.
  let shown = $state(false);
</script>

<svelte:head>
  <title>animate-in demo — dev</title>
</svelte:head>

<main class="bg-white text-black mx-auto max-w-2xl px-6 py-12">
  <h1 class="text-3xl font-bold">Animate-in demo</h1>
  <p class="mt-2">Reveal-on-toggle content with a CSS transition.</p>

  <button type="button" class="mt-4 border border-black px-3 py-1" onclick={() => (shown = !shown)}>
    {shown ? "Hide" : "Reveal"}
  </button>

  <section aria-labelledby="reveal-h" class="mt-8">
    <h2 id="reveal-h" class="text-xl font-semibold">Reveal target</h2>
    <p class="mt-2 transition-opacity duration-700 {shown ? 'opacity-100' : 'opacity-0'}">
      Revealed paragraph with descriptive text and sufficient contrast.
    </p>
  </section>
</main>
