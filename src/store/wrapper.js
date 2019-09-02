import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add, asyncRemove, remove, logIn,logOut} from "./actions/firebase";
import {moveNext, movePrev, saveData} from "./actions/form";

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
      onLogin: (userEmail) => dispatch(logIn(userEmail)),
      onLogout: () => dispatch(logOut()),
      onMoveNext:() => dispatch(moveNext()),
      onMovePrev:() => dispatch(movePrev()),
      onSaveData:(data) => dispatch(saveData(data))
    }
  };

  const mapStateToProps = state => {
    return {
      bags: state.firebase.bags,
      organizations: state.firebase.organizations,
      founds: state.firebase.founds,
      login: state.firebase.login,
      userEmail: state.firebase.userEmail,
      formStep: state.form.formStep,
      numberOfBags: state.form.numberOfBags,
      devotedThing: state.form.devotedThing,
      foundationCity: state.form.foundationCity,
      children: state.form.children,
      singleMothers: state.form.singleMothers,
      homeless: state.form.homeless,
      handicap: state.form.handicap,
      elderPeople: state.form.elderPeople,
      organizationName: state.form.organizationName,
      street: state.form.street,
      city: state.form.city,
      postalCode: state.form.postalCode,
      phoneNumber: state.form.phoneNumber,
      date: state.form.date,
      time: state.form.time,
      comments: state.form.comments,
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(withReduxComponent)
}