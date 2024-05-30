import { writable } from 'svelte/store';

export const COLOR_KEY = {

    'masthead-pink': '#EAD4DF',
    'masthead-tan': '#CD9765',
    'masthead-blue': '#212D59',
    'underpass-blue': '#1B3977',
    'mental-health-purple': '#2E2569',
    'darkest-red': '#510621',
    'dark-red': '#5B0725',
    'red': '#670528',
    'light-red': '#76062E',
    'night': '#001855',
    'day' : '#F9F0DA',
    'help-dark': '#F5E8C8',
    'help-light': '#FDF6E6',
    'light-blue': '#7996E0',
    'blue': '#2550BD',
    'dark-blue': '#001855',
    'light-pink': '#DC90B8',
    'pink': '#CF4D92',
    'dark-pink': '#76062E',
    'light-purple': '#C098ED',
    'purple': '#7144A6',
    'light-orange': '#F99D47',
    'orange': '#EC492F',
    'white': '#FFFFFF',
    'black': '#000000',
    'transparent': 'transparent',
  }



export const bgColor = writable<keyof typeof COLOR_KEY>("masthead-pink"); 