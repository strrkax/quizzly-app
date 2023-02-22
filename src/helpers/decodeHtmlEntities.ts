export const decodeHtml = (html: string): string => {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}