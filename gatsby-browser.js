const React = require('react');
const { GlobalStyles } = require('./src/styles')
require('./src/utils/fontawesome');


exports.wrapRootElement = ({ element }) => (
    <>
        <GlobalStyles />
        {element}
    </>
)