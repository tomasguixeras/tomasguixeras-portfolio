export interface navbarLinks {
  key: string;
  name: string;
  slug: string;
  link: string;
}
export interface links {
  links: navbarLinks[];
}
export interface navbarText {
  spanish: links;
  english: links;
}
