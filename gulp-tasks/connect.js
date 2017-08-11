module.exports = function (gulp, plugins) {
    return function () {
    plugins.connect.server({
    livereload: true
  });
};
};
