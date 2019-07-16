import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

class List extends Component {
  render() {
    console.log(this.props.currentList)
    return (
      <View className='list'>
        菜单列表
      </View>
    )
  }
}
export default List