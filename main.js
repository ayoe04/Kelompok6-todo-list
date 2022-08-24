const {  saveData } = require('./todo-app')
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const util = require('node:util');
const question = util.promisify(rl.question).bind(rl);

const main = async () => {
  try {
    const nama = await question('Nama : ');
    const nim = await question('NIM : ');
    const kelamin = await question('Kelamin : ');
    const asal = await question('Asal : ');
  
    saveData({nama,nim,kelamin, asal})
  } catch (err) {
    console.error('Question rejected', err);
  } finally {
    rl.close()  
  }
}

main()
