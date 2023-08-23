import {MantineProvider} from '@mantine/core';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <App/>
    </MantineProvider>
)

