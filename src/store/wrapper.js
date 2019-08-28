import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add, asyncRemove, remove} from "./actions/firebase";

export function withRedux(WrappedComponent) {
  class withReduxComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onAddInfo: () => dispatch(add({bags: 5, organizations: 7, founds: 10})),
      onClear: () => dispatch(asyncRemove()),
      onRemove: () => dispatch(remove()),
    }
  };

  const mapStateToProps = state => {
    return {
      bags: state.firebase.bags,
      organizations: state.firebase.organizations,
      founds: state.firebase.founds,
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(withReduxComponent)
}