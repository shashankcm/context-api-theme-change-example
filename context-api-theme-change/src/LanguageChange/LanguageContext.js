import React, { useState, useLayoutEffect } from "react";

const LanguageContext = React.createContext({
  lang: "",
  currentLanguageData: {},
  switchLanguage: () => {}
});

export default LanguageContext;

export const LanguageProvider = props => {
  const [lang, setLang] = useState(
    window.localStorage.getItem("appUILang") || window.navigator.language
  );

  useLayoutEffect(() => {
    const selectedLanguage =
      window.localStorage.getItem("appUILang") || window.navigator.language;
    if (selectedLanguage) {
      setLang(selectedLanguage);
    }
  }, [lang]);

  const switchLanguage = lang => {
    setLang(lang);
    window.localStorage.setItem("appUILang", lang);
  };
  return (
    <LanguageContext.Provider
      value={{
        lang,
        switchLanguage,
        currentLanguageData: langData[lang]
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

const langData = {
  "en-US": {
    card: {
      title: "Title",
      genre: "Genre",
      date: "Release date",
      description: "Description",
      link: "Read more"
    },
    app: {
      h1: "Select Language"
    }
  },
  "es-ES": {
    card: {
      title: "Título",
      genre: "Género",
      date: "Estreno",
      description: "Descripción",
      link: "Lee mas"
    },
    app: {
      h1: "Cambiar de idioma"
    }
  },
  "ru-RU": {
    card: {
      title: "Название",
      genre: "Жанр",
      date: "Дата премьеры",
      description: "Описание",
      link: "Читать подробно"
    },
    app: {
      h1: "Изменить язык"
    }
  }
};
