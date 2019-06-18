import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../state/Actions";

class Home extends Component {
  state = {
    fields: {
      user: "",
      password: ""
    }
  };
  handleInputChange = evt => {
    const { fields } = this.state;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { fields } = this.state;
    this.props.handleLogin(fields);
  };

  render() {
    const { user, password } = this.state.fields;
    return (
      <main className="home">
        <form className="home__form " onSubmit={this.handleSubmit}>
          <h1 className="home__title">Inicia Sesion</h1>
          <label>Usuario:</label>
          <input
            name="user"
            value={user}
            onChange={this.handleInputChange}
            type="text"
          />
          <label>Contraseña</label>
          <input
            value={password}
            onChange={this.handleInputChange}
            type="password"
            name="password"
          />
          <button type="submit">Iniciar sesion</button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogin(fields) {
    dispatch(loginUser(fields));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
