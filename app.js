const fs = require('fs');

const stringify = require('@aitodotai/json-stringify-pretty-compact'); // to pretty the json (which is the human-readable version (when no prettyed, a human can't read it, only computers can))

const save = (path, obj) => {
    fs.writeFileSync(path, stringify(obj));
};

class Main {
    constructor(options) {
        this.json = !fs.existsSync(options.path) ? fs.writeFileSync(options.path, JSON.stringify({})) : JSON.parse(fs.readFileSync(options.path));
        this.name = options.name;
        this.opts = options
    }

    create(key, value) {
        this.json[key] = value;
        save(this.opts.path, this.json);
    }
    remove(key) {
        delete this.json[key];
        save(this.opts.path, this.json);
    }
    get(key) {
        if (!key) return this.json; else return this.json[key];
    }
    reset() {
        for (const key in this.json) {
            delete this.json[key];
        }
        save(this.opts.path, this.json);
    }
}

module.exports = {
    Main
};