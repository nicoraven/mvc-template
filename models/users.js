/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    const getAll = (callback) => {
  
      let query = 'SELECT * FROM users';
  
      dbPoolInstance.query(query, (error, queryResult) => {
        if( error ){
          callback(error, null);
        } else{
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          } else{
            callback(null, null);
          }
        }
      });
    };

    const validateLogin = (user, callback) => {
      let query = "SELECT * FROM users WHERE username = $1 AND password = $2";
      let values = [user.username, user.password];

      dbPoolInstance.query(query, values, (error, queryResult) => {
        if( error ){
          callback(error, null);
        } else{
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows[0]);
          } else{
            callback(null, null);
          }
        }
      });
    };
  
    return {
      getAll,
      validateLogin,
    };
  };
  