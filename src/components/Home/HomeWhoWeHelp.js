import React, {Component} from "react";
import {PaginationList} from "./PaginationList";
import {Decoration} from "../../assets/svg";

const list = [
  {
    title: `Fundacja "Dbam o Zdrowie"`,
    subtitle: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
    info: `ubrania, jedzenie, sprzęt AGD, meble, zabawki`
  },
  {
    title: `Fundacja  “Dla dzieci”`,
    subtitle: `Cel i misja: Pomoc dzieciom z ubogich rodzin.`,
    info: `ubrania, meble, zabawki`
  },
  {
    title: `Fundacja  “Bez domu”`,
    subtitle: `Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.`,
    info: `ubrania, jedzenie, ciepłe koce`
  },
  {
    title: `Fundacja "Dbam o Zdrowie2"`,
    subtitle: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
    info: `ubrania, jedzenie, sprzęt AGD, meble, zabawki`
  },
  {
    title: `Fundacja  “Dla dzieci2”`,
    subtitle: `Cel i misja: Pomoc dzieciom z ubogich rodzin.`,
    info: `ubrania, meble, zabawki`
  },
  {
    title: `Fundacja  “Bez domu2”`,
    subtitle: `Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.`,
    info: `ubrania, jedzenie, ciepłe koce`
  },
  {
    title: `Fundacja "Dbam o Zdrowie3"`,
    subtitle: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
    info: `ubrania, jedzenie, sprzęt AGD, meble, zabawki`
  },
  {
    title: `Fundacja  “Dla dzieci3”`,
    subtitle: `Cel i misja: Pomoc dzieciom z ubogich rodzin.`,
    info: `ubrania, meble, zabawki`
  },
  {
    title: `Fundacja  “Bez domu3”`,
    subtitle: `Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.`,
    info: `ubrania, jedzenie, ciepłe koce`
  },
];

const list2 = [
  {
    title: `Organizacja  “Lorem Ipsum 1”`,
    subtitle: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
    info: `Egestas, sed, tempus `
  },
  {
    title: `Organizacja  “Lorem Ipsum 2”`,
    subtitle: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
    info: `Egestas, sed, tempus `
  },
  {
    title: `Organizacja  “Lorem Ipsum 3”`,
    subtitle: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
    info: `Egestas, sed, tempus `
  },
  {
    title: `Organizacja  “Lorem Ipsum 4”`,
    subtitle: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
    info: `Egestas, sed, tempus `
  },
  {
    title: `Organizacja  “Lorem Ipsum 5”`,
    subtitle: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
    info: `Egestas, sed, tempus `
  },
  {
    title: `Organizacja  “Lorem Ipsum 6”`,
    subtitle: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
    info: `Egestas, sed, tempus `
  }
];

const list3 = [
  {
    title: `Zbiórka  “Lorem Ipsum 1”`,
    subtitle: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. `,
    info: `Mi, quis, hendrerit, dolor `
  },
  {
    title: `Zbiórka  “Lorem Ipsum 2”`,
    subtitle: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. `,
    info: `Mi, quis, hendrerit, dolor `
  },
  {
    title: `Zbiórka  “Lorem Ipsum 3”`,
    subtitle: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. `,
    info: `Mi, quis, hendrerit, dolor `
  }
];


export class HomeWhoWeHelp extends Component{

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
      currentList = list;
    } else if(this.state.currentList === 1){
      currentList = list2;
    } else {
      currentList = list3;
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