// 전역 변수
let currentQuestion = null;
let score = 0;
let questionCount = 0;
let correctAnswers = 0;
let startTime = Date.now();

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 네비게이션 버튼 이벤트 리스너
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchSection(e.target.dataset.section);
        });
    });

    // 진도 데이터 로드
    loadProgress();
    
    // 첫 문제 로드
    loadNextQuestion();
});

// 섹션 전환
function switchSection(sectionName) {
    // 모든 섹션과 버튼 비활성화
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 선택된 섹션과 버튼 활성화
    document.getElementById(sectionName).classList.add('active');
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
}

// 주제 보기
function showTopic(topicId) {
    const topicContent = document.getElementById('topic-content');
    topicContent.style.display = 'block';
    
    // content.js에서 내용 가져오기
    const content = getTopicContent(topicId);
    topicContent.innerHTML = content;
    
    // 스크롤
    topicContent.scrollIntoView({ behavior: 'smooth' });
}

// 문제 로드
function loadNextQuestion() {
    questionCount++;
    const difficulty = document.getElementById('difficulty').value;
    
    try {
        // problems.js에서 문제 가져오기
        currentQuestion = generateProblem(difficulty);
        
        // 디버깅: 문제 데이터 검증
        console.log('Generated question:', currentQuestion);
        
        if (!currentQuestion) {
            console.error('문제 생성 실패: currentQuestion이 null/undefined');
            document.getElementById('question-content').innerHTML = '문제를 불러오는 중 오류가 발생했습니다.';
            return;
        }
        
        if (!currentQuestion.question) {
            console.error('문제 데이터 오류: question 필드가 없음', currentQuestion);
            document.getElementById('question-content').innerHTML = '문제 데이터에 오류가 있습니다.';
            return;
        }
        
        // 문제 표시
        document.getElementById('question-number').textContent = `문제 ${questionCount}`;
        document.getElementById('question-content').innerHTML = currentQuestion.question;
        
        // 답변 영역 설정
        const answerSection = document.getElementById('answer-section');
        answerSection.innerHTML = createAnswerInput(currentQuestion.type);
        
        // 버튼 상태 초기화
        document.getElementById('submit-btn').style.display = 'inline-block';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('feedback').innerHTML = '';
        
    } catch (error) {
        console.error('문제 로드 중 예외 발생:', error);
        document.getElementById('question-content').innerHTML = '문제를 불러오는 중 오류가 발생했습니다.';
    }
}

// 답변 입력 필드 생성
function createAnswerInput(type) {
    switch(type) {
        case 'multiple-choice':
            return currentQuestion.options.map((option, index) => `
                <label class="option-label">
                    <input type="radio" name="answer" value="${index}">
                    <span>${option}</span>
                </label>
            `).join('');
            
        case 'true-false':
            return `
                <label class="option-label">
                    <input type="radio" name="answer" value="true">
                    <span>참</span>
                </label>
                <label class="option-label">
                    <input type="radio" name="answer" value="false">
                    <span>거짓</span>
                </label>
            `;
            
        case 'fill-blank':
            return `<input type="text" id="answer-input" class="answer-input" placeholder="정답을 입력하세요">`;
            
        case 'short-answer':
            return `<textarea id="answer-input" class="answer-textarea" placeholder="답을 작성하세요"></textarea>`;
            
        default:
            return '';
    }
}

// 정답 확인
function checkAnswer() {
    let userAnswer = null;
    const feedback = document.getElementById('feedback');
    
    // 답변 가져오기
    switch(currentQuestion.type) {
        case 'multiple-choice':
        case 'true-false':
            const selected = document.querySelector('input[name="answer"]:checked');
            if (!selected) {
                feedback.innerHTML = '<p class="warning">답을 선택해주세요!</p>';
                return;
            }
            userAnswer = selected.value;
            break;
            
        case 'fill-blank':
        case 'short-answer':
            userAnswer = document.getElementById('answer-input').value.trim();
            if (!userAnswer) {
                feedback.innerHTML = '<p class="warning">답을 입력해주세요!</p>';
                return;
            }
            break;
    }
    
    // 정답 확인
    const isCorrect = checkUserAnswer(userAnswer, currentQuestion);
    
    if (isCorrect) {
        correctAnswers++;
        score += currentQuestion.points || 10;
        feedback.innerHTML = `
            <div class="correct-answer">
                <h3>🎉 정답입니다!</h3>
                <p>${currentQuestion.explanation}</p>
            </div>
        `;
    } else {
        // 정답 정보 가져오기
        let correctAnswerText = '';
        if (currentQuestion.type === 'multiple-choice') {
            correctAnswerText = currentQuestion.options[currentQuestion.correctIndex];
        } else if (currentQuestion.answer) {
            correctAnswerText = currentQuestion.answer;
        } else {
            correctAnswerText = '정답 정보가 없습니다.';
        }
        
        feedback.innerHTML = `
            <div class="wrong-answer">
                <h3>😢 틀렸습니다.</h3>
                <p><strong>정답:</strong> ${correctAnswerText}</p>
                <p>${currentQuestion.explanation}</p>
            </div>
        `;
    }
    
    // 점수 업데이트
    document.getElementById('score').textContent = `점수: ${score}`;
    
    // 버튼 전환
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
    
    // 진도 저장
    saveProgress();
}

// 사용자 답변 확인
function checkUserAnswer(userAnswer, question) {
    switch(question.type) {
        case 'multiple-choice':
            return parseInt(userAnswer) === question.correctIndex;
            
        case 'true-false':
            return userAnswer === question.answer.toString();
            
        case 'fill-blank':
            return userAnswer.toLowerCase() === question.answer.toLowerCase();
            
        case 'short-answer':
            // 키워드 기반 확인
            return question.keywords.every(keyword => 
                userAnswer.toLowerCase().includes(keyword.toLowerCase())
            );
            
        default:
            return false;
    }
}

// 힌트 보기
function showHint() {
    if (currentQuestion && currentQuestion.hint) {
        const feedback = document.getElementById('feedback');
        feedback.innerHTML = `<div class="hint">💡 힌트: ${currentQuestion.hint}</div>`;
    }
}

// 진도 저장
function saveProgress() {
    const progress = {
        totalTime: Math.floor((Date.now() - startTime) / 60000), // 분 단위
        totalQuestions: questionCount,
        correctAnswers: correctAnswers,
        score: score,
        lastAccessed: new Date().toISOString()
    };
    
    // 서버 API 대신 GitHub Actions로 생성될 JSON 파일 사용
    fetch('api/progress.json')
        .then(response => response.json())
        .then(data => {
            // 기존 데이터와 병합
            const userId = getUserId();
            data[userId] = progress;
            
            // GitHub Actions를 통해 업데이트 (실제로는 PR 생성)
            updateProgressViaGitHub(data);
        })
        .catch(() => {
            // 로컬 스토리지 폴백
            localStorage.setItem('chemProgress', JSON.stringify(progress));
        });
}

// 진도 로드
function loadProgress() {
    fetch('api/progress.json')
        .then(response => response.json())
        .then(data => {
            const userId = getUserId();
            const progress = data[userId] || getDefaultProgress();
            updateProgressDisplay(progress);
        })
        .catch(() => {
            // 로컬 스토리지에서 로드
            const saved = localStorage.getItem('chemProgress');
            const progress = saved ? JSON.parse(saved) : getDefaultProgress();
            updateProgressDisplay(progress);
        });
}

// 진도 표시 업데이트
function updateProgressDisplay(progress) {
    document.getElementById('total-time').textContent = `${progress.totalTime || 0}분`;
    document.getElementById('total-questions').textContent = `${progress.totalQuestions || 0}문제`;
    
    const accuracy = progress.totalQuestions > 0 
        ? Math.round((progress.correctAnswers / progress.totalQuestions) * 100) 
        : 0;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    document.getElementById('high-score').textContent = `${progress.score || 0}점`;
    
    // 주제별 진도
    updateTopicProgress();
    
    // 배지 업데이트
    updateAchievements(progress);
}

// 주제별 진도 업데이트
function updateTopicProgress() {
    const topics = ['covalent', 'ionic', 'molecular', 'bonding'];
    const container = document.getElementById('topic-progress-bars');
    
    container.innerHTML = topics.map(topic => {
        const progress = getTopicProgress(topic);
        return `
            <div class="progress-item">
                <span class="progress-label">${getTopicName(topic)}</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <span class="progress-percent">${progress}%</span>
            </div>
        `;
    }).join('');
}

// 배지 업데이트
function updateAchievements(progress) {
    const achievements = [];
    
    if (progress.totalQuestions >= 10) {
        achievements.push({ name: '초보 화학자', icon: '🧪' });
    }
    if (progress.totalQuestions >= 50) {
        achievements.push({ name: '중급 화학자', icon: '⚗️' });
    }
    if (progress.correctAnswers >= 20) {
        achievements.push({ name: '정답 마스터', icon: '🎯' });
    }
    if (progress.score >= 500) {
        achievements.push({ name: '고득점자', icon: '🏆' });
    }
    
    const container = document.getElementById('achievement-list');
    container.innerHTML = achievements.map(badge => `
        <div class="achievement-badge">
            <span class="badge-icon">${badge.icon}</span>
            <span class="badge-name">${badge.name}</span>
        </div>
    `).join('');
}

// 유틸리티 함수들
function getUserId() {
    // 간단한 사용자 식별 (실제로는 더 복잡한 방법 사용)
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
    }
    return userId;
}

function getDefaultProgress() {
    return {
        totalTime: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        score: 0,
        topics: {}
    };
}

function getTopicProgress(topic) {
    // 실제로는 서버에서 가져옴
    return Math.floor(Math.random() * 100);
}

function getTopicName(topic) {
    const names = {
        'covalent': '공유결합',
        'ionic': '이온화합물',
        'molecular': '분자 구조',
        'bonding': '결합의 세기'
    };
    return names[topic] || topic;
}

// GitHub를 통한 진도 업데이트 (시뮬레이션)
function updateProgressViaGitHub(data) {
    // 실제로는 GitHub Actions를 트리거하여 JSON 파일 업데이트
    console.log('Progress update queued for GitHub Actions');
}