## Vue-복습

#### 프로젝트 생성
* (sudo) npm i -g @vue/cli
    * vue --version
* vue create "폴더 이름"
---
#### 환경 구성  
```
[vue.config.js] // 오류가 나도 화면을 덮지 않는다.
module.exports = {
    devServer: {
        overlay: false
    }
} 

[.prettierrc.js]
module.exports = {
    singleQuote: true,
    semi: true,
    useTabs: true,
    tabWidth: 2,
    trailingComma: 'all',
    printWidth: 80,
    bracketSpacing: true,
    arrowParens: 'avoid',
};
```
* prettier 설정
    * https://prettier.io/docs/en/options.html 참고
* ESLint 설정( WebStorm 기준 )
    * preference -> Languges & Framework -> ESLint
<img width="721" alt="스크린샷 2020-10-04 오후 1 38 54" src="https://user-images.githubusercontent.com/53853730/95007132-1afa7b80-0647-11eb-8b59-422ef419d6d8.png">
<img width="728" alt="스크린샷 2020-10-04 오후 1 39 33" src="https://user-images.githubusercontent.com/53853730/95007135-2057c600-0647-11eb-8392-ff86fc47fc2a.png">

