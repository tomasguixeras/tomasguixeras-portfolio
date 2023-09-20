export interface AboutButton {
  icon: string;
  title: string;
  url: string;
}

export interface AboutButtons {
  calendly: AboutButton;
  curriculum: AboutButton;
}

export interface AboutTexts {
  title: string;
  description: string;
  buttons: AboutButtons;
}

export interface AboutInterface {
  spanish: AboutTexts;
  english: AboutTexts;
}
