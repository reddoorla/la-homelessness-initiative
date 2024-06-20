<script lang='ts'>

    import { bgColor } from "$lib/stores/colors";
    import { activeFrame } from '$lib/stores/activeFrame'
    export let horizontal = false;
    export let frame:number;

    let axis="y";

    if(horizontal)
        axis="x";
    


</script>

<div class="panel w-screen h-screen absolute transition-all duration-1000 top-0 left-0 bg-{$bgColor} {$$props.class || '' } {frame>$activeFrame ? "translate-"+axis+"-full" : ""} {frame<$activeFrame ? "-translate-"+axis+"-full" : ""}" >
    
        <slot/>
    
</div>