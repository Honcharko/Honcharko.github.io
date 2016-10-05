module.exports = function(grunt) {

    grunt.initConfig({
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['last 2 version', 'ie >= 8', 'Opera >= 15', 'Firefox >= 5']}),
                    require('postcss-will-change')(),
                    require('postcss-color-rgba-fallback')(),
                    require('postcss-opacity')(),
                    require('postcss-pseudoelements')(),
                    require('postcss-vmin')(),
                    require('pixrem')()
                ]
            },
            dist: {
                src: 'css/media.css',
                dest: 'css/dist/new_media.css'
            }
        }
        });


    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['postcss']);

};