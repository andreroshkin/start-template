module.exports = function (gulp, plugins) {
  return () => {
    plugins.connect.server({
      livereload: true
    });
  };
};