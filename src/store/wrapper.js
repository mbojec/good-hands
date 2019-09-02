import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add, asyncRemove, remove, logIn,logOut, setUid, fetchData} from "./actions/firebase";
import {moveNext, movePrev, saveData} from "./actions/form";

export function withRedux(WrappedComponent) {
  class withReduxComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onAddInfo: (data) => dispatch(add(data)),
      onClear: () => dispatch(asyncRemove()),
      onSetUid: (uid) => dispatch(setUid(uid)),
      onFetchData:(firebase) => dispatch(fetchData(firebase)),
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
      uid: state.firebase.uid,
      bags: state.firebase.numberOfBags,
      organizations: state.firebase.numberOfOrganizations,
      founds: state.firebase.numberOfFounds,
      login: state.firebase.login,
      userEmail: state.firebase.userEmail,
      formStep: state.form.formStep,
      numberOfBags: state.form.numberOfBags,
      devotedThing: state.form.devotedThing,
      foundationCity: state.form.foundationCity,
      targetGroup: state.form.targetGroup,
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