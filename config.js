let root = "";

if (process.argv.includes("--deploy"))
  root = "/cmints-multi-lang-starter"; // Github Pages root

const templateData =
{
  site: {
    root,
    title: "Privacy Manager", // See "layouts/_head.ejs"
    localeMap: {
      "de": {name: "Deutsch", region: "de_DE", crowdin: "en-de"},
      "en": {name: "English (EN)", region: "en_US"},
      "fr": {name: "Français", region: "fr_FR", crowdin: "en-fr"},
      "ru": {name: "Русский (RU)", region: "ru_RU", crowdin: "en-ru"}
    },
    navigation: [
      {
        id: "nav-about",
        link: "#"
      },
      {
        id: "nav-contribute",
        link: "#"
      },
      {
        id: "nav-articles",
        link: "#"
      }
    ]
  }
};

module.exports = {root, templateData};
