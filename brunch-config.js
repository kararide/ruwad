module.exports = {
  files: {
    javascripts: {
        joinTo: {
            'app.js': /^app\/scripts/,
            'vendor.js': /^(bower_components|node_modules)/
        }
    },
    stylesheets: {
        joinTo: {
            'app.css': /^(app|bower_components|node_modules)/
        }
    },
  },
  plugins: {
    babel: {
        presets: ['es2015'],
        pattern: /.(js|jsx)$/
    },
    postcss: {
      processors: [
        require('autoprefixer')
      ]
    },
    sass: {
      options: {
        includePaths: [
            // 'node_modules/bourbon/app/assets/stylesheets',
            // 'node_modules/bourbon-neat/app/assets/stylesheets'
        ],
        precision: 8
      }
    }
  }
};
