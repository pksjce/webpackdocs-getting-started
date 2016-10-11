import knocker from './knock-knock.js';

let knock = document.getElementById('knock');
const divList = [knocker.knock(), 'whos there', knocker.whosthere(), 'webpack who?', knocker.webpackwho()];
divList.forEach(function(div){
    var divFrag = document.createElement('div');
    divFrag.textContent = div;
    knock.appendChild(divFrag);
})