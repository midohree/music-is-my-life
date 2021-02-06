# Music Is My Life

음악 인기 차트 탑 100을 보여주는 웹 애플리케이션입니다.

## 사전 준비

1. Local 환경에서 실행하기 위한 별도의 사전 준비는 필요하지 않습니다.

2. 프로젝트를 클론 받습니다.

```

git clone https://github.com/midohree/music-is-my-life.git
cd music-is-my-life
npm install

```

3. 애플리케이션을 실행합니다.

```

npm start

```

## 기술 스택

| Front-end              |
| :--------------------- |
| ES2015+                |
| React                  |
| React-router-dom       |
| Redux-toolkit          |
| Redux-saga             |


### 주요 기능

1. 현재 인기있는 노래 100곡의 리스트를 제공합니다.
2. 앨범을 클릭하면 앨범의 상세 정보가 보입니다.
3. 앨범 발매일과 가수 이름을 기준으로 오름차순 / 내림차순 정렬이 가능합니다.
4. 앨범 이름을 검색 할 수 있는 기능을 추가했습니다.

### 상세 내용

**리덕스 툴킷과 리덕스 사가**

redux-saga는 애플리케이션에서 서버로부터 데이터를 요청하는 fetch같은 비동기 로직이나 브라우저 캐시에 접근하는 것과 같은 순수하지 않은 것들, 즉, 사이드이펙트를 더 효과적으로 관리하려고 만들어졌습니다. 또한 redux 애플리케이션의 모든 상태값에 접근하고 redux 액션들을 디스패치 할 수 있기 때문에 데이터값을 전역상태로 설정해두면 useSelector를 통해 데이터 값을 용이하게 가져올 이용할 수 있기 때문에 추후에 애플리케이션의 확장성을 고려했을 때에도 적합하다고 판단되어 redux-saga를 사용했습니다. 또한 데이터 요청에 성공 했을 때, 실패했을 때를 각각 나눌 수 있어서 하나의 기능이더라도 상태에 맞게 예외처리를 하거나 적절한 뷰를 보여줄 수 있게끔 구현했습니다.

또한 redux-toolkit을 사용해 actions와 reducer를 하나로 합쳐주는 createSlice를 통해 기능별로 폴더를 나누는 형식의 ducks pattern을 사용해 디렉토리 구조를 새로 짜보았습니다. 기존에 redux를 사용했을 때에는 actions, reducers, constatns등 하나의 기능을 구현하기 위해 파일을 모두 분리했어야 했는데 redux toolkit의 slice를 통해 actions와 reducers를 통합해 보다 명시적인 폴더 구성을 이루고자 했습니다.
