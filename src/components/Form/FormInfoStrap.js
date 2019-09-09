import React, { Component } from 'react';
import { withRedux } from '../../store/wrapper';
import PropTypes from 'prop-types';

class FormInfoStrap extends Component {
  render() {
    let strapContent = '';
    switch (this.props.formStep) {
      case 1: {
        strapContent = 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.';
        break;
      }
      case 2: {
        strapContent = 'Wszystkie rzeczy do oddania zapakuj w 60l worki.  Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.';
        break;
      }
      case 3: {
        strapContent =
          'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje \n' +
          'po ich lokalizacji bądź celu ich pomocy.';
        break;
      }
      case 4: {
        strapContent = 'Podaj adres oraz termin odbioru rzeczy.';
        break;
      }
      default: {
        strapContent = 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.';
      }
    }

    let content = null;
    if (this.props.formStep >= 1 && this.props.formStep < 5) {
      content = (
        <div className={'form__info__container'}>
          <p className={'form__info__header'}>Ważne!</p>
          <p className={'form__info__desc'}>{strapContent}</p>
        </div>
      );
    }
    return content;
  }
}

FormInfoStrap.propTypes = {
  formStep: PropTypes.number,
};

const FormInfoStrapHoc = withRedux(FormInfoStrap);
export { FormInfoStrapHoc as FormInfoStrap };
