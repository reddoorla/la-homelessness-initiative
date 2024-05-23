<script lang='ts'>
    import Panel from "$lib/components/Panel.svelte";

    import helpArrow from "$lib/assets/icons/helpButtonArrow.svg"
    import lifePreserver from "$lib/assets/icons/lifePreserver.svg"
    import logo from "$lib/assets/logos/heartsAndMind/hearts-minds-logo.svg"

    import { bgColor, COLOR_KEY } from "$lib/stores/colors";
  import { fade } from "svelte/transition";

   

    //frame one
    let isFrameOne = true;
    let showSittingPerson = true;
    let showSleepingPerson = false;
    let isLampOn = false;
    let isFrameOneStarted = false;
    const runFrameOne = async () => {
        
        if(!isFrameOneStarted){
            isFrameOneStarted=true;
            bgColor.set('masthead-tan');
            setTimeout(()=>{
                bgColor.set('masthead-blue');
                showSittingPerson=false;
                showSleepingPerson=true;
            },1200);

            setTimeout(()=>{
                isLampOn = true;
            },2400)
        }
        


    };



</script>

<svelte:head>
    <title>Hearts and Minds</title>
</svelte:head>

<main class="w-screen h-screen fixed">
    <div class="h-16 w-screen flex flex-row items-center justify-between py-3 px-8 absolute z-50">
        <button class="h-full flex flex-row items-center transition">
            <div class="w-40 btn-text text-light-pink hover:text-pink transition-colors">I WANT TO HELP</div>
            <img class="h-6" src={helpArrow} alt="down arrow" />
        </button>
        <img class="h-full" src={logo} alt="hearts & minds" />
        <button class="h-full flex flex-row items-center transition">
            <div class="w-40 btn-text text-light-pink hover:text-pink transition-colors">SOS, I NEED HELP</div>
            <img class="h-6" src={lifePreserver} alt="life preserver" />
        </button>
    </div>
    {#if isFrameOne}
        <Panel class="transition-colors duration-1000">
            <button class="w-full h-full relative {isFrameOneStarted ? 'cursor-default' : ''}" on:click={runFrameOne} >

                         <!--bench-->
                         <svg class="absolute bottom-16 right-64 scale-110 -translate-x-[5%] -translate-y-[5%] opacity-60" width="719" height="319" viewBox="0 0 719 319" fill='white' xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_5151_6604)">
                            <path d="M0 163.93L718.68 150.39V225.42L0 213.45V163.93Z" />
                            <path d="M606.83 0.620209L598.93 98.2102L581.8 97.8402L578.67 128.87L366.86 132.84L362.83 98.4202L334.24 97.8402L330.64 133.69L113.92 137.62L109.26 98.4202L82.31 97.8902L75.37 13.2402L606.83 0.620209Z"/>
                            <path d="M115.26 230.09L186.99 235.35L173.07 319.01H125.48L115.26 230.1V230.09Z" />
                            <path d="M570.17 319L526.43 318.13L516.88 237.26H586.32L570.17 319Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_5151_6604">
                            <rect width="718.68" height="318.38" fill="white" transform="translate(0 0.620209)"/>
                            </clipPath>
                            </defs>
                        </svg>
        
                        <!--sitting person-->
                   
                        {#if showSittingPerson}
                        <svg out:fade class="absolute bottom-16 right-52 scale-110 -translate-x-[5%] -translate-y-[5%] transition-all duration-1000" width="227" height="410" fill={COLOR_KEY[$bgColor]||'white'} viewBox="0 0 227 410" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_5151_6609)" >
                            <path  fill={COLOR_KEY[$bgColor]||'white'} class="brightness-50 transition-all duration-1000" d="M67.85 62.2901L5.6 141.34L0 238.45L15.56 251.44L123.37 265.52L127.33 282.91L85.12 368.63L85.9 397.83L120.76 409.66L226.42 280.27L210.56 235.97L123.37 201.64L153.75 128.87L67.85 62.2901Z" />
                            <path fill={COLOR_KEY[$bgColor]||'white'} class="brightness-50 transition-all duration-1000" d="M119.39 94.8501L92.78 62.2901L123.37 9.15527e-05H176.09L197.35 25.9601V62.2901L160.36 94.8501H119.39Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_5151_6609">
                            <rect width="226.42" height="409.66" fill={COLOR_KEY[$bgColor]||'white'}/>
                            </clipPath>
                            </defs>
                        </svg>
                        {/if}
        
                        <!--sleeping person-->
                        {#if showSleepingPerson}
                        <svg in:fade={{delay:400}} class="absolute bottom-48 right-[620px] scale-110 -translate-x-[5%] -translate-y-[5%]" width="431" height="177" viewBox="0 0 431 177" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_5017_5407)">
                            <path d="M103.269 114.64L107.369 72.7999L47.3795 37.8999L3.49945 67.1299L0.189453 100.51L20.3295 130.75L69.1595 137.35L103.269 114.64Z" fill="#19294B"/>
                            <path d="M95.9492 45.59L167.169 0L245.899 8.49L325.699 20.47L323.979 81.25L285.529 121.44L180.369 144.66L107.369 134.13L126.549 75.45L95.9492 45.59Z" fill="#19294B"/>
                            <path d="M283.43 98.2302L272.68 166L298.74 176.93L391.88 141.92L430.85 119.46L417.9 62.4402L361.25 67.2802L325.7 20.4702L283.43 98.2302Z" fill="#19294B"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_5017_5407">
                            <rect width="430.66" height="176.93" fill="white" transform="translate(0.189453)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        {/if}
        
                      <!--light cone-->
                      {#if isLampOn}
                      <svg in:fade  class="absolute bottom-0 left-[2px] scale-110 translate-x-[5%] -translate-y-[5%]" width="1155" height="683" viewBox="0 0 1155 683" fill="#C6D8EF" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M438.05 0.114746L315.785 3.29375L-338.319 638.423L13.3617 743.44H778.313L1154.13 650.435L438.05 0.114746Z"/>
                    </svg>

                    {/if}
    
                <!--lamp-->
                <svg class="absolute bottom-16 left-16 scale-110 translate-x-[5%] -translate-y-[5%] opacity-60" width="400" height="864" viewBox="0 0 400 864" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5151_6597)">
                    <path class="brightness-0 invert" d="M323.384 283.602C352.478 282.849 376.724 261.978 382.543 234.115L261.638 237.235C268.966 264.775 294.181 284.355 323.276 283.602H323.384Z" fill={$bgColor}/>
                    <path d="M56.8965 347.72L125.647 335.886L141.164 738.453L47.9526 737.485L56.8965 347.72Z" />
                    <path d="M134.483 285.108L48.8146 282.849L47.9526 327.602L133.621 319.104L134.483 285.108Z" />
                    <path d="M113.147 -9.77086C113.147 -60.2262 154.203 -101.215 204.741 -101.215C255.28 -101.215 296.336 -59.4732 296.336 -9.77086C296.336 10.7771 285.56 36.9192 285.56 36.9192L340.086 30.5719V-9.77086C340.086 -84.3243 279.31 -145 204.634 -145C129.957 -145 69.3965 -84.3243 69.3965 -9.77086V271.876H125.647L113.147 -9.77086Z" fill={$bgColor}/>
                    <path d="M373.06 42.621L257.974 53.2715L231.034 217.332L400.108 222.819L373.168 42.621H373.06Z" />
                    <path d="M20.7974 749.749H160.776L185.022 864H0L20.7974 749.749Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0_5151_6597">
                    <rect width="400" height="1009" fill="white" transform="translate(0 -145)"/>
                    </clipPath>
                    </defs>
                </svg>

       
          
            </button>
                
        </Panel>
    {/if}
</main>