import React from "react";
import PropTypes from "prop-types";

export function  ListItem({listItem}) {
    return(
      <div className={'list-item row'}>
        <div className={'col-xs-7 list-item__titles-section'}>
          <p className={'list-item__titles-section__title'}>{listItem.title}</p>
          <p className={'list-item__titles-section__subtitle'}>{listItem.mission}</p>
        </div>
        <div className={'col-xs-5 list-item__info-section'}>
          <p className={'list-item__info-section__info'}>{listItem.target}</p>
        </div>
      </div>
    )
  }

ListItem.propTypes = {
  listItem: PropTypes.object
};