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
