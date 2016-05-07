import { assert } from 'chai';
import nunjucks from 'nunjucks';
import Velocity from 'velocity-animate';

import { Accordion } from './Accordion';

let accordion;

describe('Accordion', () => {
  before(() => {
    fixture.setBase('src');
  });

  beforeEach(() => {
    accordion = fixture.load('accordion/Accordion.test.html');

    document.body.insertAdjacentHTML('afterbegin', accordion);
  });

  afterEach(() => {
    //document.body.removeChild(document.getElementById('accordion'));
  });

  it('should initialize', () => {
    Accordion.init('#accordion', 300);

    assert.isDefined(Accordion.accordion);
    assert.equal(Accordion.transitionDuration, 300);
    assert.equal(Accordion.accordionSections.length, 2);
  });

  it('can open accordion section', () => {
    let section = document.querySelector('.js-accordion-section');
    let sectionContent = document.querySelector('.js-accordion-section-content');

    Accordion.openAccordionSection(section, sectionContent);

    assert.equal(section.getAttribute(`aria-expanded`), `true`);
  });
});
