var React = require("react");

class Home extends React.Component {
  render() {
    let userMenu = this.props.user? (
        <React.Fragment>
            <p>Welcome {this.props.user.username}!</p>
            <a href="/logout">Logout</a>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <p>Log in to access menu</p>
            <a href="/login">Login</a>
        </React.Fragment>
    );

    return (
      <html>
        <head>
            <title>{this.props.title}</title>
        </head>
        <body>
        <h1>Home Page</h1>
          {userMenu}
        </body>
      </html>
    );
  }
}

module.exports = Home;