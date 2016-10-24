require('./js/a.js')
require.ensure([], function(require){
    require('./js/b.js')
})