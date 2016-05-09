/**
 * @overview An Accordion module comprised of sections that toggle open and close
 * @module Accordion.js
*/

export const Accordion = {

  accordionSection : `.js-accordion-section`,
  accordionSectionContent : `.js-accordion-section-content`,
  accordionSectionTrigger: `.js-accordion-section-toggle`,
  openClass: `is-accordion-open`,

  /**
   * Inits accordion elements
   * @param {string} accordionEl Accordion DOM Element
   * @param {integer} [time=300] Duration for open/close transition in the Accordion
   * @returns {void}
  */
  init(accordionEl, time = 300) {
    this.accordion = document.querySelector(accordionEl);
    this.transitionDuration = time;
    this.accordionSections = this.accordion.querySelectorAll(this.accordionSection);

    [...this.accordionSections].forEach((el) => {
      let trigger = el.querySelector(this.accordionSectionTrigger);
      let sectionContent = el.querySelector(this.accordionSectionContent);

      trigger.setAttribute(`touch-action`, `none`);
      el.setAttribute(`aria-expanded`, false);

      trigger.addEventListener(`pointerup`, (e) => {
        e.stopPropagation();

        this.toggleAccordionSection(el, sectionContent);
      });
    });
  },

  /**
   * Opens the given Accordion section
   * @param {object} section DOM element to toggle state class on
   * @returns {void}
  */
  openAccordionSection(section, sectionContent) {
    section.setAttribute(`aria-expanded`, true)
    section.classList.add(this.openClass);
    Velocity(sectionContent, `slideDown`, this.transitionDuration);
  },

  /**
   * Closes the given Accordion
   * @param {object} section DOM element to toggle state class on
   * @returns {void}
  */
  closeAccordionSection(section, sectionContent) {
    section.setAttribute(`aria-expanded`, false)
    section.classList.remove(this.openClass);
    Velocity(sectionContent, `slideUp`, this.transitionDuration);
  },

  /**
   * Toggles the given Accordion section
   * @param {object} section DOM element to toggle state class on
   * @returns {void}
  */
  toggleAccordionSection(section, sectionContent) {
    if (section.classList.contains(this.openClass)) {
      this.closeAccordionSection(section, sectionContent);
    } else {
      this.openAccordionSection(section, sectionContent);
    }
  },
};
