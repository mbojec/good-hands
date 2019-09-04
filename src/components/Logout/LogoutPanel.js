import React from "react";
import {Decoration} from "../../assets/svg";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

const LogoutPanel = (props) => {

  return(
      <div className={'login-container row'}>
        <div className={'col-xl-12 logout-title'}>
          <p>Wylogowanie nastąpiło <br/> pomyślnie!</p>
          <Decoration/>
        </div>
        <div className={'col-xl-12 logout-section'}>
          <button className={'logout-btn'} onClick={() => props.history.push({pathname:'/'})}>Strona główna</button>
        </div>
      </div>
    )
};

LogoutPanel.propTypes = {
  history: PropTypes.object,
};

const LogoutPanelHoc = withRouter(LogoutPanel);
export {LogoutPanelHoc as LogoutPanel}