import Taro, { Component } from '@tarojs/taro'
import { View, Text,Map,CoverImage,CoverView,Button,Navigator} from '@tarojs/components'
import location from "../../images/location.png"
import my from "../../images/my.png"
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '一面而就'
  }
  constructor(props){
    super(props)
    this.state={
      latitude:null,
      longitude:null,
      markers: [{
        iconPath: '/src/images/location.png',
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 116.300278,
          latitude: 40.040848
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }],
    }
  }
  componentDidMount(){
    Taro.getLocation({
      type: 'wgs84',
      success:(res)=> {
        const latitude = res.latitude
        const longitude = res.longitude
        let newMarkers=this.state.markers[0]
        newMarkers.latitude=latitude
        newMarkers.longitude=longitude
        this.setState({
          longitude:longitude,
          latitude:latitude,
          markers:newMarkers
        })
      }
  })
  }
  render () {
    return (
      <View className='index'>
          <Map
  id="map"
  longitude={this.state.longitude}
  latitude={this.state.latitude}
  scale="18"
  bindcontroltap="controltap"
  markers={this.state.markers}
  bindmarkertap="markertap"
  bindregionchange="regionchange"
  show-location
  style="width: 100%;height:1000rpx;"
></Map>
<CoverView className="box">
      <Button onClick={this.handelClick}>
          <CoverImage src={location} className="img_left" ></CoverImage>
      </Button>
      <Navigator url="/pages/mine/mine"> 
          <CoverImage src={my} className="img_right"></CoverImage>
      </Navigator>
      <Navigator url="/pages/addPost/add">
          <Button>添加面试</Button>
      </Navigator>
</CoverView>
      </View>
    )
  }
  handelClick(e){
    console.log(1111)
    let mpCtx = Taro.createMapContext("map");
      mpCtx.moveToLocation();
   }
}
