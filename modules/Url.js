const path = require('path');
const url = require('url');

class Url {
    myUrl = new URL('http://mywebsite.com:8000/index.html?id:1&name:aaqib');

    url() {
        console.log(this.myUrl.href);
    }

    url_alter() {
        console.log(this.myUrl.toString())
    }

    host() {
        console.log(this.myUrl.host);
    }

    hostname() {
        console.log(this.myUrl.hostname);
    }

    path_name() {
        console.log(this.myUrl.pathname);
    }

    search() {
        console.log(this.myUrl.search);
    }

    search_params() {
        console.log(this.myUrl.searchParams);
    }
}

module.exports = Url;