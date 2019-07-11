import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './activity.scss'

class Activity extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      activities: [
        {
          total: 48,
          cut: 10
        },
        {
          total: 58,
          cut: 20
        },
        {
          total: 100,
          cut: 30
        }
      ]
    }
  }
  getLines(arr) {
    return arr.map((item) => `满${item.total}减${item.cut}`).join(';')
  }
  render () {
    const {activities} = this.state
    return (
      
      <View className='activity'>
        <Text className='type'>减</Text>
        <Text>{this.getLines(activities)}</Text>
        <Text className='length'>{activities.length}个活动</Text>
      </View>
    )
  }
}
export default Activity
