// Rewrite URIs
module.exports = {
  html: ['<%= yeoman.dist %>/{,*/}*.html'],
  css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
  options: {
    assetsDirs: ['<%= yeoman.dist %>'],
	patterns: {
		css: [[/(?:src=|url\(\s*)['"]?\.\.\/([^'"\)\?]+)['"]?\s*\)?/gm, 'Replacing reference to macbook.png']]
	}    
  }
}

