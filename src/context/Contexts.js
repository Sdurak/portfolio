import { createContext, useEffect, useState } from "react";
import { textDataEng } from "../data/TextDataEng";
import { textDataTr } from "../data/TextDataTr";

export const Contexts = createContext();

const ContextsProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");
  const [textData, setTextData] = useState(textDataTr);
  const langHandler = () => {
    lang === "tr" ? setLang("eng") : setLang("tr");
  };
  useEffect(() => {
    console.log(lang);
    console.log(textData);
  }, [lang, textData]);
  useEffect(() => {
    if (lang === "tr") {
      setTextData(textDataTr);
    } else if (lang === "eng") {
      setTextData(textDataEng);
    }
  }, [lang]);
  const ContextVars = {
    lang,
    setLang,
    textData,
    setTextData,
    langHandler,
  };
  return <Contexts.Provider value={ContextVars}>{children}</Contexts.Provider>;
};
export default ContextsProvider;
