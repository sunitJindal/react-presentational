# react-presentational

Simple module to create basic prescentational component for project. In case you are using concept of
containers and components in your project, there's too much basic structure that you need to create over and over. This module
tries to reduce that wasted effort.


> NOTE:
> This module is opinionated. It assumes you are using [react-css-modules](https://github.com/gajus/react-css-modules).
> Plus you are following the concept of containers and components to manage your code base for React.

## Setup
``npm i react-presentational -g``

or

``yarn gloabl add react-presentational``

## How to use
Lets assume this is the directory structure of your project
```
app
  |- components
    |- Card
    |- Rating
  |- containers
```

Lets assume, we want to create a component named `Badge`. Go inside the `components` directory from your terminal and
type this command
``react-presentational Badge``

New directory structure would be:
```
app
  |- components
    |- Card
    |- Rating
    |- Badge
      |- index.js
      |- Badge.js
      |- Badge.css
  |- containers
```

This command created 1 directory and 3 files within that directory. Below is the sample content of these files
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

### index.js
```
import Badge from './Badge';

export default Badge
```
