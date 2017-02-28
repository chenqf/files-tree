/**
 * Created by chenqifeng on 2017/2/28.
 */

var fs = require('fs');

/**
 * 文件路径下的所有文件（包括子文件夹）
 * @param path 文件路径
 * @param filter 文件后缀名过滤 (js|css|html|...)
 * @returns {Array}
 */
exports.allFile = function allFile(path,filter){
    path = path || './';
    var files,list = [],state,p,item;
    try{
        files = fs.readdirSync(path)
    }catch (e){
        files = [];
        console.log('#----------------------------------------------------#\n');
        console.error('=====error path:=====> ' + path + '\n');
        console.log('#----------------------------------------------------#\n');
    }
    files.forEach(function(i){
        p = path + (/\/$/.test(path)?'':'/') + i;
        state = fs.statSync(p);
        item = {
            path:p,
            name:i,
            size:state.size,
            directory:state.isDirectory(),
            file:state.isFile()
        };
        if(item.file){
            list.push(item);
        }else if(item.directory){
            list = list.concat(allFile(p));
        }
    });
    return list;
};



/**
 * 文件路径下的所有文件树
 * @param path 文件路径
 * @param filter 文件后缀名过滤 (js|css|html|...)
 * @returns {Array}
 */
exports.tree = function tree(path,filter){
    path = path || './';
    var files,list = [],state,p,item;
    try{
        files = fs.readdirSync(path)
    }catch (e){
        files = [];
        console.log('#----------------------------------------------------#\n');
        console.error('=====error path:=====> ' + path + '\n');
        console.log('#----------------------------------------------------#\n');
    }
    files.forEach(function(i){
        p = path + (/\/$/.test(path)?'':'/') + i;
        state = fs.statSync(p);
        item = {
            path:p,
            name:i,
            size:state.size,
            directory:state.isDirectory(),
            file:state.isFile()
        };
        list.push(item);
        if(item.directory){
            item.list = tree(p);
        }
    });
    return list;
};


/**
 * 文件路径下的文件队列
 * @param path 文件路径
 * @returns {Array}
 */
exports.list = function(path){
    path = path || '';
    var files,list = [],state,item,p;
    try{
        files = fs.readdirSync(path)
    }catch (e){
        files = [];
        console.log('#----------------------------------------------------#\n');
        console.error('=====error path:=====> ' + path + '\n');
        console.log('#----------------------------------------------------#\n');
    }
    files.forEach(function(i){
        p = path + (/\/$/.test(path)?'':'/') + i;
        state = fs.statSync(p);
        item = {
            path:p,
            name:i,
            size:state.size,
            directory:state.isDirectory(),
            file:state.isFile()
        };
        list.push(item);
    });
    return list;
};
