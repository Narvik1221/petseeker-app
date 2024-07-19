import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import authWidget from "../../widgets/authWidget/ui/authWidget.i18n.json";
import authForm from "../../widgets/authWidget/ui/authForm/authForm.i18n.json";
import confirmForm from "../../widgets/authWidget/ui/confirmForm/confirmForm.i18n.json";
import petCardForm from "../../widgets/addPetCardWidget/ui/petCardForm.i18n.json";
import search from "../../features/pet/searchPet/ui/searchPet.i18n.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      authWidget: authWidget.authWidget.en,
      authForm: authForm.authForm.en,
      confirmForm: confirmForm.confirmForm.en,
      petCardForm: petCardForm.petCardForm.en,
      search: search.search.en,
    },
    ru: {
      authWidget: authWidget.authWidget.ru,
      authForm: authForm.authForm.ru,
      confirmForm: confirmForm.confirmForm.ru,
      petCardForm: petCardForm.petCardForm.ru,

      search: search.search.ru,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  ns: ["authWidget", "authForm", "confirmForm", "petCardForm", "search"],
  defaultNS: "authWidget",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
