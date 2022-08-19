import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle((Time) => {
    localStorage.setItem("videoplayer-current-time", Time.seconds)
    // console.log("CurrentTime:", localStorage.getItem("videoplayer-current-time"))
}, 1000));
 
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
