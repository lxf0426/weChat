import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Input,Textarea,Picker} from '@tarojs/components';
import "./add.css"
export default class Add extends Component {

   config = {
       navigationBarTitleText: '添加面试'
  }
  state={
    date: '2016-09-01',
    val:"",
    val2:'',
    val3:"",
    val4:''
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
              <View className="itemList">
                   <Text>公司名称</Text>
                  <Input onChange={this.changeOne.bind(this)} placeholder='请输入公司名称'></Input>
              </View>
              <View className="itemList">
                   <Text>公司电话</Text>
                    <Input onChange={this.changeTwo.bind(this)} placeholder='请输入面试联系人电话'></Input>
              </View>
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
                    <Input onChange={this.changeThree.bind(this)} placeholder="请选择面试地址"></Input>
              </View>
          </View>
          <Text className='head_t'>备注信息</Text>
          <Textarea onBlur={this.changeFour.bind(this)} className='textare' placeholder="备注信息(可选,100个字以内)"></Textarea>
          <Button onClick={this.handelClick}>确认</Button>
      </View>
    );
  }
  handelClick(){
    let obj={
      name:this.state.val,
      phone:this.state.val2,
      time:this.state.date,
      add:this.state.val3,
      content:this.state.val4
    }
    Taro.showModal({
        title: '温馨提示',
        content: '添加面试成功',
    })
  }
  bindDateChange(e) {
    this.setState({
      date: e.detail.value
    })
  }
  changeOne(ev){
    this.setState({
      val:ev.detail.value
    })
  }
  changeTwo(ev){
    this.setState({
      val2:ev.detail.value
    })
  }
  changeThree(ev){
   Taro.navigateTo({
     url:'/pages/address/address'
   })
  }
  changeFour(ev){
    console.log(ev)
    this.setState({
      val4:ev.detail.value
    })
  }
  
}
