import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Input,Image} from '@tarojs/components';
import location from "../../images/location.svg"
export default class address extends Component {

   config = {
       navigationBarTitleText: '选择面试地址'
  }

  state={
      city:'北京',
      confirm:'腾讯',
      list:[]
  }

  componentWillMount () {}
  componentDidMount () {
      Taro.request({
          url:'https://apis.map.qq.com/ws/place/v1/suggestion/?region='+this.state.city+'&keyword='+this.state.confirm+'&key=Z6PBZ-W56CR-BP2W4-WL4LY-KGFL3-DDFVR',
          success:(res)=>{
            this.setState({
                list:res.data.data
            })
          }
      })
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    console.log(this.state.list)
    return (
      <View>
         <View className='header'>
            <Input value={this.state.city} onChange={this.changeCity.bind(this)}></Input>
            <Input value={this.state.confirm} onChange={this.changeConfirm.bind(this)}></Input>
          </View>
          <View className="ulList">
              {
                  this.state.list.map((item,ind)=>{
                    return <View key={ind} className='item_Li'>
                        <Image src={location}></Image>
                        <View className="item_con">
                            <Text>{item.title}</Text>
                            <Text className='addr'>{item.address}</Text>
                        </View>
                    </View>
                  })
              }
          </View>
      </View>
    );
  }
  changeCity(ev){
      this.setState({
          city:ev.detail.value
      })
      Taro.request({
        url:'https://apis.map.qq.com/ws/place/v1/suggestion/?region='+ev.detail.value+'&keyword='+this.state.confirm+'&key=Z6PBZ-W56CR-BP2W4-WL4LY-KGFL3-DDFVR',
        success:(res)=>{
          this.setState({
              list:res.data.data
          })
        }
    })
  }
  changeConfirm(ev){
    this.setState({
        confirm:ev.detail.value
    })
    Taro.request({
      url:'https://apis.map.qq.com/ws/place/v1/suggestion/?region='+this.state.city+'&keyword='+ev.detail.value+'&key=Z6PBZ-W56CR-BP2W4-WL4LY-KGFL3-DDFVR',
      success:(res)=>{
        this.setState({
            list:res.data.data
        })
      }
  })
  }
}