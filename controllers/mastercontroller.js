module.exports = (db) => {

    const sha256 = require('js-sha256');

    const salt = process.env.HASHSALT || require("../salt.js");

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    // const hardcoded = (req, res) => {
    //   res.send('hardcoded string');
    // }
  
    const users = (request, response) => {
      db.users.getAll((error, allUsers) => {
        if (error){
            response.send("Internal Server Error. Please try again later.");
        } else {
            console.log(allUsers);
            if (allUsers) {
                let data = {
                    title: "All Users",
                    users: allUsers
                };
                response.render("users/users", data);
            } else {
                response.send("no users found");
            };
        };
      });
    }

    const renderLogin = (req, res) => {
        let data = {
            title: "Login"
        };

        res.render('users/login', data);
    }

    const validateLogin = (request, response) => {
        request.body.password = sha256(request.body.password + salt);
        console.log("request.body", request.body);
        db.users.validateLogin(request.body, (error, result) => {
            if (error){
                response.send("Internal Server Error. Please try again later.");
            } else {
                console.log(result);
                if (result) {
                    response.cookie("username", request.body.username);
                    response.cookie("password", request.body.password);
                    response.redirect("/");
                } else {
                    response.send("Invalid username or password");
                };
            };
        });
    }

    const logout = (request, response) => {
        response.clearCookie("username");
        response.clearCookie("password");
        response.redirect("/");
    }

    const indexControllerCallback = (req, res) => {
        let user = {
            username: req.cookies.username,
            password: req.cookies.password
        };

        let data = {
            title: "home",
            user: null
        };

        db.users.validateLogin(user, (error, result) => {
            if (error){
                console.log("Internal Server Error. Cannot validate credentials.");
            } else {
                if (result) {
                    data.user = user;
                };
            };
            res.render('home', data);
        });
    }
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {
        loginPage: renderLogin,
        validateLogin: validateLogin,
        users: users,
        index: indexControllerCallback,
        logout: logout,
        // hardcoded: hardcoded,
    };
  
  }