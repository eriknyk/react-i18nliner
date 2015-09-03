module.exports = function(i18nliner) {
  // get new ast types into ast-types
  require('babel-core/lib/babel/patch');

  var acorn = require("babel-core/lib/acorn");

  i18nliner.config.recastOptions = {
    esprima: {
      parse: function(src) {
        var comments = [];
        var tokens = [];

        var ast = acorn.parse(src, {
          plugins:     { jsx: true },
          ecmaVersion: 7,
          locations:   true,
          onComment:   comments,
          onToken:     tokens
        });

        ast.tokens = tokens;
        ast.comments = comments;

        return ast;
      }
    }
  };
};