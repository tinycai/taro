import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Top from './top'
import Activity from './activity'
import './head.scss'

class Head extends Component {
  constructor() {
    super(...arguments)
    this.state= {
      store:{
        title:"川湘居",
        notice: '欢迎光临，很高兴为你服务~',
        tags: ['味道赞', '品种多', '味道真好']
      }
    }
  }
  render () {
    let {store} = this.state
    return (
      <View className='head'>
        <Top />
        <Image className='back' src={require('../../assets/images/back.png')} />

        <View className='store'>
          <Image className='store_img' src={require('../../assets/images/business.png')} />
          <View className='store_text'>
            <Text className='title_text'>{store.title}</Text>
            <Text className='notice_text'>{store.notice}</Text>
            <View>
              {store.tags.map((item, index) => 
                <Text key={index} className='tags_text'>{item}</Text>
              )}
            </View>
          </View>
        </View>

        <Activity />
      </View>
    )
  }
}
export default Head
