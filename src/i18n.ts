import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const en = {
  translation: {
    mockTests: {
      pageTitle: 'Mock Tests',
      pageSubtitle: 'Practice with our mock tests',
      startTest: 'Start Test',
      freeOnly: 'Free Only',
      language: 'Language',
      new: 'New',
      premium: 'Premium',
      difficulty: 'Difficulty',
      subject: 'Subject',
      searchPlaceholder: 'Search tests...',
      // Add more translations as needed
    }
  }
};

// Telugu translations
const te = {
  translation: {
    mockTests: {
      pageTitle: 'మోక్ టెస్ట్‌లు',
      pageSubtitle: 'మా మోక్ టెస్ట్‌లతో ప్రాక్టీస్ చేయండి',
      startTest: 'టెస్ట్ ప్రారంభించు',
      freeOnly: 'ఉచితమైనవి మాత్రమే',
      language: 'భాష',
      new: 'కొత్త',
      premium: 'ప్రీమియం',
      difficulty: 'కష్టతరం',
      subject: 'విషయం',
      searchPlaceholder: 'టెస్ట్‌ల కోసం శోధించండి...',
      // Add more translations as needed
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      te: te,
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
