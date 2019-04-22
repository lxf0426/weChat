import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image,Icon} from '@tarojs/components';
import my from "../../images/my.png"
import right from "../../images/arrow.svg"
 class Index extends Component {

   config = {
       navigationBarTitleText: '个人中心'
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
          <View className='head'>
            <View className="con">
                <Image src={my}></Image>
            </View>
          </View>
          <View className="section">
              <View className="item">
                  <Icon type="waiting"></Icon>
                  <View className="lis">
                    <Text>我的面试</Text> 
                    <Image src={right}></Image>
                  </View>
             </View>
             <View className="item">
               <Icon type="warn"></Icon>
               <View className="lis">
                 <Text>客服中心</Text>
                 <Image src={right}></Image>
                </View>
             </View>
          </View>
          
      </View>
    );
  }
}
export default Index;