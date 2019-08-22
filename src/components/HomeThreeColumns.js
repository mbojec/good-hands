import React, {Component} from "react";
import { connect } from 'react-redux';

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

class HomeThreeColumns extends Component{
    render() {
      return(
        <div className={'three-columns-container'}>
          <div className={'row--ful-height'}>
            <div className={'col-xs-3 three-columns__single-column'}>
              <p className={'three-columns__single-column__number'}>{this.props.bags}</p>
              <p className={'three-columns__single-column__title'}>ODDANYCH WORKÓW</p>
              <p className={'three-columns__single-column__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipisc
                Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat.</p>
            </div>
            <div className={'col-xs-1'}/>
            <div className={'col-xs-4 three-columns__single-column'}>
              <p className={'three-columns__single-column__number'}>{this.props.organizations}</p>
              <p className={'three-columns__single-column__title'}>WSPARTYCH ORGANIZACJI</p>
              <p className={'three-columns__single-column__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipisc
                Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat.</p>
            </div>
            <div className={'col-xs-1'}/>
            <div className={'col-xs-3 three-columns__single-column'}>
              <p className={'three-columns__single-column__number'}>{this.props.founds}</p>
              <p className={'three-columns__single-column__title'}>ZORGANIZOWANYCH ZBIÓREK</p>
              <p className={'three-columns__single-column__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipisc
                Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat.</p>
            </div>
          </div>
        </div>
      )
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps) (HomeThreeColumns);
export {connectedComponent as HomeThreeColumns}