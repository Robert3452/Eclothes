const React = require('react');
const { GlobalStyles } = require('./src/styles')
require('./src/utils/fontawesome');
const { Layout } = require('./src/components')

exports.wrapRootElement = ({ element }) => (
    <>
        <GlobalStyles />
        <Layout>
            {element}
        </Layout>
    </>
)