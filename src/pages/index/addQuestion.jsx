import Taro, { Component } from '@tarojs/taro'
import { View, Text,Input,Textarea,Button } from '@tarojs/components'
import Dialog from './dialog'
import './addQuestion.less'

export default class AddQuestion extends Component{
   
    cancel (){
        console.log('kkk')
        // debugger
        this.props.onCloseQuestion&&this.props.onCloseQuestion()
    }
 componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
    <Dialog>
        <View className='add-question'>
            <View className='question-body'>
                <Input className='question-title' placeholder='请输入您的问题标题'></Input>
                <Textarea className='question-des'  placeholder='请输入您的问题描述'/>
                <View className='btn-group'>
                    <Button className='btn-question ok'>确定</Button>
                    <Button  className='btn-question cancel' onClick={this.cancel.bind(this)}>取消</Button>
                </View>
            </View>
        </View>
    </Dialog>
      
    )
  }
}
