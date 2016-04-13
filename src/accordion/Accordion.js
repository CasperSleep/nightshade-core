/**
 * @overview An Accordion module comprised of sections that toggle open and close
 * @module Accordion.js
*/

export const Accordion = {

  /**
   * Inits accordion elements
   * @returns {void}
  */
  init() {
    this.accordionSection  = document.getElementsByClassName(`js-accordion-section`);

    for (let i = 0; i < this.accordionSection.length; i++){
      let trigger = this.accordionSection[i].getElementsByClassName(`js-accordion-section-toggle`);
      trigger = trigger[0];

      let content = this.accordionSection[i].getElementsByClassName(`js-accordion-section-content`);
      content = content[0];

      trigger.setAttribute(`touch-action`, `none`);
      content.setAttribute(`aria-expanded`, false)

      trigger.addEventListener('pointerup', (e) => {
        e.stopPropagation();

        if (content.classList.contains(`open`)) {
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
  openAccordionSection(section){
    section.setAttribute(`aria-expanded`, true)
    section.classList.add(`open`);
  },

  /**
   * Closes the given Accordion section
   * @returns {void}
  */
  closeAccordionSection(section){
    section.setAttribute(`aria-expanded`, false)
    section.classList.remove(`open`);
  },
};
