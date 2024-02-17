import { Outlet } from "react-router-dom";
import QuizProvider from "./context/QuizProvider";
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import translations from './resources/translation.json';
import { GitHubLink } from "./components/shared/GitHubLink.styled";

i18next.use(initReactI18next).init({
  
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: translations
});

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <QuizProvider>
        <GitHubLink
          href="https://github.com/BohdanOmelianec/holywater-test"
          title="https://github.com/BohdanOmelianec/holywater-test"
          target="_blanc"
        >
          GitHub Repo
        </GitHubLink>
        <div className="App">
          <Outlet />
        </div>
      </QuizProvider>
    </I18nextProvider>
  );
}

export default App;
