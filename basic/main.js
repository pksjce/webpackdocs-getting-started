import knocker from './knock-knock.js';

let html = ['<div>' + knocker.knock() + '</div>',
            '<div>whos there?</div>',
            '<div>' + knocker.whosthere() + '</div>',
            '<div> webpack who? </div>',
            '<div>' + knocker.webpackwho() + '</div>'];
document.getElementById('knock').innerHTML = html.join('');