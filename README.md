# insta clone react

- instaclone-frontend 의 개발과정을 되짚어 보며 개선부분을 찾아 더 나은 프로덕트를 만든다.

## process

- 폴더 구조
  - 대략적인 폴더 구조를 잡는다
- 스타일
  - 세세한 스타일 전에 globalStyles 와 reset 작업을해서 초기화 한다.
  - styled-components 의 theme 기능을 이용하여 클론할 인스타그램의 컬러와 사이즈 등을 저장해 둘 수 있다.
    - themeProvider 내에는 하나의 엘리먼트만 둘 수 있어서 fragment 등을 활용해 child 요소들을 하나로 묶어서 사용한다.

## Daily Record

    - 대략적인 폴더 구조를 잡는다.
    - style 을 정리한다. global styles 를 지정하고, reset 을 통해 style 을 정리한다.
      인스타그램의 디자인 정보들을 styled-components 의 theme 기능을 이용해 쓸 수 있도록 저장해둔다.
    - Router 작업
        -
