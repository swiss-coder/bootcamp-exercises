function helloWorld(langCode) {
    if (langCode === "es") {
      return "¡Hola, Mundo!";
    } else if (langCode === "de") {
      return "Hallo, Welt!";
    } else if (langCode === "fr") {
      return "Bonjour, le monde!";
    } else {
      return "Hello, World!";
    }
  }
  
  // ✅ Test the function
  console.log(helloWorld("es")); // Spanish
  console.log(helloWorld("de")); // German
  console.log(helloWorld("fr")); // French
  console.log(helloWorld("en")); // Default (English)
  console.log(helloWorld("it")); // Not supported → Default to English