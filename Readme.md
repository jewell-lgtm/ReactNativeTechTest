# Matt Jewell Tech Test

Running the project

```bash
yarn
# generate the typescript types required to build the app
yarn graphql:generate # SEE NOTE
yarn test # optional
yarn start # starts the expo bundler
```

follow the instructions from expo cli to run the app in a simulator/browser.

### Generating graphql types

normally this file would be added to the gitignore and generated automatically, but I had to manually comment out some types and I didn't want to take the time in a tech test to figure out why

### Work log

What I did and when

1. start the project using expo cli
1. add prettier and lint staged, so I don't have to think about code formatting
1. add apollo client
1. added graphql-codegen to generate the a query and show that in a react native view
