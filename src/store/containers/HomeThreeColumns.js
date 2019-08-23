import { connect } from 'react-redux';
import {HomeThreeColumnsBasic} from "../../components/Home";

const mapStateToProps = state => {
  return {
    bags: state.firebase.bags,
    organizations: state.firebase.organizations,
    founds: state.firebase.founds,
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps) (HomeThreeColumnsBasic);
export {connectedComponent as HomeThreeColumns}