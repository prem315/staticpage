module.exports = function(grunt) {
	grunt.initConfig({
	  sass: {                              // Task 
	    dist: {                            // Target 
	      files: {                         // Dictionary of files 
	        'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',
	        'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss',
	        'assets/stylesheets/login.css': 'assets/stylesheets/src/login.scss',
	        'assets/stylesheets/support.css': 'assets/stylesheets/src/support.scss',
	        'assets/stylesheets/take_my_money.css': 'assets/stylesheets/src/take_my_money.scss',
	        'assets/stylesheets/footer.css': 'assets/stylesheets/src/footer.scss'
	      }
	    }
	  },

	watch: {
		  css: {
		    files: ['assets/stylesheets/src/*.scss'],
		    tasks: ['sass','cssmin'],
		  }
		},

	cssmin: {
	  target: {
	    files: {
	       'assets/stylesheets/app.min.css' : 
	       ['assets/stylesheets/common.css', 
	       	'assets/stylesheets/land.css',
	       	'assets/stylesheets/login.css',
	       	'assets/stylesheets/support.css',
	       	'assets/stylesheets/take_my_money.css',
	       	'assets/stylesheets/footer.css'
	       ]
	    }
	  }
	}

	 

	});
	

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['sass','cssmin','watch']);

}