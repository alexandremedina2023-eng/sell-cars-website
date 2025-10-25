const toggle = document.getElementById("lang-toggle");

const texts = {
  pt: {
    title: "AutoCar Brasil",
    subtitle: "Carros à venda",
    description: "Escolha entre uma ampla seleção de carros novos e seminovos.",
    button: "English"
  },
  en: {
    title: "AutoCar Brazil",
    subtitle: "Cars for Sale",
    description: "Choose from a wide selection of new and used cars.",
    button: "Português"
  }
};

let lang = "pt";

toggle.addEventListener("click", () => {
  lang = lang === "pt" ? "en" : "pt";
  document.getElementById("title").textContent = texts[lang].title;
  document.getElementById("subtitle").textContent = texts[lang].subtitle;
  document.getElementById("description").textContent = texts[lang].description;
  toggle.textContent = texts[lang].button;
});
