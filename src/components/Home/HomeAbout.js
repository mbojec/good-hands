import React from 'react';
import { Decoration, Signature } from '../../assets/svg';

export function HomeAbout() {
  return (
    <div className={'about-container row'}>
      <div className={'col-xs-5 about-desc-section'}>
        <p className={'about-desc-section__title'}>O nas</p>
        <div className={'about-desc-section__decoration'}>
          <Decoration />
        </div>
        <p className={'about-desc-section__desc'}>
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <div className={'about-desc-section__signature'}>
          <Signature />
        </div>
      </div>
      <div className={'col-xs-1'} />
      <div className={'col-xs-6 about-image-container'} />
    </div>
  );
}
