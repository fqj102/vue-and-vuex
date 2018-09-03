# vue-and-vuex

VUE의 컴포넌트간 통신방식과 상태관리 라이브러리 VUEX의 상태관리에 대한 튜토리얼 프로젝트입니다.

* VUE의 컴포넌트간 통신방식에 대하여 다룹니다.
* VUE 라우터의 기본적인 사용방법을 일부 다룹니다.
* VUEX Store의 운용방법에 대하여 다룹니다.
* VUE 어플리케이션에서 VUEX 상태관리를 이용하여 전체 체크박스를 처리하는 방법을 다룹니다. 
* 일반 익명함수와 화살표 함수의 차이에 대하여 다룹니다.
* _for_article 폴더는 글 작성을 위해 캡쳐해둔 파일들입니다.

예제의 진행 순서별 소스경로는 다음과 같습니다.
1. /src/helloworld 
    * 기본 HelloWorld
2. /src/helloworld_with_parentcall
    * 상위 객체를통한 컴포넌트간 통신
3. /src/helloworld_with_eventbus
    * 로컬 이벤트버스를 통한 컴포넌트간 통신
4. /src/helloworld_with_store
    * VUEX 상태관리를 통한 컴포넌트 반응
5. /src/check_itemlist_with_store
    * 임의의 상품목록과 VUEX state를 통한 전체/일부 체크박스처리
