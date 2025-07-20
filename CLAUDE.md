# Chemistry Learning Program - CLAUDE.md

## 프로젝트 개요
중학생을 위한 화학 학습 프로그램 (공유결합과 이온화합물)

## 현재 상태 (2025-07-20)

### ✅ 완료된 기능
1. **인터랙티브 문제 유형 구현**
   - 매칭 문제 (matching)
   - 순서 배열 문제 (sequence)
   - 드래그앤드롭 분류 (drag-drop)
   - 시뮬레이션 문제 (simulation)
   - 드롭다운 빈칸 문제 (fill-dropdown)

2. **문제풀기 정답확인 버그 수정**
   - enhanced-learning.js 에러 해결
   - learningSystem 비활성화
   - 기본 피드백 시스템 정상 작동

3. **학습 컨텐츠**
   - 공유결합, 이온화합물, 분자구조, 결합의 세기
   - 총 25개 이상 문제 구현

### 🔧 기술 스택
- 순수 JavaScript (프레임워크 없음)
- HTML5, CSS3
- 로컬 스토리지 활용
- Service Worker 비활성화 상태

### ⚠️ 주의사항
1. **enhanced-learning.js 비활성화 상태 유지**
   - HTML에서 주석 처리됨
   - window.dynamicLearning 인스턴스 생성 비활성화

2. **테스트 시 캐시 문제**
   - 버전 번호 업데이트 필요 (현재 v6)
   - 브라우저 캐시 강제 새로고침 필요

### 📝 TODO
- [ ] 학습 컨텐츠 확장 (실험 시뮬레이션, 애니메이션)
- [ ] 문제 은행 확대 (각 주제별 50개 이상)
- [ ] 3D 분자 모델링
- [ ] 화학반응 시뮬레이션

### 🚀 실행 방법
```bash
# 로컬 서버 실행
python3 -m http.server 8080

# 브라우저에서 접속
http://localhost:8080
```

### 📌 최근 변경사항
- 2025-07-20: 인터랙티브 문제 유형 구현 완료
- 2025-07-20: enhanced-learning.js 에러 해결
- 2025-07-20: 문제풀기 정답확인 기능 정상화
- **2025-07-20 22:10: ★ 안정 버전 확인 (stable-2025-07-20-2210)**
- **2025-07-20 22:30: 컨텐츠 관리 시스템 구축**
  - learning-content.md: 6개 주제 학습 컨텐츠 문서화
  - problems-database.md: 96개 문제 데이터베이스 구축
  - content-management.md: 컨텐츠 관리 가이드 작성
  - content-sync.js: MD↔JS 동기화 도구 (개발 중)
- **2025-07-20 22:45: 컨텐츠 오류 진단 및 개선**
  - CO₂ 이중결합 표현 명확화 (O=C=O 구조 강조)
  - 결합 에너지 수치 표준화 (C-C: 348, C=C: 614, C≡C: 839 kJ/mol)
  - 분자 구조 설명 명확성 개선 ("결합각" 명시)
  - content.js, problems.js 내 결합 에너지 값 통일

### 🐛 알려진 이슈
- Service Worker 관련 경고 (비활성화됨)
- 시각적 설명 버튼 비활성화 상태

### 💻 개발 환경
- Windows WSL2
- Python 3.12
- Claude Code