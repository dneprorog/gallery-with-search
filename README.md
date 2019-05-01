# gallery-search

> gallery of photos with title search and modal window

[![NPM](https://img.shields.io/npm/v/gallery-search.svg)](https://www.npmjs.com/package/gallery-search) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Иллюстрация к проекту 1](https://github.com/dneprorog/gallery-with-search/blob/master/img/gallery-search.png)
![Иллюстрация к проекту 2](https://github.com/dneprorog/gallery-with-search/blob/master/img/gallery-search-1.png)
![Иллюстрация к проекту 3](https://github.com/dneprorog/gallery-with-search/blob/master/img/gallery-search-2.png)
## Install

```bash
npm install --save gallery-search
```

## Usage

```jsx
import React, { Component } from 'react'

import Gallery from 'gallery-search'

export default class App extends Component {
  render () {
    return (
      <Gallery
        backgroundInput={'#232733'}
        fontSizeInput={'20px'}
        isNoneSearch={true}

        widthCardItem={'160px'}
        backgroundCardItem={'#3a3b40'}
        colorCardItem={'cadetblue'}
        alignTextCardItem={'center'}

        backgroundModalWrap={'#0e0d0dab'}
        backgroundModal={'#232733'}
        colorModal={'#fff'}
        widthModal={'600px'}
        heightModal={'500px'}
        backgroundButtonModal={'red'}
        colorButtonModal={'#fff'}
        colorBorderButtonModal={'red'}
        widthButtonModal={'100%'}
        heightButtonModal={'40px'}
        isNoneModal={true}
      />
    )
  }
}
```

```bash
PROPS
  Gallery: 
    Available Properties
    backgroundInput - background input(search)
    fontSizeInput - font-size input(search)
    isNoneSearch - hidden input(search)
    
    widthCardItem - width card-item
    backgroundCardItem - background card-item
    colorCardItem - color card-item
    alignTextCardItem - align text card-item
    
    backgroundModalWrap - bacground modal wrap
    backgroundModal - bacground modal
    colorModal - color modal
    widthModal - width modal
    heightModal - height modal
    backgroundButtonModal - bacground button modal
    colorButtonModal - color button modal
    colorBorderButtonModal - color border button modal
    widthButtonModal - width button modal
    heightButtonModal - height button modal
    isNoneModal - hidden input(search)
    
    _______________________________________________________
    
    backgroundInput - String, default '#232733'
    fontSizeInput - String, default '20px'
    isNoneSearch - Boolean, default true
    
    widthCardItem - String, default '160px'
    backgroundCardItem - String, default '#3a3b40'
    colorCardItem - String, default 'cadetblue'
    alignTextCardItem - String, default 'center'
    
    backgroundModalWrap - String, default '#0e0d0dab'
    backgroundModal - String, default '#232733'
    colorModal - String, default '#fff'
    widthModal - String, default '600px'
    heightModal - String, default '500px'
    backgroundButtonModal - String, default 'red'
    colorButtonModal - String, default '#fff'
    colorBorderButtonModal - String, default 'red'
    widthButtonModal - String, default '100%'
    heightButtonModal - String, default '40px'
    isNoneModal - Boolean, default true
```



## License

MIT © [dneprorog](https://github.com/dneprorog)
