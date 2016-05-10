import assert from 'assert';

import { Accordion } from './Accordion';

// import { env } from '../../nunjucks-helper.js';

let accordion;

const isHidden = (el) => {
  const style = window.getComputedStyle(el);

  return (style.display === `none`);
};

describe(`Accordion`, () => {
  before(() => {
    fixture.setBase(`src`);
  });

  beforeEach(() => {
    accordion = fixture.load(`accordion/Accordion.test.html`);

    document.body.insertAdjacentHTML(`afterbegin`, accordion);
  });

  afterEach(() => {
    accordion = document.querySelector(`#accordion`);
    accordion.parentNode.removeChild(accordion);
  });

  it(`should initialize`, () => {
    Accordion.init(`#accordion`);

    assert(Accordion.accordion);
    assert.equal(Accordion.transitionDuration, 300);
  });

  it(`should initialize with custom transitionDuration`, () => {
    Accordion.init(`#accordion`, 100);

    assert.equal(Accordion.transitionDuration, 100);
  });

  it(`should initialize with visible sectionContent`, () => {
    Accordion.init(`#accordion`);

    const sectionContents = document.querySelectorAll(`.js-accordion-section-content`);

    for (let i = 0; i < sectionContents.length; i++) {
      assert(!isHidden(sectionContents[i]));
    }
  });

  it(`can toggle accordion section`, (done) => {
    Accordion.init(`#accordion`, 0);

    const section = document.querySelector(`.js-accordion-section`);
    const sectionContent = document.querySelector(`.js-accordion-section-content`);

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
