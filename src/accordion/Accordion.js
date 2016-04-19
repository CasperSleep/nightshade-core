/**
 * @overview An Accordion module comprised of sections that toggle open and close
 * @module Accordion.js
*/

export const Accordion = {

  accordionSection : `.js-accordion-section`,
  accordionSectionTrigger: `.js-accordion-section-toggle`,
  accordionSectionContent: `.js-accordion-section-content`,
  openClass: `is-open`,

  /**
   * Inits accordion elements
   * @returns {void}
  */
  init() {
    const accordionSections  = document.querySelectorAll(this.accordionSection);

    [...accordionSections].forEach((el) => {
      let trigger = el.querySelector(this.accordionSectionTrigger);
      let content = el.querySelector(this.accordionSectionContent);

      trigger.setAttribute(`touch-action`, `none`);
      content.setAttribute(`aria-expanded`, false)

      trigger.addEventListener(`pointerup`, (e) => {
        e.stopPropagation();

        if (content.classList.contains(this.openClass)) {
          this.closeAccordionSection(trigger, content);
        } else {
          this.openAccordionSection(trigger, content);
        }
      });
    });
  },

  /**
   * Opens the given Accordion section
   * @returns {void}
  */
  openAccordionSection(trigger, section) {
    section.setAttribute(`aria-expanded`, true)
    section.classList.add(this.openClass);
    trigger.classList.add(this.openClass);
  },

  /**
   * Closes the given Accordion section
   * @returns {void}
  */
  closeAccordionSection(trigger, section) {
    section.setAttribute(`aria-expanded`, false)
    section.classList.remove(this.openClass);
    trigger.classList.remove(this.openClass);
  },
};
