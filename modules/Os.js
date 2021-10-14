const os = require('os');

class Os {
    // gives the platform name either mac, linux, windows
    platform() {
        console.log(os.platform());
    }

    // gives the archs detail like x64
    architecture() {
        console.log(os.arch());
    }

    // gives cpu cores detail
    cpu_cores() {
        console.log(os.cpus());
    }

    // gives total free memory
    free_memory() {
        console.log(os.freemem());
    }

    // gives total memory
    total_memory() {
        console.log(os.totalmem());
    }

    // gives the home directory
    home_dir() {
        console.log(os.homedir());
    }

    // gives the uptime in sec
    uptime() {
        console.log(os.uptime());
    }
}

module.exports = Os;