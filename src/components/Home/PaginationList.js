import React, {Component} from "react";
import {ListItem} from "./ListItem";
import PropTypes from "prop-types";

export class PaginationList extends Component{

  constructor(props){
    super(props);
    let list = this.createList();
    this.state = {
      list: [...list],
      currentPage: 1,
      itemsPerPage: 3
    }
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.list.length === 0){
      let list = this.createList();
      this.setState({list: [...list]})
    }
  }

  createList(){
    const newList = [];
    for(let key in this.props.list){
      newList.push(this.props.list[key])
    }
    return newList;
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { list, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item, index) => {
      return <li key={index}><ListItem listItem={item}/></li>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if(pageNumbers.length <= 1){
        return null;
      } else {
        return (
          <li className={this.state.currentPage === number? 'list-btn-section__btn list-btn-section__btn--selected': 'list-btn-section__btn'} key={number} id={number} onClick={event => this.handleClick(event)}>
            {number}
          </li>
        );
      }
    });

    return(
      <div className={'list'}>
        <ul className={'list-items-section'}>
          {renderItems}
        </ul>
        <ul className={'list-btn-section'}>
          {renderPageNumbers}
        </ul>
      </div>
    )
  }

}

PaginationList.propTypes = {
  list: PropTypes.any,
};