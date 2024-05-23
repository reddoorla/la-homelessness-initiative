<script lang='ts'>
    import { fly } from "svelte/transition";
    import { bgColor } from "$lib/stores/colors";
    export let horizontal = false;

    let flyIn;
    let flyOut;

    if(horizontal){
        flyIn = {x:'100vw', opacity:0.7}
        flyOut = {x:-'100vw', opacity:0.7}
    } else{
        flyIn = {y:'100vh', opacity:0.7}
        flyOut = {y:-'100vh', opacity:0.7}
    }

</script>

<div class="w-screen h-screen relative top-0 left-0 bg-{$bgColor} {$$props.class || '' }" in:fly={flyIn} out:fly={flyOut}>
    <slot/>
</div>