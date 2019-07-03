// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const puppeteer = require('puppeteer');

console.log('PUPPETEER', puppeteer.executablePath());

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './src/**/*.e2e-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            binary: puppeteer.executablePath(),
            args: [
                "--headless",
                "--no-sandbox", // required to run without privileges in docker
                "--user-data-dir=/tmp/chrome-test-profile",
                "--disable-web-security",
                "--disable-gpu",
                "--window-size=800,600"
            ]
        }
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json')
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};
