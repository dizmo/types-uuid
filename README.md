[![NPM version](https://badge.fury.io/js/%40dizmo%2Ftypes-uuid.svg)](https://npmjs.org/package/@dizmo/types-uuid)
[![Build Status](https://travis-ci.org/dizmo/types-uuid.svg?branch=master)](https://travis-ci.org/dizmo/types-uuid)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/types-uuid/badge.svg?branch=master)](https://coveralls.io/github/dizmo/types-uuid?branch=master)

# @dizmo/types-uuid

Library module.

## Usage

### Install

```sh
npm install @dizmo/types-uuid --save-dev
```

### Require

```javascript
const { UUID } = require('@dizmo/types-uuid');
```

### Examples

```typescript
import { UUID } from '@dizmo/types-uuid';
```

```typescript
const uuid: UUID = '00000000-0000-0000-0000-000000000000';
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2019 [dizmo AG](http://dizmo.com/), Switzerland
