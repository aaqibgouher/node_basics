const fs = require('fs');
const path = require('path');

class FileSystem {
    // just make directory inside the current directory
    // desc: there we are just making a directory named as test in the same directory. first parameter is the path where you want to create the folder, and second one is a blank object, third one is err if any occured
    make_dir() {
        fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
            if(err) console.log(err);
            else console.log("folder created successfully ..");
        });
    }

    // create and write on the file
    // desc: we already made the folder, now we want to make a file inside that folder named as test.txt. so the first parameter is the path, second one is the content of that file, third one is err if occured.
    write_file() {
        fs.writeFile(path.join(__dirname, '/test', 'test.txt'), "hello from text file ", err => {
            if(err) console.log(err);
            else console.log("file written too ..");
        })
    }

    // create and append on the file
    // desc: if we call the write file method more then once, so it will override the content, and stores the latest one. there we can use append. so first parameter is path, second is the content, third one is err.
    append_file() {
        fs.appendFile(path.join(__dirname, '/test', 'test.txt'), "this is used to append on the file. ", err => {
            if(err) console.log(err);
            else console.log("file append successfully ..");
        })
    }

    // read from existing files
    // desc: after writing on file, we can read it as well using read. first parameter is path, second is encoding code else it will read, and third one is err and data in the file.
    read_file() {
        fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (err, data) => {
            if(err) console.log("err");
            else console.log(data);
        })
    }

    // renamed the existing file
    // desc: for renaming the existing file, we use rename. first parameter is path of file before renamed, and second parameter is path of new file, third one is err.
    rename_file() {
        fs.rename(path.join(__dirname, '/test', 'test_new.txt'), path.join(__dirname, '/test', 'test.txt'), (err) => {
            if(err) console.log(err);
            else console.log("file renamed ..");
        })
    }
}

module.exports = FileSystem;