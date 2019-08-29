import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Link as ScrollLink, scroller} from 'react-scroll';
import {withRedux} from "../../store/wrapper";
import { withRouter } from 'react-router-dom';

class HeaderTopMenu extends Component{

  state = {
    sectionToScroll: ""
  };

  logout(){
    this.props.onLogout();
    this.props.history.push({pathname:'/wylogowano'})
  }

  scrollToSection (destination) {
    this.props.history.push({pathname: '/'});
    this.setState({sectionToScroll: destination})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    scroller.scrollTo(this.state.sectionToScroll, {
      duration: 500,
      smooth: true,
      spy: true,
      offset: -20
    });

  }


  render() {
    return(
      <div className={'row'}>
        <div className={'col-xs-12 header__top-menu__login-register'}>
          {this.props.login && <div className={'header__top-menu__login-register__user-email'}><p>{`Cześć ${this.props.userEmail}`}</p></div>}
          <button className={`header__top-menu__login-register__btn header__top-menu__login-register__btn--login ${this.props.login && 'header__top-menu__login-register__btn--pressed'}`}>{this.props.login?<Link to={'/oddaj-rzeczy'}>Oddaj rzeczy</Link> : <Link to={'/logowanie'}>Zaloguj</Link>}</button>
          <button className={`header__top-menu__login-register__btn header__top-menu__login-register__btn--login ${!this.props.login && 'header__top-menu__login-register__btn--pressed'}`}>{this.props.login? <a href={'#'} onClick={() => this.logout()}>Wyloguj</a>: <Link to={'/rejestracja'}>Załóż konto</Link> }</button>
        </div>
        <nav className={'col-xs-12 header__top-menu__navigation'}>
          <button className={'header__top-menu__navigation__btn header__top-menu__navigation__btn--pressed'}>Start</button>
          <button className={'header__top-menu__navigation__btn'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('simpleStepsSection')}>O co chodzi?</p>
              :
              <ScrollLink to={'simpleStepsSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>O co chodzi?</ScrollLink>
            }
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('aboutSection')}>O co chodzi?</p>
              :
              <ScrollLink to={'aboutSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>O nas</ScrollLink>
            }
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('whoWheHelpSection')}>O co chodzi?</p>
              :
              <ScrollLink to={'whoWheHelpSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>Fudacja i organizacje</ScrollLink>
            }
          </button>
          <button className={'header__top-menu__navigation__btn'}>
            {this.props.history.location.pathname !== '/'?
              <p onClick={() => this.scrollToSection('contactSection')}>O co chodzi?</p>
              :
              <ScrollLink to={'contactSection'} spy={true} activeClass="active" smooth={true} offset={-20} duration= {500}>Kontakt</ScrollLink>
            }
          </button>
        </nav>
      </div>
    )
  }
}

const wrappedComponent = withRouter(HeaderTopMenu);
const connectedComponent = withRedux(wrappedComponent);
export {connectedComponent as HeaderTopMenu}