// 전역 변수
let currentQuestion = null;
let score = 0;
let questionCount = 0;
let correctAnswers = 0;
let startTime = Date.now();
let hintAttempts = 0;
let learningSystem = null;
let currentPracticeTopic = null; // 현재 연습 중인 주제

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 동적 학습 시스템 초기화 (enhanced-learning.js가 로드된 후)
    setTimeout(() => {
        if (window.dynamicLearning) {
            learningSystem = window.dynamicLearning;
            updateLearningDashboard();
        }
    }, 100);
    
    // 네비게이션 버튼 이벤트 리스너
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchSection(e.target.dataset.section);
        });
    });

    // 난이도 선택 이벤트 리스너 추가
    const difficultySelect = document.getElementById('difficulty');
    if (difficultySelect) {
        difficultySelect.addEventListener('change', (e) => {
            const newDifficulty = e.target.value;
            console.log(`난이도 변경: ${newDifficulty}`);
            
            // 현재 practice 섹션이 활성화되어 있으면 새 문제 로드
            const practiceSection = document.getElementById('practice');
            if (practiceSection && practiceSection.classList.contains('active')) {
                // 난이도 표시 업데이트
                updateDifficultyDisplay(newDifficulty);
                
                // 새로운 난이도로 문제 로드
                setTimeout(() => {
                    loadNextQuestion();
                }, 100);
            }
        });
    }

    // 진도 데이터 로드
    loadProgress();
    
    // 첫 문제는 practice 섹션에 진입할 때 로드
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
    
    // practice 섹션에 진입할 때 첫 문제 로드
    if (sectionName === 'practice') {
        // 문제가 아직 로드되지 않았거나 새로운 세션이면 문제 로드
        if (!currentQuestion || questionCount === 0) {
            setTimeout(() => {
                loadNextQuestion();
            }, 100); // DOM이 완전히 표시된 후 로드
        }
    }
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

// 주제별 문제풀이 시작
function startTopicPractice(topic) {
    // 현재 주제 설정
    currentPracticeTopic = topic;
    
    // practice 섹션으로 전환
    switchSection('practice');
    
    // 주제별 메시지 표시
    const topicNames = {
        'covalent': '공유결합',
        'ionic': '이온화합물', 
        'molecular': '분자구조',
        'bonding': '결합세기'
    };
    
    // 섹션 제목 업데이트
    setTimeout(() => {
        const practiceHeader = document.querySelector('#practice .practice-header h2');
        if (practiceHeader) {
            practiceHeader.textContent = `${topicNames[topic]} 문제 풀어보기`;
        }
        
        // 주제별 문제 로드
        loadTopicQuestion(topic);
    }, 100);
}

// 주제별 문제 로드
function loadTopicQuestion(topic) {
    const questionContent = document.getElementById('question-content');
    const answerSection = document.getElementById('answer-section');
    const questionNumber = document.getElementById('question-number');
    
    if (!questionContent || !answerSection) {
        console.error('필수 DOM 요소를 찾을 수 없습니다.');
        return;
    }
    
    questionCount++;
    hintAttempts = 0;
    
    try {
        // 주제별 문제 생성
        currentQuestion = generateTopicProblem(topic, 'medium');
        
        // 주제별 문제가 없으면 일반 문제 생성
        if (!currentQuestion) {
            console.warn(`${topic} 주제 문제가 없어서 일반 문제로 대체합니다.`);
            currentQuestion = generateProblem('medium');
        }
        
        if (!currentQuestion) {
            questionContent.innerHTML = '문제를 불러올 수 없습니다.';
            return;
        }
        
        displayQuestion();
        
    } catch (error) {
        console.error('주제별 문제 로드 오류:', error);
        questionContent.innerHTML = '문제 로드 중 오류가 발생했습니다.';
    }
}

// 문제 표시 공통 함수
function displayQuestion() {
    if (!currentQuestion) return;
    
    const questionContent = document.getElementById('question-content');
    const answerSection = document.getElementById('answer-section');
    const questionNumber = document.getElementById('question-number');
    
    // 문제 번호 업데이트
    questionNumber.textContent = `문제 ${questionCount}`;
    
    // 문제 내용 표시
    if (currentQuestion.isTargeted) {
        questionContent.innerHTML = `
            <div class="targeted-question-banner">
                🎯 ${currentQuestion.targetReason}
            </div>
            <h3>${currentQuestion.question}</h3>
        `;
    } else {
        questionContent.innerHTML = `<h3>${currentQuestion.question}</h3>`;
    }
    
    // 답변 섹션 생성
    let answerHTML = '';
    
    if (currentQuestion.type === 'multiple-choice') {
        answerHTML = '<div class="options">';
        currentQuestion.options.forEach((option, index) => {
            answerHTML += `
                <label class="option">
                    <input type="radio" name="answer" value="${index}">
                    ${option}
                </label>
            `;
        });
        answerHTML += '</div>';
        
    } else if (currentQuestion.type === 'short-answer') {
        answerHTML = '<input type="text" id="answer-input" placeholder="답을 입력하세요">';
        
    } else if (currentQuestion.type === 'fill-blank') {
        answerHTML = '<input type="text" id="answer-input" placeholder="빈칸에 들어갈 내용을 입력하세요">';
        
    } else {
        answerHTML = '<input type="text" id="answer-input" placeholder="답을 입력하세요">';
    }
    
    answerSection.innerHTML = answerHTML;
    
    // 버튼 상태 초기화
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('feedback').innerHTML = '';
    
    // 시각적 설명 버튼 보이기
    const visualBtn = document.getElementById('visual-aid-btn');
    if (visualBtn) {
        visualBtn.style.display = 'inline-block';
    }
    
    // 향상된 피드백 영역 숨기기
    const enhancedFeedback = document.getElementById('enhanced-feedback');
    if (enhancedFeedback) {
        enhancedFeedback.style.display = 'none';
    }
    
    // 분자 시각화 영역 숨기기
    const vizContainer = document.getElementById('molecule-visualization');
    if (vizContainer) {
        vizContainer.style.display = 'none';
    }
}

// 문제 로드
function loadNextQuestion() {
    // DOM 요소들이 존재하는지 확인
    const questionContent = document.getElementById('question-content');
    const answerSection = document.getElementById('answer-section');
    const questionNumber = document.getElementById('question-number');
    
    if (!questionContent || !answerSection || !questionNumber) {
        console.error('필수 DOM 요소를 찾을 수 없습니다. practice 섹션이 활성화되어 있는지 확인하세요.');
        return;
    }
    
    questionCount++;
    hintAttempts = 0; // 힌트 시도 횟수 초기화
    
    try {
        // 사용자 선택 난이도 가져오기
        const difficultyElement = document.getElementById('difficulty');
        const userSelectedDifficulty = difficultyElement ? difficultyElement.value : 'medium';
        
        // 주제별 문제풀이인 경우
        if (currentPracticeTopic) {
            currentQuestion = generateTopicProblem(currentPracticeTopic, userSelectedDifficulty);
        }
        // 일반 문제풀이인 경우
        else {
            // 스마트 문제 생성 (사용자 선택 난이도 반영)
            if (learningSystem && typeof learningSystem.generateSmartProblem === 'function') {
                try {
                    // 학습 시스템에 사용자 선택 난이도 적용
                    learningSystem.adaptiveDifficulty = userSelectedDifficulty;
                    currentQuestion = learningSystem.generateSmartProblem();
                } catch (learningError) {
                    console.warn('스마트 문제 생성 실패, 기본 문제 생성으로 전환:', learningError);
                    currentQuestion = null;
                }
            }
            
            // 스마트 문제 생성에 실패했거나 시스템이 없으면 기본 문제 생성
            if (!currentQuestion) {
                currentQuestion = generateProblem(userSelectedDifficulty);
            }
        }
        
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
        
        // 타겟 문제인지 표시
        if (currentQuestion.isTargeted) {
            document.getElementById('question-content').innerHTML = `
                <div class="targeted-question-banner">
                    🎯 ${currentQuestion.targetReason}
                </div>
                ${currentQuestion.question}
            `;
        } else {
            document.getElementById('question-content').innerHTML = currentQuestion.question;
        }
        
        // 답변 영역 설정
        const answerSection = document.getElementById('answer-section');
        answerSection.innerHTML = createAnswerInput(currentQuestion.type);
        
        // 버튼 상태 초기화
        document.getElementById('submit-btn').style.display = 'inline-block';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('visual-aid-btn').style.display = 'none';
        document.getElementById('feedback').innerHTML = '';
        document.getElementById('enhanced-feedback').style.display = 'none';
        document.getElementById('molecule-visualization').style.display = 'none';
        
        // 시각적 도움이 필요한 문제인지 확인
        if (currentQuestion.visualAids && currentQuestion.visualAids.molecularModel) {
            document.getElementById('visual-aid-btn').style.display = 'inline-block';
        }
        
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
    
    // 동적 학습 시스템으로 답변 처리
    let enhancedFeedback = null;
    if (learningSystem) {
        enhancedFeedback = learningSystem.processAnswer(userAnswer, currentQuestion, isCorrect);
    }
    
    if (isCorrect) {
        correctAnswers++;
        score += currentQuestion.points || 10;
        
        // 기본 피드백
        feedback.innerHTML = `
            <div class="correct-answer">
                <h3>🎉 정답입니다!</h3>
                <p>${currentQuestion.explanation}</p>
            </div>
        `;
        
        // 향상된 피드백 표시
        if (enhancedFeedback) {
            showEnhancedFeedback(enhancedFeedback);
        }
        
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
        
        // 향상된 피드백 표시
        if (enhancedFeedback) {
            showEnhancedFeedback(enhancedFeedback);
        }
        
        // 시각적 설명이 도움이 될 경우 버튼 표시
        if (enhancedFeedback && enhancedFeedback.showVisualAid) {
            document.getElementById('visual-aid-btn').style.display = 'inline-block';
        }
    }
    
    // 점수 업데이트
    document.getElementById('score').textContent = `점수: ${score}`;
    
    // 버튼 전환
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
    
    // 학습 대시보드 업데이트
    updateLearningDashboard();
    
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

// 스마트 힌트 표시
function showSmartHint() {
    if (!currentQuestion) return;
    
    hintAttempts++;
    
    if (learningSystem && typeof learningSystem.generateSmartHint === 'function') {
        try {
            const smartHint = learningSystem.generateSmartHint(currentQuestion, hintAttempts);
            const feedback = document.getElementById('feedback');
            feedback.innerHTML = `
                <div class="smart-hint">
                    <h4>💡 힌트 ${smartHint.level}/${smartHint.maxLevel}</h4>
                    <p>${smartHint.hint}</p>
                    ${smartHint.showAnswer ? '<p><em>정답을 확인하려면 "정답 확인" 버튼을 눌러주세요.</em></p>' : ''}
                </div>
            `;
        } catch (error) {
            console.warn('스마트 힌트 생성 실패, 기본 힌트 사용:', error);
            showHint();
        }
    } else {
        // 기본 힌트 시스템 사용
        showHint();
    }
}

// 시각적 설명 표시
function showVisualAid() {
    if (!currentQuestion) {
        alert('현재 문제가 없습니다.');
        return;
    }
    
    // 시각적 설명 컨테이너 찾기
    let vizContainer = document.getElementById('molecule-visualization');
    if (!vizContainer) {
        console.warn('molecule-visualization 요소를 찾을 수 없습니다.');
        return;
    }
    
    // 문제에서 분자/화합물 추출
    const molecule = extractMoleculeFromQuestion(currentQuestion.question);
    
    // 시각적 설명 콘텐츠 생성
    let visualContent;
    if (!molecule) {
        visualContent = `
            <div class="explanation-section">
                <h5>💡 개념 설명</h5>
                <p>${currentQuestion.explanation || '이 문제에 대한 추가 설명을 제공합니다.'}</p>
                ${currentQuestion.hint ? `<p><strong>힌트:</strong> ${currentQuestion.hint}</p>` : ''}
            </div>
        `;
    } else {
        const visualExplanations = {
            'H₂O': `<div class="molecule-display"><h5>💧 물(H₂O) 분자</h5><div class="ascii-molecule"><pre>        H
         \\
          O -- H
         /
    (굽은형)</pre></div><ul><li>🔗 산소와 수소가 <strong>공유결합</strong></li><li>📐 결합각: 약 104.5°</li><li>⚡ 극성 분자 (부분적 음전하와 양전하)</li><li>🧊 수소결합으로 인한 높은 끓는점</li></ul></div>`,
            'CO₂': `<div class="molecule-display"><h5>💨 이산화탄소(CO₂) 분자</h5><div class="ascii-molecule"><pre>    O = C = O
   (직선형)</pre></div><ul><li>🔗 탄소와 산소가 <strong>이중결합</strong></li><li>📐 결합각: 180° (직선형)</li><li>⚖️ 무극성 분자 (대칭 구조)</li><li>🌡️ 상온에서 기체</li></ul></div>`,
            'CH₄': `<div class="molecule-display"><h5>🔥 메탄(CH₄) 분자</h5><div class="ascii-molecule"><pre>        H
        |
    H - C - H
        |
        H
   (정사면체)</pre></div><ul><li>🔗 탄소와 수소가 <strong>단일결합</strong></li><li>📐 결합각: 109.5° (정사면체)</li><li>⚖️ 무극성 분자</li><li>⛽ 천연가스의 주성분</li></ul></div>`,
            'NH₃': `<div class="molecule-display"><h5>🧪 암모니아(NH₃) 분자</h5><div class="ascii-molecule"><pre>      N
     /|\\
    H H H
  (삼각뿔형)</pre></div><ul><li>🔗 질소와 수소가 <strong>단일결합</strong></li><li>📐 결합각: 약 107° (삼각뿔형)</li><li>👥 비공유 전자쌍 1개</li><li>⚡ 극성 분자</li></ul></div>`,
            'NaCl': `<div class="molecule-display"><h5>🧂 소금(NaCl)</h5><div class="ascii-molecule"><pre>    Na⁺  Cl⁻
     \\  /
      이온결합</pre></div><ul><li>⚡ <strong>이온결합</strong> (정전기적 인력)</li><li>➕ Na⁺ (나트륨 양이온)</li><li>➖ Cl⁻ (염소 음이온)</li><li>🔥 높은 녹는점 (801°C)</li><li>💧 물에 잘 녹음</li></ul></div>`
        };
        
        const key = molecule.formula.includes('₂') ? molecule.formula : molecule.formula.replace(/2/g, '₂').replace(/3/g, '₃');
        visualContent = visualExplanations[key] || `
            <div class="explanation-section">
                <h5>📋 ${molecule.name}(${molecule.formula}) 설명</h5>
                <p>${currentQuestion.explanation || '이 화합물에 대한 자세한 정보를 준비 중입니다.'}</p>
                ${currentQuestion.hint ? `<p><strong>힌트:</strong> ${currentQuestion.hint}</p>` : ''}
            </div>
        `;
    }
    
    // 시각적 설명 표시
    vizContainer.innerHTML = `
        <h4>🔬 시각적 설명</h4>
        <div class="visual-content">
            ${visualContent}
        </div>
        <div class="viz-controls">
            <button onclick="hideVisualization()">닫기</button>
        </div>
    `;
    
    vizContainer.style.display = 'block';
    
    // 시각적 설명 버튼 숨기기
    const visualBtn = document.getElementById('visual-aid-btn');
    if (visualBtn) {
        visualBtn.style.display = 'none';
    }
}

// 시각화 숨기기
function hideVisualization() {
    const vizContainer = document.getElementById('molecule-visualization');
    if (vizContainer) {
        vizContainer.style.display = 'none';
    }
    
    // 시각적 설명 버튼 다시 보이기
    const visualBtn = document.getElementById('visual-aid-btn');
    if (visualBtn) {
        visualBtn.style.display = 'inline-block';
    }
}

// 문제에서 분자 추출
function extractMoleculeFromQuestion(questionText) {
    const molecules = {
        'H₂O': '물',
        'H2O': '물', 
        'CO₂': '이산화탄소',
        'CO2': '이산화탄소',
        'CH₄': '메탄',
        'CH4': '메탄',
        'NH₃': '암모니아',
        'NH3': '암모니아',
        'NaCl': '소금',
        'O₂': '산소',
        'O2': '산소',
        'N₂': '질소',
        'N2': '질소',
        'H₂': '수소',
        'H2': '수소',
        'CaCO₃': '탄산칼슘',
        'CaCO3': '탄산칼슘',
        'MgO': '산화마그네슘'
    };
    
    for (const [formula, name] of Object.entries(molecules)) {
        if (questionText.includes(formula) || questionText.includes(name)) {
            return { formula: formula.replace(/[₀-₉]/g, match => String.fromCharCode(48 + match.charCodeAt(0) - 8304)), name };
        }
    }
    
    return null;
}

// 시각적 설명 생성
function generateVisualExplanation(molecule, question) {
    if (!molecule) {
        return `
            <div class="explanation-section">
                <h5>💡 개념 설명</h5>
                <p>${question.explanation || '이 문제에 대한 추가 설명을 제공합니다.'}</p>
                ${question.hint ? `<p><strong>힌트:</strong> ${question.hint}</p>` : ''}
            </div>
        `;
    }
    
    const visualExplanations = {
        'H₂O': `
            <div class="molecule-display">
                <h5>💧 물(H₂O) 분자</h5>
                <div class="ascii-molecule">
                    <pre>
        H
         \\
          O -- H
         /
    (굽은형)
                    </pre>
                </div>
                <ul>
                    <li>🔗 산소와 수소가 <strong>공유결합</strong></li>
                    <li>📐 결합각: 약 104.5°</li>
                    <li>⚡ 극성 분자 (부분적 음전하와 양전하)</li>
                    <li>🧊 수소결합으로 인한 높은 끓는점</li>
                </ul>
            </div>
        `,
        'CO₂': `
            <div class="molecule-display">
                <h5>💨 이산화탄소(CO₂) 분자</h5>
                <div class="ascii-molecule">
                    <pre>
    O = C = O
   (직선형)
                    </pre>
                </div>
                <ul>
                    <li>🔗 탄소와 산소가 <strong>이중결합</strong></li>
                    <li>📐 결합각: 180° (직선형)</li>
                    <li>⚖️ 무극성 분자 (대칭 구조)</li>
                    <li>🌡️ 상온에서 기체</li>
                </ul>
            </div>
        `,
        'CH₄': `
            <div class="molecule-display">
                <h5>🔥 메탄(CH₄) 분자</h5>
                <div class="ascii-molecule">
                    <pre>
        H
        |
    H - C - H
        |
        H
   (정사면체)
                    </pre>
                </div>
                <ul>
                    <li>🔗 탄소와 수소가 <strong>단일결합</strong></li>
                    <li>📐 결합각: 109.5° (정사면체)</li>
                    <li>⚖️ 무극성 분자</li>
                    <li>⛽ 천연가스의 주성분</li>
                </ul>
            </div>
        `,
        'NH₃': `
            <div class="molecule-display">
                <h5>🧪 암모니아(NH₃) 분자</h5>
                <div class="ascii-molecule">
                    <pre>
      N
     /|\\
    H H H
  (삼각뿔형)
                    </pre>
                </div>
                <ul>
                    <li>🔗 질소와 수소가 <strong>단일결합</strong></li>
                    <li>📐 결합각: 약 107° (삼각뿔형)</li>
                    <li>👥 비공유 전자쌍 1개</li>
                    <li>⚡ 극성 분자</li>
                </ul>
            </div>
        `,
        'NaCl': `
            <div class="molecule-display">
                <h5>🧂 소금(NaCl)</h5>
                <div class="ascii-molecule">
                    <pre>
    Na⁺  Cl⁻
     \\  /
      이온결합
                    </pre>
                </div>
                <ul>
                    <li>⚡ <strong>이온결합</strong> (정전기적 인력)</li>
                    <li>➕ Na⁺ (나트륨 양이온)</li>
                    <li>➖ Cl⁻ (염소 음이온)</li>
                    <li>🔥 높은 녹는점 (801°C)</li>
                    <li>💧 물에 잘 녹음</li>
                </ul>
            </div>
        `
    };
    
    const key = molecule.formula.includes('₂') ? molecule.formula : molecule.formula.replace(/2/g, '₂').replace(/3/g, '₃');
    
    return visualExplanations[key] || `
        <div class="explanation-section">
            <h5>📋 ${molecule.name}(${molecule.formula}) 설명</h5>
            <p>${question.explanation || '이 화합물에 대한 자세한 정보를 준비 중입니다.'}</p>
            ${question.hint ? `<p><strong>힌트:</strong> ${question.hint}</p>` : ''}
        </div>
    `;
}

// 향상된 피드백 표시
function showEnhancedFeedback(enhancedFeedback) {
    const container = document.getElementById('enhanced-feedback');
    if (!container || !enhancedFeedback) return;
    
    let html = '';
    
    if (enhancedFeedback.feedback) {
        if (enhancedFeedback.feedback.praise) {
            html += `<div class="praise">${enhancedFeedback.feedback.praise}</div>`;
        }
        if (enhancedFeedback.feedback.insight) {
            html += `<div class="insight">${enhancedFeedback.feedback.insight}</div>`;
        }
        if (enhancedFeedback.feedback.encouragement) {
            html += `<div class="encouragement">${enhancedFeedback.feedback.encouragement}</div>`;
        }
    }
    
    if (enhancedFeedback.nextSteps) {
        html += '<div class="next-steps"><h4>다음 단계:</h4>';
        html += `<p>${enhancedFeedback.nextSteps.suggestion}</p>`;
        if (enhancedFeedback.nextSteps.actions) {
            html += '<div class="action-buttons">';
            enhancedFeedback.nextSteps.actions.forEach(action => {
                html += `<button class="action-btn" onclick="handleLearningAction('${action.action}')">${action.text}</button>`;
            });
            html += '</div>';
        }
        html += '</div>';
    }
    
    container.innerHTML = html;
    container.style.display = 'block';
}

// 학습 대시보드 업데이트
function updateLearningDashboard() {
    if (learningSystem) {
        try {
            const report = learningSystem.generateProgressReport();
            
            // 레벨 업데이트
            const levelElement = document.getElementById('current-level');
            if (levelElement) levelElement.textContent = report.level || 1;
            
            // 정답률 업데이트
            const accuracyElement = document.getElementById('current-accuracy');
            if (accuracyElement) accuracyElement.textContent = `${report.overallAccuracy || 0}%`;
            
            // 연속 정답 업데이트
            const streakElement = document.getElementById('current-streak');
            if (streakElement) streakElement.textContent = `연속 정답: ${report.currentStreak || 0}`;
            
            // 약점 영역 업데이트
            const weakElement = document.getElementById('weak-area');
            if (weakElement && report.categoryAnalysis) {
                const weakest = report.categoryAnalysis.find(cat => cat.status === 'needs-improvement');
                weakElement.textContent = weakest ? weakest.category : '-';
            }
        } catch (error) {
            console.warn('학습 대시보드 업데이트 실패:', error);
        }
    }
}

// 학습 액션 처리
function handleLearningAction(action) {
    switch(action) {
        case 'moreSimilar':
            // 비슷한 문제 더 불러오기
            loadNextQuestion();
            break;
        case 'nextLevel':
            // 난이도 올리기
            const diffSelect = document.getElementById('difficulty');
            if (diffSelect.value === 'easy') diffSelect.value = 'medium';
            else if (diffSelect.value === 'medium') diffSelect.value = 'hard';
            loadNextQuestion();
            break;
        case 'reviewConcept':
            // 관련 학습 내용 보기
            switchSection('learn');
            break;
        case 'easierSimilar':
            // 쉬운 문제로 변경
            const diffSelect2 = document.getElementById('difficulty');
            if (diffSelect2.value === 'hard') diffSelect2.value = 'medium';
            else if (diffSelect2.value === 'medium') diffSelect2.value = 'easy';
            loadNextQuestion();
            break;
        case 'visualExplanation':
            showVisualAid();
            break;
    }
}

// 문제에서 분자식 추출
function extractMoleculeFromQuestion(question) {
    // 간단한 분자식 추출 (실제로는 더 정교한 파싱 필요)
    const molecules = ['H₂O', 'CO₂', 'CH₄', 'NH₃', 'H₂', 'O₂', 'N₂'];
    for (const molecule of molecules) {
        if (question.includes(molecule)) {
            return molecule;
        }
    }
    return 'H2O'; // 기본값
}

// 난이도 표시 업데이트
function updateDifficultyDisplay(difficulty) {
    const difficultyElement = document.getElementById('adaptive-difficulty');
    if (difficultyElement) {
        const difficultyNames = {
            'easy': '쉬움 📗',
            'medium': '보통 📘', 
            'hard': '어려움 📕'
        };
        difficultyElement.textContent = `선택된 난이도: ${difficultyNames[difficulty] || difficulty}`;
    }
    
    // 콘솔에 난이도 변경 로그
    console.log(`🎯 난이도 업데이트: ${difficulty}`);
}

// 현재 주제 초기화 (일반 문제풀이로 전환)
function resetPracticeTopic() {
    currentPracticeTopic = null;
    const practiceHeader = document.querySelector('#practice .practice-header h2');
    if (practiceHeader) {
        practiceHeader.textContent = '문제 풀어보기';
    }
    console.log('🔄 일반 문제풀이 모드로 전환');
}