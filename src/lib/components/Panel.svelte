<script lang='ts'>
    import { fly } from "svelte/transition";
    export let bgColor = "transparent";

</script>

<div class="w-screen h-screen relative bg-{bgColor}" in:fly={{y:100}} out:fly={{y:-100}}>
    <slot/>
</div>