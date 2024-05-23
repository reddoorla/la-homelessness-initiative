<script lang='ts'>
  import Panel from "$lib/components/Panel.svelte";
import { fly } from "svelte/transition";


    let frameOne = false;

</script>

<main class="w-screen h-screen fixed">
    {#if frameOne}
        <Panel bgColor="masthead-pink">
            
        </Panel>
    {/if}
</main>