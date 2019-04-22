import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Input,Textarea,Picker} from '@tarojs/components';
import "./add.css"
export default class Add extends Component {

   config = {
       navigationBarTitleText: '添加面试'
  }
  state={
    date: '2016-09-01',
      list:[
          {
            title:"公司名称",
            place:"请输入公司名称",
            val:""
          },
          {
            title:"公司电话",
            place:"请输入面试联系人电话",
            val:""
          },
      ]
  }
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="box">
          <Text className='head_t'>面试信息</Text>
          <View>
              {
                  this.state.list.map((item,ind)=>{
                    return <View key={ind} className="itemList">
                        <Text>{item.title}</Text>
                        <Input value={item.val} placeholder={item.place}></Input>
                    </View>
                  })
              }
              <View  className="itemList">
                      <Picker
                        className="cont_Pocker"
                        mode="date"
                        value={this.state.date}
                        onChange={this.bindDateChange.bind(this)}
                      >
                        <View class="picker">
                          <Text>面试时间</Text>
                          <Text>{this.state.date}</Text>
                        </View>
                      </Picker>
              </View>
              <View  className="itemList">
                    <Text>面试地址</Text>
                    <Input placeholder="请选择面试地址"></Input>
              </View>
          </View>
          <Text className='head_t'>备注信息</Text>
          <Textarea className='textare' placeholder="备注信息(可选,100个字以内)"></Textarea>
          <Button onClick={this.handelClick}>确认</Button>
      </View>
    );
  }
  handelClick(){
    Taro.showModal({
        title: '温馨提示',
        content: '添加面试成功',
    })
  }
  bindDateChange(e) {
    console.log(e.detail.value)
    this.setState({
      date: e.detail.value
    })
  }
  
}
