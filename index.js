import {tweetsData} from './data.js';

const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');
const feedDisplay = document.getElementById('feed');

tweetBtn.addEventListener('click', function(){
    feedDisplay.textContent = tweetInput.value;
    tweetInput.value = '';


    
});