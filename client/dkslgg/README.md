# FrontEnd README

## 개발 서버 구동 방법

### 1. pnpm 설치 안되어있을 시

- ~~pnpm이 없다면 npm으로 서버 구동해도 무방~~

> `npm install -g pnpm` 선행

- ### window에서 사용 시 이런 오류가 발생한다면

> pnpm : 이 시스템에서 스크립트를 실행할 수 없으므로 파일을 로드할 수 없습니다. 자세한 내용은 aboutExecution
> Policies(<https://go.microsoft.com/fwlink/?LinkID=135170)를> 참조하십시오.
> 위치 줄:1 문자:1
> +pnpm
>
> - +CategoryInfo : 보안 오류: (:) PSSecurityExcep

1. windows PowerShell을 관리자 권한으로 실행
2. Get-ExecutionPolicy 명령어 사용해 본인의 권한 상태 확인
3. 권한이 RemoteSigned가 아니라면 Set-ExecutionPolicy RemoteSigned 를 입력
4. Get-ExecutionPolicy 를 다시 사용하면 RemoteSigned로 변경 화인

- [링크 참조](https://velog.io/@ariel1031/Next.js-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)

### 2. node_modules 디렉토리가 루트에 없을 시

> `pnpm install` 선행

### 3. 리액트 개발 서버 띄우기

> 루트 디렉토리로 이동한 후 `pnpm dev` 실행

### 4. 개발 서버 종료 시

> 커맨드 창에 q를 지그시 눌러주기

### 5. 테스트 코드 실행해볼 때

> `pnpm test` 커맨드를 실행

## 프로젝트 구조

- `config` : jest 포맷팅 설정파일
- `src/pages` : 하나의 라우트, (하나의 페이지)를 담당하는 컴포넌트. 컨테이너에서 데이터 요청 로직 구현
- `src/components` : 컨테이너를 구성하는 기능 단위의 컴포넌트들.
  UI나 데이터 가공 및 처리와 UI는 여기서 담당.
- `src/jotai` : Jotai 상태관리 로직 구현한 파일들 모아놓는 디렉토리
- `src/services` : API 요청 및 Jotai를 활용한 데이터 가공 등 데이터 처리에 대한 로직 들 모으자!
- `src/__mocks__` : svgr 목업을 위한 파일
- `src/__tests__` : Jest 테스팅 파일 모아놓을 예정
- `src/styles` : Styled-Components 파일들 모아놓은 CSS 스타일 디렉토리
- `src/types` : Typescript 타입 및 인터페이스 모아놓은 디렉토리

```Plain Text

📦dkslgg(TS Version)
 ┣ 📂config
 ┃ ┗ 📂jest
 ┃ ┃ ┣ 📜cssTransform.cjs
 ┃ ┃ ┣ 📜fileTransform.cjs
 ┃ ┃ ┗ 📜setupTests.js
 ┣ 📂public
 ┃ ┣ 📂image
 ┃ ┃ ┗ images...
 ┣ 📂src
 ┃ ┣ 📂__mocks__
 ┃ ┃ ┗ 📜svgrMock.js
 ┃ ┣ 📂__tests__
 ┃ ┃ ┣ 📂__snapshots__
 ┃ ┃ ┃ ┗ 📜App.test.jsx.snap
 ┃ ┃ ┗ 📜App.test.jsx
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜vite.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂arena
 ┃ ┃ ┃ ┣ 📜ArenaComponent.tsx
 ┃ ┃ ┃ ┗ 📜TimelineComponent.tsx
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜ErrorComponent.tsx
 ┃ ┃ ┃ ┣ 📜HeaderComponent.tsx
 ┃ ┃ ┃ ┣ 📜LoadingComponent.tsx
 ┃ ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┃ ┣ 📂group
 ┃ ┃ ┃ ┣ 📜GroupCreateComponent.tsx
 ┃ ┃ ┃ ┣ 📜GroupDetailComponent.tsx
 ┃ ┃ ┃ ┗ 📜GroupMainComponent.tsx
 ┃ ┃ ┣ 📂lbti
 ┃ ┃ ┃ ┣ 📜LbtiMainComponent.tsx
 ┃ ┃ ┃ ┣ 📜LbtiResultComponent.tsx
 ┃ ┃ ┃ ┗ 📜LbtiTestComponent.tsx
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📜RankingComponent.tsx
 ┃ ┃ ┃ ┗ 📜SearchComponent.tsx
 ┃ ┃ ┣ 📂record
 ┃ ┃ ┃ ┣ 📂tabContent
 ┃ ┃ ┃ ┃ ┣ 📜TabAnalyzeComponent.tsx
 ┃ ┃ ┃ ┃ ┣ 📜TabGroupComponent.tsx
 ┃ ┃ ┃ ┃ ┣ 📜TabMainComponent.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TabReviewComponent.tsx
 ┃ ┃ ┃ ┣ 📜ProfileComponent.tsx
 ┃ ┃ ┃ ┗ 📜RecordBodyComponent.tsx
 ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┣ 📜SigninComponent.tsx
 ┃ ┃ ┃ ┗ 📜SignupComponent.tsx
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜rune.ts
 ┃ ┃ ┣ 📜sampleRecord.ts
 ┃ ┃ ┣ 📜spell.ts
 ┃ ┃ ┗ 📜star.ts
 ┃ ┣ 📂jotai
 ┃ ┃ ┣ 📜analyze.ts
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜group.ts
 ┃ ┃ ┗ 📜record.ts
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜ArenaContainer.tsx
 ┃ ┃ ┣ 📜GroupContainer.tsx
 ┃ ┃ ┣ 📜LbtiContainer.tsx
 ┃ ┃ ┣ 📜MainContainer.tsx
 ┃ ┃ ┣ 📜RecordContainer.tsx
 ┃ ┃ ┗ 📜UserContainer.tsx
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜GroupService.ts
 ┃ ┃ ┣ 📜LbtiService.ts
 ┃ ┃ ┣ 📜MainService.ts
 ┃ ┃ ┣ 📜RecordService.ts
 ┃ ┃ ┣ 📜ReviewService.ts
 ┃ ┃ ┣ 📜UserService.ts
 ┃ ┃ ┣ 📜ValidationService.ts
 ┃ ┃ ┗ 📜api.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂arena
 ┃ ┃ ┃ ┗ 📜arena.style.ts
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜header.style.ts
 ┃ ┃ ┃ ┣ 📜loading.style.ts
 ┃ ┃ ┃ ┗ 📜notfound.style.ts
 ┃ ┃ ┣ 📂group
 ┃ ┃ ┃ ┣ 📜create.style.ts
 ┃ ┃ ┃ ┣ 📜detail.style.ts
 ┃ ┃ ┃ ┗ 📜main.style.ts
 ┃ ┃ ┣ 📂lbti
 ┃ ┃ ┃ ┣ 📜main.style.ts
 ┃ ┃ ┃ ┣ 📜result.style.ts
 ┃ ┃ ┃ ┗ 📜test.style.ts
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📜ranking.style.ts
 ┃ ┃ ┃ ┗ 📜search.style.ts
 ┃ ┃ ┣ 📂record
 ┃ ┃ ┃ ┣ 📜body.style.ts
 ┃ ┃ ┃ ┣ 📜profile.style.ts
 ┃ ┃ ┃ ┣ 📜tabanalyze.style.ts
 ┃ ┃ ┃ ┣ 📜tabgroup.style.ts
 ┃ ┃ ┃ ┣ 📜tabmain.style.ts
 ┃ ┃ ┃ ┗ 📜tabreview.style.ts
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┣ 📜signin.style.ts
 ┃ ┃ ┃ ┗ 📜signup.style.ts
 ┃ ┃ ┣ 📜globalStyles.style.ts
 ┃ ┃ ┗ 📜main.style.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂tab
 ┃ ┃ ┃ ┃ ┣ 📜tabGroup.types.ts
 ┃ ┃ ┃ ┃ ┗ 📜tabMain.types.ts
 ┃ ┃ ┃ ┣ 📜analyze.types.ts
 ┃ ┃ ┃ ┣ 📜group.types.ts
 ┃ ┃ ┃ ┣ 📜lbti.types.ts
 ┃ ┃ ┃ ┣ 📜main.types.ts
 ┃ ┃ ┃ ┗ 📜record.types.ts
 ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┗ 📜types.ts
 ┃ ┃ ┗ 📂style
 ┃ ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜vite-env.d.ts
 ┣ 📜.eslintrc.cjs
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.json
 ┣ 📜.swcrc
 ┣ 📜Dockerfile
 ┣ 📜front.conf
 ┣ 📜index.html
 ┣ 📜Jenkinsfile
 ┣ 📜jest.config.cjs
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┣ 📜tsconfig.node.json
 ┗ 📜vite.config.js
```

---

## package.json

```JSON
{
  "name": "dkslgg",
  "private": true,
  "version": "2.1.1",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest --transformIgnorePatterns \"node_modules/(?!axios)/\""
  },
  "dependencies": {
    "@nivo/bar": "^0.83.0",
    "@nivo/calendar": "^0.83.0",
    "@nivo/core": "^0.83.0",
    "@nivo/pie": "^0.83.0",
    "@nivo/radar": "^0.83.0",
    "@types/node": "^20.8.6",
    "axios": "^1.5.0",
    "dotenv": "^16.3.1",
    "jotai": "^2.4.1",
    "pnpm": "^8.8.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-error-boundary": "^4.0.11",
    "react-router-dom": "^6.15.0",
    "react-select": "^5.7.4",
    "styled-components": "^6.0.7",
    "sweetalert2": "^11.7.27",
    "sweetalert2-react-content": "^5.0.7",
    "typescript": "^5.2.2"
  },
  "devDependencies": {
    "@swc/core": "^1.3.82",
    "@swc/jest": "^0.2.29",
    "@testing-library/jest-dom": "^6.1.2",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.5",
    "@types/react": "^18.2.28",
    "@types/react-dom": "^18.2.13",
    "@types/react-router-dom": "^5.3.3",
    "@types/styled-components": "^5.1.28",
    "@vitejs/plugin-react-swc": "^3.3.2",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "identity-obj-proxy": "^3.0.0",
    "prettier": "^3.0.3",
    "vite": "^4.4.5"
  },
  "main": "vite.config.js"
}



```
