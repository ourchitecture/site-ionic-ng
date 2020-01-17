/* eslint-disable */

/**
 * Showdown Extension for removing paragraph wrapper around HTML.
 *
 * Removes <p></p> when it's content is HTML.
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

    const extensionName = 'html-remove-p';

    // test regex here: https://jsfiddle.net/tivie/ypjzcuLv/
    const htmlElementRegEx = /^ {0,3}<[a-z]+\b[^>]*>((.*?)<\/[a-z]+\b[^>]*>)?$/gmi;

    // The following method will register the extension with showdown
    showdown.extension(extensionName, () => {

        console.log(`Loaded showdown estension: ${extensionName}`);

        return [{
            type: 'listener',
            listeners: {
                'hashHTMLBlocks.after': (event, text, converter, options, globals) => {

                    // console.log('[hashHTMLBlocks.after] text', text);

                    const newText = text.replace(htmlElementRegEx, (wm) => {
                        return '\n\n¨K' + (globals.gHtmlBlocks.push(wm) - 1) + 'K\n\n';
                    });

                    // console.log('[hashHTMLBlocks.after] newText', newText);

                    return newText;
                }
            }
        }];
    });
}));
