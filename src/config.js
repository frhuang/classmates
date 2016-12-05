export const rootUrl = "http://tongxue.wangwangpei.com/api";
// export const rootUrl = "http://schoolmate.liyuzhou.net:80/api";

export const infoDefault = {
  name: '必须与学生证姓名一致',
  pro: '填写可以让你同乡找到你',
  school: '填写可以让校友找到你',
  profession: '填写可以让同专业的找到你',
  year: '填写可以让同年级的找到你',
  interest: '填写可以让志同道合的找到你',
  qrcode: '填写为你收获人脉和心意',
  stdcard: '让人觉得你靠谱',
  jobs: '展示你的才能（选填）'
}


export const years = [
  '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007'
];

  export const interests = [
    "打篮球",
    "摄影",
    "跑步",
    "美食",
    "追剧",
    "插画"
  ];

export const moneyTypes = {
    "1": "1个苹果",
    "2": "1个鸡腿",
    "3": "1杯咖啡"
  };

  export function getPost(id, cb) {
    setTimeout(() => {
      if (lists[id]) {
        cb(null, lists[id])
      } else {
        cb(new Error('Post not found.'))
      }
    }, 100)
  }

  export const lists = {
    '1':{
      "id":1,
      "img": "/static/img/default.png",
      "name": "伊丽莎白",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2014",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "2"
    },
    '2':{
      "id":2,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '3':{
      "id":3,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '4':{
      "id":4,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '5':{
      "id":5,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '6':{
      "id":6,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '7':{
      "id":7,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '8':{
      "id":8,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '9':{
      "id":9,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '10':{
      "id":10,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '11':{
      "id":11,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    },
    '12':{
      "id":12,
      "img": "/static/img/default.png",
      "name": "亚历山大",
      "stu": "中山大学",
      "pro": "软件工程",
      "lv": "2013",
      "interest": ["舞蹈", "体育", "编程"],
      "sex": "1"
    }
  }
