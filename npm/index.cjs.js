if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-bootstrap-formutil.cjs.production.js');
} else {
    module.exports = require('./react-bootstrap-formutil.cjs.development.js');
}
