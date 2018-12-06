
// 地区
let dqArray = [
    '鄞州区',
    '江北区',
    '海曙区',
    '北仑区',
    '海洋科技城',
    '奉化区',
    '宁海县',
    '大榭',
    '保税区',
    '高新区',
    '余姚市',
    '象山县',
    '东钱湖',
    '镇海区',
    '慈溪市',
    '杭州湾新区'
];

let ywlbArray = [
  '投资理财',
  '股权众筹',
  '民办教育',
  '网络借贷',
  '保险相关类',
  '大宗商品交易',
  '房地产',
  '典当',
  '小额贷款',
  '基金销售',
  '融资租赁',
  '融资性担保',
  '私募股权投资',
  '第三方支付',
  '电子盘交易',
  '农民专业合作社',
  '其他'
];
let typeFormats=[
  '网络借贷',
  '第三方支付',
  '网络众筹',
  '互联网基金销售',
  '互联网证券',
  '互联网保险',
  '互联网信托',
  '互联网资产管理',
  '交易所',
  '虚拟货币',
  '网络外汇',
  '网络典当行',
  '网络银行',
  '互联网期货',
  '门户导航',
  '金融超市',
  '微盘',
  '催收'
  ];
let stateCode=[
  '在运营', '问题平台', '已消亡'
]
let onlineTime=[
  '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'
]
let jobTit=[
  '董事长', '副董事长', '总经理', '副总经理', '执行董事', '董事', '监事','法人','董事','监事','经理'
]
let searchFxzs = ['高风险', '中风险', '低风险'];
let searchZzxs = ['总部机构', '分支机构'];
let searchStatus=['在运营','立案侦查','清盘退出','失联跑路','其他'];
let searchMd = ['黑名单', '灰名单'];
let sxsj=[];

    var year = document.getElementById("year");
    var my = new Date();
    var endYear = my.getFullYear();// 获取当前年份
    for (var i = 2007; i <= endYear; i++) {
        sxsj.push(i)
    }


export {dqArray,ywlbArray,searchFxzs,searchZzxs,searchStatus,searchMd,typeFormats,stateCode,onlineTime,jobTit}
