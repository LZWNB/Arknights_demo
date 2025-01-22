import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';
import ja from './ja.json';

const resources = {
    en: {
        translation: en,
    },
    zh: {
        translation: zh,
    },
    ja: {
        translation: ja,
    }
};

i18n.use(initReactI18next).init({
    resources,
    // 默认语言  zh/en  中文/英文
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
