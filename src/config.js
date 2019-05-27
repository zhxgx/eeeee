module.exports =  {
  baseUrl:{
    localhost:'http://localhost:3000',////前端 本地 -> 本地服务器
    localhost_http:'http://47.110.139.198',//前端 本地  -> 服务器远端 注意ip和域名存在跨域
    localhost_http:'http://uncle9.top',//前端 本地  -> 服务器远端
    localhost_https:'https://uncle9.top',//前端本地 -> 服务器远端(https)
    localhost_mock:{//模拟数据地址
      url:'http://localhost:3333',
      port:3333
    }
  }
};