var React = require("react");

class Login extends React.Component {
  render() {

    return (
      <html>
        <head>
            <title>{this.props.title}</title>
        </head>
        <body>
            <h1>Login</h1>
            <form method="POST" action="/login">
                <label>
                    Username:
                    <input name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input name="password" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;