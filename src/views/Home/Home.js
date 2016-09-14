import React from 'react';
import {connect} from 'react-redux';

export const Home = (props) => {
  const {currentTime, actions} = props;

  return (
    <div className="content">
      <h1>Welcome</h1>
      <p>The time is {currentTime.toString()}</p>
      <button onClick={() => actions.currentTime.updateTime({})}>
        Update time
      </button>
    </div>
  );
}

export default connect(state => ({
  currentTime: state.currentTime.currentTime
}))(Home);
