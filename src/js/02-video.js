import Player from '@vimeo/player';
import throttle from '@lodash/throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

var throttled = _.throttle(setCurrentTime, 1000, { trailing: false });

player.on('play', throttled);

function setCurrentTime() {
  console.log('played the video!');
  localStorage.setItem('videoplayer-current-time', data.timeupdate.seconds);
  console.log(data.timeupdate.seconds);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
