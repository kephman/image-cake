import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from './pages/App';

export const reactRoute = buildReactPage => ({
    method: 'GET',
    path: '/{path*}',
    handler(request, h) {
        const { error } = request || {};
        const { message: errorMessage = '' } = error || {};

        if (typeof errorMessage === 'string' && errorMessage.length) {
            return h.response(errorMessage).code(500);
        }

        const reactString = ReactDOM.renderToString(
            React.createElement(Router), // root
            [], // props
            React.createElement(App), // child
        );
        const content = buildReactPage('Image Cake Sandbox', reactString);

        return h.response(content).code(200);
    },
});

export const scriptsRoute = ({
    method: 'GET',
    path: '/scripts/{params*}',
    handler: {
        directory: {
            path: './dist/client',
        },
    },
});

export default {
    reactRoute,
    scriptsRoute,
};
