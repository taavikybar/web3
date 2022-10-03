import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import Main from './components/main'

import './scss/app.scss'

window.setTimeout(() => {
    const container = document.getElementById('app')
    const root = ReactDOMClient.createRoot(container)

    root.render(<Main />)
}, 200)

if (module.hot) {
    module.hot.accept()
}

__webpack_public_path__ = 'http://localhost:9010/' // eslint-disable-line
