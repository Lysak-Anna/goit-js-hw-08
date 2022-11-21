import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
  
const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeupdatePlayerHandler, 1000));
   
const timeToContinue = localStorage.getItem(STORAGE_KEY);
const { seconds, duration } = JSON.parse(timeToContinue);
let timeToStart = seconds;

if (seconds === duration) {
    timeToStart = 0;
  }

player.setCurrentTime(timeToStart).then(function (seconds) {
  seconds = timeToStart;
  
    }).catch(function(error) {
    switch (error.name) {
      case 'RangeError':
       
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

function timeupdatePlayerHandler(event) {
  const currentTime = event;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime));
}

    