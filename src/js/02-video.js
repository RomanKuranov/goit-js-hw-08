import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

reloadPage();

player.on('timeupdate', function(time) {
    localStorage.setItem(CURRENT_TIME, time.seconds);
 });

function reloadPage() {
    const savedLocalTime = localStorage.getItem(CURRENT_TIME);

    if (savedLocalTime) {
        player.setCurrentTime(savedLocalTime);
    }
}