const React = require('react');
const { GlobalStyles } = require('./src/styles')
const { Provider } = require('react-redux')
const { store } = require('./src/state/reduxWrapper')
require('./src/utils/fontawesome');
const { Layout } = require('./src/components')

exports.wrapRootElement = ({ element }) => (
    <>
        <Provider store={store}>
            <GlobalStyles />
            <Layout>
                {element}
            </Layout>
        </Provider>
    </>
)