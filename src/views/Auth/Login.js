import React from 'react';

export class Login extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.state = {}
  }
  _submitForm(evt) {
    evt.preventDefault();
    const {actions} = this.props;
    actions.currentUser.login(this.state);
    this.context.router.replace('/');
  }

  _onChange(field) {
    return (evt) => {
      this.setState({
        [field]: evt.target.value
      })
    }
  }

  render() {
    return (
      <div className="page">
        <form onSubmit={this._submitForm.bind(this)}>
          <input
            type="email"
            onChange={this._onChange('email')}
            placeholder="Insert your email" />
          <input
            type="submit"
            value="Login" />
        </form>
      </div>
    )
  }
};

export default Login;
