const React = require('react');
const { GlobalStyles } = require('./src/styles')
require('./src/utils/fontawesome');
const { Provider } = require('react-redux')
const { store } = require('./src/state/reduxWrapper')
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