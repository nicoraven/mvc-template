module.exports = (app, allModels) => {

    /**
     * ===================================
     * ===================================
     * All routes for ${all} controllers
     * ===================================
     * ===================================
     */
  
    // require the controller
    const controller = require('./controllers/mastercontroller')(allModels);
  
    app.get('/users', controller.users);
    app.get('/', controller.hardcoded);
  };