const fsPromisses = require('fs').promises;
const path = require('path');





// fs.writeFile(path.join(__dirname, 'text.txt'), 'Hello WORLD!',(err) => {
//   if(err) throw err;
//   console.log('Write complete!');
// });

// fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, data) =>{
//   if(err) throw err;
//   console.log(data);
// });

// fs.appendFile(path.join(__dirname, 'text.txt'), 'Hi my name is Konstantin!', (err) => {
//   if(err) throw err;
//   console.log('Append comeplete!');
// });

// fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, data) =>{
//   if(err) throw err;
//   console.log(data);
// });

const fileOps = async () => {
  try {
    await fsPromisses.writeFile(path.join(__dirname, 'text.txt'), 'Hello my brother!');

    const data = await fsPromisses.readFile(path.join(__dirname, 'text.txt'), 'utf8');
    console.log(data);

    await fsPromisses.appendFile(path.join(__dirname, 'text.txt'), ' Updated bruder! Lol Im lowkey amazing.');

    await fsPromisses.copyFile(path.join(__dirname, 'text.txt'), path.join(__dirname, 'text2.txt'));

    await fsPromisses.unlink(path.join(__dirname, 'text.txt'));
  }
  catch (err) {
    console.error(err);
  }
}

fileOps();