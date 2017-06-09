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
//let yeomanImage = require('../images/yeoman.png');

//利用自执行函数，将图片名信息转换成URL路径信息
/*imageDatas=(function genImagerURL(imageDatasAttr) {
  for(var i=0;i<imageDatasAttr.length;i++){
    var singleImageData=imageDatasAttr[i];

    singleImageData.imageURL=require('../images/'+singleImageData.filename);
    imageDatasAttr[i]=singleImageData;
  }
  return imageDatasAttr;
})(imageDatas);*/



class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        111
          <section className="image-sec">222</section>
          <nav className="controller-nav">333</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
