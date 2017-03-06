var getVariable = function(styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim();
};

var setDocumentVariable = function(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};


var createTemplate = function(html,css){
  var template=html
 if(css!=""){
   template= `<custom-style>
                <style>
                  ${css}
                </style>
              </custom-style>
              ${html}`;
 }
 return template;
}