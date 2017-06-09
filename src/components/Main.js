require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
//let imageDatas = require('json!../data/imageDatas.json');
let imageDatas=[
  {
    fileName: "1.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/1.jpg"
  },
  {
    fileName: "2.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/2.jpg"
  },
  {
    fileName: "3.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/3.jpg"
  },
  {
    fileName: "4.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/4.jpg"
  },
  {
    fileName: "5.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/5.jpg"
  },
  {
    fileName: "6.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/6.jpg"
  },
  {
    fileName: "7.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/7.jpg"
  },
  {
    fileName: "8.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/8.jpg"
  },
  {
    fileName: "9.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/9.jpg"
  },
  {
    fileName: "10.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/10.jpg"
  },
  {
    fileName: "11.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/11.jpg"
  },
  {
    fileName: "12.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/12.jpg"
  },
  {
    fileName: "13.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/13.jpg"
  },
  {
    fileName: "14.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/14.jpg"
  },
  {
    fileName: "15.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/15.jpg"
  },
  {
    fileName: "16.jpg",
    title: "第一张图片",
    desc:"有一个美好的故事",
    imageURL:"../images/16.jpg"
  },
]
//let yeomanImage = require('../images/yeoman.jpg');

//利用自执行函数，将图片名信息转换成URL路径信息
/*imageDatas=(function genImagerURL(imageDatasAttr) {
  for(var i=0;i<imageDatasAttr.length;i++){
    var singleImageData=imageDatasAttr[i];

    singleImageData.imageURL=require('../images/'+singleImageData.filename);
    imageDatasAttr[i]=singleImageData;
  }
  return imageDatasAttr;
})(imageDatas);*/



function ImgFigure(props) {
    return(
      <figure className="image-figure">
        <img src={props.data.imageURL} alt={props.data.title} />
        <figcaption>
          <h2 className="image-title">{props.data.title}</h2>
        </figcaption>
      </figure>
    )
}
const Constant={
  centerPos:{
    left:0,
    top:0
  },
  hPosRange:{//水平方向的取值范围
    leftSecX:[0,0],
    rightSecX:[0,0],
    y:[0,0]
  },
  vPosRange:{ //垂直方向的取值范围
    x:[0,0],
    topY:[0,0]
  }


}
class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }
  //组件加载以后为每张图片设置位置
  componentDidMount() {
    //拿到舞台大小
  }
  render() {
    const controllerUnits=[];
    const imgFigures=[];
    imageDatas.forEach(function (value) {
      imgFigures.push(<ImgFigure data={value}/>);
    })
    return (
      <section className="stage" ref="stage">
          <section className="image-sec">
            {imgFigures}
          </section>
          <nav className="controller-nav">
            {controllerUnits}
          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
