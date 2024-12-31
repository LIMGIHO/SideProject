/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

module.exports = withImages({
  // assetPrefix: (() => {
  //   if (NODE_ENV === 'production' && homepage) {
  //     try {
  //       console.log('> Detected homepage url in package.json');
  //       const { pathname } = new URL(homepage);
  //       if (pathname !== '/') {
  //         console.log(`> Apply \'${pathname}\' to assetPrefix(subPath)`);
  //         return pathname;
  //       }
  //       return '';
  //     } catch {
  //       console.log('> Can not parse homepage URL not apply assetPrefix(subPath)');
  //       return '';
  //     }
  //   }
  //   return '';
  // })(),
  
  assetPrefix: '',
   // 정적 파일로 빌드하도록 설정
   output: 'export',

   // 필요한 경우 추가 설정
   images: {
     unoptimized: true, // 정적 파일 빌드에서 이미지 최적화 비활성화 (선택 사항)
   }, 
});
// withCSS({
// webpack: config => {
//   config.resolve.alias['@'] = __dirname;
//   return config;
// }
// }),
