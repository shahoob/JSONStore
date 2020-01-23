const fs = require('fs');

const stringify = require('@aitodotai/json-stringify-pretty-compact'); // to pretty the json (which is the human-readable version (when no prettyed, a human can't read it, only computers can))

const save = (path, obj) => {
    fs.writeFileSync(path, stringify(obj));
};

class Main {
    constructor(options) {
        this.json = !fs.existsSync(options.path) ? fs.writeFileSync(path, JSON.stringify(new Object())) : JSON.parse(fs.readFileSync(options.path));
        this.name = options.name;
    }

    create(key, value) {
        this.json[key] = value;
        save(options.path, this.json);
    }
    remove(key) {
        delete this.json[key];
        save(options.path, this.json);
    }
    get(key) {
        if (!key) return this.json; else return this.json[key];
    }
    reset() {
        for (const key in this.json) {
            delete this.json[key];
        }
        save(path, this.json);
    }
}

module.exports = {
    Main
};