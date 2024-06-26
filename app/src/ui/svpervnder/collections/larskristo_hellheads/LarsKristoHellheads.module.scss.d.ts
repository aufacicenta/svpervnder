export type Styles = {
  "latest-collection": string;
  "latest-collection__grid": string;
  "latest-collection__grid--info-card": string;
  "latest-collection__grid--info-card-col": string;
  "latest-collection__intro": string;
  "latest-collection__intro--artist-name": string;
  "latest-collection__stats--sub": string;
  "z-depth-0": string;
  "z-depth-1": string;
  "z-depth-1-half": string;
  "z-depth-2": string;
  "z-depth-3": string;
  "z-depth-4": string;
  "z-depth-5": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
