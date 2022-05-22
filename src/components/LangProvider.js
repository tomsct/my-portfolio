import React, { useState, useLayoutEffect } from "react";
import { appData } from "./appData";

const LangContext = React.createContext({
    lang: "",
    currentLangData: {},
    switchLang: () => { },
});

export default LangContext;

export function LangProvider(props) {

    const initializeState = () => {
        if("appUILang" in  window.localStorage)
            return window.localStorage.getItem("appUILang");
        
        let languages = ["es", "en"];
        var language = window.navigator.language.substring(0,2);

        if(languages.indexOf(language) == -1)
            language = "en";

        return language;
    };

    const [lang, setLang] = useState(initializeState());

    useLayoutEffect(() => {
        const selectedLang = window.localStorage.getItem("appUILang");

        if (selectedLang) {
            setLang(selectedLang);
        }
    }, [lang])


    const switchLang = (ln) => {
        ln = ln.substring(0, 2);

        setLang(ln);
        window.localStorage.setItem("appUILang", ln);

    };

return (
    <LangContext.Provider value={{ lang, switchLang, currentLangData: appData[lang] }}>
        {props.children}
    </LangContext.Provider>
);
}