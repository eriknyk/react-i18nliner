module.exports = function(i18nliner) {
  var JsProcessor = i18nliner.processors.JsProcessor;
  JsProcessor.prototype.defaultPattern = ["*.js", "*.jsx"];
};
