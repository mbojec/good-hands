import React, { Component } from 'react';
import { HomeContact } from '../Home';
import { FormIntro, FormContainer, FormInfoStrap } from '../Form';
import { compose } from 'recompose';
import { withRedux } from '../../store/wrapper';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Form extends Component {
  componentDidMount() {
    !this.props.login && this.props.history.push({ pathname: '/logowanie' });
  }

  render() {
    return (
      <>
        <main className={'app-main'}>
          <section id={'introSection'} className={'app-intro'}>
            <FormIntro />
          </section>
          <section id={'infoSection'} className={'app-info-strap-section'}>
            <FormInfoStrap />
          </section>
          <section id={'formSection'} className={'app-form-section'}>
            <FormContainer />
          </section>
        </main>
        <footer className={'app-footer'}>
          <section id={'contactSection'} className={'app-contact-section'}>
            <HomeContact />
          </section>
        </footer>
      </>
    );
  }
}
Form.propTypes = {
  login: PropTypes.bool,
  history: PropTypes.object,
};

const FormHoc = compose(
  withRedux,
  withRouter,
)(Form);
export { FormHoc as Form };
