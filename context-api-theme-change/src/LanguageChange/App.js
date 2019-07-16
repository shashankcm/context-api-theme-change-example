import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import LangSwitch from "./Switch";
import LanguageContext from "./LanguageContext";
import { fetchMock } from "./mockAPI";

const App = () => {
  const [state, setState] = useState([]);
  const { lang, currentLanguageData } = useContext(LanguageContext);

  useEffect(() => {
    fetchMock(lang).then(setState);
  }, [lang]);

  return (
    <div className="MyApp">
      <h1>{currentLanguageData.app.h1}</h1>
      <LangSwitch />
      <div className="MyCards">
        {state.map((item, idx) => (
          <Card key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
