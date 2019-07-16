import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import Head from '../../components/head/head'
import Food from '../../components/food/food'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Head />
        <Food />
      </View>
    )
  }
}
