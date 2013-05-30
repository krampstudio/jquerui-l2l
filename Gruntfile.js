module.exports = function(grunt){
    'use strict';
    
	grunt.initConfig({
        
        pkg : grunt.file.readJSON('package.json'),
        
        path : {
            build : 'build/',
            src : 'src/*.js',
            css : 'src/*.css' 
        },
        
        clean : ['<%=path.build%>'],
        
        jsdoc : {
            dist: {
                src : '<%=path.src%>',
                options : {
                    destination : '<%=path.build%>doc'
                }
            }
        },
        
        uglify : {
            options : {
                banner : '/* <%= pkg.name %> \n'
                        + ' <%= pkg.author.name %> <%= pkg.author.email %> copyright <%= grunt.template.today("yyyy") %> \n'
                        + ' @license <%= pkg.licenses[0].type %> <%= pkg.licenses[0].url %> \n*/\n'
            },
            build : {
                src : '<%=path.src%>',
                dest : 'src/js/l2l.min.js'
            }
        },
        
        jshint : {
            src : '<%=path.src%>',
            options : {
                camelcase : true,
                smarttabs : true,
                eqnull : true,
                browser : true,
                globals : {
                    jQuery : true
                }
            }
        }
	});
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['clean', 'jshint', 'jsdoc', 'uglify'])
};
