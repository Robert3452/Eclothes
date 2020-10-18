const React = require('react');
const { GlobalStyles } = require('./src/styles')


exports.wrapRootElement = ({ element }) => (
    <>
        <GlobalStyles />
        {element}
    </>
)