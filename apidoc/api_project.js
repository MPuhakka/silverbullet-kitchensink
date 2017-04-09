define({  "name": "Silverbullet",  "version": "0.2.0",  "description": "Silverbullet api",  "title": "Silverbullet Api Doc",  "url": "http://localhost:1337",  "header": {    "content": "<h1>Silverbullet - Sails v1.0 React Kitchensink</h1>\n<p>A <a href=\"http://sailsjs.org\">Sails</a> kitchensink with React and Webpack.</p>\n<h2>About</h2>\n<p>This is a starter kitchensink app using <a href=\"http://sailsjs.org\">Sails</a> and <a href=\"https://facebook.github.io/react/\">React</a>.</p>\n<h2>Goals</h2>\n<ul>\n<li><s>Isomorphic</s> <a href=\"https://medium.com/@mjackson/universal-javascript-4761051b7ae9\">Universal</a> react redux application in sails environment</li>\n<li>Sails remains usable for API and static pages</li>\n<li>Proper development and production builds with webpack</li>\n<li>Use Redux and React Router along with Sails routing</li>\n</ul>\n<h2>Frontend features</h2>\n<ul>\n<li>React App along side with SailsJS</li>\n<li>Redux with Immutable state</li>\n<li>React Router</li>\n<li>Sync relevant parts of Redux state to server with Socket.io</li>\n<li>Webpack as build tool (no Grunt)</li>\n</ul>\n<h2>Backend features</h2>\n<ul>\n<li>User register / activate / login</li>\n<li>Token service, <a href=\"https://jwt.io\">JWT</a></li>\n<li>Email service</li>\n<li>Sessions</li>\n<li>React app server side rendering with styles and initialized redux state</li>\n</ul>\n<h2>Work in progress</h2>\n<ul>\n<li>Validate token on server side</li>\n<li>Secure API endpoints with policies</li>\n<li>Refactor React app with Redux/Immutable best practises</li>\n<li>Facebook / Google / Twitter etc login/register</li>\n<li>Test with MySQL</li>\n<li>Documentation and code review</li>\n<li>Automated tests</li>\n</ul>\n<h2>Technologies used</h2>\n<ul>\n<li><a href=\"http://sailsjs.org\">Sails</a> v1.0</li>\n<li><a href=\"https://github.com/facebook/react\">React</a></li>\n<li><a href=\"https://github.com/rackt/redux\">Redux</a></li>\n<li><a href=\"https://facebook.github.io/immutable-js\">ImmutableJS</a></li>\n<li><a href=\"https://github.com/rackt/react-router\">React Router</a></li>\n<li><a href=\"https://github.com/reactjs/react-router-redux\">React Router Redux</a></li>\n<li><a href=\"http://webpack.github.io\">Webpack</a></li>\n<li><a href=\"http://babeljs.io\">Babel</a></li>\n<li><a href=\"http://eslint.org\">ESLint</a></li>\n</ul>\n<h2>Added functionality</h2>\n<ul>\n<li>Sass support</li>\n<li>DustJs support</li>\n</ul>\n<h2>Install</h2>\n<h3>Requirements:</h3>\n<ul>\n<li>Node 4.x -&gt;</li>\n</ul>\n<h2>Running the application</h2>\n<ul>\n<li>Edit config/env/development.js and config/env/production.js to hold your email config (or use config/local.js).</li>\n<li>Run <code>npm install</code></li>\n<li><code>npm start</code> will start the sails server and webpack watcher,\nafter this the react application can be developed without restarting the sails server</li>\n<li>Build uses <code>NODE_ENV</code> environment variable to choose how to build the application. Use <code>development</code> for dev build and <code>production</code> for build optimized for production.</li>\n</ul>\n<h2>Views</h2>\n<p>Sails - views are still enabled and will take precedence over the react routing.\nTemplate engine is currently dust, for more options and information, read <a href=\"http://sailsjs.org/documentation/concepts/views\">the sails documentation on views</a></p>\n<h2>Serverside redux store (socket.io)</h2>\n<p>The parts of the redux store, that are needed by server side rendering, are synced to sails session using socket.io. In the example, user and lang are synced. The parts that are synced are marked with { sync: true } flag.</p>\n<h2>Sails routes and views still work as expected</h2>\n<p>The order in which react router and sails router are run can be adjusted from\nconfing/http.js</p>\n<h2>Recommended Sublime Text configuration</h2>\n<ul>\n<li>Make sure you have latest eslint installed globally <code>npm install -g eslint</code></li>\n<li>Install these packages from Sublime Text Package Control (https://packagecontrol.io/installation)\n<ul>\n<li>EditorConfig (to support .editorconfig settings)</li>\n<li>Babel (Syntax definitions for ES6 with React JSX extensions)</li>\n<li>SublimeLinter (version 3)</li>\n<li>SublimeLinter-contrib-eslint</li>\n<li>SublimeLinter-csslint</li>\n<li>SublimeLinter-json</li>\n<li>Sass</li>\n<li>DustBuster (support Dust.js templating if using Dust.js templates)</li>\n</ul>\n</li>\n<li>Remove all jshint &amp; jsxhint etc conficting javascript linters</li>\n</ul>\n"  },  "sampleUrl": false,  "defaultVersion": "0.0.0",  "apidoc": "0.3.0",  "generator": {    "name": "apidoc",    "time": "2017-04-09T18:51:12.007Z",    "url": "http://apidocjs.com",    "version": "0.17.5"  }});
