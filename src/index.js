require('./index.css');

const show = require('./show.js');

show('Webpack!');

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    show('Webpack!');
  })
}
