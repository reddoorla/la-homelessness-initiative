<script lang='ts'>
  import Panel from "$lib/components/Panel.svelte";

import helpArrow from "$lib/assets/icons/helpButtonArrow.svg"
import lifePreserver from "$lib/assets/icons/lifePreserver.svg"
import logo from "$lib/assets/logos/heartsAndMind/hearts-minds-logo.svg"

  import { onMount } from "svelte";



    let frameOne = true;


</script>

<main class="w-screen h-screen fixed">
    <div class="h-16 w-screen flex flex-row items-center justify-between py-3 px-8 absolute z-50">
        <button class="h-full flex flex-row items-center transition">
            <button class="w-40 text-light-pink hover:text-pink transition-colors">I WANT TO HELP</button>
            <img class="h-6" src={helpArrow} alt="down arrow" />
        </button>
        <img class="h-full" src={logo} alt="hearts & minds" />
        <button class="h-full flex flex-row items-center transition">
            <button class="w-40 text-light-pink hover:text-pink transition-colors">SOS, I NEED HELP</button>
            <img class="h-6" src={lifePreserver} alt="life preserver" />
        </button>
    </div>
    {#if frameOne}
        <Panel>
            <div class="w-full h-full relative">
                <!--lamp-->
                <svg class="absolute bottom-16 left-16 scale-110 translate-x-[5%] -translate-y-[5%]" width="400" height="864" viewBox="0 0 400 864" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5151_6597)">
                    <path d="M323.384 283.602C352.478 282.849 376.724 261.978 382.543 234.115L261.638 237.235C268.966 264.775 294.181 284.355 323.276 283.602H323.384Z" fill="#F5E7EE"/>
                    <path d="M56.8965 347.72L125.647 335.886L141.164 738.453L47.9526 737.485L56.8965 347.72Z" fill="#F5E7EE"/>
                    <path d="M134.483 285.108L48.8146 282.849L47.9526 327.602L133.621 319.104L134.483 285.108Z" fill="#F5E7EE"/>
                    <path d="M113.147 -9.77086C113.147 -60.2262 154.203 -101.215 204.741 -101.215C255.28 -101.215 296.336 -59.4732 296.336 -9.77086C296.336 10.7771 285.56 36.9192 285.56 36.9192L340.086 30.5719V-9.77086C340.086 -84.3243 279.31 -145 204.634 -145C129.957 -145 69.3965 -84.3243 69.3965 -9.77086V271.876H125.647L113.147 -9.77086Z" fill="#F5E7EE"/>
                    <path d="M373.06 42.621L257.974 53.2715L231.034 217.332L400.108 222.819L373.168 42.621H373.06Z" fill="#F5E7EE"/>
                    <path d="M20.7974 749.749H160.776L185.022 864H0L20.7974 749.749Z" fill="#F5E7EE"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5151_6597">
                    <rect width="400" height="1009" fill="white" transform="translate(0 -145)"/>
                    </clipPath>
                    </defs>
                </svg>
                <!--bench-->
                <svg class="absolute bottom-16 right-64 scale-110 -translate-x-[5%] -translate-y-[5%]" width="719" height="319" viewBox="0 0 719 319" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5151_6604)">
                    <path d="M0 163.93L718.68 150.39V225.42L0 213.45V163.93Z" fill="#F5E7EE"/>
                    <path d="M606.83 0.620209L598.93 98.2102L581.8 97.8402L578.67 128.87L366.86 132.84L362.83 98.4202L334.24 97.8402L330.64 133.69L113.92 137.62L109.26 98.4202L82.31 97.8902L75.37 13.2402L606.83 0.620209Z" fill="#F5E7EE"/>
                    <path d="M115.26 230.09L186.99 235.35L173.07 319.01H125.48L115.26 230.1V230.09Z" fill="#F5E7EE"/>
                    <path d="M570.17 319L526.43 318.13L516.88 237.26H586.32L570.17 319Z" fill="#F5E7EE"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5151_6604">
                    <rect width="718.68" height="318.38" fill="white" transform="translate(0 0.620209)"/>
                    </clipPath>
                    </defs>
                </svg>
                <!--sitting person-->
                <svg class="absolute bottom-16 right-52 scale-110 -translate-x-[5%] -translate-y-[5%]" width="227" height="410" viewBox="0 0 227 410" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5151_6609)">
                    <path d="M67.85 62.2901L5.6 141.34L0 238.45L15.56 251.44L123.37 265.52L127.33 282.91L85.12 368.63L85.9 397.83L120.76 409.66L226.42 280.27L210.56 235.97L123.37 201.64L153.75 128.87L67.85 62.2901Z" fill="#C9B8C1"/>
                    <path d="M119.39 94.8501L92.78 62.2901L123.37 9.15527e-05H176.09L197.35 25.9601V62.2901L160.36 94.8501H119.39Z" fill="#C9B8C1"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5151_6609">
                    <rect width="226.42" height="409.66" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                    

                    


            </div>
                
        </Panel>
    {/if}
</main>