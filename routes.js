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
    
    app.post('/login', controller.validateLogin);
    app.get('/login', controller.loginPage);
    app.get('/logout', controller.logout);
    app.get('/users', controller.users);
    app.get('/', controller.index);
  };