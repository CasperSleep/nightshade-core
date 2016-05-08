import { assert } from 'chai';
import nunjucks from 'nunjucks';
import Velocity from 'velocity-animate';

import { Accordion } from './Accordion';

let accordion;

const isHidden = (el) => {
  let style = window.getComputedStyle(el);

  return (style.display === 'none');
};

describe('Accordion', () => {
  before(() => {
    fixture.setBase('src');

  });

  beforeEach(() => {
    accordion = fixture.load('accordion/Accordion.test.html');

    document.body.insertAdjacentHTML('afterbegin', accordion);
  });

  afterEach(() => {
    accordion = document.querySelector('#accordion');
    accordion.parentNode.removeChild(accordion);
  });

  it('should initialize', () => {
    Accordion.init('#accordion');

    assert.isDefined(Accordion.accordion);
    assert.equal(Accordion.transitionDuration, 300);
  });

  it('should initialize with custom transitionDuration', () => {
    Accordion.init('#accordion', 100);

    assert.equal(Accordion.transitionDuration, 100);
  })

  it('should initialize with visible sectionContent', () => {
    Accordion.init('#accordion');

    const sectionContents = document.querySelectorAll('.js-accordion-section-content');

    for (var i = 0; i < sectionContents.length; i++) {
      assert.isFalse(isHidden(sectionContents[i]));
    }
  });

  it('can close accordion section', () => {
    Accordion.init('#accordion', 0);

    let section = document.querySelector('.js-accordion-section');
    let sectionContent = document.querySelector('.js-accordion-section-content');

    Accordion.closeAccordionSection(section, sectionContent);

    setTimeout(() => {
      assert.isFalse(isHidden(sectionContent));
    }, 0);
  });

  it('can open accordion section', () => {
    Accordion.init('#accordion', 0);

    let section = document.querySelector('.js-accordion-section');
    let sectionContent = document.querySelector('.js-accordion-section-content');

    Accordion.openAccordionSection(section, sectionContent);

    setTimeout(() => {
      assert.isTrue(isHidden(sectionContent));
    }, 0);
  });
});
