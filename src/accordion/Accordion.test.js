import assert from 'assert';

import { Accordion } from './Accordion';

import { env } from '../../nunjucks-helper.js';

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
    console.log(env.render('accordion/Accordion.test.html'));
    //accordion = fixture.load(env.render('accordion/Accordion.test.html'));
    //console.log(accordion);

    document.body.insertAdjacentHTML('afterbegin', accordion);
  });

  afterEach(() => {
    accordion = document.querySelector('#accordion');
    accordion.parentNode.removeChild(accordion);
  });

  it('should initialize', () => {
    Accordion.init('#accordion');

    assert(Accordion.accordion);
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
      assert(!isHidden(sectionContents[i]));
    }
  });

  it('can toggle accordion section', (done) => {
    Accordion.init('#accordion', 0);

    let section = document.querySelector('.js-accordion-section');
    let sectionContent = document.querySelector('.js-accordion-section-content');

    // close the accordion
    Accordion.toggleAccordionSection(section, sectionContent);

    setTimeout(() => {
      assert(!isHidden(sectionContent));
      done();
    }, 0);

    // open the accordion
    Accordion.toggleAccordionSection(section, sectionContent);

    setTimeout(() => {
      assert(isHidden(sectionContent));
      done();
    }, 0);
  });
});
