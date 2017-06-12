# react-presentational

[![Coverage Status](https://coveralls.io/repos/github/sunitJindal/react-presentational/badge.svg?branch=master)](https://coveralls.io/github/sunitJindal/react-presentational?branch=master)


Simple module to create basic prescentational component for project. In case you are using concept of
containers and components in your project, there's too much basic structure that you need to create over and over. This module
tries to reduce that wasted effort.


> NOTE:
> This module is opinionated. It assumes you are using [react-css-modules](https://github.com/gajus/react-css-modules).
>
> Plus you are following the concept of containers and components to manage your code base for React.
>
> For testing [Jest](https://facebook.github.io/jest/) is used along with [Enzyme](http://airbnb.io/enzyme/)

## Setup
``npm i react-presentational -g``

or

``yarn global add react-presentational``

## How to use
Lets assume this is the directory structure of your project
```
app
  |- components
    |- Card
    |- Rating
  |- containers
```

Lets assume, we want to create a component named `Badge`.
### Using CLI
Go inside the `components` directory from your terminal and
type this command
``react-presentational Badge``

#### Options
```
react-presentational -n componentName [options]

Basic configuration:
  -n, --name  Name of the component
  --flat      Create files at CWD. No directory is created
```

### Using module system
```
const reactPresentational = require('react-presentational');
reactPresentational('Bagde');
```

## What happens after command is executed?
New directory structure would be:
```
app
  |- components
    |- Card
    |- Rating
    |- Badge
      |- index.js
      |- Badge.js
      |- Badge.spec.js
      |- Badge.css
  |- containers
```

This command created 1 directory and 4 files within that directory. Below is the sample content of these files
#### Badge.css
```
.sample {}
```

#### Badge.js
```
import React, { PropTypes } from 'react';
import './Badge.css';

const Badge = (props) => {
  return (
    <div styleName="sample">Badge</div>
  )
};

Badge.propTypes = {
};

export default Badge;
```

### Badge.spec.js
```
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Badge from './Badge';

describe('Badge test', () => {
  it('should render component', () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper.find('.Badge').length).toBe(1);
  });
});
```
### index.js
```
import Badge from './Badge';

export default Badge
```
