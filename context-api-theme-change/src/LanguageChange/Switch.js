import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

export default function LangSwitch() {
  const { switchLanguage, lang } = useContext(LanguageContext);

  return (
    <div className="LangSwitch">
      <button
        className={lang === "en-US" ? "active" : ""}
        onClick={() => switchLanguage("en-US")}
      >
        EN
      </button>
      <button
        className={lang === "es-ES" ? "active" : ""}
        onClick={() => switchLanguage("es-ES")}
      >
        ES
      </button>
      <button
        className={lang === "ru-RU" ? "active" : ""}
        onClick={() => switchLanguage("ru-RU")}
      >
        RU
      </button>
    </div>
  );
}
