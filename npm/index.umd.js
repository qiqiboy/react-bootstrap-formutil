if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-bootstrap-formutil.umd.production.js');
} else {
    module.exports = require('./react-bootstrap-formutil.umd.development.js');
}

