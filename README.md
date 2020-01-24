# LocationMaison

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.



The application is the front part of the house rental project it consumes a rest API created in the "House Rental API" project

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Getting Started - Local Development

## Installation

To get started locally, follow these instructions:

1. If you haven't done it already, [make a fork of this repo](https://github.com/angular/angular-cli/fork).
1. Clone to your local computer using `git`.
1. Make sure that you have Node 10.13 or later installed. See instructions [here](https://nodejs.org/en/download/).

## Building and Installing the CLI

To make a local build:

```shell
yarn build --local
```

This generates a number of tarballs in the `dist/` directory. To actually use
the locally built tools, switch to another repository reproducing the specific
issue you want to fix (or just generate a local repo with `ng new`). Then
install the locally built packages:

```shell
cd "${EXAMPLE_ANGULAR_PROJECT_REPO}"
npm install -D ${CLI_REPO}/dist/*.tgz
```

Builds of this example project will use tooling created from the previous local
build and include any local changes. When using the CLI, it will automatically
check for a local install and use that if present. This means you can just run:

```shell
npm install -g @angular/cli
```

to get a global install of the latest CLI release. Then running any `ng` command
in the example project will automatically find and use the local build of the
CLI.

Note: If you are testing `ng update`, be aware that installing all the tarballs
will also update the framework (`@angular/core`) to the latest version. In this
case, simply install the CLI alone with
`npm install -D ${CLI_REPO}/dist/_angular_cli.tgz`, that way the rest of the
project remains to be upgraded with `ng update`.
