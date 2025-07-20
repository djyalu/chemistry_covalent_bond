# 화학 학습 프로그램 - 공유결합과 이온화합물

중학교 2-3학년 학생들을 위한 인터랙티브 화학 학습 웹 애플리케이션입니다.

## 🚀 바로 시작하기

[https://djyalu.github.io/chemistry_covalent_bond/](https://djyalu.github.io/chemistry_covalent_bond/)

## 📚 주요 기능

### 1. 학습 콘텐츠
- **공유결합**: 전자를 공유하는 결합의 원리와 예시
- **이온화합물**: 양이온과 음이온의 결합
- **분자 구조**: 3차원 분자 구조와 VSEPR 이론
- **결합의 세기**: 단일, 이중, 삼중 결합의 차이

### 2. 동적 문제 생성
- 난이도별 문제 (쉬움/보통/어려움)
- 다양한 문제 유형:
  - 객관식
  - 참/거짓
  - 빈칸 채우기
  - 서술형
- 즉각적인 피드백과 해설

### 3. 학습 진도 추적
- 총 학습 시간
- 푼 문제 수와 정답률
- 주제별 진도율
- 획득한 배지 시스템

## 🛠 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Data Storage**: JSON (GitHub Actions로 주기적 업데이트)

## 📁 프로젝트 구조

```
chemistry_covalent_bond/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── app.js             # 메인 애플리케이션 로직
├── problems.js        # 문제 생성 로직
├── content.js         # 학습 콘텐츠
├── api/               # API 데이터
│   └── progress.json  # 진도 데이터
├── scripts/           # 유틸리티 스크립트
│   └── generate_progress.py
└── .github/workflows/ # GitHub Actions 워크플로우
    ├── deploy.yml
    └── update-progress.yml
```

## 🔧 로컬 개발

1. 저장소 클론
```bash
git clone https://github.com/djyalu/chemistry_covalent_bond.git
cd chemistry_covalent_bond
```

2. 로컬 서버 실행 (Python)
```bash
python -m http.server 8000
```

3. 브라우저에서 열기
```
http://localhost:8000
```

## 🚀 배포

main 브랜치에 푸시하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

```bash
git add .
git commit -m "Update content"
git push origin main
```

## 📊 진도 데이터 관리

- GitHub Actions가 매일 자정에 진도 데이터를 업데이트합니다
- `scripts/generate_progress.py`로 샘플 데이터 생성
- 실제 사용자 데이터는 PR을 통해 수집 가능

## 🎯 대상 사용자

- 중학교 2-3학년 학생
- 화학 기초 개념을 배우고자 하는 학습자
- 자기주도 학습을 원하는 학생

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의

Issues 탭을 통해 버그 리포트나 기능 제안을 해주세요.