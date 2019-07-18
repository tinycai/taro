import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cate from './cate'
import List from './list'
import './food.scss'

class Food extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{title: '点菜'}, {title: '评价'},{title: '商家'}],
      currentList: [],
      foodLists: [],
      selectedCate: null
    }
  }
  // 监听Tab标签切换事件
  handleTabChange(value) {
    this.setState({current: value})
  }
  // 监听分类变化
  handleCateChange(selectedCate) {
    this.setState({selectedCate: selectedCate})
    if (this.state.foodLists.some(item => item.id === selectedCate)) {
      this.setState({currentList:this.state.foodLists.filter(item => item.id === selectedCate)})
    } else {
      this.setState({foodLists: this.state.foodLists.concat(this.getData(selectedCate))}, () => {
        this.setState({currentList:this.state.foodLists.filter(item => item.id === selectedCate)})
      })
    }
  }
  // 获取数据
  getData(selectedCate) {
    return Array.from(Array(Math.round(Math.random()*6)), (v,i) => {
      return {
        name: '分类' + selectedCate,
        title: '菜品_' + (i + 1),
        id: selectedCate,
        imgUrl: Math.round(Math.random()*2),
        sole: Math.round(Math.random()*50),
        price: Math.round(Math.random()*20)
      }
    })
  }
  render() {
    const {current, tabList, currentList, selectedCate} = this.state
    return (
      <View className='food'>
        <AtTabs current={current} tabList={tabList} onClick={this.handleTabChange.bind(this)}>
          <AtTabsPane>
            <View className='food_box'>
              <Cate onChangeCate={this.handleCateChange.bind(this)} /> <List selectedCate={selectedCate} currentList={currentList} />
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
    
  }
}
export default Food