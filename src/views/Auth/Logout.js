import React from 'react';

export class Logout extends React.Component {
  static contextTypes: {
    router: React.PropTypes.object
  }

  _onLogout() {
    const {actions} = this.props;
    actions.currentUser.logout();
    this.context.router.replace('/');
  }

  render() {
    return (
      <div className="content">
        <p>Are you sure you want to logout?</p>
        <button onClick={this._onLogout.bind(this)}>
          Logout
        </button>
      </div>
    );
  }
}

export default Logout;
