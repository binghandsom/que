import Taro, { Component } from '@tarojs/taro'
import { View, Text,Input,Textarea } from '@tarojs/components'
import './dialog.less'
export default class Dialog extends Component {
    componentWillMount () { }

    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
      return (
        <View className='dialog'>
         {this.props.children}
        </View>
      )
    }
}