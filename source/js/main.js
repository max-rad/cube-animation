import {initAccordion} from './modules/accordion/init-accordion';
import {initCustomSelect} from './modules/custom-select/init-custom-select';
import {initHeader} from './modules/header/init-header';
import {initModals} from './modules/modal/init-modals';
import {initPhoneMask} from './modules/init-phone-mask';
import {initPhoneValidation} from './modules/init-phone-validation';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initHeader();
    initModals();
    initCustomSelect();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
  });
});
