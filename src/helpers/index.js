export function addToUrl(page) {
  var url = window.location.origin;
  url = url + `?page=${page}`;
  window.location.href = url;
}

export function updateURL(page) {
  if (window.history.pushState) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `?page=${page}`;
    window.history.pushState({ path: newurl }, "", newurl);
  }
}
