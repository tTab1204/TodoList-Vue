vue, scss, vuex, router, eslint, babel, unit test

#### TODOS

- [x] 카테고리 추가하기
- [x] 중요도 추가하기
- [x] Panel 컴포넌트 추가하기 (마크업만)
- [x] Card 컴포넌트 추가하기 (마크업만)
- [x] todos 배열 전역 상태로 관리하기
- [x] todos 배열 진행 상태에 따라서 화면에 렌더링 되도록 만들기
- [x] todo 진행 상태가 In Progress면 완료/미완료 체크 버튼 만들기
- [x] 체크 버튼 Checkbox 컴포넌트로 따로 빼기
- [x] 체크 버튼 눌렀을 때 Done 패널로 todo 보내기
- [x] Card 컴포넌트(todo) 각 패널로 Drag-And-Drop 시키기
- [x] Done 패널에 있을 때는 완료 표시로 Todo Card 버튼 바꾸기
- [x] 수정, 삭제 아이콘 만들기 (Card 컴포넌트)
- [x] todo 수정 기능 만들기 (제목만)
- [x] todo 삭제 기능 만들기
- [] Checkbox 컴포넌트 체크 됐을 때 check icon 추가하기
- [x] Dropdown 컴포넌트 만들기
- [x] 중요도별 아이콘 추가하기
- [x] 카테고리별 아이콘 추가하기
- [x] Todo Card에 날짜 표시하기
- [x] Todo Card에 카테고리 아이콘 표시하기
- [x] 컴포넌트가 마운트 됐을 때 input 요소에 focus하기
- [x] inputCheckValidation이 false라면 다시 input 요소에 focus하기
- [x] 같은 패널 안에서 Drag and Drop 가능하도록 만들기 (배열의 인덱스를 변화시키기)
- [] 생성 순 정렬 기능 추가하기
- [] 중요도 순 정렬 기능 추가하기
- [] 날짜 순 정렬 기능 추가하기
- [] skeleton 컴포넌트 만들어보기

#### FIX

- [x] 할 일을 추가했을 때 마감일이 더 이상 보이지 않도록 만들기
- [x] 마감일을 오늘보다 이전으로 설정할 경우 클릭이 되지 않도록 만들기
- [] 상단의 오늘은 금요일! 부분의 요일을 동적으로 변경하기

#### REFACTOR

- [x] 자주 중복되는 UI를 가진 input-option 클래스를 Tag 컴포넌트로 만들기
- [x] Not Started, In Progress, Done 화면 상단에 고정시키기
- [] 수정 버튼 클릭 시 Modal 창을 이용, 날짜, 카테고리, 중요도 모두 바꿀 수 있도록 개선하기
- [] 삭제 시 confirm message 띄우기 (Confirm 컴포넌트 이용, alert 창이 아니라)
- [x] primary colors 지정, Button hover 색상 변경
- [] drag and drop 시 아래로 밀려나는 효과 주기 (스타일 개선)
- [x] ImportanceTag, CategoryTag 컴포넌트를 공통 컴포넌트인 Tag로 합치기
