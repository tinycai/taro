import Taro,{Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './cate.scss'

class Cate extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 1,
      cateList: [
        {
          id: 1,
          text: '热销'
        },
        {
          id:2,
          text: '折扣'
        },
        {
          id:3,
          text: '丸子类'
        },
        {
          id:4,
          text: '蔬菜类'
        },
        {
          id:5,
          text: '豆制品'
        },
        {
          id:6,
          text: '主食'
        },
        {
          id:7,
          text: '饮料'
        }
      ]
    }
  }
  // 监听点击事件
  handleClick(id) {
    this.setState({current: id}, () => {
      this.props.onChangeCate(this.state.current)
    })
  }
  render() {
    const {cateList, current} = this.state
    return (
      <View className='cate'>
        {cateList.map((item) =>
          <Text key={item.id} className={item.id === current ? 'cate_item_current cate_item' : 'cate_item'} onClick={this.handleClick.bind(this, item.id)}>
            {item.text}
          </Text>
        )}
      </View>
    )
    
  }
}
export default Cate