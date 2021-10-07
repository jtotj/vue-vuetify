# vuetify-admin-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

==package.json

{
  "name": "vuetify-admin-template",
  "version": "0.1.0",
  "private": true,//packge 공개 비공개 여부
  "scripts": {    //명령어 정의 npm run []
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",  //배포 ==> dist 에 생성
    "lint": "vue-cli-service lint"   
  },
  "dependencies": { 
    "core-js": "^3.6.5",  
    "vue": "^2.6.11",       //js-framework
    "vue-router": "^3.5.2",
    "vuetify": "^2.4.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "sass": "~1.32.0",
    "sass-loader": "^10.0.0",
    "vue-cli-plugin-vuetify": "~2.4.3",
    "vue-template-compiler": "^2.6.11",
    "vuetify-loader": "^1.7.0"
  },
  //lint 설정
  "eslintConfig": { 
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
  "browserslist": [ 
    "> 1%",
    "last 2 versions",
    "not dead" //지원 중단 브라우저 지원 안한 쿼리문법 browser list github
  ]
}
/*
public 웹펙 처리 없는곳 동적 자산 :: 전처리 과정이 필요 없는것
src assets :: css images
component 
plugin vue의 plugin
router

*/