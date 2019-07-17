
/**
 * Showdown's Extension boilerplate
 *
 * A boilerplate from where you can easily build extensions
 * for showdown
 */
(function (extension) {
    'use strict';

    // UML - Universal Module Loader
    // This enables the extension to be loaded in different environments
    if (typeof showdown !== 'undefined') {
        // global (browser or nodejs global)
        extension(showdown);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['showdown'], extension);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = extension(require('showdown'));
    } else {
        // showdown was not found so we throw
        throw Error('Could not find showdown library');
    }

}(function (showdown) {
    'use strict';

    // Here you have a safe sandboxed environment where you can use "static code"
    // that is, code and data that is used accross instances of the extension itself
    // If you have regexes or some piece of calculation that is immutable
    // this is the best place to put them.

    const extensionName = 'ionic-wiki-page-links';
    const ionicLinkRegex = /\[\[([^\]\]]+)\]\]/g;
    const invalidLinkCharacterRegex = /[^a-z0-9-_]/g;
    const multipleHyphenRegex = /[-]+/;
    const HYPHEN = '-';
    const RELATIVE_URL_PREFIX = './';

    // The following method will register the extension with showdown
    showdown.extension(extensionName, function () {

        console.log(`Loaded showdown estension: ${extensionName}`);

        return {
            type: 'lang', //or output
            filter: (rawMarkdown, converter, options) => {

                // console.log(`showdown [${extensionName}]: filtering...`);

                let transformedMarkdown = rawMarkdown;

                transformedMarkdown = transformedMarkdown.replace(ionicLinkRegex, (match, wikiPageTokenName) => {

                    const pageName = wikiPageTokenName;
                    const pageRelativeUrl = `/` + pageName
                        .toLowerCase()
                        .replace(invalidLinkCharacterRegex, HYPHEN)
                        .replace(multipleHyphenRegex, HYPHEN);

                    return `<a routerLink="${pageRelativeUrl}">${wikiPageTokenName}</a>`;
                });

                return transformedMarkdown;
            },
        };
    });
}));
