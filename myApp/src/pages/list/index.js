import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Index extends PureComponent {

   config = {
       navigationBarTitleText: '面试列表'
  }

  state={
      list:["未开始","已打卡",'已放弃','全部'],
      activeIndex:0
  }

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
          <View className='head_cont'>
            {
                this.state.list.map((item,ind)=>{
                    return <Text onClick={this.handelClick.bind(this,ind)} className={activeIndex===ind?'active':''} key={ind}>{item}</Text>
                })
            }
          </View>
      </View>
    );
  }
  handelClick(ev){
    this.setState({
        activeIndex:ev
    })
  }
}
export default Index;