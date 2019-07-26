# Ourchitecture

This web application is built and deployed as a GitHib Pages site for the [Ourchitecture organization](https://ourchitecture.github.io/) with distribution source updated in the [`ourchitecture.github.com`](https://github.com/ourchitecture/ourchitecture.github.com) repository.

[![Chat on Gitter](https://badges.gitter.im/ourchitecture.png)](https://gitter.im/ourchitecture/community)

[![Build Status](https://travis-ci.org/ourchitecture/site-ionic-ng.svg?branch=master)](https://travis-ci.org/ourchitecture/site-ionic-ng)
[![CircleCI](https://circleci.com/gh/ourchitecture/site-ionic-ng.svg?style=svg)](https://circleci.com/gh/ourchitecture/site-ionic-ng)
[![Build Status](https://api.cirrus-ci.com/github/ourchitecture/site-ionic-ng.svg)](https://cirrus-ci.com/github/ourchitecture/site-ionic-ng)

## Setup

This project was created with the [Ionic CLI](http://ionicframework.com/docs/v2/cli/start/) and [Angular](https://angular.io). Progressive Web Application (PWA) and Service Worker support [were added](https://angular.io/guide/service-worker-getting-started).

## Contributing

See our [Contributor Guidelines](.github/CONTRIBUTING.md).

## Testing

Tests have been modified to use Puppeteer and the Chromium Headless browser by default.

### End-to-End (e2e)

The version of Chromium must be kept in sync between Protractor and Puppeteer. The [Puppeteer API](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md) lists the versions of Chromeium that ship with each version of the library.

## Continuous Integration

This project utilizes [Travis CI](https://travis-ci.org), [Circle CI](https://circleci.com/) and [Cirrus CI](https://cirrus-ci.com/).
