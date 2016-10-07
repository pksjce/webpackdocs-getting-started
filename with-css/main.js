require('./styles.css')

var html = ['<div>npm install css-loader style-loader --save-dev</div>',
            '<div class="red-bk">I can add classes now</div>']
document.getElementById('output').innerHTML = html.join('');