module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let hardcoded = (req, res) => {
      res.send('hardcoded string');
    }
  
    let users = (req, res) => {
      db.users.getAll((error, allUsers) => {
        console.log(allUsers);
        if (allUsers) {
            res.send(allUsers);
        } else {
            res.send("no users found");
        }
        // res.render('pokemon/index', { allPokemon });
      });
    }
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      users: users,
      // index: indexControllerCallback,
      hardcoded: hardcoded,
    };
  
  }