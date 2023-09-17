interface navbarLinks {
  key: string;
  name: string;
  slug: string;
  link: string;
}
interface links {
  links: navbarLinks[];
}
interface navbarText {
  spanish: links;
  english: links;
}

export const languageValidator = (text: navbarText) => {
  let textToRender;
  const userLanguage = localStorage.getItem("userLanguage");
  userLanguage &&
    (userLanguage === "ENG"
      ? (textToRender = text.english)
      : (textToRender = text.spanish));
  return textToRender;
};
