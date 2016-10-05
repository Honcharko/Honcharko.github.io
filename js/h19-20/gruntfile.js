module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['styles/variables.scss', 'styles/mobile.scss'],
                // the location of the resulting JS file
                dest: 'styles/main.scss'
            }
        },
        uglify: {
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.min.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['main.scss'],
                    dest: 'styles',
                    ext: '.css'
                }]
            }
        },
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['styles/*.scss'],
                tasks: ['concat', 'sass']
            },
            scripts: {
                files: ['js/src/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/dist/'
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin']);
};
