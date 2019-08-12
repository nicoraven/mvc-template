var React = require("react");

class Users extends React.Component {
  render() {

    let users = this.props.users.map((user, index) => {
        return (
            <li key={index}>{user.username}</li>
        );
    });

    return (
      <html>
        <head>
            <title>{this.props.title}</title>
        </head>
        <body>
            <h1>List of all users</h1>
            <ul>
                {users}
            </ul>
        </body>
      </html>
    );
  }
}

module.exports = Users;