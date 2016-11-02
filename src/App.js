import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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
      dispatch({ type: 'INCREMENT' })
    },
    onDecrementClick: () => {
      dispatch({ type: 'DECREMENT' })
    }
  }
}

const AppComponent = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppComponent;
