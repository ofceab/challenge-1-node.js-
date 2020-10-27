const path = require('path');

const rootPath = path.dirname(require.main.filename);
const public = path.join(path.dirname(require.main.filename), 'public');

module.exports = {
    rootPath,
    public
};