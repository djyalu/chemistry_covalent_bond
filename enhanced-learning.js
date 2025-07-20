// 동적 학습 시스템
class DynamicLearningSystem {
    constructor() {
        this.userProfile = {
            level: 1,
            strengths: [],
            weaknesses: [],
            totalCorrect: 0,
            totalAttempts: 0,
            categoryStats: {
                'covalent': { correct: 0, attempts: 0 },
                'ionic': { correct: 0, attempts: 0 },
                'molecular': { correct: 0, attempts: 0 },
                'bonding': { correct: 0, attempts: 0 }
            },
            lastAnswers: [], // 최근 10개 답변 기록
            studyTime: 0,
            streakCount: 0,
            maxStreak: 0
        };
        
        this.currentHints = [];
        this.explanationHistory = [];
        this.adaptiveDifficulty = 'medium';
        
        this.loadUserProfile();
        this.initializeSystem();
    }
    
    // 사용자 프로필 초기화
    initializeSystem() {
        this.updateAdaptiveDifficulty();
        this.startStudyTimer();
    }
    
    // 적응형 난이도 조정
    updateAdaptiveDifficulty() {
        const accuracy = this.userProfile.totalAttempts > 0 ? 
            this.userProfile.totalCorrect / this.userProfile.totalAttempts : 0.5;
        
        if (accuracy > 0.8 && this.userProfile.totalAttempts > 5) {
            this.adaptiveDifficulty = 'hard';
        } else if (accuracy < 0.5 && this.userProfile.totalAttempts > 3) {
            this.adaptiveDifficulty = 'easy';
        } else {
            this.adaptiveDifficulty = 'medium';
        }
        
        // 난이도 표시 업데이트
        this.updateDifficultyDisplay();
    }
    
    // 스마트 문제 생성
    generateSmartProblem() {
        // 약점 영역에서 우선적으로 문제 생성
        const weakestCategory = this.getWeakestCategory();
        
        if (weakestCategory && Math.random() < 0.6) {
            return this.generateTargetedProblem(weakestCategory);
        }
        
        // 일반 문제 생성
        const problem = generateProblem(this.adaptiveDifficulty);
        
        // 문제에 학습 보조 정보 추가
        if (problem) {
            problem.learningTips = this.generateLearningTips(problem);
            problem.relatedConcepts = this.getRelatedConcepts(problem);
            problem.visualAids = this.getVisualAids(problem);
        }
        
        return problem;
    }
    
    // 약점 카테고리 파악
    getWeakestCategory() {
        let weakest = null;
        let lowestAccuracy = 1;
        
        for (const [category, stats] of Object.entries(this.userProfile.categoryStats)) {
            if (stats.attempts > 0) {
                const accuracy = stats.correct / stats.attempts;
                if (accuracy < lowestAccuracy) {
                    lowestAccuracy = accuracy;
                    weakest = category;
                }
            }
        }
        
        return weakest;
    }
    
    // 타겟 문제 생성
    generateTargetedProblem(category) {
        const problem = generateTopicProblem(category, this.adaptiveDifficulty);
        if (problem) {
            problem.isTargeted = true;
            problem.targetReason = `${this.getCategoryName(category)} 영역의 이해도 향상을 위한 문제입니다.`;
        }
        return problem;
    }
    
    // 학습 팁 생성
    generateLearningTips(problem) {
        const tips = {
            covalent: [
                "공유결합은 전자를 '공유'한다는 점을 기억하세요!",
                "비금속 원소들 사이에서 주로 일어납니다.",
                "물(H₂O)과 이산화탄소(CO₂)가 대표적인 예시입니다."
            ],
            ionic: [
                "이온결합은 전자를 '주고받는' 관계입니다.",
                "금속과 비금속 사이에서 일어납니다.",
                "소금(NaCl)이 가장 친숙한 예시입니다."
            ],
            molecular: [
                "분자는 3차원 공간에서 특정한 모양을 가집니다.",
                "VSEPR 이론으로 분자 모양을 예측할 수 있어요.",
                "전자쌍이 서로 밀어내려고 한다는 것이 핵심입니다."
            ],
            bonding: [
                "결합이 강할수록 결합 길이가 짧아집니다.",
                "삼중결합 > 이중결합 > 단일결합 순으로 강합니다.",
                "공유하는 전자쌍이 많을수록 결합이 강해집니다."
            ]
        };
        
        const category = this.identifyProblemCategory(problem);
        return tips[category] || ["차근차근 생각해보세요!"];
    }
    
    // 관련 개념 연결
    getRelatedConcepts(problem) {
        const concepts = {
            covalent: ["전자 공유", "옥텟 규칙", "극성", "분자"],
            ionic: ["전자 이동", "양이온", "음이온", "결정 구조"],
            molecular: ["VSEPR 이론", "전자쌍 기하구조", "분자 극성"],
            bonding: ["결합 에너지", "결합 길이", "결합 차수"]
        };
        
        const category = this.identifyProblemCategory(problem);
        return concepts[category] || [];
    }
    
    // 시각적 보조 자료
    getVisualAids(problem) {
        return {
            molecularModel: this.shouldShowMolecularModel(problem),
            electronDiagram: this.shouldShowElectronDiagram(problem),
            bondingAnimation: this.shouldShowBondingAnimation(problem)
        };
    }
    
    // 답변 처리 및 피드백
    processAnswer(userAnswer, problem, isCorrect) {
        // 사용자 프로필 업데이트
        this.updateUserProfile(problem, isCorrect);
        
        // 실시간 피드백 생성
        const feedback = this.generateDynamicFeedback(userAnswer, problem, isCorrect);
        
        // 다음 단계 추천
        const nextSteps = this.suggestNextSteps(problem, isCorrect);
        
        return {
            feedback,
            nextSteps,
            showVisualAid: !isCorrect && this.shouldShowVisualExplanation(problem),
            encouragement: this.generateEncouragement(isCorrect)
        };
    }
    
    // 사용자 프로필 업데이트
    updateUserProfile(problem, isCorrect) {
        this.userProfile.totalAttempts++;
        
        if (isCorrect) {
            this.userProfile.totalCorrect++;
            this.userProfile.streakCount++;
            this.userProfile.maxStreak = Math.max(this.userProfile.maxStreak, this.userProfile.streakCount);
        } else {
            this.userProfile.streakCount = 0;
        }
        
        // 카테고리별 통계 업데이트
        const category = this.identifyProblemCategory(problem);
        if (category) {
            this.userProfile.categoryStats[category].attempts++;
            if (isCorrect) {
                this.userProfile.categoryStats[category].correct++;
            }
        }
        
        // 최근 답변 기록
        this.userProfile.lastAnswers.unshift({ problem, isCorrect, timestamp: Date.now() });
        if (this.userProfile.lastAnswers.length > 10) {
            this.userProfile.lastAnswers.pop();
        }
        
        // 레벨 업데이트
        this.updateLevel();
        
        // 적응형 난이도 재조정
        this.updateAdaptiveDifficulty();
        
        // 프로필 저장
        this.saveUserProfile();
    }
    
    // 동적 피드백 생성
    generateDynamicFeedback(userAnswer, problem, isCorrect) {
        if (isCorrect) {
            return this.generatePositiveFeedback(problem);
        } else {
            return this.generateCorrectiveFeedback(userAnswer, problem);
        }
    }
    
    // 긍정적 피드백
    generatePositiveFeedback(problem) {
        const praises = [
            "훌륭합니다! 🎉",
            "정확해요! 👏",
            "잘했어요! ⭐",
            "완벽합니다! 💯",
            "멋져요! 🌟"
        ];
        
        const insights = [
            "이 개념을 잘 이해하고 있군요!",
            "화학적 사고력이 향상되고 있어요!",
            "연관 개념들도 함께 생각해보세요.",
            "다른 비슷한 문제도 잘 풀 수 있을 거예요!"
        ];
        
        return {
            praise: praises[Math.floor(Math.random() * praises.length)],
            insight: insights[Math.floor(Math.random() * insights.length)],
            reinforcement: this.generateConceptReinforcement(problem)
        };
    }
    
    // 교정적 피드백
    generateCorrectiveFeedback(userAnswer, problem) {
        const analysis = this.analyzeWrongAnswer(userAnswer, problem);
        
        return {
            encouragement: "괜찮아요! 실수는 학습의 기회입니다. 💪",
            errorAnalysis: analysis,
            stepByStepExplanation: this.generateStepByStepExplanation(problem),
            commonMistakes: this.getCommonMistakes(problem),
            practiceRecommendation: this.recommendPractice(problem)
        };
    }
    
    // 다음 단계 제안
    suggestNextSteps(problem, isCorrect) {
        if (isCorrect) {
            return {
                suggestion: "더 어려운 문제에 도전해보세요!",
                actions: [
                    { text: "비슷한 문제 더 풀기", action: "moreSimilar" },
                    { text: "다음 레벨 문제", action: "nextLevel" },
                    { text: "관련 개념 학습", action: "relatedConcepts" }
                ]
            };
        } else {
            return {
                suggestion: "개념을 다시 한번 확인해보세요.",
                actions: [
                    { text: "개념 다시 학습", action: "reviewConcept" },
                    { text: "비슷한 쉬운 문제", action: "easierSimilar" },
                    { text: "시각적 설명 보기", action: "visualExplanation" }
                ]
            };
        }
    }
    
    // 스마트 힌트 시스템
    generateSmartHint(problem, attemptCount = 1) {
        const hints = this.getProgressiveHints(problem);
        
        if (attemptCount <= hints.length) {
            return {
                hint: hints[attemptCount - 1],
                level: attemptCount,
                maxLevel: hints.length,
                visual: this.getHintVisual(problem, attemptCount)
            };
        }
        
        return {
            hint: "이 문제의 핵심 개념을 다시 학습해보세요.",
            level: hints.length,
            maxLevel: hints.length,
            showAnswer: true
        };
    }
    
    // 단계별 힌트 생성
    getProgressiveHints(problem) {
        const category = this.identifyProblemCategory(problem);
        
        const hintTemplates = {
            covalent: [
                "이 문제는 공유결합에 관한 것입니다. 어떤 원소들이 관련되어 있나요?",
                "공유결합은 전자를 공유합니다. 비금속 원소들을 찾아보세요.",
                "전자를 주고받는 것이 아니라 함께 사용하는 결합입니다."
            ],
            ionic: [
                "이온화합물의 특징을 생각해보세요. 금속과 비금속이 만나면?",
                "전자를 잃는 원소와 얻는 원소를 구분해보세요.",
                "양이온(+)과 음이온(-)의 정전기적 인력을 생각해보세요."
            ],
            molecular: [
                "분자의 3차원 구조를 상상해보세요.",
                "중심 원자 주위의 전자쌍 개수를 세어보세요.",
                "VSEPR 이론: 전자쌍들은 서로 멀리 떨어지려고 합니다."
            ],
            bonding: [
                "결합의 세기와 길이는 반비례 관계입니다.",
                "공유하는 전자쌍의 개수를 생각해보세요.",
                "단일 < 이중 < 삼중 결합 순으로 강해집니다."
            ]
        };
        
        return hintTemplates[category] || [problem.hint || "차근차근 생각해보세요."];
    }
    
    // 시각적 분자 모델링
    showMolecularVisualization(moleculeFormula) {
        const canvas = document.getElementById('molecule-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.style.display = 'block';
        canvas.width = 400;
        canvas.height = 300;
        
        // 간단한 분자 시각화 (실제로는 더 복잡한 3D 라이브러리 사용 권장)
        this.drawMolecule(ctx, moleculeFormula);
    }
    
    // 학습 진도 분석
    generateProgressReport() {
        const accuracy = this.userProfile.totalAttempts > 0 ? 
            (this.userProfile.totalCorrect / this.userProfile.totalAttempts * 100).toFixed(1) : 0;
        
        const categoryAnalysis = Object.entries(this.userProfile.categoryStats).map(([category, stats]) => {
            const categoryAccuracy = stats.attempts > 0 ? 
                (stats.correct / stats.attempts * 100).toFixed(1) : 0;
            
            return {
                category: this.getCategoryName(category),
                accuracy: categoryAccuracy,
                attempts: stats.attempts,
                status: categoryAccuracy > 70 ? 'good' : categoryAccuracy > 50 ? 'average' : 'needs-improvement'
            };
        });
        
        return {
            overallAccuracy: accuracy,
            totalProblems: this.userProfile.totalAttempts,
            currentStreak: this.userProfile.streakCount,
            maxStreak: this.userProfile.maxStreak,
            level: this.userProfile.level,
            studyTime: Math.floor(this.userProfile.studyTime / 60000), // 분 단위
            categoryAnalysis,
            recommendations: this.generateRecommendations(categoryAnalysis)
        };
    }
    
    // 학습 추천사항 생성
    generateRecommendations(categoryAnalysis) {
        const recommendations = [];
        
        categoryAnalysis.forEach(category => {
            if (category.status === 'needs-improvement') {
                recommendations.push({
                    type: 'improvement',
                    message: `${category.category} 영역의 추가 학습이 필요합니다.`,
                    action: `study-${category.category}`
                });
            } else if (category.status === 'good') {
                recommendations.push({
                    type: 'advancement',
                    message: `${category.category} 영역을 잘 이해하고 있어요! 더 어려운 문제에 도전해보세요.`,
                    action: `advance-${category.category}`
                });
            }
        });
        
        if (this.userProfile.streakCount > 5) {
            recommendations.push({
                type: 'achievement',
                message: `${this.userProfile.streakCount}연속 정답! 훌륭한 집중력입니다! 🔥`,
                action: 'continue-streak'
            });
        }
        
        return recommendations;
    }
    
    // 유틸리티 함수들
    identifyProblemCategory(problem) {
        if (problem.category) return problem.category;
        
        const question = problem.question.toLowerCase();
        if (question.includes('공유') || question.includes('covalent')) return 'covalent';
        if (question.includes('이온') || question.includes('ionic')) return 'ionic';
        if (question.includes('구조') || question.includes('모양')) return 'molecular';
        if (question.includes('결합') || question.includes('에너지')) return 'bonding';
        
        return 'general';
    }
    
    getCategoryName(category) {
        const names = {
            'covalent': '공유결합',
            'ionic': '이온화합물', 
            'molecular': '분자 구조',
            'bonding': '결합의 세기'
        };
        return names[category] || category;
    }
    
    updateLevel() {
        const newLevel = Math.floor(this.userProfile.totalCorrect / 10) + 1;
        if (newLevel > this.userProfile.level) {
            this.userProfile.level = newLevel;
            this.showLevelUpNotification(newLevel);
        }
    }
    
    showLevelUpNotification(level) {
        // 레벨업 알림 표시
        const notification = document.createElement('div');
        notification.className = 'level-up-notification';
        notification.innerHTML = `
            <div class="level-up-content">
                🎉 레벨 업! 🎉<br>
                <span class="level-text">Level ${level}</span>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    startStudyTimer() {
        this.studyStartTime = Date.now();
        setInterval(() => {
            this.userProfile.studyTime += 1000; // 1초씩 증가
        }, 1000);
    }
    
    // 데이터 저장/로드
    saveUserProfile() {
        localStorage.setItem('chemistryLearningProfile', JSON.stringify(this.userProfile));
    }
    
    loadUserProfile() {
        const saved = localStorage.getItem('chemistryLearningProfile');
        if (saved) {
            this.userProfile = { ...this.userProfile, ...JSON.parse(saved) };
        }
    }
    
    // 기타 보조 함수들
    shouldShowMolecularModel(problem) {
        return problem.question.toLowerCase().includes('분자') || 
               problem.question.toLowerCase().includes('구조');
    }
    
    shouldShowElectronDiagram(problem) {
        return problem.question.toLowerCase().includes('전자') ||
               problem.question.toLowerCase().includes('결합');
    }
    
    shouldShowBondingAnimation(problem) {
        return problem.question.toLowerCase().includes('결합') ||
               problem.question.toLowerCase().includes('공유');
    }
    
    shouldShowVisualExplanation(problem) {
        const category = this.identifyProblemCategory(problem);
        return ['molecular', 'bonding'].includes(category);
    }
    
    updateDifficultyDisplay() {
        const difficultyElement = document.getElementById('adaptive-difficulty');
        if (difficultyElement) {
            const difficultyNames = {
                'easy': '쉬움 📗',
                'medium': '보통 📘', 
                'hard': '어려움 📕'
            };
            difficultyElement.textContent = `적응형 난이도: ${difficultyNames[this.adaptiveDifficulty]}`;
        }
    }
    
    drawMolecule(ctx, formula) {
        // 간단한 분자 그리기 (실제로는 3D 라이브러리 사용 권장)
        ctx.clearRect(0, 0, 400, 300);
        ctx.fillStyle = '#333';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${formula} 분자 구조`, 200, 30);
        
        // 기본적인 원자와 결합 그리기
        if (formula === 'H2O') {
            this.drawWaterMolecule(ctx);
        } else if (formula === 'CO2') {
            this.drawCO2Molecule(ctx);
        } else if (formula === 'CH4') {
            this.drawMethaneMolecule(ctx);
        }
    }
    
    drawWaterMolecule(ctx) {
        // 산소 원자 (빨간색)
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(200, 150, 20, 0, 2 * Math.PI);
        ctx.fill();
        
        // 수소 원자들 (하얀색)
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        
        // 첫 번째 수소
        ctx.beginPath();
        ctx.arc(160, 120, 12, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // 두 번째 수소
        ctx.beginPath();
        ctx.arc(240, 120, 12, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // 결합선
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(185, 135);
        ctx.lineTo(170, 125);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(215, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();
        
        // 라벨
        ctx.fillStyle = 'black';
        ctx.font = '14px Arial';
        ctx.fillText('O', 200, 155);
        ctx.fillText('H', 160, 125);
        ctx.fillText('H', 240, 125);
    }
    
    drawCO2Molecule(ctx) {
        // 탄소 원자 (검은색)
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(200, 150, 15, 0, 2 * Math.PI);
        ctx.fill();
        
        // 산소 원자들 (빨간색)
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(150, 150, 15, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(250, 150, 15, 0, 2 * Math.PI);
        ctx.fill();
        
        // 이중결합선
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        
        // 왼쪽 이중결합
        ctx.beginPath();
        ctx.moveTo(165, 145);
        ctx.lineTo(185, 145);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(165, 155);
        ctx.lineTo(185, 155);
        ctx.stroke();
        
        // 오른쪽 이중결합
        ctx.beginPath();
        ctx.moveTo(215, 145);
        ctx.lineTo(235, 145);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(215, 155);
        ctx.lineTo(235, 155);
        ctx.stroke();
        
        // 라벨
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.fillText('C', 200, 155);
        ctx.fillText('O', 150, 155);
        ctx.fillText('O', 250, 155);
    }
    
    drawMethaneMolecule(ctx) {
        // 탄소 원자 (검은색)
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(200, 150, 15, 0, 2 * Math.PI);
        ctx.fill();
        
        // 수소 원자들 (하얀색)
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        
        const hydrogenPositions = [
            { x: 170, y: 120 },
            { x: 230, y: 120 },
            { x: 170, y: 180 },
            { x: 230, y: 180 }
        ];
        
        hydrogenPositions.forEach(pos => {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 10, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        });
        
        // 결합선
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        hydrogenPositions.forEach(pos => {
            ctx.beginPath();
            ctx.moveTo(200, 150);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        });
        
        // 라벨
        ctx.fillStyle = 'white';
        ctx.font = '10px Arial';
        ctx.fillText('C', 200, 155);
        hydrogenPositions.forEach(pos => {
            ctx.fillText('H', pos.x, pos.y + 3);
        });
    }
}

// 전역 인스턴스 생성
window.dynamicLearning = new DynamicLearningSystem();