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

    import rightArrow from "$lib/assets/icons/rightArrow.svg"
    import scribblesOne from "$lib/assets/panelThree/scribblesOne.svg"
    import scribblesTwo from "$lib/assets/panelThree/scribblesTwo.svg"
    import scribblesThree from "$lib/assets/panelThree/scribblesThree.svg"
    import scribblesFour from "$lib/assets/panelThree/scribblesFour.svg"
    import scribblesFive from "$lib/assets/panelThree/scribblesFive.svg"
    import scribblesSix from "$lib/assets/panelThree/scribblesSix.svg"
    import scribblesSeven from "$lib/assets/panelThree/scribblesSeven.svg"
    import scribblesEight from "$lib/assets/panelThree/scribblesEight.svg"
    import fullScribbles from "$lib/assets/panelThree/fullScribbles.png"

    import mythsArrow from "$lib/assets/icons/mythsArrow.svg"

    import mythOneShatterLeft from "$lib/assets/panelFour/shatter1_left.svg"
    import mythOneShatterRight from "$lib/assets/panelFour/shatter1_right.svg"
    import mythTwoShatterLeft from "$lib/assets/panelFour/shatter2_left.svg"
    import mythTwoShatterRight from "$lib/assets/panelFour/shatter2_right.svg"
    import mythThreeShatterLeft from "$lib/assets/panelFour/shatter3_left.svg"
    import mythThreeShatterRight from "$lib/assets/panelFour/shatter3_right.svg"

    import yp2fLogo from "$lib/assets/logos/orgs/stickerified/yp2f_logo.svg"
    import spyLogo from "$lib/assets/logos/orgs/stickerified/spy_logo.svg"
    import mfpLogo from "$lib/assets/logos/orgs/stickerified/mfp_logo.svg"
    import house from "$lib/assets/icons/house.svg"
    import present from "$lib/assets/icons/present.svg"
    import heart from "$lib/assets/icons/heart.svg"


    import { bgColor, COLOR_KEY } from "$lib/stores/colors";
    import { activeFrame } from "$lib/stores/activeFrame";
    import { get } from "svelte/store";
    import { fade, fly } from "svelte/transition";

    

    import { tweened } from 'svelte/motion'
    import { expoIn, expoInOut, quintIn, quintOut } from 'svelte/easing'
    import { derived } from 'svelte/store'
  import ContentWidth from "$lib/components/ContentWidth.svelte";

  import { slide } from 'svelte/transition';


                  
                    const LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc."
                  
                    export let labels = ["Is this thing on?", "It could be why don't you check"]
     

                    let orgs = [
                        {
                            name: "Young People to the Front",
                            logo: yp2fLogo,
                            siteUrl: "https://www.yp2f.org/",
                            instagram:"https://www.instagram.com/youngpeopletothefront/",
                            linkedin: "https://www.linkedin.com/company/yp2f",
                            podcast: "https://podcasts.apple.com/us/podcast/young-people-to-the-front/id1686036117",
                            bodyCopy:"YP2F is a reimagined think tank, one that combines advocacy with outcomes. We are a research and policy lab that cultivates a platform for the amplification of youth voices and in turn, strengthens the system and ultimately gets us closer to making youth homelessness as rare and brief as possible"
                        },
                        {
                            name: "Safe Place for Youth",
                            logo: spyLogo,
                            siteUrl: "https://www.safeplaceforyouth.org/",
                            instagram:"https://www.instagram.com/safeplaceforyouth/",
                            facebook: "https://www.facebook.com/SafePlaceForYouth/",
                            twitter: "https://twitter.com/safeplace4youth",
                            youtube: "https://www.youtube.com/channel/UCUy5AnugYb4OhLuooZEByDA",
                            bodyCopy: "S.P.Y. prioritizes low barriers for entry, harm-reduction, a trauma-informed approach, and the provision of a safe, supportive environment. We do this through a continuum of care that includes street outreach, access center services, case management, health and wellness, and education and employment programs."

                        },


                    ]
                  
                    let activeAccordians: boolean[] = [];
                  
                    labels.forEach(() => activeAccordians.push(false));
 
  
  let toThirtyEight = tweened(0 as number, { duration: 2000, easing: quintOut })
  let toThirtyEightFormatted = derived(toThirtyEight, ($toThirtyEight) => $toThirtyEight.toFixed())

  let toSixtyNine = tweened(0 as number, { duration: 2000, easing: quintOut })
  let toSixtyNineFormatted = derived(toSixtyNine, ($toSixtyNine) => $toSixtyNine.toFixed())




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
        setTimeout(()=>toThirtyEight.set(38), 500);

        //for frame 3
        bgColor.set("mental-health-purple")
    }
    else if($activeFrame===3){
        setTimeout(()=>toSixtyNine.set(69), 500);

    }else{
        toThirtyEight.set(0)
        toSixtyNine.set(0)
    }
}

// frame three
let isFrameThreeStarted = false;
let isFrameThreeFinished = false;

const runFrameThree = () => {
    isFrameThreeStarted=true;
    setTimeout(()=>{
        isFrameThreeFinished=true;
    }, 3000)
}



//frame four
let isMythOne=false;
let isMythOneBusted=false;
let isMythTwo=false;
let isMythTwoBusted=false;
let isMythThree=false;
let isMythThreeBusted = false;

$:{
    


    if(get(activeFrame)===4)
    bgColor.set('darkest-red');

    if(isMythOneBusted)
    bgColor.set('dark-red');

    if(isMythTwoBusted)
    bgColor.set('red');
    
}

const crackOpenEase = (t:number) =>{
    if(t<0.1)
        return quintOut(t/0.1)*0.1;

    
    return 0.1 + quintIn((t - 0.1) / 0.9) * 0.9;

}

///frame 5

const runFrameFive = () =>{
    bgColor.set('day');
    activeFrame.set(5);

}

//frame 6

let activeFeature = 0;






const goToNextFrame = () => activeFrame.update(frame=>frame+1);

const resetToFrameOne  = () => {
  showSittingPerson = true;
  showSleepingPerson = false;
  isLampOn = false;
  isFrameOneStarted = false;
  bgColor.set('masthead-pink');

  isFrameThreeStarted=false;
  isFrameThreeFinished=false;

  isMythOne=false;
  isMythOneBusted=false;
  isMythTwo=false;
  isMythTwoBusted=false;
  isMythThree=false;
  isMythThreeBusted = false;

  toThirtyEight.set(0)
  toSixtyNine.set(0)

  
  setTimeout(()=>activeFrame.update(()=> 1),200)
 }
</script>

<style>
    .carousel-nav{

        font-feature-settings: 'clig' off, 'liga' off;
        font-family: 'search';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 115%; /* 16.1px */
    }
</style>

<svelte:head>
    <title>Hearts and Minds</title>
</svelte:head>

<main class="w-screen h-screen fixed">
    <div class="h-16 w-screen flex flex-row items-center justify-between py-3 px-8 absolute z-50">
        <button class="h-full " on:click={()=>activeFrame.set(6)}>
            <span class="flex flex-row items-center bump">
                <div class="w-40 btn-text text-light-pink hover:text-pink transition-colors">I WANT TO HELP</div>
                <img class="h-6" src={helpArrow} alt="down arrow" />
            </span>
        </button>
        <button class="h-full" on:click={resetToFrameOne}>
            <img class="h-full" src={logo} alt="hearts & minds" />
        </button>
        <button class="h-full">
            <span class="flex flex-row items-center transition bump">
                <div class="w-40 btn-text text-light-pink hover:text-pink transition-colors">SOS, I NEED HELP</div>
                <img class="h-6" src={lifePreserver} alt="life preserver" />
            </span>
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
                <svg class="absolute bottom-16 left-16 scale-75 md:scale-100 xl:scale-110 xl:translate-x-[5%] xl:-translate-y-[5%] opacity-10" width="400" height="864" viewBox="0 0 400 864" fill="white" xmlns="http://www.w3.org/2000/svg">
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
                <button transition:fade on:click={goToNextFrame} class="negative-bump absolute bottom-12  text-light-pink hover:text-pink transition-colors pointer-events-auto">
                    <span class="flex flex-col justify-center items-center gap-4">
                    <svg class="transition-colors" width="26" height="58" viewBox="0 0 26 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 226">
                            <path id="Vector" d="M7.42627 52.3481C8.32294 53.4848 9.24153 54.6446 10.2427 55.69C10.4417 55.8994 10.6651 56.1136 10.9055 56.3037C10.9513 56.3519 11.0076 56.3901 11.0598 56.4242C11.6157 56.8246 12.2563 57.1046 12.9538 56.9999C14.0556 56.8298 14.7432 55.7581 15.3206 54.9146C16.1296 53.7275 16.9044 52.5212 17.6572 51.2958C19.2013 48.7767 20.6184 46.1868 21.9042 43.5264C22.2364 42.8441 22.5248 41.5579 21.8285 40.976C21.1322 40.3941 20.3249 41.2727 20.0423 41.8561C18.998 44.0119 17.877 46.1292 16.6575 48.1845C16.0894 49.1427 15.499 50.0902 14.8846 51.0207C14.623 51.4207 14.3554 51.8184 14.0898 52.2142C13.9093 52.4773 13.731 52.7385 13.5464 53.0055C13.4651 53.3059 13.3267 53.3657 13.1294 53.1665C13.0826 53.1592 13.0358 53.1519 12.9769 53.136C12.1983 36.5194 13.8455 19.8262 17.9448 3.70897C18.115 3.04913 18.2727 1.75545 17.3947 1.48572C16.5695 1.2296 15.8555 2.37823 15.6921 3.01167C11.7586 18.4818 9.92463 34.4158 10.3013 50.3624C9.76788 49.7254 9.24093 49.0743 8.73471 48.4115C7.25756 46.4793 5.90533 44.4562 4.66088 42.3745C3.6319 40.6581 1.76864 43.9906 2.52501 45.2607C4.02921 47.7332 5.6527 50.0963 7.42633 52.349L7.42627 52.3481Z" fill="currentColor"/>
                        </g>
                        </svg>
                        
                    <div class="btn-text transition-colors">
                        LET'S GET STARTED
                    </div>
                    </span>
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
              <button transition:fade={{delay:2500}} on:click={goToNextFrame} class="negative-bump absolute bottom-12  text-light-pink hover:text-pink transition-colors pointer-events-auto">
                <span class="flex flex-col justify-center items-center gap-4">
                <svg class="transition-colors" width="26" height="58" viewBox="0 0 26 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 226">
                        <path id="Vector" d="M7.42627 52.3481C8.32294 53.4848 9.24153 54.6446 10.2427 55.69C10.4417 55.8994 10.6651 56.1136 10.9055 56.3037C10.9513 56.3519 11.0076 56.3901 11.0598 56.4242C11.6157 56.8246 12.2563 57.1046 12.9538 56.9999C14.0556 56.8298 14.7432 55.7581 15.3206 54.9146C16.1296 53.7275 16.9044 52.5212 17.6572 51.2958C19.2013 48.7767 20.6184 46.1868 21.9042 43.5264C22.2364 42.8441 22.5248 41.5579 21.8285 40.976C21.1322 40.3941 20.3249 41.2727 20.0423 41.8561C18.998 44.0119 17.877 46.1292 16.6575 48.1845C16.0894 49.1427 15.499 50.0902 14.8846 51.0207C14.623 51.4207 14.3554 51.8184 14.0898 52.2142C13.9093 52.4773 13.731 52.7385 13.5464 53.0055C13.4651 53.3059 13.3267 53.3657 13.1294 53.1665C13.0826 53.1592 13.0358 53.1519 12.9769 53.136C12.1983 36.5194 13.8455 19.8262 17.9448 3.70897C18.115 3.04913 18.2727 1.75545 17.3947 1.48572C16.5695 1.2296 15.8555 2.37823 15.6921 3.01167C11.7586 18.4818 9.92463 34.4158 10.3013 50.3624C9.76788 49.7254 9.24093 49.0743 8.73471 48.4115C7.25756 46.4793 5.90533 44.4562 4.66088 42.3745C3.6319 40.6581 1.76864 43.9906 2.52501 45.2607C4.02921 47.7332 5.6527 50.0963 7.42633 52.349L7.42627 52.3481Z" fill="currentColor"/>
                    </g>
                    </svg>
                    </span>
            </button>
              {/if}

              <h6 class="z-10 text-pink">DID YOU KNOW</h6>
              <h3 class="z-10 text-light-pink max-w-screen-lg">Homelessness in youth and young adults has increased</h3>
              <h1 class="z-10 text-[#EAD4DF]">{$toThirtyEightFormatted}%</h1>
            <HowWeKnowButton 
                text="According to LAHSA’s 2023 Greater Los Angeles Homeless Youth Count, there were over 2,000 youth and young adults experiencing homeless in 2023 on any given night."
                reportLink="https://www.lahsa.org/documents?id=7689-yc2023-la-coc-data-summary"
            />
                </div>
    </Panel>

    <Panel frame={3} class="flex flex-col items-center justify-center text-center will-change-transform">

        <img class="absolute w-screen h-screen object-cover" src={scribblesOne} alt="background-scribbles" transition:fade/>
        {#if isFrameThreeStarted&&!isFrameThreeFinished}
            <img class="absolute w-screen h-screen object-cover " src={scribblesTwo} alt="background-scribbles" in:fade={{delay:400}} out:fade/>
            <img class="absolute w-screen h-screen object-cover " src={scribblesThree} alt="background-scribbles" in:fade={{delay:800}} out:fade/>
            <img class="absolute w-screen h-screen object-cover " src={scribblesFour} alt="background-scribbles" in:fade={{delay:1200}} out:fade/>
            <img class="absolute w-screen h-screen object-cover " src={scribblesFive} alt="background-scribbles" in:fade={{delay:1600}} out:fade/>
            <img class="absolute w-screen h-screen object-cover " src={scribblesSix} alt="background-scribbles" in:fade={{delay:2000}} out:fade/>
            <img class="absolute w-screen h-screen object-cover " src={scribblesSeven} alt="background-scribbles" in:fade={{delay:2400}} out:fade/>
            <img class="absolute w-screen h-screen object-cover " src={scribblesEight} alt="background-scribbles" in:fade={{delay:2800}} out:fade/>
        
        {/if}
        {#if isFrameThreeFinished}
        <img class="absolute w-screen h-screen object-cover " src={fullScribbles} alt="background-scribbles" transition:fade={{duration:200}}/>
        {/if}
            <h6 class="z-10 text-pink">WHAT'S ON THE LINE</h6>
            
            <div class="z-10 h-[40vh]">
            {#if !isFrameThreeStarted}
            <div out:fly={{x:"-100%", duration:400}}>
            <h1 class="z-10 text-[#EAD4DF]">{$toSixtyNineFormatted}%</h1>
            <h3 class="z-10 text-light-pink max-w-[992px]">Of homeless youth experience mental illness or crises while unhoused</h3>
            <button class="z-10 mt-24 bump hover:brightness-125" on:click={runFrameThree}>
                <img src={rightArrow} alt="next arrow" />
            </button>
            </div>
            {:else}
            <h3 in:fly={{delay:400, duration:400, x:"100%"}} class="z-10 text-light-pink max-w-[992px] mt-16">Without adequate care, young people are at greater <span class="text-[#EAD4DF]">risk of suicide attempts and suicide.</span></h3>
            {/if}
            </div>
            {#if isFrameThreeStarted}
            <button transition:fade={{delay:2500}} on:click={()=>{goToNextFrame(); bgColor.set('darkest-red');}} class="negative-bump absolute bottom-12 mx-auto  text-light-pink hover:text-pink transition-colors pointer-events-auto">
                <span class="flex flex-col justify-center items-center gap-4">
                <svg class="transition-colors" width="26" height="58" viewBox="0 0 26 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 226">
                        <path id="Vector" d="M7.42627 52.3481C8.32294 53.4848 9.24153 54.6446 10.2427 55.69C10.4417 55.8994 10.6651 56.1136 10.9055 56.3037C10.9513 56.3519 11.0076 56.3901 11.0598 56.4242C11.6157 56.8246 12.2563 57.1046 12.9538 56.9999C14.0556 56.8298 14.7432 55.7581 15.3206 54.9146C16.1296 53.7275 16.9044 52.5212 17.6572 51.2958C19.2013 48.7767 20.6184 46.1868 21.9042 43.5264C22.2364 42.8441 22.5248 41.5579 21.8285 40.976C21.1322 40.3941 20.3249 41.2727 20.0423 41.8561C18.998 44.0119 17.877 46.1292 16.6575 48.1845C16.0894 49.1427 15.499 50.0902 14.8846 51.0207C14.623 51.4207 14.3554 51.8184 14.0898 52.2142C13.9093 52.4773 13.731 52.7385 13.5464 53.0055C13.4651 53.3059 13.3267 53.3657 13.1294 53.1665C13.0826 53.1592 13.0358 53.1519 12.9769 53.136C12.1983 36.5194 13.8455 19.8262 17.9448 3.70897C18.115 3.04913 18.2727 1.75545 17.3947 1.48572C16.5695 1.2296 15.8555 2.37823 15.6921 3.01167C11.7586 18.4818 9.92463 34.4158 10.3013 50.3624C9.76788 49.7254 9.24093 49.0743 8.73471 48.4115C7.25756 46.4793 5.90533 44.4562 4.66088 42.3745C3.6319 40.6581 1.76864 43.9906 2.52501 45.2607C4.02921 47.7332 5.6527 50.0963 7.42633 52.349L7.42627 52.3481Z" fill="currentColor"/>
                    </g>
                    </svg>
                    </span>
            </button>
            <HowWeKnowButton 
                text="Chapin University conducted a national survey of in 2017 and found that 69% of homeless youth report mental health challenges that can lead to significant and long term health issues."
                reportLink="https://www.chapinhall.org/research/one-in-10-young-adults-experience-homelessness-during-one-year/"
                color="purple"
            />
            {/if}
    </Panel>
    <Panel frame={4}>
        {#if !isMythOne&&!isMythTwo&&!isMythThree}
        <div class="bg-darkest-red w-screen h-screen absolute">
            
            <div class="w-full h-full flex flex-col items-center justify-center" out:fly={{x:"-100vw", duration:400, opacity:1}}>
                <h6 class="z-10 text-pink">LET'S GET THESE</h6>
                <h1 class="z-10 text-[#EAD4DF]">MYTHS</h1>
                <h3 class="z-10 text-light-pink max-w-screen-lg">OUT OF THE WAY</h3>
                <button class="hover:brightness-125 bump" on:click={()=>isMythOne=true}>
                    <img src={mythsArrow} alt="arrow right"/>
                </button>
            </div>
        </div>
            {/if} 
            {#if isMythOne}
            <div class="absolute h-screen w-screen top-0 left-0" out:fly={{x:"-100vw", duration:400}} in:fly={{x:"100vw", duration:400, delay:400, opacity:1}}>

            <div class="absolute w-full h-full flex flex-col items-center justify-center">
                <h3 class="z-10 text-[#EAD4DF] max-w-screen-lg text-center"><span class="text-light-pink">FALSE</span><br/>SHELTERS ARE NOTORIOUSLY UNDERFUNDED AND UNDERSTAFFED, CREATING UNSAFE CONDITIONS</h3>
                <button class="z-10 mt-24 bump hover:brightness-125 w-full" on:click={()=>{isMythTwo=true; isMythOne=false;}}>
                    <span class="flex flex-row justify-center items-center gap-6">
                        <img src={rightArrow} alt="next arrow"/>
                    </span>
                </button>
                <HowWeKnowButton color="red" reportLink="https://www.aclusocal.org/sites/default/files/aclu_socal_oc_shelters_report.pdf" text="Most unhoused people would move to shelter if there were safe and affordable options. In a report by the ACLU, they found that residents in emergency centers in Orange County were met with untrained, abusive, and neglectful shelter staff." />
            </div>
            {#if !isMythOneBusted}
            <img src={mythOneShatterLeft} alt="shattering background" class=" z-10 absolute  h-screen xl:h-[140vh] top-0 xl:-top-1/5 left-0 object-fill" out:fly={{delay:200, duration:1800, x:"-100%", opacity:1, easing: crackOpenEase}}/>
            <img src={mythOneShatterRight} alt="shattering background" class="z-10 absolute  h-screen xl:h-[140vh] top-0 xl:-top-1/5 right-0 object-fill" out:fly={{delay:200, duration:1800, x:"100%", opacity:1, easing: crackOpenEase}}/>
            <button class="z-10 absolute w-full h-full" on:click={()=>isMythOneBusted=true} transition:fade>
                
                <span class="flex flex-col items-center justify-center">
                    <h6 class="z-10 text-pink">01/03</h6>
                    <h3 class="z-10 text-[#EAD4DF]"><span class="text-light-pink">"BUT I THOUGHT</span><br/>There are enough people helping"</h3>
                    <button class="z-10 mt-24 bump hover:brightness-125 w-full" on:click>
                        <span class="flex flex-row gap-6 hover:gap-7 justify-center items-center ">
                            <div class="text-light-pink btn-text">BREAK THE STIGMA</div>
                            <img src={rightArrow} alt="next arrow" class="w-20
                        "/>
                    </span>
                    </button>
                </span>
            </button>

            {/if}
            </div>
            {/if}
            {#if isMythTwo}
            <div class="absolute h-screen w-screen top-0 left-0" out:fly={{x:"-100vw", duration:400, opacity:1}} in:fly={{x:"100vw", duration:400, delay:400, opacity:1}}>
            <div class="absolute w-full h-full flex flex-col items-center justify-center bg-red">
                <h3 class="z-10 text-[#EAD4DF]  max-w-screen-lg text-center"><span class="text-light-pink">FALSE</span><br/>homeless folks would move inside if housing programs met their needs.</h3>
                <button class="z-10 mt-24 bump hover:brightness-125 w-full" on:click={()=>{isMythThree=true; isMythTwo=false;}}>
                    <span class="flex flex-row gap-6 justify-center items-center ">
                    <img src={rightArrow} alt="next arrow"/>
                    </span>
                </button>
                <HowWeKnowButton color="red" reportLink="https://nlihc.org/sites/default/files/Housing-First-Research.pdf" text="Homelessness is not a choice. Most individuals are seeking shelter, employment, and support but find it difficult to adhere to “treatment-first” programs. Instead, “housing-first” programs offer flexibility to a larger population and can help them find employment and maintain stable housing" />
            </div>
            {#if !isMythTwoBusted}
            <img src={mythTwoShatterLeft} alt="shattering background" class=" z-10 absolute h-screen xl:h-[140vh] top-0 xl:-top-1/5 left-0 object-fill" out:fly={{delay:200, duration:1800, x:"-100%", y:"-100%", opacity:1, easing: crackOpenEase}}/>
            <img src={mythTwoShatterRight} alt="shattering background" class="z-10 absolute h-screen xl:h-[140vh] top-0 xl:-top-1/5 right-0 object-fill" out:fly={{delay:200, duration:1800, x:"100%", y:"100%", opacity:1, easing: crackOpenEase}}/>
           
            <button class="z-10  absolute w-full h-full" on:click={()=>isMythTwoBusted=true} transition:fade>
                <span class="flex flex-col items-center justify-center ">
                <h6 class="z-10 text-pink">02/03</h6>
                <h3 class="z-10 text-[#EAD4DF]"><span class="text-light-pink">"BUT I THOUGHT</span><br/>They don't want anyone's help"</h3>
                <button class="z-10 mt-24 bump hover:brightness-125 w-full" on:click>
                    <span class=" flex flex-row gap-6 hover:gap-7 justify-center items-center ">
                    <div class="text-light-pink btn-text">BREAK THE STIGMA</div>
                    <img src={rightArrow} alt="next arrow" class="w-20
                    "/>
                    </span>
                </button>
                </span>
            </button>
            {/if}
            </div>
            {/if}
            {#if isMythThree}
            <div class="absolute h-screen w-screen top-0 left-0" out:fly={{x:"-100%", duration:400, opacity:1}} in:fly={{x:"100%", duration:400, delay:400, opacity:1}}>
            <div class="z-10 absolute w-full h-full flex flex-col items-center justify-center bg-light-red" >
                <h3 class="z-10 text-[#EAD4DF]  max-w-screen-lg text-center"><span class="text-light-pink">FALSE</span><br/>many are employed or seeking employment, but lack the resources for safe housing</h3>
                <button class="z-10  absolute bottom-12 mt-24 bump hover:brightness-125 w-full" on:click={runFrameFive}>
                    <span class="flex flex-row gap-6 hover:gap-7 justify-center items-center ">
                    <svg class="transition-colors text-light-pink" width="26" height="58" viewBox="0 0 26 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 226">
                            <path id="Vector" d="M7.42627 52.3481C8.32294 53.4848 9.24153 54.6446 10.2427 55.69C10.4417 55.8994 10.6651 56.1136 10.9055 56.3037C10.9513 56.3519 11.0076 56.3901 11.0598 56.4242C11.6157 56.8246 12.2563 57.1046 12.9538 56.9999C14.0556 56.8298 14.7432 55.7581 15.3206 54.9146C16.1296 53.7275 16.9044 52.5212 17.6572 51.2958C19.2013 48.7767 20.6184 46.1868 21.9042 43.5264C22.2364 42.8441 22.5248 41.5579 21.8285 40.976C21.1322 40.3941 20.3249 41.2727 20.0423 41.8561C18.998 44.0119 17.877 46.1292 16.6575 48.1845C16.0894 49.1427 15.499 50.0902 14.8846 51.0207C14.623 51.4207 14.3554 51.8184 14.0898 52.2142C13.9093 52.4773 13.731 52.7385 13.5464 53.0055C13.4651 53.3059 13.3267 53.3657 13.1294 53.1665C13.0826 53.1592 13.0358 53.1519 12.9769 53.136C12.1983 36.5194 13.8455 19.8262 17.9448 3.70897C18.115 3.04913 18.2727 1.75545 17.3947 1.48572C16.5695 1.2296 15.8555 2.37823 15.6921 3.01167C11.7586 18.4818 9.92463 34.4158 10.3013 50.3624C9.76788 49.7254 9.24093 49.0743 8.73471 48.4115C7.25756 46.4793 5.90533 44.4562 4.66088 42.3745C3.6319 40.6581 1.76864 43.9906 2.52501 45.2607C4.02921 47.7332 5.6527 50.0963 7.42633 52.349L7.42627 52.3481Z" fill="currentColor"/>
                        </g>
                        </svg>
                        </span>
                </button>
                <HowWeKnowButton color="red" reportLink="https://bfi.uchicago.edu/wp-content/uploads/2021/06/BFI_WP_2021-65.pdf" text="Many people experiencing homelessness are employed or actively seeking employment and would move inside if housing responsive to their needs were available. " />
            </div>
            {#if !isMythThreeBusted}
            <img src={mythThreeShatterLeft} alt="shattering background" class="z-10 absolute h-screen xl:h-[140vh] top-0 xl:-top-1/5 left-0 object-fill" out:fly={{delay:200, duration:1800, x:"-100%", y:"100%", opacity:1, easing: crackOpenEase}}/>
            <img src={mythThreeShatterRight} alt="shattering background" class="z-10 absolute h-screen xl:h-[140vh] top-0 xl:-top-1/5 right-0 object-fill" out:fly={{delay:200, duration:1800, x:"100%", y:"-100%", opacity:1, easing: crackOpenEase}}/>
           
            <button class="z-10 absolute w-full h-full" on:click={()=>isMythThreeBusted=true} transition:fade>
                <span class=" flex-col items-center justify-center">
                <h6 class="z-10 text-pink">03/03</h6>
                <h3 class="z-10 text-[#EAD4DF]"><span class="text-light-pink">"BUT I THOUGHT</span><br/>They are just lazy and unambitious"</h3>
                <button class="z-10 mt-24 bump hover:brightness-125 w-full" on:click>
                    <span class=" flex flex-row gap-6 hover:gap-7 justify-center items-center">
                    <div class="text-light-pink btn-text">BREAK THE STIGMA</div>
                    <img src={rightArrow} alt="next arrow" class="w-20
                    "/>
                    </span>
                </button>
                </span>
            </button>
            {/if}
            </div>
            {/if}
            
       
    </Panel>

    <Panel frame={5}>
        <div class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center transition-colors duration-[6000ms] delay-1000 ease-out {$activeFrame===5?"bg-day":"bg-night"}">
            <h4 class="text-blue text-center max-w-screen-xl">With so many young people sleeping without shelter every night, we want to shed light on the issue to</h4>
            <h2 class="{$activeFrame===5?"text-orange opacity-100":"text-light-pink opacity-10"} transition duration-[8000ms] delay-1000 ease-out">open hearts and minds</h2>

            {#if $activeFrame===5}
            
            <button transition:fade={{delay:6000}} on:click={goToNextFrame} class="negative-bump absolute bottom-12  text-light-orange hover:text-orange transition-colors pointer-events-auto flex flex-col justify-center items-center gap-4">
                <svg class="transition-colors" width="26" height="58" viewBox="0 0 26 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 226">
                        <path id="Vector" d="M7.42627 52.3481C8.32294 53.4848 9.24153 54.6446 10.2427 55.69C10.4417 55.8994 10.6651 56.1136 10.9055 56.3037C10.9513 56.3519 11.0076 56.3901 11.0598 56.4242C11.6157 56.8246 12.2563 57.1046 12.9538 56.9999C14.0556 56.8298 14.7432 55.7581 15.3206 54.9146C16.1296 53.7275 16.9044 52.5212 17.6572 51.2958C19.2013 48.7767 20.6184 46.1868 21.9042 43.5264C22.2364 42.8441 22.5248 41.5579 21.8285 40.976C21.1322 40.3941 20.3249 41.2727 20.0423 41.8561C18.998 44.0119 17.877 46.1292 16.6575 48.1845C16.0894 49.1427 15.499 50.0902 14.8846 51.0207C14.623 51.4207 14.3554 51.8184 14.0898 52.2142C13.9093 52.4773 13.731 52.7385 13.5464 53.0055C13.4651 53.3059 13.3267 53.3657 13.1294 53.1665C13.0826 53.1592 13.0358 53.1519 12.9769 53.136C12.1983 36.5194 13.8455 19.8262 17.9448 3.70897C18.115 3.04913 18.2727 1.75545 17.3947 1.48572C16.5695 1.2296 15.8555 2.37823 15.6921 3.01167C11.7586 18.4818 9.92463 34.4158 10.3013 50.3624C9.76788 49.7254 9.24093 49.0743 8.73471 48.4115C7.25756 46.4793 5.90533 44.4562 4.66088 42.3745C3.6319 40.6581 1.76864 43.9906 2.52501 45.2607C4.02921 47.7332 5.6527 50.0963 7.42633 52.349L7.42627 52.3481Z" fill="currentColor"/>
                    </g>
                    </svg>
                    
                <div class="btn-text transition-colors">
                    LET'S DO SOMETHING
                </div>
            </button>
            {/if}
        </div>
    </Panel>

    <Panel frame={6} class="overflow-y-scroll">
        <div class="w-full min-h-screen flex flex-col items-center justify-center bg-help-light">
            <div class="flex flex-col items-center justify-center max-w-screen-md my-32">
                <h6 class="text-light-orange">make a difference</h6>
                <h3 class="text-orange my-9">How to help</h3>
                <p class="text-center">Here are organizations doing good in Los Angeles so you can learn more about the homeless crisis and become an advocate for our neighbors.</p>
            </div>
        
            <div class="bg-help-dark h-[480px] w-4/5 max-w-screen-lg  mb-32 relative flex flex-row flex-nowrap overflow-hidden rounded">

                <div class="p-10 relative flex flex-row gap-16 justify-start items-start w-full flex-shrink-0 transition-transform duration-700 ease-in" style="transform: translateX(-{activeFeature*100}%)">

                    <img class="w-64" src={yp2fLogo} alt="young people to the front logo" />
                    <div>
                        <h5 class="text-orange mb-7">Young people to the front</h5>
                        <p>YP2F is a reimagined think tank, one that combines advocacy with outcomes. We are a research and policy lab that cultivates a platform for the amplification of youth voices and in turn, strengthens the system and ultimately gets us closer to making youth homelessness as rare and brief as possible</p>
                        <a class="bump flex flex-row pt-5 gap-5 hover:gap-6 my-7 text-pink hover:brightness-125" href="https://www.yp2f.org/" target="_blank">
                            <div class="btn-text">GO TO SITE</div>
                            <svg class="w-20 hover:brightness-125" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M3.05339 11.2409C38.1895 7.973 73.546 7.74546 108.722 10.5023C116.387 11.1044 124.041 11.8571 131.671 12.7373C131.13 12.4335 130.58 12.1442 130.035 11.8439C125.375 9.31656 120.715 6.78918 116.056 4.2618C114.907 3.64365 113.317 2.18852 114.418 0.820324C115.464 -0.484194 118.091 0.090017 119.293 0.744115C124.825 3.73931 130.357 6.73451 135.882 9.74452C140.394 12.1871 147.405 14.5337 149.421 19.7056C149.78 20.6233 149.582 21.3361 148.718 21.8718C142.302 25.772 135.318 28.5632 127.993 30.2237C126.304 30.5998 124.06 29.9674 122.949 28.5989C121.941 27.3684 122.308 25.9412 123.93 25.5691C130.241 24.1378 136.174 21.7916 141.763 18.5906C141.592 18.4013 141.42 18.2341 141.233 18.0662C140.521 18.3513 139.606 18.3718 138.964 18.299C104.576 13.9307 69.8531 12.4908 35.2271 14.0388C25.2928 14.4845 15.3646 15.1773 5.4654 16.0971C2.22322 16.4101 -1.83735 11.7036 3.05339 11.2409Z" fill="currentColor"/>
                            </svg>
                        </a>
                        <div class="flex flex-row gap-4 mt-7">
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.instagram.com/youngpeopletothefront/"><i class="fa-brands fa-instagram fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.linkedin.com/company/yp2f"><i class="fa-brands fa-linkedin-in fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://podcasts.apple.com/us/podcast/young-people-to-the-front/id1686036117"><i class="fa-regular fa-microphone fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.yp2f.org/"><i class="fa-regular fa-link-simple fa-rotate-by fa-lg" style="--fa-rotate-angle: 135deg;"></i></a>
                        </div>
                    </div>
                </div>

                <div class="p-10 relative flex flex-row gap-16 justify-start items-start w-full flex-shrink-0 transition-transform duration-700 ease-in" style="transform: translateX(-{activeFeature*100}%)">

                    <img class="w-64" src={spyLogo} alt="young people to the front logo" />
                    <div>
                        <h5 class="text-orange mb-7">Safe place for youth</h5>
                        <p>S.P.Y. prioritizes low barriers for entry, harm-reduction, a trauma-informed approach, and the provision of a safe, supportive environment. We do this through a continuum of care that includes street outreach, access center services, case management, health and wellness, and education and employment programs.</p>
                        <a class="bump flex flex-row pt-5 gap-5 hover:gap-6 my-7 text-pink hover:brightness-125" href="https://www.safeplaceforyouth.org/" target="_blank">
                            <div class="btn-text">GO TO SITE</div>
                            <svg class="w-20 hover:brightness-125" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M3.05339 11.2409C38.1895 7.973 73.546 7.74546 108.722 10.5023C116.387 11.1044 124.041 11.8571 131.671 12.7373C131.13 12.4335 130.58 12.1442 130.035 11.8439C125.375 9.31656 120.715 6.78918 116.056 4.2618C114.907 3.64365 113.317 2.18852 114.418 0.820324C115.464 -0.484194 118.091 0.090017 119.293 0.744115C124.825 3.73931 130.357 6.73451 135.882 9.74452C140.394 12.1871 147.405 14.5337 149.421 19.7056C149.78 20.6233 149.582 21.3361 148.718 21.8718C142.302 25.772 135.318 28.5632 127.993 30.2237C126.304 30.5998 124.06 29.9674 122.949 28.5989C121.941 27.3684 122.308 25.9412 123.93 25.5691C130.241 24.1378 136.174 21.7916 141.763 18.5906C141.592 18.4013 141.42 18.2341 141.233 18.0662C140.521 18.3513 139.606 18.3718 138.964 18.299C104.576 13.9307 69.8531 12.4908 35.2271 14.0388C25.2928 14.4845 15.3646 15.1773 5.4654 16.0971C2.22322 16.4101 -1.83735 11.7036 3.05339 11.2409Z" fill="currentColor"/>
                            </svg>
                        </a>
                        <div class="flex flex-row gap-4 mt-7">
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.instagram.com/safeplaceforyouth/"><i class="fa-brands fa-instagram fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.youtube.com/channel/UCUy5AnugYb4OhLuooZEByDA"><i class="fa-brands fa-youtube fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://twitter.com/safeplace4youth"><i class="fa-brands fa-x-twitter fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.facebook.com/SafePlaceForYouth/"><i class="fa-brands fa-facebook-f fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.safeplaceforyouth.org/"><i class="fa-regular fa-link-simple fa-rotate-by fa-lg" style="--fa-rotate-angle: 135deg;"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="p-10 relative flex flex-row gap-16 justify-start items-start w-full flex-shrink-0 transition-transform duration-700 ease-in" style="transform: translateX(-{activeFeature*100}%)">

                    <img class="w-64" src={mfpLogo} alt="young people to the front logo" />
                    <div>
                        <h5 class="text-orange mb-7">My Friend's place</h5>
                        <p>They offer a comprehensive continuum of services to 1,000 youth experiencing homelessness between the ages of 12 and 25, and their children, each year, helping our young people who are experiencing homelessness to move toward wellness, stability and self-sufficiency.</p>
                        <a class="bump flex flex-row pt-5 gap-5  hover:gap-6 my-7 text-pink hover:brightness-125" href="https://www.myfriendsplace.org/" target="_blank">
                            <div class="btn-text">GO TO SITE</div>
                            <svg class="w-20 hover:brightness-125" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M3.05339 11.2409C38.1895 7.973 73.546 7.74546 108.722 10.5023C116.387 11.1044 124.041 11.8571 131.671 12.7373C131.13 12.4335 130.58 12.1442 130.035 11.8439C125.375 9.31656 120.715 6.78918 116.056 4.2618C114.907 3.64365 113.317 2.18852 114.418 0.820324C115.464 -0.484194 118.091 0.090017 119.293 0.744115C124.825 3.73931 130.357 6.73451 135.882 9.74452C140.394 12.1871 147.405 14.5337 149.421 19.7056C149.78 20.6233 149.582 21.3361 148.718 21.8718C142.302 25.772 135.318 28.5632 127.993 30.2237C126.304 30.5998 124.06 29.9674 122.949 28.5989C121.941 27.3684 122.308 25.9412 123.93 25.5691C130.241 24.1378 136.174 21.7916 141.763 18.5906C141.592 18.4013 141.42 18.2341 141.233 18.0662C140.521 18.3513 139.606 18.3718 138.964 18.299C104.576 13.9307 69.8531 12.4908 35.2271 14.0388C25.2928 14.4845 15.3646 15.1773 5.4654 16.0971C2.22322 16.4101 -1.83735 11.7036 3.05339 11.2409Z" fill="currentColor"/>
                            </svg>
                        </a>
                        <div class="flex flex-row gap-4 mt-7">
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.instagram.com/myfriendsplace"><i class="fa-brands fa-instagram fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.youtube.com/channel/UCwP9v838Jx58xYUjZoqehIg"><i class="fa-brands fa-youtube fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://twitter.com/MFPLA"><i class="fa-brands fa-x-twitter fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.facebook.com/mfphollywood/"><i class="fa-brands fa-facebook-f fa-lg"></i></a>
                            <a class="text-light-orange hover:text-orange transition-colors" href="https://www.myfriendsplace.org/"><i class="fa-regular fa-link-simple fa-rotate-by fa-lg" style="--fa-rotate-angle: 135deg;"></i></a>
                        </div>
                    </div>
                </div>
                
                
                
                    <div class="absolute bottom-10 left-10 flex flex-row gap-5">
                        <button on:click={()=>activeFeature--} class="{activeFeature===0 ? "opacity-0 pointer-events-none":""} carousel-nav text-light-orange hover:text-orange bump">{"< back"}</button>
                        <button on:click={()=>activeFeature++}  class="{activeFeature===2 ? "opacity-0 pointer-events-none":""} carousel-nav text-light-orange hover:text-orange bump">{"next >"}</button>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center max-w-screen-md mb-32">
                    <h3 class="text-orange my-9">Explore</h3>
                    <p class="text-center mb-32">Look through our complete list of orgs and consider how you can help!</p>

                    <div class="flex flex-row justify-center items-center gap-16">
                        <button class="hover:brightness-90">
                            <span class="bump flex flex-col items-center justify-center gap-2">
                            <div class="btn-text text-light-orange">support</div>
                            <img class="" src={house} alt="house" />
                            </span>
                
                        </button>
                        <button class="bump hover:brightness-90">
                            <span class="flex flex-col items-center justify-center gap-2">
                                <div class="btn-text text-light-orange">support</div>
                                <img class="" src={present} alt="house" />
                            </span>
                        </button>
                        <button class="bump hover:brightness-90">
                            <span class="flex flex-col items-center justify-center gap-2">
                            <div class="btn-text text-light-orange">support</div>
                            <img class="" src={heart} alt="house" />
                            </span>
                        </button>

                    </div>
                </div>


     
                 <ContentWidth class="w-full mb-32">
                  <div class="w-full flex flex-col cursor-pointer">
                    {#each orgs as org, i}
                      <button class="w-full cursor-pointer border-light-orange border-opacity-25 border-b-2" on:click={() => activeAccordians[i] = !activeAccordians[i]}>
                        <div class="h-20 p-8 w-full flex flex-row justify-between items-center text-light-orange">
                            <h5 class="text-orange">{org.name}</h5>
                            <div class="flex flex-row gap-8">
                                <div class="btn-text">{activeAccordians[i] ? "less -" :"about +"}</div>
                                <a href={org.siteUrl} class="flex flex-row bump gap-3 hover:text-orange">
                                    <div class="btn-text">Go to Site</div>
                                    <svg class="w-16" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M3.05339 11.2409C38.1895 7.973 73.546 7.74546 108.722 10.5023C116.387 11.1044 124.041 11.8571 131.671 12.7373C131.13 12.4335 130.58 12.1442 130.035 11.8439C125.375 9.31656 120.715 6.78918 116.056 4.2618C114.907 3.64365 113.317 2.18852 114.418 0.820324C115.464 -0.484194 118.091 0.090017 119.293 0.744115C124.825 3.73931 130.357 6.73451 135.882 9.74452C140.394 12.1871 147.405 14.5337 149.421 19.7056C149.78 20.6233 149.582 21.3361 148.718 21.8718C142.302 25.772 135.318 28.5632 127.993 30.2237C126.304 30.5998 124.06 29.9674 122.949 28.5989C121.941 27.3684 122.308 25.9412 123.93 25.5691C130.241 24.1378 136.174 21.7916 141.763 18.5906C141.592 18.4013 141.42 18.2341 141.233 18.0662C140.521 18.3513 139.606 18.3718 138.964 18.299C104.576 13.9307 69.8531 12.4908 35.2271 14.0388C25.2928 14.4845 15.3646 15.1773 5.4654 16.0971C2.22322 16.4101 -1.83735 11.7036 3.05339 11.2409Z" fill="currentColor"/>
                                        </svg>
                                        
                                </a>
                            </div>
                        </div>
                        {#if activeAccordians[i]}
                          <div class="flex flex-row gap-16 py-16 text-left items-start justify-start" transition:slide="{{ duration: 500 }}">
                            
                                <img class="w-64" src={org.logo} alt="young people to the front logo" />
                                <div>
                                    
                                    <p class=" normal-case">{org.bodyCopy}</p>
            
                                    <div class="flex flex-row gap-4 mt-7">
                                        {#if org.instagram}
                                            <a class="text-light-orange hover:text-orange transition-colors" href={org.instagram}><i class="fa-brands fa-instagram fa-lg"></i></a>
                                        {/if}
                                        {#if org.youtube}
                                            <a class="text-light-orange hover:text-orange transition-colors" href={org.youtube}><i class="fa-brands fa-youtube fa-lg"></i></a>
                                        {/if}
                                        {#if org.twitter}
                                            <a class="text-light-orange hover:text-orange transition-colors" href={org.twitter}><i class="fa-brands fa-x-twitter fa-lg"></i></a>
                                        {/if}
                                        {#if org.facebook}
                                            <a class="text-light-orange hover:text-orange transition-colors" href={org.facebook}><i class="fa-brands fa-facebook-f fa-lg"></i></a>
                                        {/if}
                                        {#if org.linkedin}
                                            <a class="text-light-orange hover:text-orange transition-colors" href={org.linkedin}><i class="fa-brands fa-linkedin-in fa-lg"></i></a>
                                        {/if}
                                        {#if org.podcast}
                                            <a class="text-light-orange hover:text-orange transition-colors" href={org.podcast}><i class="fa-regular fa-microphone fa-lg"></i></a>
                                        {/if}
                                        <a class="text-light-orange hover:text-orange transition-colors" href={org.siteUrl}><i class="fa-regular fa-link-simple fa-rotate-by fa-lg" style="--fa-rotate-angle: 135deg;"></i></a>
                                    </div>
                                </div>
                            </div>
                        {/if}
                      </button>
                    {/each}
                  </div>
                </ContentWidth> 
                
        </div>
        <div class="w-screen bg-help-dark py-20">
            <ContentWidth>
                <h3 class="text-orange">Our Sources</h3>
                <p class="text-center mb-20">Interested in learning more about homelessness? Visit the sources below</p>

                <div class="w-full border-b-[3px] border-help-light min-h-24 py-5 relative">
                    <div class="w-3/5 h-full flex flex-col justify-between">
                        <p>2023 Greater Los Angeles Youth Homeless Count — Los Angeles Continuum of Care</p>
                        <p class="text-orange">LAHSA</p>
                    </div>
                    <a href="https://www.lahsa.org/news?article=944-2023-greater-los-angeles-homeless-count-data" class="bump absolute bottom-5 right-5 text-light-orange hover:text-orange flex flex-row gap-3 hover:gap-4">
                        <div class="btn-text">Go to Source</div>
                        <svg class="w-16" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M3.05339 11.2409C38.1895 7.973 73.546 7.74546 108.722 10.5023C116.387 11.1044 124.041 11.8571 131.671 12.7373C131.13 12.4335 130.58 12.1442 130.035 11.8439C125.375 9.31656 120.715 6.78918 116.056 4.2618C114.907 3.64365 113.317 2.18852 114.418 0.820324C115.464 -0.484194 118.091 0.090017 119.293 0.744115C124.825 3.73931 130.357 6.73451 135.882 9.74452C140.394 12.1871 147.405 14.5337 149.421 19.7056C149.78 20.6233 149.582 21.3361 148.718 21.8718C142.302 25.772 135.318 28.5632 127.993 30.2237C126.304 30.5998 124.06 29.9674 122.949 28.5989C121.941 27.3684 122.308 25.9412 123.93 25.5691C130.241 24.1378 136.174 21.7916 141.763 18.5906C141.592 18.4013 141.42 18.2341 141.233 18.0662C140.521 18.3513 139.606 18.3718 138.964 18.299C104.576 13.9307 69.8531 12.4908 35.2271 14.0388C25.2928 14.4845 15.3646 15.1773 5.4654 16.0971C2.22322 16.4101 -1.83735 11.7036 3.05339 11.2409Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
                <div class="w-full border-b-[3px] border-help-light min-h-24 py-5 relative">
                    <div class="w-3/5 h-full flex flex-col justify-between">
                        <p>Missed opportunities: Youth homelessness in America. National estimates</p>
                        <p class="text-orange">Chapin Hall at the University of Chicago</p>
                    </div>
                    <a href="https://www.lahsa.org/news?article=944-2023-greater-los-angeles-homeless-count-data" class="bump absolute bottom-5 right-5 text-light-orange hover:text-orange flex flex-row gap-3 hover:gap-4">
                        <div class="btn-text">Go to Source</div>
                        <svg class="w-16" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M3.05339 11.2409C38.1895 7.973 73.546 7.74546 108.722 10.5023C116.387 11.1044 124.041 11.8571 131.671 12.7373C131.13 12.4335 130.58 12.1442 130.035 11.8439C125.375 9.31656 120.715 6.78918 116.056 4.2618C114.907 3.64365 113.317 2.18852 114.418 0.820324C115.464 -0.484194 118.091 0.090017 119.293 0.744115C124.825 3.73931 130.357 6.73451 135.882 9.74452C140.394 12.1871 147.405 14.5337 149.421 19.7056C149.78 20.6233 149.582 21.3361 148.718 21.8718C142.302 25.772 135.318 28.5632 127.993 30.2237C126.304 30.5998 124.06 29.9674 122.949 28.5989C121.941 27.3684 122.308 25.9412 123.93 25.5691C130.241 24.1378 136.174 21.7916 141.763 18.5906C141.592 18.4013 141.42 18.2341 141.233 18.0662C140.521 18.3513 139.606 18.3718 138.964 18.299C104.576 13.9307 69.8531 12.4908 35.2271 14.0388C25.2928 14.4845 15.3646 15.1773 5.4654 16.0971C2.22322 16.4101 -1.83735 11.7036 3.05339 11.2409Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
                <div class="w-full border-b-[3px] border-help-light min-h-24 py-5 relative">
                    <div class="w-3/5 h-full flex flex-col justify-between">
                        <p>Affirming Truths about Homelessness </p>
                        <p class="text-orange">Community Solutions</p>
                    </div>
                    <a href="https://www.lahsa.org/news?article=944-2023-greater-los-angeles-homeless-count-data" class="bump absolute bottom-5 right-5 text-light-orange hover:text-orange flex flex-row gap-3 hover:gap-4">
                        <div class="btn-text">Go to Source</div>
                        <svg class="w-16" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M3.05339 11.2409C38.1895 7.973 73.546 7.74546 108.722 10.5023C116.387 11.1044 124.041 11.8571 131.671 12.7373C131.13 12.4335 130.58 12.1442 130.035 11.8439C125.375 9.31656 120.715 6.78918 116.056 4.2618C114.907 3.64365 113.317 2.18852 114.418 0.820324C115.464 -0.484194 118.091 0.090017 119.293 0.744115C124.825 3.73931 130.357 6.73451 135.882 9.74452C140.394 12.1871 147.405 14.5337 149.421 19.7056C149.78 20.6233 149.582 21.3361 148.718 21.8718C142.302 25.772 135.318 28.5632 127.993 30.2237C126.304 30.5998 124.06 29.9674 122.949 28.5989C121.941 27.3684 122.308 25.9412 123.93 25.5691C130.241 24.1378 136.174 21.7916 141.763 18.5906C141.592 18.4013 141.42 18.2341 141.233 18.0662C140.521 18.3513 139.606 18.3718 138.964 18.299C104.576 13.9307 69.8531 12.4908 35.2271 14.0388C25.2928 14.4845 15.3646 15.1773 5.4654 16.0971C2.22322 16.4101 -1.83735 11.7036 3.05339 11.2409Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
                <div class="w-full mt-20 min-h-24 py-5 relative">
                    <div class="w-3/5 h-full flex flex-col gap-5 justify-between">
                        <p>If you have any suggestions or organizations you would like to share with us, please reach out. We are always looking to improve this site.</p>
                        <a href="https://www.lahsa.org/news?article=944-2023-greater-los-angeles-homeless-count-data" class="bump text-light-orange hover:text-orange flex flex-row gap-3 hover:gap-4">
                            <div class="btn-text">I have a suggestion</div>
                            <svg class="w-16" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M3.05339 11.2409C38.1895 7.973 73.546 7.74546 108.722 10.5023C116.387 11.1044 124.041 11.8571 131.671 12.7373C131.13 12.4335 130.58 12.1442 130.035 11.8439C125.375 9.31656 120.715 6.78918 116.056 4.2618C114.907 3.64365 113.317 2.18852 114.418 0.820324C115.464 -0.484194 118.091 0.090017 119.293 0.744115C124.825 3.73931 130.357 6.73451 135.882 9.74452C140.394 12.1871 147.405 14.5337 149.421 19.7056C149.78 20.6233 149.582 21.3361 148.718 21.8718C142.302 25.772 135.318 28.5632 127.993 30.2237C126.304 30.5998 124.06 29.9674 122.949 28.5989C121.941 27.3684 122.308 25.9412 123.93 25.5691C130.241 24.1378 136.174 21.7916 141.763 18.5906C141.592 18.4013 141.42 18.2341 141.233 18.0662C140.521 18.3513 139.606 18.3718 138.964 18.299C104.576 13.9307 69.8531 12.4908 35.2271 14.0388C25.2928 14.4845 15.3646 15.1773 5.4654 16.0971C2.22322 16.4101 -1.83735 11.7036 3.05339 11.2409Z" fill="currentColor"/>
                            </svg>
                        </a>
                        
                    </div>
              
                </div>
            </ContentWidth>

        </div>

    </Panel>
    
    
</main>