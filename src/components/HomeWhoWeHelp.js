import React, {Component} from "react";
import Decoration from "../assets/svg/Decoration";
import PaginationList from "./PaginationList";

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
            <PaginationList list={list}/>
          </div>
          <div className={'col-xs-1'}/>
        </div>
      </div>
    )
  }
}

export default HomeWhoWeHelp;