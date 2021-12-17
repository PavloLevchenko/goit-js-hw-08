import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const THROTLE_DELAY = 1000;

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const time = localStorage.getItem(LOCALSTORAGE_KEY);

if (time != null) {
  player.setCurrentTime(time);
}

function getCurrentTime(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

const throttled = throttle(getCurrentTime, THROTLE_DELAY);

player.on('timeupdate', throttled);

/* player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
 */
