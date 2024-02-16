import { Outlet } from "react-router-dom";
import QuizProvider from "./context/QuizProvider";
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import translations from './resources/translation.json';

i18next.use(initReactI18next).init({
  
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // Початкова мова
  resources: translations
});

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <QuizProvider>
        <div className="App">
          <Outlet />
        </div>
      </QuizProvider>
    </I18nextProvider>
  );
}

export default App;
