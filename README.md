# car-names

[![Build Status](https://travis-ci.org/palashmon/car-names.svg?branch=master)](https://travis-ci.org/palashmon/car-names)
[![npm version](https://img.shields.io/npm/v/car-names.svg)](http://npm.im/car-names)
[![npm downloads](https://img.shields.io/npm/dm/car-names.svg)](http://npm-stat.com/charts.html?package=car-names&from=2017-02-01)
[![Dependency Status](https://david-dm.org/palashmon/car-names.svg)](https://david-dm.org/palashmon/car-names)
[![devDependency Status](https://david-dm.org/palashmon/car-names/dev-status.svg)](https://david-dm.org/palashmon/car-names#info=devDependencies)
[![MIT License](https://img.shields.io/npm/l/car-names.svg?colorB=0BD6D3)](http://opensource.org/licenses/MIT)

Used to get random car name or all car names :car: 

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
