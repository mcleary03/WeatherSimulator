import React, { Component } from 'react'

import { Model, View, asset } from 'react-vr'

export default class WindCloudObject extends Component {
  render () {
    return (
      <View
        style={{
          transform: [
            { translate: [0, -25, -150] },
            { rotateX: -90 },
            { rotateZ: this.props.wind.deg }
          ]
        }}>
        <Model
          scale={0.01}
          source={{
            obj: asset('multi_clouds.obj')
          }}
        />
      </View>
    )
  }
}
