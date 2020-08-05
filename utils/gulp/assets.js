const gulp = require("gulp");
const { watch } = require('gulp');
const { series } = require('gulp');

const config = require('./config');
const data = require('../../src/data/data.json');

// File types
var type = {};
type.img = '.{jpeg,jpg,png,gif,svg,cur,ico}';
type.font = '.{eot,ttf,otf,woff,woff2,svg}';
type.video = '.{mp4,ogv,webm}';
type.audio = '.{wav,mp3}';

function copyAssets(cb) {
    return gulp.src([
        config.path.src + "/slides/**/*"+type.img,
    ])
        .pipe(gulp.dest(config.path.dist))
        cb();
}

module.exports.default = copyAssets;