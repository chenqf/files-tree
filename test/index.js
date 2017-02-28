/**
 * Created by chenqifeng on 2017/2/28.
 */
var fs = require('fs'),
    util = require('../index'),
    path = './',
    tree = util.tree(path,{ignore:['.git'],suffix:['json','js']});





if(typeof tree === 'object'){
    tree = JSON.stringify(tree);
}
fs.writeFileSync('test.json', tree);