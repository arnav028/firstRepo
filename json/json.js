/* const fs = require('fs');
const path = require('path')
const filepath =   path.join(_,'./data/tsks.json')  ;
const arr = ["hello"];

console.log(__dirname);
console.log(path.join('a','b'));
console.log(path.join('a/','/b'));
console.log(path.join('a','b'));
console.log(path.join('a/','b'));


fs.writeFile(filepath,JSON.stringify(arr),(err) => {
    if(err) throw err;
    console.log("likh gya success");
}) */


/* const fs = require('fs');
const path = require('path');
const filepath = path.join(_dirname, '/data/tasks')
const arr = [
    {name: 'ruchi',age: 100},
    {name: 'mehak',age: 100},
    {name: 'badal',age: 100},
    {name: 'draemon',age: Infinity},

]

fs.readFile(filepath, {
    encoding: 'utf8'
}, (err, data) => {
    if (err) throw err;
    data =JSON.parse(data);
    console.log(data);
})

//way-2

fs.readFile(filepath, (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
}) */


/* const fs = require('fs');
const path = require('path');
const filepath = path.join(_dirname,'/data/tasks.json');

function updatedata(name, age){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,{
            encoding: 'utf8'

        },(err, data) => {
            if (err) return reject(err);
            data = JSON.parse(data);
            data = data.map((val) =>{
                {
                    if(val.name === name){
                        return{ name , age}
                    }
                    else {
                        return val;
                    }
                 }
        })

fs.writeFile(filepath, JSON.stringify(data), (err) => {
    if (err) return reject(err) ;
    resolve("updated Succesfully");
})
        })
})
} */
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));