import React, {Component} from "react";
import ListItem from "./ListItem";

class PaginationList extends Component{

  constructor(props){
    super(props);
    this.state = {
      list: this.props.list,
      currentPage: 1,
      itemsPerPage: 3
    }
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
      return (
        <li className={this.state.currentPage === number? 'list-btn-section__btn list-btn-section__btn--selected': 'list-btn-section__btn'} key={number} id={number} onClick={event => this.handleClick(event)}>
          {number}
        </li>
      );
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

export default PaginationList