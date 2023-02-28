//跨域代理
// let proxyObj = {};
// proxyObj['/'] = {
//   ws: false,
//   target: 'http://127.0.0.1:3000',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/': ''
//   }
// };

// //跨域代理
// module.exports = {
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     proxy: proxyObj
//   },
//   publicPath: './',
// };
// module.exports = {
//   //publicPath: './',
//   //runtimeCompiler: true,
//   devServer: {
//     // 设置代理
//     proxy: {
//       '/api': {
//         target: 'http://127.0.0.1:3000',
//         changeOrigin: true,//设置是否跨域
//         pathRewrite: {
//           '^/api': ''
//         }
//       },

//     }
//   }
// }

