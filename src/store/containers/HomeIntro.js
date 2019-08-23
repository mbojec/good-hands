import React, {Component} from "react";
import {connect} from "react-redux";
import {add, remove} from "../actions/firebase";
import {HomeIntroBasic} from "../../components/Home";

const mapStateToProps = state => {
  return {
    bags: state.firebase.bags,
    organizations: state.firebase.organizations,
    founds: state.firebase.founds,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddInfo: () => dispatch(add({bags: 5, organizations: 7, founds: 10})),
    onClear: () => dispatch(remove())
  }
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps) (HomeIntroBasic);
export {connectedComponent as HomeIntro}