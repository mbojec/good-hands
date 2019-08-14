import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";
import Things from "../assets/svg/Things";
import Bag from "../assets/svg/Bag";
import MagnifeGlass from "../assets/svg/Magnife-Glass";
import Reload from "../assets/svg/Reload";
import {Link} from 'react-router-dom';


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
                  <Things/>
                </div>
                <p>Wybierze rzeczy</p>
                <hr/>
                <p>ubrania, zabawki, <br/>sprzęt i inne</p>
              </div>
              <div className={'simple-steps-row__single-icon-container'}>
                <div className={'simple-steps-row__single-icon-container__icon'}>
                  <Bag/>
                </div>
                <p>Spakuj je</p>
                <hr/>
                <p>skorzystaj z <br/>worków na śmieci</p>
              </div>
              <div className={'simple-steps-row__single-icon-container'}>
                <div className={'simple-steps-row__single-icon-container__icon'}>
                  <MagnifeGlass/>
                </div>
                <p>Zecyduj komu <br/>chcesz pomóc</p>
                <hr/>
                <p>wybierz zaufane <br/>miejsce</p>
              </div>
              <div className={'simple-steps-row__single-icon-container'}>
                <div className={'simple-steps-row__single-icon-container__icon'}>
                  <Reload/>
                </div>
                <p>Zamów kuriera</p>
                <hr/>
                <p>kurier przyjedzie <br/>w dogodnym terminie</p>
              </div>
            </div>
            <div className={'col-xs-2'}/>
          </div>
          <div className={'col-xs-12 simple-steps-btn-section'}>
            <button className={'simple-steps-btn-section__btn'}><Link to={'/logowanie'}>ODDAJ <br/> RZECZY</Link></button>
          </div>
        </div>
      </div>
    )
  }

}

export default HomeSimpleStep