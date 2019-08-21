import React from "react";

export function  ListItem({listItem}) {
    return(
      <div className={'list-item row'}>
        <div className={'col-xs-7 list-item__titles-section'}>
          <p className={'list-item__titles-section__title'}>{listItem.title}</p>
          <p className={'list-item__titles-section__subtitle'}>{listItem.subtitle}</p>
        </div>
        <div className={'col-xs-5 list-item__info-section'}>
          <p className={'list-item__info-section__info'}>{listItem.info}</p>
        </div>
      </div>
    )
  }

