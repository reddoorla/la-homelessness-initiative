<script lang='ts'>
    import Panel from "$lib/components/Panel.svelte";
    import HowWeKnowButton from "$lib/components/HowWeKnowButton.svelte";

    import helpArrow from "$lib/assets/icons/helpButtonArrow.svg"
    import lifePreserver from "$lib/assets/icons/lifePreserver.svg"
    import logo from "$lib/assets/logos/heartsAndMind/hearts-minds-logo.svg"
    
    import encampment from "$lib/assets/panelTwo/encampment.svg"
    import basePeople from '$lib/assets/panelTwo/basePeople.svg'
    import newPeopleOne from '$lib/assets/panelTwo/newPeople1.svg'
    import newPeopleTwo from '$lib/assets/panelTwo/newPeople2.svg'
    import newPeopleThree from '$lib/assets/panelTwo/newPeople3.svg'
    import newPeopleFour from '$lib/assets/panelTwo/newPeople4.svg'
    import newPeopleFive from '$lib/assets/panelTwo/newPeople5.svg'

    import { bgColor, COLOR_KEY } from "$lib/stores/colors";
    import { activeFrame } from "$lib/stores/activeFrame";
    import { fade } from "svelte/transition";

    

    import { tweened } from 'svelte/motion'
    import { quintOut } from 'svelte/easing'
    import { derived } from 'svelte/store'
  
  let toNumber = tweened(0 as number, { duration: 2000, easing: quintOut })
  let toNumberFormatted = derived(toNumber, ($toNumber) => $toNumber.toFixed())




//frame one
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




// frame two

$:{
    if($activeFrame===2){
        toNumber.set(38);
    }
}




const goToNextFrame = () => activeFrame.update(frame=>frame+1);

const resetToFrameOne  = () => {
  showSittingPerson = true;
  showSleepingPerson = false;
  isLampOn = false;
  isFrameOneStarted = false;
  bgColor.set('masthead-pink');
  
  setTimeout(()=>activeFrame.update(()=> 1),200)
 }
</script>

<svelte:head>
    <title>Hearts and Minds</title>
</svelte:head>

<main class="w-screen h-screen fixed">
    <div class="h-16 w-screen flex flex-row items-center justify-between py-3 px-8 absolute z-50">
        <button class="h-full flex flex-row items-center transition bump">
            <div class="w-40 btn-text text-light-pink hover:text-pink transition-colors">I WANT TO HELP</div>
            <img class="h-6" src={helpArrow} alt="down arrow" />
        </button>
        <button class="h-full" on:click={resetToFrameOne}>
            <img class="h-full" src={logo} alt="hearts & minds" />
        </button>
        <button class="h-full flex flex-row items-center transition bump">
            <div class="w-40 btn-text text-light-pink hover:text-pink transition-colors">SOS, I NEED HELP</div>
            <img class="h-6" src={lifePreserver} alt="life preserver" />
        </button>
    </div>
        <Panel frame={1}>
            <button class="w-full h-full relative {isFrameOneStarted ? 'cursor-default' : ''}" on:click={runFrameOne} >

                         <!--bench-->
                         <svg class="absolute bottom-16 right-32 xl:right-64 md:scale-100 scale-75  xl:scale-110 xl:-translate-x-[5%] xl:-translate-y-[5%] opacity-10" width="719" height="319" viewBox="0 0 719 319" fill='white' xmlns="http://www.w3.org/2000/svg">
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
                        <svg out:fade class="absolute bottom-16 right-20 xl:right-52 md:scale-100 scale-75  xl:scale-110 xl:-translate-x-[5%] xl:-translate-y-[5%] transition-all duration-1000" width="227" height="410" fill={COLOR_KEY[$bgColor]||'white'} viewBox="0 0 227 410" xmlns="http://www.w3.org/2000/svg">
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
                        <svg in:fade={{delay:400}} class="absolute bottom-48 right-[620px] md:scale-100 scale-75 xl:scale-110 xl:-translate-x-[5%] xl:-translate-y-[5%]" width="431" height="177" viewBox="0 0 431 177" fill="white" xmlns="http://www.w3.org/2000/svg">
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
                      <svg in:fade  class="absolute bottom-0 left-[2px] md:scale-100 scale-75 xl:scale-110 xl:translate-x-[5%] xl:-translate-y-[5%]" width="1155" height="683" viewBox="0 0 1155 683" fill="#C6D8EF" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M438.05 0.114746L315.785 3.29375L-338.319 638.423L13.3617 743.44H778.313L1154.13 650.435L438.05 0.114746Z"/>
                    </svg>

                    {/if}
    
                <!--lamp-->
                <svg class="absolute bottom-16 left-16 scale-75 md:scale-100  xl:scale-110 xl:translate-x-[5%] xl:-translate-y-[5%] opacity-10" width="400" height="864" viewBox="0 0 400 864" fill="white" xmlns="http://www.w3.org/2000/svg">
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
            <div class="w-screen h-screen absolute top-0 left-0 flex justify-center items-center pointer-events-none">
                <h2 class=" text-[#1B41A0] max-w-[1040px] text-center">
                    Raising awareness for LA’s unhoused youth and their mental health.
                </h2>
                {#if isLampOn}
                <button transition:fade on:click={goToNextFrame} class="negative-bump absolute bottom-12  text-light-pink hover:text-pink transition-colors pointer-events-auto flex flex-col justify-center items-center gap-4">
                    <svg class="transition-colors" width="26" height="58" viewBox="0 0 26 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 226">
                            <path id="Vector" d="M7.42627 52.3481C8.32294 53.4848 9.24153 54.6446 10.2427 55.69C10.4417 55.8994 10.6651 56.1136 10.9055 56.3037C10.9513 56.3519 11.0076 56.3901 11.0598 56.4242C11.6157 56.8246 12.2563 57.1046 12.9538 56.9999C14.0556 56.8298 14.7432 55.7581 15.3206 54.9146C16.1296 53.7275 16.9044 52.5212 17.6572 51.2958C19.2013 48.7767 20.6184 46.1868 21.9042 43.5264C22.2364 42.8441 22.5248 41.5579 21.8285 40.976C21.1322 40.3941 20.3249 41.2727 20.0423 41.8561C18.998 44.0119 17.877 46.1292 16.6575 48.1845C16.0894 49.1427 15.499 50.0902 14.8846 51.0207C14.623 51.4207 14.3554 51.8184 14.0898 52.2142C13.9093 52.4773 13.731 52.7385 13.5464 53.0055C13.4651 53.3059 13.3267 53.3657 13.1294 53.1665C13.0826 53.1592 13.0358 53.1519 12.9769 53.136C12.1983 36.5194 13.8455 19.8262 17.9448 3.70897C18.115 3.04913 18.2727 1.75545 17.3947 1.48572C16.5695 1.2296 15.8555 2.37823 15.6921 3.01167C11.7586 18.4818 9.92463 34.4158 10.3013 50.3624C9.76788 49.7254 9.24093 49.0743 8.73471 48.4115C7.25756 46.4793 5.90533 44.4562 4.66088 42.3745C3.6319 40.6581 1.76864 43.9906 2.52501 45.2607C4.02921 47.7332 5.6527 50.0963 7.42633 52.349L7.42627 52.3481Z" fill="currentColor"/>
                        </g>
                        </svg>
                        
                    <div class="btn-text transition-colors">
                        LET'S GET STARTED
                    </div>
                </button>
                {/if}
            </div>
           
                
        </Panel>

    
    <Panel frame={2}>
        <div class="w-screen h-screen bg-underpass-blue flex flex-col justify-center items-center gap-9">
            <svg class="absolute top-0 left-0 h-[40vh] max-h-72" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 424" fill="none">
                <path d="M0.879883 369.18L198.03 423.1V257.41C162 159.1 110.37 68.5901 46.0699 -11.1899H0.879883V369.18Z" fill="#2E4C8E"/>
            </svg>
            <svg class="absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg" width="353" height="764" viewBox="0 0 353 764" fill="none">
                <path d="M268.631 420.37L271.621 763.9L352.481 746.66V-11.1899H0.680664C116.391 112.2 208.061 258.41 268.631 420.37Z" fill="#2E4C8E"/>
              </svg>

              <svg class="absolute bottom-0 right-0  lg:w-screen min-h-[80vh]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 580" fill="none">
                <path d="M1.50051 0.340088L1440.48 420.79V624L0.520508 80.4501L1.50051 0.340088Z" fill="#1C4182"/>
              </svg>

              <img class="top-[60vh] lg:top-[40vh] xl:top-[30vh] left-[12vw] w-[80vw] absolute" src={encampment} alt="encampment"/>
              <img class="top-[60vh] lg:top-[40vh] xl:top-[30vh] left-[10vw] w-[80vw] absolute" src={basePeople} alt="people" />
              {#if $activeFrame===2}
              
              <img class="top-[60vh] lg:top-[40vh] xl:top-[35vh] left-[19vw] w-[80vw] absolute" src={newPeopleOne} alt="people" transition:fade={{duration:1000,delay:500}}/>
              <img class="top-[60vh] lg:top-[40vh] xl:top-[35vh] left-[19vw] w-[80vw] absolute" src={newPeopleTwo} alt="people" transition:fade={{duration:1000,delay:1500}}/>
              <img class="top-[60vh] lg:top-[40vh] xl:top-[35vh] left-[19vw] w-[80vw] absolute" src={newPeopleThree} alt="people" transition:fade={{duration:1000,delay:2500}}/>
              <img class="top-[60vh] lg:top-[40vh] xl:top-[35vh] left-[19vw] w-[80vw] absolute" src={newPeopleFour} alt="people" transition:fade={{duration:1000,delay:3500}} />
              <img class="top-[60vh] lg:top-[40vh] xl:top-[35vh] left-[19vw] w-[80vw] absolute" src={newPeopleFive} alt="people" transition:fade={{duration:1000,delay:4500}} />
              {/if}

              <h6 class="z-10 text-pink">DID YOU KNOW</h6>
              <h3 class="z-10 text-light-pink max-w-screen-lg">Homelessness in youth and young adults has increased</h3>
              <h1 class="z-10 text-[#EAD4DF]">{$toNumberFormatted}%</h1>
            <HowWeKnowButton 
                text="According to LAHSA’s 2023 Greater Los Angeles Homeless Youth Count, there were over 2,000 youth and young adults experiencing homeless in 2023 on any given night."
                reportLink="https://www.lahsa.org/documents?id=7689-yc2023-la-coc-data-summary"
            />
                </div>
    </Panel>
    
    
</main>