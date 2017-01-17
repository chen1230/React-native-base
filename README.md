# React-native-base 

Button  组件是使用TouchableOpacity或是TouchableNativeFeedback组件来制作的自定义按钮
用法实例：
<Button
  onPress={onPressLearnMore}
  title="确定"
  color="#841584"
  accessibilityLabel="OK"
/>
属性

color color 文本的颜色(iOS)，或是按钮的背景色(Android)
onPress function  用户点击时调用
title  按钮文字

Image
一个用于显示多种不同类型图片的React组件，包括网络图片、静态资源、临时的本地图片、以及本地磁盘上的图片（如相册）等
用法：1、加载本地图片
       <Image
        source={require('./icon.png')}
      />
      2、加载网络图片
       <Image
        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
      />
 注意： Image不能单独显示，必须用view包裹，加载网络图片必须制定宽、高  
  
  定时器Timer
    setTimeout, clearTimeout
    setInterval, clearInterval
    setImmediate, clearImmediate
    requestAnimationFrame, cancelAnimationFrame
  我们发现很多React Native应用发生致命错误（闪退）是与计时器有关。具体来说，是在某个组件被卸载（unmount）之后，计时器却仍然被激活。为了解决这个问题，我们引入了TimerMixin。如果你在组件中引入TimerMixin，就可以把你原本的setTimeout(fn, 500)改为this.setTimeout(fn, 500)(只需要在前面加上this.)，然后当你的组件卸载时，所有的计时器事件也会被正确的清除。
这个库并没有跟着React Native一起发布。你需要在项目文件夹下输入npm i react-timer-mixin --save来单独安装它。可以减少很多没必要的bug
