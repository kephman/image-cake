import hapi from 'hapi';
import inert from 'inert';
import packageValues from '../package.json';
import {
    reactRoute,
    scriptsRoute,
    pojRoute,
} from './routes';

const { version = '1.0.0' } = packageValues || {};
const server = hapi.server({
    port: 8000,
    router: {
        isCaseSensitive: true,
        stripTrailingSlash: false,
    },
});

const registration = server.register(inert);
const { info = {} } = server;
const { uri } = info || {};

const buildReactPage = (title, reactString) => (
    `<!doctype html>
    <html>
    <head>
        <title>${title}</title>
        <script type="application/javascript" src="./scripts/client.${version}.bundle.js" async></script>
    </head>
    <body>
        <div id="react-root">${reactString}</div>
    </body>
    </html>`
);
const buildPlainJSPage = title => (
    `<!doctype html>
    <html>
    <head>
        <title>${title}</title>
        <script type="application/javascript" src="./scripts/clientPlain.${version}.bundle.js" async></script>
    </head>
    <body>
        <div id="playground">plainJS</div>
    </body>
    </html>`
);


Promise.resolve(registration).then(() => {
    server.route(reactRoute(buildReactPage));
    server.route(scriptsRoute);
    server.route(pojRoute(buildPlainJSPage));
}).then(() => {
    server.start();
}).then(() => {
    console.log(`Server running: ${uri}`); // eslint-disable-line
});
