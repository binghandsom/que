import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import AddQuestion from './addQuestion'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state={
    showQuestionModal:false
  }
  
  addQuestion(){
    this.setState({
      showQuestionModal:true
    })
  }
  closeQuestion(){
    this.setState({
      showQuestionModal:false
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='title'>测试题</View>
        {this.showQuestionModal?<AddQuestion onCloseQuestion={this.closeQuestion.bind(this)}/>:null}
        <Button onClick={this.addQuestion.bind(this)} className='btn-question'>提问</Button>
      </View>
    )
  }
}
