# car-names
> Used to get random car names or all car names :car: 

[![CI](https://github.com/palashmon/car-names/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/palashmon/car-names)
[![npm version](https://img.shields.io/npm/v/car-names.svg)](http://npm.im/car-names)
[![npm downloads](https://img.shields.io/npm/dm/car-names.svg)](http://npm.im/car-names)
[![MIT License](https://img.shields.io/npm/l/car-names.svg?colorB=0BD6D3)](http://opensource.org/licenses/MIT)

## Installation

### Via Npm:

```
npm install car-names
```

### Usage

```javascript
var carNames = require('car-names');
var allNames = carNames.all;
var randomName = carNames.random();
```

### Via Browser:

```javascript
<script src="dist/index.umd.min.js"></script>
<script>
var allNames = carNames.all;
var randomName = carNames.random();
```

## Run Tests

```
npm test
```
