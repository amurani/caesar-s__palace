define(function() {

  function render(strTemplate, data) {
    var renderedString = strTemplate;
    for (var propName in data) {
      var regExp = new RegExp( "{propName}".replace(/propName/, propName) , "g");
      renderedString = renderedString.replace(regExp, data[propName]);
    }

    return renderedString;
  }

  return {
    render: render
  }
})
