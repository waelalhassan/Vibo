const { series, task, src, dest, watch } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");

task("sass", _sass);
task("pug", _pug);
task("uglify", _uglify)

function _sass() {
    return src("./sass/style.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest("./dist/css"))
}

function _pug() {
    return src("./index.pug")
    .pipe(pug({pretty: true}))
    .pipe(dest("./dist"))
}

function _uglify() {
    return src("./js/main.js")
    .pipe(uglify())
    .pipe(dest("./dist/js"))
}

task("watch", function() {
    watch("./sass/*.*", series("sass"));
    watch("./index.pug", series("pug"));
    watch("./js/main.js", series("uglify"));
})

exports.default = series("sass", "watch")
