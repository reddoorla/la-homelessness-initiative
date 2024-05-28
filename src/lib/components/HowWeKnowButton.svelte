<script lang='ts'>
    import asterisk from '$lib/assets/icons/asterisk.svg'
    import buttonArrow from '$lib/assets/icons/defaultButtonArrow.svg'
  import { onMount } from 'svelte';


    export let text="";
    export let reportLink:string;


    let infoBox:HTMLElement;

    let isOpen = false;
    let isHovered = false;

    let reservedTextHeight = 0;

    onMount(()=>{
        reservedTextHeight=infoBox.getBoundingClientRect().height;
    })

</script>

<style>
    @keyframes boop {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-15deg);
		}
		40% {
			transform: rotate(15deg);
		}
		60% {
			transform: rotate(-7deg);
		}
		80% {
			transform: rotate(7deg);
		}
		90% {
			transform: rotate(-3deg);
		}
		95% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	.boop {
		animation: 1s boop forwards running;
	}
</style>

<div class="w-[400px] absolute bottom-4 left-32 transition-all" bind:this={infoBox}>
    <button class="absolute z-20 transition-all duration-500 left-5 {isHovered ? "boop brightness-125":""}" style="top: {isOpen ? "-32":reservedTextHeight-64}px" on:click={()=>isOpen=!isOpen} on:mouseover={()=>isHovered=true} on:focus={()=>isHovered=true} on:mouseout={()=>isHovered=false} on:blur={()=>isHovered=false}><img src={asterisk} alt="asterisk"/></button>
    <button class="absolute transition-all bottom-7 left-20 text-light-blue pointer-events-auto duration-500 {isHovered ? "brightness-125":"" } {isOpen ? "-bottom-[100%] opacity-0":"bottom-4"}" on:click={()=>isOpen=!isOpen} on:mouseover={()=>isHovered=true} on:focus={()=>isHovered=true} on:mouseout={()=>isHovered=false} on:blur={()=>isHovered=false} >HOW WE KNOW</button>

    <div class="w-full rounded-lg bg-[#1A52E3] p-5 transition-opacity duration-500 {isOpen ? "opacity-100 delay-200":"opacity-0 pointer-events-none" }">
        <p class="text-[#EAD4DF] paragraph-2">
            {text}
        </p>
        <a class="bump flex flex-row pt-5 gap-5" href={reportLink} target="_blank">
            <div class="btn-text text-light-blue hover:brightness-125">READ THE REPORT</div>
            <img src={buttonArrow} alt="button-arrow" />
        </a>
    </div>
</div>