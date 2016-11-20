import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Model

const initialModel = 0

// Actions

const Msg = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
}

// Update

export const Update = (state = initialModel, msg) => {
  switch (msg.type) {
    case Msg.INCREMENT:
      return state + 1;
    case Msg.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

// View

const App = ({count, onIncrementClick, onDecrementClick}) => {
  return (
    <div>
      <h1> Count: { count } </h1>
      <button onClick={ onIncrementClick }> + </button>
      <button onClick={ onDecrementClick }> - </button>
    </div>
  )
}

App.propTypes = {
  count: PropTypes.string.isRequird,
  onIncrementClick: PropTypes.func.isRequird,
  onDecrementClick: PropTypes.func.isRequird
}

const mapStateToProps = (state) => {
  return { count: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: () => {
      dispatch({ type: Msg.INCREMENT })
    },
    onDecrementClick: () => {
      dispatch({ type: Msg.DECREMENT })
    }
  }
}

const AppComponent = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppComponent;
