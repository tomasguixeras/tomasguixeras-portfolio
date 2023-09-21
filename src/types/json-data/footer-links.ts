export interface externalLinks {
  slug: string;
  name: string;
  icon: string;
  url: string;
}

export interface contactFormInput {
  label: string;
  placeholder: string;
}
export interface contactFormTexts {
  title: string;
  name: contactFormInput;
  email: contactFormInput;
  message: contactFormInput;
  submit: string;
}
export interface footerTexts {
  title: string;
  contactForm: contactFormTexts;
  linksTitle: string;
  developed: string;
}
export interface footerLanguage {
  spanish: footerTexts;
  english: footerTexts;
}
