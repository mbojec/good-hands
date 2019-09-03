import React, {Component} from "react";
import {PaginationList} from "./PaginationList";
import {Decoration} from "../../assets/svg";
import {withRedux} from "../../store/wrapper";

class HomeWhoWeHelp extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentList: 0
    }
  }

  handleClick(event) {
    this.setState({
      currentList: Number(event.target.id)
    });
  }

  render() {
    let currentList;
    if(this.state.currentList === 0){
      currentList = this.props.foundationsList;
    } else if(this.state.currentList === 1){
      currentList = this.props.organizationsList;
    } else {
      currentList = this.props.collectionsList;
    }

    return(
      <div className={'help-container'} >
        <div className={'row--ful-height'}>
          <div className={'col-xs-12 help-title'}>
            <p>Komu pomagamy?</p>
            <div className={'help-title__decoration'}>
              <Decoration/>
            </div>
          </div>
          <div className={'col-xs-3'}/>
          <div className={'col-xs-6 help-menu'}>
            <button id={0} className={this.state.currentList === 0? 'help-menu__btn help-menu__btn--selected':'help-menu__btn'} onClick={event => this.handleClick(event)}>Fundacjom</button>
            <button id={1} className={this.state.currentList === 1? 'help-menu__btn help-menu__btn--selected':'help-menu__btn'} onClick={event => this.handleClick(event)}>Organizacjom <br/> pozarządowym</button>
            <button id={2} className={this.state.currentList === 2? 'help-menu__btn help-menu__btn--selected':'help-menu__btn'} onClick={event => this.handleClick(event)}>Lokalnym <br/> zbiórkom</button>
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
            <PaginationList key={this.state.currentList} list={currentList}/>
          </div>
          <div className={'col-xs-1'}/>
        </div>
      </div>
    )
  }
}


const HomeWhoWeHelpHoc = withRedux(HomeWhoWeHelp);
export {HomeWhoWeHelpHoc as HomeWhoWeHelp}