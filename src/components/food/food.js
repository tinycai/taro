import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'

class Food extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{title: '点菜'}, {title: '评价'},{title: '商家'}]
    }
  }
  // 监听Tab标签切换事件
  handleTabChange(value) {
    this.setState({current: value})
  }
  render() {
    const {current, tabList} = this.state
    return (
      <View className='food'>
        <AtTabs current={current} tabList={tabList} onClick={this.handleTabChange.bind(this)}>
          <AtTabsPane>
            <Cata />
          </AtTabsPane>
        </AtTabs>
      </View>
    )
    
  }
}
export default Food