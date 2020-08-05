const gulp = require("gulp");
const { watch } = require('gulp');
const { series } = require('gulp');
const browserSync = require('browser-sync').create();

/* 
 * Tasks
 */
const templates = require('./templates');
const createIndex = require('./createIndex');
const css = require('./css')(browserSync);
const js = require('./js');

const config = require('./config');
const data = require('../../src/data/data.json');

function reload(cb) {
    browserSync.reload();
    cb();
}

module.exports.default = function () {
    // initialize browsersync
    browserSync.init({
        server: {
            baseDir: config.path.dist
        }
    });
    // Watch HTML files 
    watch(config.path.src + "/slides/**/*.hbs", series(templates, reload));
    // Watch JS files
    watch(config.path.src + "/**/*.js", series(js.default, reload));
    // Watch CSS files (changes streamed from task)
    watch(config.path.src + "/**/*.scss", series(css.default));
}  