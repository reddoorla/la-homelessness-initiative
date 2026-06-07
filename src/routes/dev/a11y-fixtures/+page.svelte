<script lang="ts">
  // Minimal, self-contained a11y fixtures for the conformance audit.
  // Dark text on white = safe contrast; every control is labelled.
  let open = $state(false);
  let email = $state("");
</script>

<svelte:head>
  <title>a11y fixtures — dev</title>
</svelte:head>

<main class="bg-white text-black mx-auto max-w-2xl px-6 py-12">
  <h1 class="text-3xl font-bold">Accessibility fixtures</h1>
  <p class="mt-2">Static patterns exercised by the conformance audit.</p>

  <section aria-labelledby="disclosure-h" class="mt-8">
    <h2 id="disclosure-h" class="text-xl font-semibold">Disclosure</h2>
    <button
      type="button"
      class="mt-2 underline"
      aria-expanded={open}
      aria-controls="disclosure-panel"
      onclick={() => (open = !open)}
    >
      {open ? "Hide details" : "Show details"}
    </button>
    {#if open}
      <p id="disclosure-panel" class="mt-2">Disclosed content.</p>
    {/if}
  </section>

  <section aria-labelledby="form-h" class="mt-8">
    <h2 id="form-h" class="text-xl font-semibold">Form</h2>
    <form class="mt-2 flex flex-col gap-2" onsubmit={(e) => e.preventDefault()}>
      <label for="email-input">Email address</label>
      <input
        id="email-input"
        type="email"
        class="border border-black px-2 py-1"
        bind:value={email}
      />
      <button type="submit" class="mt-2 border border-black px-3 py-1 w-fit">Submit</button>
    </form>
  </section>

  <section aria-labelledby="nav-h" class="mt-8">
    <h2 id="nav-h" class="text-xl font-semibold">Link</h2>
    <a class="underline" href="/">Back to home</a>
  </section>
</main>
