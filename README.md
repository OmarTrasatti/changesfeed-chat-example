# ChangesfeedChatExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## How To Use

1. Start MongoDB with [Replica Set](https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/)
2. [Start RESTHeart](https://restheart.org/learn/tutorial/)
3. Create a `/chat` db with a `/public` collection (see [here](https://restheart.org/learn/write-requests/) for further information)
4. Define a FeedOperation named "public_feed" with stages ("empty array") (See RESTHeart docs)
5. Run `ng serve` to build and serve the application.

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
