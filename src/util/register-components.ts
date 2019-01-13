import Vue from 'vue';
// @ts-ignore
import bAlert from 'bootstrap-vue/es/components/alert/alert';
// @ts-ignore
import bBadge from 'bootstrap-vue/es/components/badge/badge';
// @ts-ignore
import bBreadcrumb from 'bootstrap-vue/es/components/breadcrumb/breadcrumb';
// @ts-ignore
import bBreadcrumbItem from 'bootstrap-vue/es/components/breadcrumb/breadcrumb-item';
// @ts-ignore
import bBreadcrumbLink from 'bootstrap-vue/es/components/breadcrumb/breadcrumb-link';
// @ts-ignore
import bButton from 'bootstrap-vue/es/components/button/button';
// @ts-ignore
import bButtonClose from 'bootstrap-vue/es/components/button/button-close';
// @ts-ignore
import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';
// @ts-ignore
import bButtonToolbar from 'bootstrap-vue/es/components/button-toolbar/button-toolbar';
// @ts-ignore
import bCard from 'bootstrap-vue/es/components/card/card';
// @ts-ignore
import bCardBody from 'bootstrap-vue/es/components/card/card-body';
// @ts-ignore
import bCardFooter from 'bootstrap-vue/es/components/card/card-footer';
// @ts-ignore
import bCardGroup from 'bootstrap-vue/es/components/card/card-group';
// @ts-ignore
import bCardHeader from 'bootstrap-vue/es/components/card/card-header';
// @ts-ignore
import bCardImg from 'bootstrap-vue/es/components/card/card-img';
// @ts-ignore
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
// @ts-ignore
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';
// @ts-ignore
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
// @ts-ignore
import bDropdown from 'bootstrap-vue/es/components/dropdown/dropdown';
// @ts-ignore
import bDropdownDivider from 'bootstrap-vue/es/components/dropdown/dropdown-divider';
// @ts-ignore
import bDropdownHeader from 'bootstrap-vue/es/components/dropdown/dropdown-header';
// @ts-ignore
import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item';
// @ts-ignore
import bDropdownItemButton from 'bootstrap-vue/es/components/dropdown/dropdown-item-button';
// @ts-ignore
import bEmbed from 'bootstrap-vue/es/components/embed/embed';
// @ts-ignore
import bForm from 'bootstrap-vue/es/components/form/form';
// @ts-ignore
import bFormInvalidFeedback from 'bootstrap-vue/es/components/form/form-invalid-feedback';
// @ts-ignore
import bFormRow from 'bootstrap-vue/es/components/form/form-row';
// @ts-ignore
import bFormText from 'bootstrap-vue/es/components/form/form-text';
// @ts-ignore
import bFormValidFeedback from 'bootstrap-vue/es/components/form/form-valid-feedback';
// @ts-ignore
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
// @ts-ignore
import bFormCheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox';
// @ts-ignore
import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';
// @ts-ignore
import bFormRadio from 'bootstrap-vue/es/components/form-radio/form-radio';
// @ts-ignore
import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';
// @ts-ignore
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
// @ts-ignore
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea';
// @ts-ignore
import bFormFile from 'bootstrap-vue/es/components/form-file/form-file';
// @ts-ignore
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select';
// @ts-ignore
import bImg from 'bootstrap-vue/es/components/image/img';
// @ts-ignore
import bImgLazy from 'bootstrap-vue/es/components/image/img-lazy';
// @ts-ignore
import bInputGroup from 'bootstrap-vue/es/components/input-group/input-group';
// @ts-ignore
import bInputGroupAddon from 'bootstrap-vue/es/components/input-group/input-group-addon';
// @ts-ignore
import bInputGroupAppend from 'bootstrap-vue/es/components/input-group/input-group-append';
// @ts-ignore
import bInputGroupPrepend from 'bootstrap-vue/es/components/input-group/input-group-prepend';
// @ts-ignore
import bInputGroupText from 'bootstrap-vue/es/components/input-group/input-group-text';
// @ts-ignore
import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
// @ts-ignore
import bContainer from 'bootstrap-vue/es/components/layout/container';
// @ts-ignore
import bRow from 'bootstrap-vue/es/components/layout/row';
// @ts-ignore
import bCol from 'bootstrap-vue/es/components/layout/col';
// @ts-ignore
import bLink from 'bootstrap-vue/es/components/link/link';
// @ts-ignore
import bListGroup from 'bootstrap-vue/es/components/list-group/list-group';
// @ts-ignore
import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item';
// @ts-ignore
import bMedia from 'bootstrap-vue/es/components/media/media';
// @ts-ignore
import bMediaAside from 'bootstrap-vue/es/components/media/media-aside';
// @ts-ignore
import bMediaBody from 'bootstrap-vue/es/components/media/media-body';
// @ts-ignore
import bModal from 'bootstrap-vue/es/components/modal/modal';
// @ts-ignore
import bNav from 'bootstrap-vue/es/components/nav/nav';
// @ts-ignore
import bNavForm from 'bootstrap-vue/es/components/nav/nav-form';
// @ts-ignore
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';
// @ts-ignore
import bNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown';
// @ts-ignore
import bNavText from 'bootstrap-vue/es/components/nav/nav-text';
// @ts-ignore
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
// @ts-ignore
import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
// @ts-ignore
import bNavbardNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
// @ts-ignore
import bNavbardToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';
// @ts-ignore
import bPagination from 'bootstrap-vue/es/components/pagination/pagination';
// @ts-ignore
import bPaginationNav from 'bootstrap-vue/es/components/pagination-nav/pagination-nav';
// @ts-ignore
import bPopover from 'bootstrap-vue/es/components/popover/popover';
// @ts-ignore
import bProgress from 'bootstrap-vue/es/components/progress/progress';
// @ts-ignore
import bProgressBar from 'bootstrap-vue/es/components/progress/progress-bar';
// @ts-ignore
import bTable from 'bootstrap-vue/es/components/table/table';
// @ts-ignore
import bTab from 'bootstrap-vue/es/components/tabs/tab';
// @ts-ignore
import bTabs from 'bootstrap-vue/es/components/tabs/tabs';
// @ts-ignore
import bTooltip from 'bootstrap-vue/es/components/tooltip/tooltip';
// @ts-ignore
import bToggle from 'bootstrap-vue/es/directives/toggle/toggle';
// @ts-ignore
import bScrollspy from 'bootstrap-vue/es/directives/scrollspy/scrollspy';

Vue.directive('b-modal', bModal);
Vue.component('b-alert', bAlert);
Vue.component('b-badge', bBadge);
Vue.component('b-breadcrumb', bBreadcrumb);
Vue.component('b-breadcrumb-item', bBreadcrumbItem);
Vue.component('b-breadcrumb-link', bBreadcrumbLink);
Vue.component('b-button', bButton);
Vue.component('b-button-close', bButtonClose);
Vue.component('b-button-group', bButtonGroup);
Vue.component('b-button-toolbar', bButtonToolbar);
Vue.component('b-card', bCard);
Vue.component('b-card-body', bCardBody);
Vue.component('b-card-footer', bCardFooter);
Vue.component('b-card-group', bCardGroup);
Vue.component('b-card-header', bCardHeader);
Vue.component('b-card-img', bCardImg);
Vue.component('b-carousel', bCarousel);
Vue.component('b-carousel-slide', bCarouselSlide);
Vue.component('b-collapse', bCollapse);
Vue.component('b-dropdown', bDropdown);
Vue.component('b-dropdown-divider', bDropdownDivider);
Vue.component('b-dropdown-header', bDropdownHeader);
Vue.component('b-dropdown-item', bDropdownItem);
Vue.component('b-dropdown-button', bDropdownItemButton);
Vue.component('b-embed', bEmbed);
Vue.component('b-form', bForm);
Vue.component('b-form-invalid-feedback', bFormInvalidFeedback);
Vue.component('b-form-row', bFormRow);
Vue.component('b-form-text', bFormText);
Vue.component('b-form-valid-feedback', bFormValidFeedback);
Vue.component('b-form-group', bFormGroup);
Vue.component('b-form-checkbox', bFormCheckbox);
Vue.component('b-form-checkbox-group', bFormCheckboxGroup);
Vue.component('b-form-radio', bFormRadio);
Vue.component('b-form-radio-group', bFormRadioGroup);
Vue.component('b-form-input', bFormInput);
Vue.component('b-form-textarea', bFormTextarea);
Vue.component('b-form-file', bFormFile);
Vue.component('b-form-select', bFormSelect);
Vue.component('b-img', bImg);
Vue.component('b-img-lazy', bImgLazy);
Vue.component('b-input-group', bInputGroup);
Vue.component('b-input-group-addon', bInputGroupAddon);
Vue.component('b-input-group-append', bInputGroupAppend);
Vue.component('b-input-group-prepend', bInputGroupPrepend);
Vue.component('b-input-group-text', bInputGroupText);
Vue.component('b-jumbotron', bJumbotron);
Vue.component('b-container', bContainer);
Vue.component('b-col', bCol);
Vue.component('b-row', bRow);
Vue.component('b-link', bLink);
Vue.component('b-list-group', bListGroup);
Vue.component('b-list-group-item', bListGroupItem);
Vue.component('b-media', bMedia);
Vue.component('b-media-aside', bMediaAside);
Vue.component('b-media-body', bMediaBody);
Vue.component('b-modal', bModal);
Vue.component('b-nav', bNav);
Vue.component('b-nav-form', bNavForm);
Vue.component('b-nav-item', bNavItem);
Vue.component('b-nav-dropdown', bNavItemDropdown);
Vue.component('b-nav-text', bNavText);
Vue.component('b-navbar', bNavbar);
Vue.component('b-navbar-brand', bNavbarBrand);
Vue.component('b-navbar-nav', bNavbardNav);
Vue.component('b-navbar-toggle', bNavbardToggle);
Vue.component('b-pagination', bPagination);
Vue.component('b-pagination-nav', bPaginationNav);
Vue.component('b-popover', bPopover);
Vue.component('b-progress', bProgress);
Vue.component('b-progress-bar', bProgressBar);
Vue.component('b-table', bTable);
Vue.component('b-tab', bTab);
Vue.component('b-tabs', bTabs);
Vue.component('b-tooltip', bTooltip);
Vue.directive('b-toggle', bToggle);
Vue.directive('b-scrollspy', bScrollspy);
Vue.directive('b-tooltip', bTooltip);
Vue.directive('b-popover', bPopover);
