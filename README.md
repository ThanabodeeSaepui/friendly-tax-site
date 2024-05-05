![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/ed5212f6-fe5c-4034-bc84-38e35905adba)# Demo
https://d3l1k0qo6bjlh3.cloudfront.net/

# Preview
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/156a4316-8fa7-4d9f-a817-1f2cabcd193d)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/7247152c-1c8a-4d71-8ef9-23a590546caf)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/a6d2084f-4fdb-4599-8ef7-f57f31b4bb74)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/bcdc7656-5b9c-4385-ae93-367cbcbc3935)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/d4d73a36-2a65-4e3b-a1d6-46e25d3bbbb3)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/b243bf4b-5b7a-472e-a29b-b90aed3a70e1)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/09d1a812-fdd1-4d0e-8359-c71736e8263d)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/d15c1022-9873-4389-a150-2a2b966fa765)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/2d56248c-d6af-4da5-98d5-3721cf672a28)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/ca1ffbc9-7d93-469d-9fba-a21594cfc802)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/49b59ceb-3248-4983-adf8-258198988f85)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/24d3e0c3-76ae-48dc-ab79-a4111055218c)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/968114bd-43b6-4fdc-99b6-6eeaeccad007)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/ac18557e-6f28-4101-b9bc-cc1494528225)
![image](https://github.com/ThanabodeeSaepui/friendly-tax-site/assets/97942535/d4a892df-8405-4b5f-a938-6c4380088725)


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
