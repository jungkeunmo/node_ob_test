// express framework를 통해
// 3000번 포트 웹 서버 오픈하는 
// 설명을 작성하세요.

// terminal 에 들어가서 mkdir 폴더를 만든다 예(EX_server) => npm init 을 한다. npm init 은 package.json을 만드는 명령어 이다.
// 그럼 package.json 이라는 파일이 생기는데 이것은 패키지 버전 정보를 보여주는 파일 입니다.
// 그 다음은 코딩을 더 편하게 할수있는 번역기를 다운 받아줍니다. npm install @babel/core @babel/node @babel/preset-env @babel/cli 
// 순서는 상관이 없습니다. 또는 yarn 을 다운받은 후 yarn add @babel/core @babel/cli @babel/node @babel/preset-env 를 해주셔도 됩니다.
// 그 다음에는 express를 깔아 줍니다. 터미널에 npm install express 또는 yarn add express 둘다 해주셔도 상관 없습니다.
// express는 웹 개발에 필요한 프레임워크이다. 그외 에도 Hapi, koa 등등이 있다
// 그 다음은 조금더 코딩을 편하게 할수있는 수정 자동으로 되는 nodemon 을 깔아줍니다 
// npm install nodemon 또는 yarn add nodemon 을 터미널에 쳐서 다운 받아 줍니다.
// 그 다음엔 .babelrc 라는 파일을 만들어 줍니다. 
// 그 