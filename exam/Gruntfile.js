module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['js/src/tmpl.js',
                    'js/src/imagesloaded.pkgd.min.js',
                     'js/src/jquery.bxslider.js',
                     'js/src/masonry.pkgd.min.js',
                     'js/src/script.es_5.js'],
                // the location of the resulting JS file
                dest: 'js/dist/script.main.js'
            }
        },
        uglify: {
            dist: {
                src: ['js/src/tmpl.js',
                    'js/src/imagesloaded.pkgd.min.js',
                     'js/src/jquery.bxslider.js',
                     'js/src/masonry.pkgd.min.js',
                     'js/src/script.es_5.js'],
                dest: 'js/dist/script.main.min.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles/src',
                    src: ['*.scss'],
                    dest: 'styles/dist',
                    ext: '.css'
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/src',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/dist'
                }]
            }
        },
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['styles/src/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['js/src/*.js'],
                tasks: ['uglify', 'concat'],
                options: {
                    spawn: false
                }
            },
            babel: {
                files: 'js/src/script.js',
                tasks: ['babel']
            }
        },
        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                src: ["styles/dist/reset.css", "styles/dist/*.css"],
                dest: "styles/styles.main.css"
            },
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'js/src',
                    src: ['script.js'],
                    dest: 'js/src',
                    ext: '.es_5.js',
                    extDot: 'first'
                }]
            }
        }
    });

    // Load the plugin that provides the tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'concat_css', 'babel']);

};