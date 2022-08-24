const fs = require('fs')

const directPath = './data/'
const pathJson = directPath+'/data.json';

// cek folder jika ada dibuat jika tidak lanjut
if(!fs.existsSync(directPath)){
  fs.mkdirSync(directPath);
} 

if(!fs.existsSync(pathJson)) {
  fs.writeFileSync(pathJson, '[]', 'utf-8');
}


// load data.json
const loadTodos = () => {
  // membaca file json (./data/data.json)
  const fileBuffer = fs.readFileSync(pathJson, 'utf-8');
  return todos = JSON.parse(fileBuffer);
};

// Menyimpan Data
exports.saveData = (todo) => {
  loadTodos();
  // cek duplikat todo
  const duplicates = todos.find(item => item.nama === todo.nama && item.nim === todo.nim && item.kelamin === todo.kelamin && item.asal === todo.asal);
  if(duplicates){
      console.log(`todo ${todo.nim} sudah terdaftar silahkan gunakan todo lain!!`);
      return false;
  };
  
  // menambah data yang pada variable json
  todos.push(todo);

  // menuliskan ke data.json
  fs.writeFile(pathJson, JSON.stringify(todos, null, 2), (err) => {
      if(err) throw err;
      console.log('\n===> data telah tersimpan <===');
      console.table(todos);
  });
  
  // readline ditutup / berakhir
}

