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
    // 동적 학습 시스템 초기화 (임시 비활성화)
    // setTimeout(() => {
    //     if (window.dynamicLearning) {
    //         learningSystem = window.dynamicLearning;
    //         updateLearningDashboard();
    //     }
    // }, 100);
    learningSystem = null; // 명시적으로 null 설정
    
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
        
    } else if (currentQuestion.type === 'matching') {
        answerHTML = generateMatchingInterface(currentQuestion);
        
    } else if (currentQuestion.type === 'sequence') {
        answerHTML = generateSequenceInterface(currentQuestion);
        
    } else if (currentQuestion.type === 'drag-drop') {
        answerHTML = generateDragDropInterface(currentQuestion);
        
    } else if (currentQuestion.type === 'simulation') {
        answerHTML = generateSimulationInterface(currentQuestion);
        
    } else if (currentQuestion.type === 'fill-dropdown') {
        answerHTML = generateFillDropdownInterface(currentQuestion);
        
    } else if (currentQuestion.type === 'short-answer') {
        answerHTML = '<input type="text" id="answer-input" placeholder="답을 입력하세요">';
        
    } else if (currentQuestion.type === 'fill-blank') {
        answerHTML = '<input type="text" id="answer-input" placeholder="빈칸에 들어갈 내용을 입력하세요">';
        
    } else {
        answerHTML = '<input type="text" id="answer-input" placeholder="답을 입력하세요">';
    }
    
    answerSection.innerHTML = answerHTML;
    
    // 버튼 상태 초기화
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedbackDiv = document.getElementById('feedback');
    
    if (submitBtn) {
        submitBtn.style.display = 'inline-block';
        // 클릭 이벤트 다시 등록 (혹시 모를 이벤트 손실 방지)
        submitBtn.onclick = function() {
            console.log('submit 버튼 클릭됨!');
            checkAnswer();
        };
    }
    
    if (nextBtn) nextBtn.style.display = 'none';
    if (feedbackDiv) feedbackDiv.innerHTML = '';
    
    // 시각적 설명 버튼 숨기기 (비활성화)
    const visualBtn = document.getElementById('visual-aid-btn');
    if (visualBtn) {
        visualBtn.style.display = 'none';
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
    console.log('loadNextQuestion 함수 호출됨');
    
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
            // 기본 문제 생성
            currentQuestion = generateProblem(userSelectedDifficulty);
            
            // 문제 생성 실패 시 백업 문제 사용
            if (!currentQuestion) {
                console.warn('문제 생성 실패, 백업 문제 사용');
                currentQuestion = {
                    question: "물(H₂O) 분자에서 수소와 산소는 어떤 결합으로 연결되어 있나요?",
                    type: "multiple-choice",
                    options: ["공유결합", "이온결합", "금속결합", "수소결합"],
                    correctIndex: 0,
                    explanation: "물 분자에서 수소와 산소는 전자를 공유하는 공유결합으로 연결되어 있습니다.",
                    hint: "원자들이 전자를 공유하는 결합을 생각해보세요.",
                    points: 10,
                    id: Date.now()
                };
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
        
        // 시각적 설명 버튼 비활성화
        // if (currentQuestion.visualAids && currentQuestion.visualAids.molecularModel) {
        //     document.getElementById('visual-aid-btn').style.display = 'inline-block';
        // }
        
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
    console.log('=== checkAnswer 함수 시작 ===');
    console.log('currentQuestion:', currentQuestion);
    console.log('window.dynamicLearning:', window.dynamicLearning);
    console.log('learningSystem:', learningSystem);
    
    if (!currentQuestion) {
        console.error('currentQuestion이 없습니다!');
        return;
    }
    
    let userAnswer = null;
    const feedback = document.getElementById('feedback');
    
    console.log('문제 유형:', currentQuestion.type);
    
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
            
        case 'matching':
            // 매칭 문제는 initializeMatching에서 자동으로 처리됨
            userAnswer = document.getElementById('answer-section').dataset.userAnswer;
            if (!userAnswer) {
                feedback.innerHTML = '<p class="warning">매칭을 완료해주세요!</p>';
                return;
            }
            break;
            
        case 'sequence':
            // 순서 문제는 initializeSequence에서 자동으로 처리됨
            userAnswer = document.getElementById('answer-section').dataset.userAnswer;
            if (!userAnswer) {
                feedback.innerHTML = '<p class="warning">올바른 순서로 배열해주세요!</p>';
                return;
            }
            break;
            
        case 'drag-drop':
            // 드래그앤드롭 문제는 initializeDragDrop에서 자동으로 처리됨
            userAnswer = document.getElementById('answer-section').dataset.userAnswer;
            if (!userAnswer) {
                feedback.innerHTML = '<p class="warning">모든 항목을 올바른 그룹으로 분류해주세요!</p>';
                return;
            }
            break;
            
        case 'simulation':
            // 시뮬레이션 답변 가져오기
            userAnswer = document.getElementById('simulation-answer').value.trim();
            if (!userAnswer) {
                feedback.innerHTML = '<p class="warning">관찰된 현상을 설명해주세요!</p>';
                return;
            }
            break;
            
        case 'fill-dropdown':
            // 드롭다운 선택 가져오기
            const dropdown = document.getElementById('fill-dropdown');
            if (!dropdown || dropdown.selectedIndex <= 0) {
                feedback.innerHTML = '<p class="warning">선택지를 선택해주세요!</p>';
                return;
            }
            userAnswer = dropdown.selectedIndex - 1; // 첫 번째 옵션은 빈 값이므로 -1
            break;
    }
    
    // 정답 확인
    const isCorrect = checkUserAnswer(userAnswer, currentQuestion);
    
    // 동적 학습 시스템 비활성화 (기본 피드백만 사용)
    let enhancedFeedback = null;
    
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
        
        // 시각적 설명 버튼 비활성화
        // if (enhancedFeedback && enhancedFeedback.showVisualAid) {
        //     document.getElementById('visual-aid-btn').style.display = 'inline-block';
        // }
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
            
        case 'matching':
        case 'sequence':
        case 'drag-drop':
            // 이 문제 유형들은 이미 이벤트 핸들러에서 검증되어 자동으로 정답 처리됨
            return userAnswer === 'matching_complete' || 
                   userAnswer === 'sequence_complete' || 
                   userAnswer === 'dragdrop_complete';
            
        case 'simulation':
            // 시뮬레이션은 키워드 기반으로 확인 (선택적)
            if (question.keywords) {
                return question.keywords.some(keyword => 
                    userAnswer.toLowerCase().includes(keyword.toLowerCase())
                );
            }
            // 키워드가 없으면 항상 정답으로 처리 (학습 목적)
            return true;
            
        case 'fill-dropdown':
            return parseInt(userAnswer) === question.correctIndex;
            
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
    
    // 스마트 힌트 시스템 비활성화, 기본 힌트만 사용
    showHint();
}

// 시각적 설명 표시 (새 버전)
function showVisualAidNew() {
    console.log('showVisualAid 호출됨');
    
    if (!currentQuestion) {
        alert('현재 문제가 없습니다.');
        return;
    }
    
    const vizContainer = document.getElementById('molecule-visualization');
    if (!vizContainer) {
        alert('시각화 컨테이너를 찾을 수 없습니다.');
        return;
    }
    
    // 간단한 기본 설명
    const explanation = currentQuestion.explanation || '이 문제에 대한 추가 설명을 제공합니다.';
    const hint = currentQuestion.hint || '';
    
    vizContainer.innerHTML = `
        <h4>🔬 시각적 설명</h4>
        <div class="visual-content">
            <div class="explanation-section">
                <h5>💡 문제 해설</h5>
                <p>${explanation}</p>
                ${hint ? `<p><strong>힌트:</strong> ${hint}</p>` : ''}
            </div>
        </div>
        <div class="viz-controls">
            <button onclick="hideVisualization()">닫기</button>
        </div>
    `;
    
    vizContainer.style.display = 'block';
    
    const visualBtn = document.getElementById('visual-aid-btn');
    if (visualBtn) {
        visualBtn.style.display = 'none';
    }
    
    console.log('시각적 설명 표시 완료');
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
            return { 
                formula: formula, 
                name: name 
            };
        }
    }
    
    return null;
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
    // 동적 학습 시스템 비활성화로 인해 기본값 사용
    if (false && learningSystem) {
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
    } else {
        // 기본값으로 대시보드 업데이트
        const levelElement = document.getElementById('current-level');
        if (levelElement) levelElement.textContent = '1';
        
        const accuracyElement = document.getElementById('current-accuracy');
        if (accuracyElement) {
            const accuracy = correctAnswers > 0 ? Math.round((correctAnswers / questionCount) * 100) : 0;
            accuracyElement.textContent = `${accuracy}%`;
        }
        
        const streakElement = document.getElementById('current-streak');
        if (streakElement) streakElement.textContent = `연속 정답: ${score / 10}`;
        
        const weakElement = document.getElementById('weak-area');
        if (weakElement) weakElement.textContent = '-';
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

// === 새로운 문제 유형 인터페이스 생성 함수들 ===

// 매칭 문제 인터페이스
function generateMatchingInterface(question) {
    let html = '<div class="matching-container">';
    html += '<div class="matching-instruction">왼쪽과 오른쪽을 연결선으로 매칭하세요</div>';
    html += '<div class="matching-pairs">';
    
    // 왼쪽 항목들을 섞어서 표시
    const leftItems = question.pairs.map((pair, index) => ({ ...pair, index }));
    const rightItems = [...question.pairs].sort(() => Math.random() - 0.5);
    
    html += '<div class="left-items">';
    leftItems.forEach((item, index) => {
        html += `<div class="match-item left-item" data-index="${item.index}">${item.left}</div>`;
    });
    html += '</div>';
    
    html += '<div class="right-items">';
    rightItems.forEach((item, index) => {
        html += `<div class="match-item right-item" data-value="${item.right}">${item.right}</div>`;
    });
    html += '</div>';
    
    html += '</div>';
    html += '<div class="matching-result"><p>매칭을 완성하면 여기에 결과가 표시됩니다.</p></div>';
    html += '</div>';
    
    // 매칭 이벤트 리스너는 나중에 추가
    setTimeout(() => initializeMatching(), 100);
    
    return html;
}

// 순서 배열 문제 인터페이스
function generateSequenceInterface(question) {
    let html = '<div class="sequence-container">';
    html += '<div class="sequence-instruction">올바른 순서로 드래그하여 배열하세요</div>';
    html += '<div class="sequence-items">';
    
    // 단계들을 섞어서 표시
    const shuffledSteps = [...question.steps].sort(() => Math.random() - 0.5);
    
    shuffledSteps.forEach((step, index) => {
        const originalIndex = question.steps.indexOf(step);
        html += `<div class="sequence-item" data-original="${originalIndex}" draggable="true">${step}</div>`;
    });
    
    html += '</div>';
    html += '<div class="sequence-result">단계를 올바른 순서로 배열해주세요</div>';
    html += '</div>';
    
    setTimeout(() => initializeSequence(), 100);
    
    return html;
}

// 드래그 앤 드롭 분류 문제 인터페이스
function generateDragDropInterface(question) {
    let html = '<div class="drag-drop-container">';
    html += '<div class="drag-drop-instruction">아래 항목들을 올바른 그룹으로 드래그하세요</div>';
    
    html += '<div class="drag-items">';
    question.items.forEach((item, index) => {
        html += `<div class="drag-item" data-item="${item}" draggable="true">${item}</div>`;
    });
    html += '</div>';
    
    html += '<div class="drop-zones">';
    Object.keys(question.categories).forEach(category => {
        html += `<div class="drop-zone" data-category="${category}">
            <h4>${category}</h4>
            <div class="drop-area"></div>
        </div>`;
    });
    html += '</div>';
    
    html += '</div>';
    
    setTimeout(() => initializeDragDrop(), 100);
    
    return html;
}

// === 새로운 문제 유형 이벤트 핸들러들 ===

// 매칭 문제 초기화
function initializeMatching() {
    let selectedLeft = null;
    let selectedRight = null;
    let matches = [];
    
    const leftItems = document.querySelectorAll('.left-item');
    const rightItems = document.querySelectorAll('.right-item');
    const resultDiv = document.querySelector('.matching-result');
    
    // 왼쪽 항목 클릭 이벤트
    leftItems.forEach(item => {
        item.addEventListener('click', () => {
            // 이전 선택 해제
            leftItems.forEach(li => li.classList.remove('selected'));
            
            // 현재 항목 선택
            item.classList.add('selected');
            selectedLeft = item;
            
            // 매칭 확인
            checkMatching();
        });
    });
    
    // 오른쪽 항목 클릭 이벤트
    rightItems.forEach(item => {
        item.addEventListener('click', () => {
            // 이전 선택 해제
            rightItems.forEach(ri => ri.classList.remove('selected'));
            
            // 현재 항목 선택
            item.classList.add('selected');
            selectedRight = item;
            
            // 매칭 확인
            checkMatching();
        });
    });
    
    function checkMatching() {
        if (selectedLeft && selectedRight) {
            const leftIndex = parseInt(selectedLeft.dataset.index);
            const rightValue = selectedRight.dataset.value;
            
            // 정답 확인 (pairs 배열에서 해당 인덱스의 right 값과 비교)
            const correctPair = currentQuestion.pairs[leftIndex];
            const isCorrect = correctPair.right === rightValue;
            
            if (isCorrect) {
                // 정답일 때
                selectedLeft.classList.add('success');
                selectedRight.classList.add('success');
                selectedLeft.style.pointerEvents = 'none';
                selectedRight.style.pointerEvents = 'none';
                
                matches.push({ left: leftIndex, right: rightValue });
                
                // 모든 매칭 완료 확인
                if (matches.length === currentQuestion.pairs.length) {
                    resultDiv.innerHTML = '<p style="color: #28a745; font-weight: bold;">🎉 모든 매칭을 완료했습니다!</p>';
                    
                    // 자동으로 정답 처리
                    setTimeout(() => {
                        document.getElementById('answer-section').dataset.userAnswer = 'matching_complete';
                        checkAnswer();
                    }, 1000);
                }
            } else {
                // 오답일 때
                resultDiv.innerHTML = '<p style="color: #dc3545;">❌ 잘못된 매칭입니다. 다시 시도해보세요.</p>';
                
                // 선택 해제
                setTimeout(() => {
                    selectedLeft.classList.remove('selected');
                    selectedRight.classList.remove('selected');
                    selectedLeft = null;
                    selectedRight = null;
                    resultDiv.innerHTML = '<p>매칭을 완성하면 여기에 결과가 표시됩니다.</p>';
                }, 1500);
            }
        }
    }
}

// 순서 배열 문제 초기화
function initializeSequence() {
    const sequenceItems = document.querySelectorAll('.sequence-item');
    const resultDiv = document.querySelector('.sequence-result');
    let draggedElement = null;
    
    sequenceItems.forEach(item => {
        // 드래그 시작
        item.addEventListener('dragstart', (e) => {
            draggedElement = e.target;
            e.target.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });
        
        // 드래그 종료
        item.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
            checkSequenceOrder();
        });
        
        // 드래그 오버
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        
        // 드롭
        item.addEventListener('drop', (e) => {
            e.preventDefault();
            
            if (draggedElement !== e.target) {
                const container = e.target.parentNode;
                const allItems = [...container.children];
                
                const draggedIndex = allItems.indexOf(draggedElement);
                const targetIndex = allItems.indexOf(e.target);
                
                if (draggedIndex < targetIndex) {
                    container.insertBefore(draggedElement, e.target.nextSibling);
                } else {
                    container.insertBefore(draggedElement, e.target);
                }
                
                checkSequenceOrder();
            }
        });
    });
    
    function checkSequenceOrder() {
        const currentOrder = [...document.querySelectorAll('.sequence-item')].map(item => 
            parseInt(item.dataset.original)
        );
        
        const correctOrder = currentQuestion.steps.map((_, index) => index);
        const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
        
        if (isCorrect) {
            resultDiv.innerHTML = '<p style="color: #28a745; font-weight: bold;">🎉 올바른 순서입니다!</p>';
            
            // 자동으로 정답 처리
            setTimeout(() => {
                document.getElementById('answer-section').dataset.userAnswer = 'sequence_complete';
                checkAnswer();
            }, 1000);
        } else {
            resultDiv.innerHTML = '<p style="color: #6c757d;">순서를 조정해보세요...</p>';
        }
    }
}

// 드래그 앤 드롭 분류 문제 초기화
function initializeDragDrop() {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropAreas = document.querySelectorAll('.drop-area');
    let completedItems = 0;
    
    dragItems.forEach(item => {
        // 드래그 시작
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.dataset.item);
            e.target.classList.add('dragging');
        });
        
        // 드래그 종료
        item.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });
    
    dropAreas.forEach(area => {
        // 드래그 오버
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.classList.add('drag-over');
        });
        
        // 드래그 리브
        area.addEventListener('dragleave', (e) => {
            area.classList.remove('drag-over');
        });
        
        // 드롭
        area.addEventListener('drop', (e) => {
            e.preventDefault();
            area.classList.remove('drag-over');
            
            const itemText = e.dataTransfer.getData('text/plain');
            const category = area.parentNode.dataset.category;
            
            // 정답 확인
            const correctCategory = currentQuestion.categories[category];
            const isCorrect = correctCategory.includes(itemText);
            
            if (isCorrect) {
                // 정답일 때 - 드래그된 항목을 드롭 영역으로 이동
                const draggedItem = document.querySelector(`[data-item="${itemText}"]`);
                if (draggedItem) {
                    draggedItem.classList.add('success');
                    draggedItem.draggable = false;
                    area.appendChild(draggedItem);
                    completedItems++;
                    
                    // 모든 항목이 완료되었는지 확인
                    if (completedItems === currentQuestion.items.length) {
                        setTimeout(() => {
                            document.getElementById('answer-section').dataset.userAnswer = 'dragdrop_complete';
                            checkAnswer();
                        }, 1000);
                    }
                }
            } else {
                // 오답일 때 - 피드백 표시
                const feedback = document.getElementById('feedback');
                feedback.innerHTML = '<div class="wrong-feedback">❌ 올바른 그룹이 아닙니다!</div>';
                setTimeout(() => {
                    feedback.innerHTML = '';
                }, 2000);
            }
        });
    });
}

// 시뮬레이션 단계 활성화
function activateStep(stepIndex) {
    const steps = document.querySelectorAll('.simulation-step');
    const stepButton = steps[stepIndex].querySelector('.step-button');
    const resultDiv = document.querySelector('.simulation-result');
    
    // 버튼 상태 변경
    stepButton.textContent = '완료';
    stepButton.classList.add('activated');
    stepButton.disabled = true;
    
    // 완료된 단계에 대한 피드백
    if (currentQuestion && currentQuestion.stepFeedback && currentQuestion.stepFeedback[stepIndex]) {
        resultDiv.innerHTML = `<p><strong>단계 ${stepIndex + 1} 완료:</strong> ${currentQuestion.stepFeedback[stepIndex]}</p>`;
    } else {
        resultDiv.innerHTML = `<p><strong>단계 ${stepIndex + 1}이 완료되었습니다.</strong> 다음 단계를 진행하세요.</p>`;
    }
    
    // 모든 단계가 완료되었는지 확인
    const completedSteps = document.querySelectorAll('.step-button.activated').length;
    const totalSteps = currentQuestion.steps.length;
    
    if (completedSteps === totalSteps) {
        resultDiv.innerHTML += '<p style="color: #28a745; font-weight: bold;">🎉 모든 실험 단계를 완료했습니다! 이제 관찰된 현상을 설명해주세요.</p>';
    }
}

// 시뮬레이션 문제 인터페이스
function generateSimulationInterface(question) {
    let html = '<div class="simulation-container">';
    html += `<div class="simulation-scenario">${question.scenario}</div>`;
    html += '<div class="simulation-steps">';
    
    question.steps.forEach((step, index) => {
        html += `<div class="simulation-step" data-step="${index}">
            <span class="step-number">${index + 1}</span>
            <span class="step-text">${step}</span>
            <button class="step-button" onclick="activateStep(${index})">실행</button>
        </div>`;
    });
    
    html += '</div>';
    html += '<div class="simulation-result">실험 단계를 순서대로 실행해보세요</div>';
    html += '<textarea id="simulation-answer" placeholder="관찰된 현상을 설명해주세요" rows="3"></textarea>';
    html += '</div>';
    
    return html;
}

// 드롭다운 빈칸 문제 인터페이스
function generateFillDropdownInterface(question) {
    let html = '<div class="fill-dropdown-container">';
    html += `<div class="fill-question">${question.question.replace('___', '<select id="fill-dropdown">')}</select></div>`;
    html += '<script>';
    html += 'const dropdown = document.getElementById("fill-dropdown");';
    question.options.forEach((option, index) => {
        html += `dropdown.innerHTML += '<option value="${index}">${option}</option>';`;
    });
    html += '</script>';
    html += '</div>';
    
    setTimeout(() => {
        const dropdown = document.getElementById('fill-dropdown');
        if (dropdown) {
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('option');
                optionElement.value = index;
                optionElement.textContent = option;
                dropdown.appendChild(optionElement);
            });
        }
    }, 100);
    
    return html;
}