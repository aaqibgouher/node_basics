const path = require("path");

class Path {
    // just give the current directory path
    dir_name() {
        console.log(__dirname);
    }

    // gives the current file path
    file_name() {
        console.log(__filename);
    }

    // gives the basename of file. in this case, it will give Path.js
    base_name() {
        console.log(path.basename(__filename));
    }

    // we can use this also, to get the directory path
    dir_name_alter() {
        console.log(path.dirname(__filename));
    }

    // gives the extension of file. in that case .js
    ext_file() {
        console.log(path.extname(__filename));
    }

    // gives the all details of a particular file in object
    parse_path() {
        console.log(path.parse(__filename));
    }

    // use to concatenate the files path
    // ../test/hello.html
    concatenate_paths() {
        console.log(path.join(__dirname, "/test", "hello.html"));
    }
}

module.exports = Path;