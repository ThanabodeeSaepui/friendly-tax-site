## Project layout
An SST app is made up of two parts.

1. stacks/ — App Infrastructure
The code that describes the infrastructure of your serverless app is placed in the stacks/ directory of your project. SST uses AWS CDK, to create the infrastructure.

2. packages/ — App Code
The Lambda function code that’s run when your API is invoked is placed in the packages/functions directory of your project. While packages/core contains our business logic.

Our app is structured as a monorepo. Later on we’ll be adding a frontend/ directory for our React app.
The starter project that’s created is defining a simple Hello World API. In the next chapter, we’ll be deploying it and running it locally.

## Requirement
- Node.js & npm
- AWS IAM Credentials

Install dependency
```shell
pnpm i
```

## Guideline
https://sst.dev/guide.html#table-of-contents

## Development
```shell
pnpm run dev
```

## Deploy
```shell
pnpm sst deploy --stage prod
```