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
##### WebStorm 기준 
* prettier 설정
    * https://prettier.io/docs/en/options.html 참고
* ESLint 설정
    * preference -> Languages & Framework -> ESLint
<img width="721" alt="스크린샷 2020-10-04 오후 1 38 54" src="https://user-images.githubusercontent.com/53853730/95007132-1afa7b80-0647-11eb-8b59-422ef419d6d8.png">
<img width="728" alt="스크린샷 2020-10-04 오후 1 39 33" src="https://user-images.githubusercontent.com/53853730/95007135-2057c600-0647-11eb-8392-ff86fc47fc2a.png">

* 절대 경로 사용
    * 알아서 경로를 잡아 주는 것 같지만, 
        * 보통 [jsconfig.json] 을 생성해서 잡아준다.
---
* 라우터
    * npm i vue-router@next
    * https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
    * 예외처리 페이지 라우트시 : https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes


