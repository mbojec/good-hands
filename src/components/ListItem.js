import React, {Component} from "react";


class ListItem extends Component{

  render() {
    return(
      <div className={'list-item row'}>
        <div className={'col-xs-7 list-item__titles-section'}>
          <p className={'list-item__titles-section__title'}>{this.props.listItem.title}</p>
          <p className={'list-item__titles-section__subtitle'}>{this.props.listItem.subtitle}</p>
        </div>
        <div className={'col-xs-5 list-item__info-section'}>
          <p className={'list-item__info-section__info'}>{this.props.listItem.info}</p>
        </div>
      </div>
    )
  }
}

export default ListItem