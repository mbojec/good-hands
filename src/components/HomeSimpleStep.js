import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";
import Icon1 from "../assets/svg/Icon-1";
import Icon2 from "../assets/svg/Icon-2";
import Icon3 from "../assets/svg/Icon-3";
import Icon4 from "../assets/svg/Icon-4";

class HomeSimpleStep extends Component{
  render() {
    return(
      <div className={'simple-steps-container'}>
        <div className={'row'} style={{height: '100%'}}>
          <div className={'col-xs-12 simple-steps-title'}>
            <p>Wystarczą 4 proste kroki</p>
            <Decoration/>
          </div>
          <div className={'col-xs-12 row simple-steps-row'}>
            <div className={'col-xs-2'}/>
            <div className={'col-xs-8 simple-steps-row__icons-container'}>
              <div className={'simple-steps-row__single-icon-container'}>
                <div className={'simple-steps-row__single-icon-container__icon'}>
                  <Icon1/>
                </div>
                <p>Wybierze rzeczy</p>
                <hr/>
                <p>ubrania, zabawki, <br/>sprzęt i inne</p>
              </div>
              <div className={'simple-steps-row__single-icon-container'}>
                <div className={'simple-steps-row__single-icon-container__icon'}>
                  <Icon2/>
                </div>
                <p>Spakuj je</p>
                <hr/>
                <p>skorzystaj z <br/>worków na śmieci</p>
              </div>
              <div className={'simple-steps-row__single-icon-container'}>
                <div className={'simple-steps-row__single-icon-container__icon'}>
                  <Icon3/>
                </div>
                <p>Zecyduj komu <br/>chcesz pomóc</p>
                <hr/>
                <p>wybierz zaufane <br/>miejsce</p>
              </div>
              <div className={'simple-steps-row__single-icon-container'}>
                <div className={'simple-steps-row__single-icon-container__icon'}>
                  <Icon4/>
                </div>
                <p>Zamów kuriera</p>
                <hr/>
                <p>kurier przyjedzie <br/>w dogodnym terminie</p>
              </div>
            </div>
            <div className={'col-xs-2'}/>
          </div>
          <div className={'col-xs-12 simple-steps-btn-section'}>
            <button className={'simple-steps-btn-section__btn'}>ODDAJ <br/> RZECZY</button>
          </div>
        </div>
      </div>
    )
  }

}

export default HomeSimpleStep