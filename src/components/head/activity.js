import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './activity.scss'

class Activity extends Component {
  constructor() {
    super(...arguments)
    this.state= {
    }
  }
  render () {
    return (
      <View className='activity'>
        <Text>减</Text>
        <Text>减</Text>
        <Text>减</Text>
      </View>
    )
  }
}
export default Activity
