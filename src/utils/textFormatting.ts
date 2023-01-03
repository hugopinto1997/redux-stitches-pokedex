export const removeStringDashes = (text: string) =>
  text.replaceAll(/(-|_){1,}/g, ' ');
