var getVariable = function(styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim();
};

var setDocumentVariable = function(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};


var createTemplate = function(html,css){
  return html.replace("<style></style>", `<style>${css}</style>`);
}