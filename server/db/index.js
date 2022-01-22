const { Pool } = require('pg');

// Create a new express-promise-router
// This has the same API as the the normal express router except that
// it allows dev to use async functions as route handlers 
const pool = new Pool();
module.exports = {
  query: (text, params) => pool.query(text, params),
};
