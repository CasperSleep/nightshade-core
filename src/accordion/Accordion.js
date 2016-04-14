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
    this.accordionSection  = document.querySelectorAll(this.accordionSection);

    for (let i = 0; i < this.accordionSection.length; i++){
      let trigger = this.accordionSection[i].querySelectorAll(this.accordionSectionTrigger);
      trigger = trigger[0];

      let content = this.accordionSection[i].querySelectorAll(this.accordionSectionContent);
      content = content[0];

      trigger.setAttribute(`touch-action`, `none`);
      content.setAttribute(`aria-expanded`, false)

      trigger.addEventListener('pointerup', (e) => {
        e.stopPropagation();

        if (content.classList.contains(this.openClass)) {
          this.closeAccordionSection(content);
        }
        else {
          this.openAccordionSection(content);
        }
      });
    }
  },

  /**
   * Opens the given Accordion section
   * @returns {void}
  */
  openAccordionSection(section) {
    section.setAttribute(`aria-expanded`, true)
    section.classList.add(this.openClass);
  },

  /**
   * Closes the given Accordion section
   * @returns {void}
  */
  closeAccordionSection(section) {
    section.setAttribute(`aria-expanded`, false)
    section.classList.remove(this.openClass);
  },
};
