"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  require("time-grunt")(grunt);

  grunt.initConfig({

    //*** Очистка ***//
    clean: {
      build: ["build/**/*.html", "build/favicon.ico", "build/css/", "build/img/", "build/js/"]
    },

    //*** Копирование ***//
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: [
            "css/**/*.css",
            "js/**/*.js",
            "img/**/*.{jpg,png,gif,svg}",
            "*.html",
            "favicon.ico"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["*.html"],
          dest: "build"
        }]
      },
      img: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["img/**/*.{jpg,png,gif,svg}"],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["js/**/*.js"],
          dest: "build"
        }]
      }
    },

    //*** Сборка и обработка HTML-файлов ***//
    processhtml: {
      target: {
        files: {
          "build/index.html": ["build/index.html"],
          "build/about.html": ["build/about.html"],
          "build/reviews.html": ["build/reviews.html"],
          "build/gallery.html": ["build/gallery.html"],

          // Белое море (08.2005)
          "build/chupa2005.html": ["build/chupa2005.html"],
          "build/gallery_02.html": ["build/gallery_02.html"],

          // Крым (1997-2007)
          "build/crimea97-07.html": ["build/crimea97-07.html"],
          "build/gallery_04.html": ["build/gallery_04.html"],
          "build/gallery_04_01.html": ["build/gallery_04_01.html"],
          "build/gallery_04_02.html": ["build/gallery_04_02.html"],
          "build/gallery_04_03.html": ["build/gallery_04_03.html"],
          "build/gallery_04_04.html": ["build/gallery_04_04.html"],
          "build/gallery_04_05.html": ["build/gallery_04_05.html"],
          "build/gallery_04_06.html": ["build/gallery_04_06.html"],
          "build/gallery_04_07.html": ["build/gallery_04_07.html"],
          "build/gallery_04_08.html": ["build/gallery_04_08.html"],

          // Крым (05.2008)
          "build/crimea2008.html": ["build/crimea2008.html"],
          "build/gallery_01.html": ["build/gallery_01.html"],

          // Карелия (07.2008)
          "build/karelia2008.html": ["build/karelia2008.html"],
          "build/gallery_03.html": ["build/gallery_03.html"],

          // Камбоджа (01.2009)
          "build/cambodia2009.html": ["build/cambodia2009.html"],
          "build/gallery_05.html": ["build/gallery_05.html"],
          "build/gallery_05_00.html": ["build/gallery_05_00.html"],
          "build/gallery_05_01.html": ["build/gallery_05_01.html"],
          "build/gallery_05_02.html": ["build/gallery_05_02.html"],
          "build/gallery_05_03.html": ["build/gallery_05_03.html"],
          "build/gallery_05_04.html": ["build/gallery_05_04.html"],
          "build/gallery_05_05.html": ["build/gallery_05_05.html"],
          "build/gallery_05_06.html": ["build/gallery_05_06.html"],
          "build/gallery_05_07.html": ["build/gallery_05_07.html"],
          "build/gallery_05_08.html": ["build/gallery_05_08.html"],
          "build/gallery_05_09.html": ["build/gallery_05_09.html"],
          "build/gallery_05_10.html": ["build/gallery_05_10.html"],
          "build/gallery_05_11.html": ["build/gallery_05_11.html"],
          "build/gallery_05_marina.html": ["build/gallery_05_marina.html"],
          "build/gallery_05_moto.html": ["build/gallery_05_moto.html"],
          "build/gallery_05_pre.html": ["build/gallery_05_pre.html"],

          // Озеро Ильмень (08.2009)
          "build/gallery_06.html": ["build/gallery_06.html"],

          // Карелия (07.2010)
          "build/karelia2010.html": ["build/karelia2010.html"],
          "build/gallery_07.html": ["build/gallery_07.html"],

          // Карелия, Кольский (07.2011)
          "build/karelia2011.html": ["build/karelia2011.html"],
          "build/gallery_08.html": ["build/gallery_08.html"],
          "build/gallery_08_01.html": ["build/gallery_08_01.html"],
          "build/gallery_08_02.html": ["build/gallery_08_02.html"],

          // Крым (09.2012)
          "build/crimea2012.html": ["build/crimea2012.html"],
          "build/gallery_10.html": ["build/gallery_10.html"],

          // Скандинавия (07-08.2012)
          "build/scandinavia2012.html": ["build/scandinavia2012.html"],
          "build/gallery_09.html": ["build/gallery_09.html"],
          "build/gallery_09_01.html": ["build/gallery_09_01.html"],
          "build/gallery_09_02.html": ["build/gallery_09_02.html"],

          // Крым (04.2013)
          "build/gallery_11.html": ["build/gallery_11.html"],

          // Урал (07.2013)
          "build/gallery_12.html": ["build/gallery_12.html"],

          // Турция (01.2014): альбомы
          "build/gallery_13.html": ["build/gallery_13.html"],
          "build/gallery_13_01.html": ["build/gallery_13_01.html"],
          "build/gallery_13_02.html": ["build/gallery_13_02.html"],
          "build/gallery_13_03.html": ["build/gallery_13_03.html"],

          // Крым (04.2015)
          "build/gallery_14.html": ["build/gallery_14.html"]
        }
      }
    },

    //*** Сборка CSS из LESS ***//
    less: {
      style: {
        files: {
          "build/css/style.css": "src/less/style.less"
        }
      }
    },

    //*** Обработка CSS: префиксование и "упаковка" медиа-запросов ***//
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            "last 2 versions",
            "> 1%"
          ]}),
          require("css-mqpacker")({
            sort: true
          })
        ]
      },
      style: {
        src: "build/css/style.css"
      }
    },

    //*** "Причесывание" CSS ***//
    csscomb: {
      style: {
        options: {
          config: "csscomb.json"
        },
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    //*** Конкатенация CSS ***//
    concat: {
      css: {
        src: [ "build/css/normalize.css", "build/css/style.css" ],
        dest: "build/css/style.css",
        options: {
          separator: "\n\r/***** CONCATENATION HERE! *****/\n\r"
        }
      }
    },

    //*** Минификация CSS ***//
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    //*** Минификация JS ***//
    uglify: {
      options: {
        mangle: false
      },
      scripts: {
        files: {
          "build/js/script.min.js": ["build/js/script.js"]
        }
      }
    },

    //*** Локальный сервер с обновлением браузера ***//
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css",
            "build/img/**/*.{jpg,png,gif,svg}",
            "build/tmp/ugc/**/*.{jpg,png,gif,svg}",
            "build/js/**/*.js"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    //*** Отслеживание изменений в исходниках ***//
    watch: {
      html: {
        files: ["src/**/*.html","src/tmp/ugc/*.html"],
        tasks: ["copy:html","processhtml"],
        options: {spawn: false}
      },
      img: {
        files: ["src/img/**/*.{jpg,png,gif,svg}","src/tmp/ugc/**/*.{jpg,png,gif,svg}"],
        tasks: ["copy:img"],
        options: {spawn: false}
      },
      js: {
        files: ["src/js/**/*.js"],
        tasks: ["copy:js","uglify"],
        options: {spawn: false}
      },
      style: {
        files: ["src/less/**/*.less"],
        tasks: ["less", "postcss", "csscomb", "concat", "csso"],
        options: {spawn: false}
      }
    },

    //*** Отправка сборки в удаленную ветку "gh-pages" ***//
    "gh-pages": {
      options: {
        base: "build"
      },
      src: ["**/*", "!tmp/**/*"]
    },

    //*** Очистка директории на "боевом" сервере ***//
    secret: grunt.file.readJSON("authssh.json"),
    sshexec: {
      clean: {
        command: ["cd astowell.menshikov.su/www; rm -rf css img js; rm -f *.html favicon.ico"],
        options: {
          host: "<%= secret.host %>",
          username: "<%= secret.username %>",
          password: "<%= secret.password %>"
        }
      }
    },

    //*** Отправка сборки на "боевой" сервер ***//
    scp: {
      options: {
        host: "<%= secret.host %>",
        username: "<%= secret.username %>",
        password: "<%= secret.password %>",
      },
      masterhost: {
        files: [{
            cwd: "build/",
            src: ["**/*", "!tmp/**/*"],
            filter: "isFile",
            dest: "astowell.menshikov.su/www"
        }]
      }
    }
  });

  grunt.registerTask("serve", [
    "browserSync",
    "watch"
  ]);

  grunt.registerTask("css", [
    "less",
    "postcss",
    "csscomb",
    "concat",
    "csso"
  ]);

  grunt.registerTask("build", [
    "clean",
    "copy:build",
    "processhtml",
    "css",
    "uglify",
  ]);

  grunt.registerTask("deploy", [
    "sshexec",
    "scp"
  ]);
};
