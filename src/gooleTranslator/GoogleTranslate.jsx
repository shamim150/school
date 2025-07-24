import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: "en,bn,hi,ar,es,fr,zh", // Add more language codes as needed
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      }, "google_translate_element");
    };
  }, []);

  return (
      
      <div id="google_translate_element" className="text-gray-700"></div>
  );
};

export default GoogleTranslate;