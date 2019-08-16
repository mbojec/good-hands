import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";

class HomeWhoWeHelp extends Component{
  render() {
    return(
      <div className={'help-container'} >
        <div className={'row'} style={{height: '100%'}}>
          <div className={'col-xs-12 help-title'}>
            <p>Komu pomagamy?</p>
            <div className={'help-title__decoration'}>
              <Decoration/>
            </div>
          </div>
          <div className={'col-xs-3'}/>
          <div className={'col-xs-6 help-menu'}>
            <button className={'help-menu__btn help-menu__btn--selected'}>Fundacjom</button>
            <button className={'help-menu__btn'}>Organizacjom <br/> pozarządowym</button>
            <button className={'help-menu__btn'}>Lokalnym <br/> zbiórkom</button>
          </div>
          <div className={'col-xs-3'}/>
          <div className={'col-xs-3'}/>
          <div className={'col-xs-6'}>
            <p className={'help-foundations__desc'}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
          </div>
          <div className={'col-xs-3'}/>
          <div className={'col-xs-1'}/>
          <div className={'col-xs-10'}>
          </div>
          <div className={'col-xs-1'}/>
        </div>
      </div>
    )
  }
}

export default HomeWhoWeHelp;