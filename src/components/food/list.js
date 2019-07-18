import Taro,{Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import './list.scss'

class List extends Component {
  render() {
    console.log(this.props.currentList)
    const {currentList, selectedCate} = this.props
    return (
      <View className='list'>
        <Text>{selectedCate}</Text>
        {
           currentList.map((item) => {
            return <View key={item.id} className='foodList_item'>
               <Image className='foodList_pic' src={item.imgUrl < 2 ? require('../../assets/images/2.jpg') : require('../../assets/images/1.jpg')}></Image>
               <View className='foodList_info'>
                 <Text>{item.title}</Text>
                 <Text>销量：{item.sole}</Text>
                 <Text className='price'>￥{item.price}</Text>
               </View>
            </View>
           
          })
        }
      </View>
    )
  }
}
export default List