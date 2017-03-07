var xlsx = require('node-xlsx');
var fs = require('fs');
var path = require('path');
/*const data = [
  ['大区', '校区', '姓名', '分数'], 
  [true, false, null, 'sheetjs'], 
  ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], 
  ['baz', '代立旺', 'qux']
];*/


function makeXlsxFile(fileName, dbData, callback){
    var data = [
        ['大区', '校区', '姓名', '专业', '分数']
    ];
    
    dbData.forEach(function(item, index){
        data[index + 1] = [];
        data[index + 1].push(item.area);
        data[index + 1].push(item.school);
        data[index + 1].push(item.name);
        data[index + 1].push(item.subject);
        data[index + 1].push(item.average);
    });
    
    var buffer = xlsx.build([{name: fileName, data: data}]); // Returns a buffer
    fs.writeFile(path.join(__dirname,'../public/xlsx/',fileName+'.xlsx'),buffer,function(error) {
        if(error){
           callback(null,error);
        }else{
            callback(fileName);
        }
        
    });
}
module.exports = makeXlsxFile;