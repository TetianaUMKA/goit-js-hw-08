import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

try {
  const savedTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedTime) {
    player.setCurrentTime(savedTime.seconds);
  }
  console.log(savedTime.seconds);
} catch {
  console.log('The first viewing');
}

player.on('timeupdate', throttle(data => {
    try {
      localStorage.setItem(LOCALSTORAGE_KEY, `${JSON.stringify(data)}`);
    } catch (error) {
      console.log(error);
    }
}, 1000));