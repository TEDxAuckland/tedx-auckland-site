const gulp = require("gulp");
const suite = require("cloudcannon-suite");

suite.jekyllDev(gulp);

suite.screenshots(gulp, {
  dest: "reports/screenshots",
  sites: {
    dev: {"src": "dist/site"}
  }
});

suite.help(gulp);

gulp.task("default", ["help"]);
