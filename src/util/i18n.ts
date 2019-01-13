import VueI18n from 'vue-i18n';

export default class PlurVueI18n extends VueI18n {
  getChoiceIndexNative = VueI18n.prototype.getChoiceIndex;
  getChoiceIndex = (choice: number, choicesLength: number): number => {
    switch (this.locale) {
      case 'ru':
        if (choice === 0) {
          return 0;
        }

        const teen = choice > 10 && choice < 20;
        const endsWithOne = choice % 10 === 1;

        if (!teen && endsWithOne) {
          return 1;
        }

        if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
          return 2;
        }

        return (choicesLength < 4) ? 2 : 3;
      default:
        return this.getChoiceIndexNative(choice, choicesLength);
    }
  }
}
