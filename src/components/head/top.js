import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './top.scss'

class Head extends Component {
  render () {
    return (
      <View className='top'>
        <View className='left'>
          <Image className='img' src={require("../../assets/images/leftArrow.png")} />
        </View>

        <View className='right'>
          <Image className='img' src={require("../../assets/images/glass.png")} />
          <Image className='img' src={require("../../assets/images/collect.png")} />
          <Image className='img' src={require("../../assets/images/share.png")} />
          <Image className='img' src={require("../../assets/images/more.png")} />
        </View>
      </View>
    )
  }
}
export default Head