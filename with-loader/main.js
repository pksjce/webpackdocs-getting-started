import view from './view.js';

var html = ['<div>npm install babel-loader babel-core babel-preset-es2015 --save-dev</div>',
            '<div>Add modules array to webpack.</div>',
            '<div>Each loader must have an include regex. Put node_modules in exclude regex.</div>',
            '<div>Babel will transpile all the files in the include folder to es5</div>',
            '<div>Babels preset for es2015 has all the transpiling required for es2015 features only</div>']

view.render('output', html);