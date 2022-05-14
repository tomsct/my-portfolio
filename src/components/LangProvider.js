import React, { useState, useLayoutEffect } from "react";
import { appData } from "./appData";

const LangContext = React.createContext({
    lang: "",
    currentLangData: {},
    switchLang: () => { },
});

export default LangContext;

export function LangProvider(props) {

    const [lang, setLang] = useState(window.localStorage.getItem("appUILang") || window.navigator.language);

    useLayoutEffect(() => {
        const selectedLang = window.localStorage.getItem("appUILang");

        if (selectedLang) {
            setLang(selectedLang);
        }
    }, [lang])

    const switchLang = (ln) => {
        ln = ln.substring(0,2);

        switch (ln) {
            case "es":
                setLang(ln);
                break;
            default:
                setLang("en");
        }
        window.localStorage.setItem("appUILang", ln);
    };

    return (
        <LangContext.Provider value={{ lang, switchLang, currentLangData: appData[lang] }}>
            {props.children}
        </LangContext.Provider>
    );
}