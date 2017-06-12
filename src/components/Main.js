require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import ReactDOM from 'react-dom';

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



/*function ImgFigure(props) {
    return(
      <figure className="image-figure">
        <img src={props.data.imageURL} alt={props.data.title} />
        <figcaption>
          <h2 className="image-title">{props.data.title}</h2>
        </figcaption>
      </figure>
    )
}*/

/**
 * 获取一个区间内的随机值
 * **/
function getRangeRandom(low,high) {
    return Math.ceil(Math.random()*(high-low)+low);
}


//获取0-30°之间一个任意正负值
var get30DegRandom = () => {
  let deg = '';
  deg = (Math.random() > 0.5) ? '+' : '-';
  return deg + Math.ceil(Math.random() * 30);
};


class ImgFigure extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    //翻转和居中图片
    if (this.props.arrange.isCenter) {
      this.props.inverse()
    } else {
      this.props.center();
    }
    e.stopPropagation();
    e.preventDefault();
  }
  render(){
    let styleObj={};
    //如果props属性中指定了这张图片的位置，就使用
    if(this.props.arrange.pos){
      styleObj=this.props.arrange.pos;
    }
    //如果图片的旋转角度有值并且不为0，添加旋转角度
    if (this.props.arrange.rotate) {
      (['Moz', 'Ms', 'Webkit', '']).forEach((value) => {
        styleObj[value + 'Transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
      })
    }
    if (this.props.arrange.isCenter) {
      styleObj.zIndex = 11;
    }
    let imgFigureClassName = 'image-figure';
    imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse ' : '';
    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img src={this.props.data.imageURL} alt={this.props.data.title} />
        <figcaption>
          <h2 className="image-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>
              {this.props.data.title}
            </p>
          </div>
        </figcaption>
      </figure>
    )
  }
}
class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imgsArrangeArr:[
       /* {
          pos:{
            left:'0',
            top:'0'
          },
          rotate:0 /、旋转角度
        //isInverse:false //正反面
        //isCenter:false 图片是否居中
        }*/
      ]
    }
    this.Constant={
      centerPos:{ //中心的图片
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

  }
  //组件加载以后为每张图片设置位置
  componentDidMount() {
    //拿到舞台大小
    const stageDOM=ReactDOM.findDOMNode(this.refs.stage),
          stageW=stageDOM.scrollWidth,
          stageH=stageDOM.scrollHeight,
          halfStageW=Math.ceil(stageW/2),
          halfStageH=Math.ceil(stageH/2);
    //拿到一个imgFigure的大小
    const imgFigureDOM=ReactDOM.findDOMNode(this.refs.imgFigure0),
          imgW=imgFigureDOM.scrollWidth,
          imgH=imgFigureDOM.scrollHeight,
          halfImgW=imgW/2,
          halfImgH=imgH/2;

    //计算中心图片的位置点
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }

    //计算左侧,右侧区域图片排布的取值范围
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;

    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;

    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;
    //计算上测区域图片排布的取值范围
    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;

    this.Constant.vPosRange.x[0] = halfStageW - imgW;
    this.Constant.vPosRange.x[1] = halfStageW;


    this.rearrange(0);

  }
  /**
   * 重新布局所有图片
   * @param centerIndex 制定排布居中哪个图片
   **/
  rearrange(centerIndex){
    let imgsArrangeArr = this.state.imgsArrangeArr,
      Constant = this.Constant,
      centerPos = Constant.centerPos,
      hPosRange = Constant.hPosRange,
      vPosRange = Constant.vPosRange,
      hPosRangeLeftSecX = hPosRange.leftSecX,
      hPosRangeRightSecX = hPosRange.rightSecX,
      hPosRangeY = hPosRange.y,
      vPosRangeTopY = vPosRange.topY,
      vPosRangeX = vPosRange.x,


      imgsArrangTopArr = [],//放在上测区域图片的数组状态信息
      topImgNum = Math.ceil(Math.random()*2), //取一个或者0个
      topImgSpiceIndex = 0,//上边的图片是从数组哪个位置取出的

      imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);
      //首先居中centerIndex图片 ,centerIndex图片不需要旋转
      imgsArrangeCenterArr[0].pos = centerPos;
      imgsArrangeCenterArr[0].rotate = 0;
      imgsArrangeCenterArr[0]={
        pos:centerPos,
        rotate:0,
        isCenter:true
      }
    //取出要布局上测的图片的状态信息
    topImgSpiceIndex = Math.floor(Math.random() * (imgsArrangeArr.length - topImgNum));
    imgsArrangTopArr = imgsArrangeArr.splice(topImgSpiceIndex, topImgNum);
      //布局位于上部的图片
      imgsArrangTopArr.forEach((value,index)=>{
            imgsArrangTopArr[index]={
              pos:{
                left:getRangeRandom(vPosRangeTopY[0],vPosRangeTopY[1]),
                top:getRangeRandom(vPosRangeX[0],vPosRangeX[1])
              },
              rotate:get30DegRandom(),
              isCenter:false
            }

      })


    //布局左两侧的图片
    for (let i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
      let hPosRangeLORX = null;

      //前半部分布局左边,右边部分布局右边
      if (i < k) {
        hPosRangeLORX = hPosRangeLeftSecX;
      } else {
        hPosRangeLORX = hPosRangeRightSecX
      }
      imgsArrangeArr[i]={
        pos:{
          top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
          left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
        },
        rotate:get30DegRandom(),
        isCenter:false
      }
    }
    if (imgsArrangTopArr && imgsArrangTopArr[0]) {
      imgsArrangeArr.splice(topImgSpiceIndex, 0, imgsArrangTopArr[0]);
    }
    imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

    this.setState({
      imgsArrangeArr: imgsArrangeArr
    });

  }
  //翻转图片的函数(利用了闭包)
  inverse(index) {
    return () => {
      let imgsArrangArr = this.state.imgsArrangeArr;
      imgsArrangArr[index].isInverse = !imgsArrangArr[index].isInverse;
      this.setState({
        imgsArrangeArr: imgsArrangArr
      })
    }
  }

  /**
   * 利用rearramhe函数
   *居中对应index的图片
   **/
  center(index) {
    return () => {
      this.rearrange(index);
    }
  }
  render() {
    const controllerUnits=[];
    const imgFigures=[];
    console.log(this.state.imgsArrangeArr)
    imageDatas.forEach((value, index) => {
      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {
          pos: {
            left: 0,
            top: 0
          },
          rotate:0,
          isInverse:false,
          isCenter:false
        }
      }
      imgFigures.push(<ImgFigure data={value} key={index} ref={'imgFigure'+index}
      arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)}
      center={this.center(index)} />);
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
