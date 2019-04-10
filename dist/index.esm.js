if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-bootstrap-formutil.esm.production.js');
} else {
    module.exports = require('./react-bootstrap-formutil.esm.development.js');
}
