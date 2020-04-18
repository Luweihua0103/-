var gulp = require("gulp");
//压缩html
//gulp 中插件plugin的应用  下载插件 ————> 取到插件 ————> 应用插件
var htmlClean = require("gulp-htmlclean");

//压缩图片
var imageMin = require("gulp-imagemin");

//压缩js
var uglify = require("gulp-uglify");

//去掉js中的console.log()以及debugger 断点 语句
var stripDebug = require("gulp-strip-debug");

//将less转换成css
var less = require("gulp-less");

//压缩css
var cleanCss = require("gulp-clean-css");

//css3自动添加前缀 gulp-postcss  autoprefixer
var postCss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

//开启本地服务器代理
var connect = require("gulp-connect");

// connect.reload()  自动刷新

var folder = {
     src: "src/",
     dist: "dist/"
};


//export NODE_ENV=development  命令行设置环境变量

//监听一下当前的环境变量
var devMod = process.env.NODE_ENV == "development";

gulp.task("html", async function () {
     var page = gulp.src(folder.src + "html/*")
          .pipe(connect.reload());
     if (!devMod) {
          page.pipe(htmlClean())
     }
     page.pipe(gulp.dest(folder.dist + "html/"))
});
gulp.task("image", async function () {
     gulp.src(folder.src + "image/*")
          .pipe(imageMin())
          .pipe(gulp.dest(folder.dist + "image/"))
})
gulp.task("css", async function () {
     var page = gulp.src(folder.src + "css/*")
          .pipe(connect.reload())
          .pipe(less())
          .pipe(postCss([autoprefixer()]));
     if (!devMod) {
          page.pipe(cleanCss())
     }
     page.pipe(gulp.dest(folder.dist + "css/"))
});

gulp.task("js", async function () {
     var page = gulp.src(folder.src + "js/*")
          .pipe(connect.reload());
     if (!devMod) {
          page.pipe(stripDebug())
               .pipe(uglify())
     }
          page.pipe(gulp.dest(folder.dist + "js/"))
});

gulp.task("server", async function () {
     connect.server({
          port: "8888",
          livereload: true
     })
})

//监听文件任务
gulp.task("watch", async function () {
     gulp.watch(folder.src + "html/*", gulp.series(["html"]));
     gulp.watch(folder.src + "css/*", gulp.series(["css"]));
     gulp.watch(folder.src + "js/*", gulp.series(["js"]));
})
//默认任务
gulp.task("default", gulp.series(["html", "css", "js", "image", "server", "watch"]));