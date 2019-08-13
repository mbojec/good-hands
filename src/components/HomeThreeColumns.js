import React, {Component} from "react";

class HomeThreeColumns extends Component{
  render() {
    return(
      <div className={'three-columns-container'}>
        <div className={'row'} style={{height: '100%'}}>
          <div className={'col-xs-3 three-columns__single-column'}>
            <p className={'three-columns__single-column__number'}>10</p>
            <p className={'three-columns__single-column__title'}>ODDANYCH WORKÓW</p>
            <p className={'three-columns__single-column__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipisc
              Pellentesque vel enim a elit viverra elementuma.
              Aliquam erat volutpat.</p>
          </div>
          <div className={'col-xs-1'}/>
          <div className={'col-xs-4 three-columns__single-column'}>
            <p className={'three-columns__single-column__number'}>5</p>
            <p className={'three-columns__single-column__title'}>WSPARTYCH ORGANIZACJI</p>
            <p className={'three-columns__single-column__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipisc
              Pellentesque vel enim a elit viverra elementuma.
              Aliquam erat volutpat.</p>
          </div>
          <div className={'col-xs-1'}/>
          <div className={'col-xs-3 three-columns__single-column'}>
            <p className={'three-columns__single-column__number'}>7</p>
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

export default HomeThreeColumns;