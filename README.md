[![NPM version](https://badge.fury.io/js/%40dizmo%2Ftypes-uuid.svg)](https://npmjs.org/package/@dizmo/types-uuid)
[![Build Status](https://travis-ci.org/dizmo/types-uuid.svg?branch=master)](https://travis-ci.org/dizmo/types-uuid)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/types-uuid/badge.svg?branch=master)](https://coveralls.io/github/dizmo/types-uuid?branch=master)

# @dizmo/types-uuid
Library module.

## Usage
### Install
```sh
npm install @dizmo/types-uuid --save
```
### Require
```javascript
let lib = require('@dizmo/types-uuid');
```
### Examples
```typescript
import { UUID } from '@dizmo/types-uuid';
```
```typescript
const uuid: UUID = '00000000-0000-0000-0000-000000000000';
```
## Development
### Build
```sh
npm run build
```
#### without linting:
```sh
npm run -- build --no-lint
```
### Lint
```sh
npm run lint
```
#### with auto-fixing (for JavaScript and TypeScript):
```sh
npm run -- lint --fix
```
### Test
```sh
npm run test
```
#### without (re-)building:
```sh
npm run -- test --no-build
```
### Cover
```sh
npm run cover
```
#### without (re-)building:
```sh
npm run -- cover --no-build
```

## Copyright

 © 2018 [Hasan Karahan](https://github.com/hsk81)
