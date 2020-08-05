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
      "es-ES": {name: "Español", region: "es_ES", crowdin: "en-es"},
      "fr": {name: "Français", region: "fr_FR", crowdin: "en-fr"},
      "hy-AM": {name: "Հայերեն", region: "hy_AM", crowdin: "en-hy"},
      "it": {name: "Italiano", region: "it_IT", crowdin: "en-it"},
      "lt": {name: "Lietuvių", region: "lt_LT", crowdin: "en-lt"},
      "pl": {name: "Polski", region: "pl_PL", crowdin: "en-pl"},
      "pt": {name: "Português", region: "pt_PT", crowdin: "en-pt"},
      "ru": {name: "Русский (RU)", region: "ru_RU", crowdin: "en-ru"},
      "zh-CN": {name: "中文", region: "zh_CN", crowdin: "en-zhcn"}
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
