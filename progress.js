// 학습 진도 관리 시스템

class ProgressManager {
    constructor() {
        this.data = this.loadProgressData();
        this.startTime = Date.now();
        this.todayKey = new Date().toDateString();
        this.initializeProgress();
    }

    // 진도 데이터 로드
    loadProgressData() {
        const defaultData = {
            totalTime: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            highScore: 0,
            maxStreak: 0,
            currentStreak: 0,
            lastAccessed: new Date().toISOString(),
            topicStats: {
                covalent: { attempted: 0, correct: 0, timeSpent: 0 },
                ionic: { attempted: 0, correct: 0, timeSpent: 0 },
                molecular: { attempted: 0, correct: 0, timeSpent: 0 },
                bonding: { attempted: 0, correct: 0, timeSpent: 0 },
                reactions: { attempted: 0, correct: 0, timeSpent: 0 },
                dailyChemistry: { attempted: 0, correct: 0, timeSpent: 0 }
            },
            dailyActivity: {},
            achievements: [],
            recentAnswers: []
        };

        const saved = localStorage.getItem('chemistryProgress');
        return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
    }

    // 진도 데이터 저장
    saveProgressData() {
        this.data.lastAccessed = new Date().toISOString();
        localStorage.setItem('chemistryProgress', JSON.stringify(this.data));
    }

    // 진도 페이지 초기화
    initializeProgress() {
        this.updateOverviewStats();
        this.updateTopicProgress();
        this.updateActivityChart();
        this.updateAchievements();
        this.updateRecommendations();
    }

    // 종합 통계 업데이트
    updateOverviewStats() {
        // 총 학습 시간
        document.getElementById('total-time').textContent = `${Math.floor(this.data.totalTime / 60)}분`;
        
        // 오늘 학습 시간
        const todayTime = this.data.dailyActivity[this.todayKey]?.time || 0;
        document.getElementById('today-time').textContent = `${Math.floor(todayTime / 60)}분`;

        // 총 문제 수
        document.getElementById('total-questions').textContent = `${this.data.totalQuestions}문제`;
        
        // 오늘 문제 수
        const todayQuestions = this.data.dailyActivity[this.todayKey]?.questions || 0;
        document.getElementById('today-questions').textContent = `${todayQuestions}문제`;

        // 전체 정답률
        const overallAccuracy = this.data.totalQuestions > 0 ? 
            Math.round((this.data.correctAnswers / this.data.totalQuestions) * 100) : 0;
        document.getElementById('accuracy').textContent = `${overallAccuracy}%`;

        // 최근 10문제 정답률
        const recentAccuracy = this.calculateRecentAccuracy();
        document.getElementById('recent-accuracy').textContent = `${recentAccuracy}%`;

        // 최고 점수
        document.getElementById('high-score').textContent = `${this.data.highScore}점`;

        // 최대 연속 정답
        document.getElementById('max-streak').textContent = `${this.data.maxStreak}개`;
    }

    // 최근 정답률 계산
    calculateRecentAccuracy() {
        if (this.data.recentAnswers.length === 0) return 0;
        const recentCorrect = this.data.recentAnswers.slice(-10).filter(answer => answer.correct).length;
        const recentTotal = Math.min(this.data.recentAnswers.length, 10);
        return Math.round((recentCorrect / recentTotal) * 100);
    }

    // 주제별 진도 업데이트
    updateTopicProgress() {
        const container = document.getElementById('topic-progress-detail');
        const topicNames = {
            covalent: '🔗 공유결합',
            ionic: '⚡ 이온화합물',
            molecular: '🧬 분자 구조',
            bonding: '💪 결합의 세기',
            reactions: '⚗️ 화학 반응',
            dailyChemistry: '🏠 일상 속 화학'
        };

        let html = '';
        for (const [topic, stats] of Object.entries(this.data.topicStats)) {
            const accuracy = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
            const progress = Math.min((stats.attempted / 15) * 100, 100); // 15문제를 100%로 가정
            
            html += `
                <div class="topic-item">
                    <div class="topic-header">
                        <span class="topic-name">${topicNames[topic] || topic}</span>
                        <div class="topic-stats">
                            <span>정답률: ${accuracy}%</span>
                            <span>문제 수: ${stats.attempted}</span>
                            <span>시간: ${Math.floor(stats.timeSpent / 60)}분</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
            `;
        }
        container.innerHTML = html;
    }

    // 활동 차트 업데이트 (최근 7일)
    updateActivityChart() {
        const container = document.getElementById('activity-chart');
        const days = [];
        const today = new Date();
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            days.push(date);
        }

        const maxQuestions = Math.max(...days.map(date => {
            const dayKey = date.toDateString();
            return this.data.dailyActivity[dayKey]?.questions || 0;
        }), 1);

        let html = '<div class="chart-container">';
        days.forEach(date => {
            const dayKey = date.toDateString();
            const questions = this.data.dailyActivity[dayKey]?.questions || 0;
            const height = (questions / maxQuestions) * 100;
            const dayName = date.toLocaleDateString('ko-KR', { weekday: 'short' });
            
            html += `
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div class="chart-bar" style="height: ${height}%">
                        <div class="chart-value">${questions}</div>
                    </div>
                    <div class="chart-day">${dayName}</div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    }

    // 성취 시스템 업데이트
    updateAchievements() {
        const container = document.getElementById('achievement-grid');
        const achievements = [
            {
                id: 'first_problem',
                name: '첫 걸음',
                description: '첫 문제 해결',
                icon: '🎯',
                condition: () => this.data.totalQuestions >= 1
            },
            {
                id: 'problem_solver',
                name: '문제 해결사',
                description: '10문제 해결',
                icon: '🔥',
                condition: () => this.data.totalQuestions >= 10
            },
            {
                id: 'chemistry_master',
                name: '화학 마스터',
                description: '50문제 해결',
                icon: '🧪',
                condition: () => this.data.totalQuestions >= 50
            },
            {
                id: 'accuracy_expert',
                name: '정확도 전문가',
                description: '정답률 80% 이상',
                icon: '🎖️',
                condition: () => {
                    const accuracy = this.data.totalQuestions > 0 ? 
                        (this.data.correctAnswers / this.data.totalQuestions) * 100 : 0;
                    return accuracy >= 80 && this.data.totalQuestions >= 10;
                }
            },
            {
                id: 'streak_master',
                name: '연속 정답왕',
                description: '5문제 연속 정답',
                icon: '⚡',
                condition: () => this.data.maxStreak >= 5
            },
            {
                id: 'daily_learner',
                name: '꾸준한 학습자',
                description: '7일 연속 학습',
                icon: '📚',
                condition: () => this.checkDailyStreak() >= 7
            },
            {
                id: 'time_master',
                name: '시간 관리왕',
                description: '총 60분 이상 학습',
                icon: '⏰',
                condition: () => this.data.totalTime >= 3600 // 60분 = 3600초
            },
            {
                id: 'topic_explorer',
                name: '주제 탐험가',
                description: '모든 주제 학습',
                icon: '🗺️',
                condition: () => {
                    return Object.values(this.data.topicStats).every(stat => stat.attempted > 0);
                }
            }
        ];

        let html = '';
        achievements.forEach(achievement => {
            const earned = achievement.condition();
            const className = earned ? 'achievement-badge earned' : 'achievement-badge';
            
            html += `
                <div class="${className}" title="${achievement.description}">
                    <div class="badge-icon">${achievement.icon}</div>
                    <div class="badge-name">${achievement.name}</div>
                    <div class="badge-description">${achievement.description}</div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    // 일일 연속 학습 체크
    checkDailyStreak() {
        const today = new Date();
        let streak = 0;
        
        for (let i = 0; i < 30; i++) { // 최대 30일 체크
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dayKey = date.toDateString();
            
            if (this.data.dailyActivity[dayKey]?.questions > 0) {
                streak++;
            } else {
                break;
            }
        }
        
        return streak;
    }

    // 학습 추천 업데이트
    updateRecommendations() {
        const container = document.getElementById('recommendations');
        const recommendations = [];

        // 정답률이 낮은 주제 추천
        const weakTopics = Object.entries(this.data.topicStats)
            .filter(([topic, stats]) => stats.attempted > 0)
            .map(([topic, stats]) => ({
                topic,
                accuracy: (stats.correct / stats.attempted) * 100
            }))
            .filter(item => item.accuracy < 70)
            .sort((a, b) => a.accuracy - b.accuracy);

        if (weakTopics.length > 0) {
            const topicNames = {
                covalent: '공유결합',
                ionic: '이온화합물',
                molecular: '분자 구조',
                bonding: '결합의 세기',
                reactions: '화학 반응',
                dailyChemistry: '일상 속 화학'
            };
            
            recommendations.push({
                title: `${topicNames[weakTopics[0].topic]} 복습하기`,
                description: `정답률이 ${Math.round(weakTopics[0].accuracy)}%로 낮습니다. 추가 학습을 권장합니다.`,
                action: () => this.goToTopic(weakTopics[0].topic)
            });
        }

        // 오랫동안 학습하지 않은 경우
        const lastActivity = new Date(this.data.lastAccessed);
        const daysSinceLastActivity = Math.floor((Date.now() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastActivity >= 3) {
            recommendations.push({
                title: '학습 재개하기',
                description: `${daysSinceLastActivity}일 동안 학습하지 않았습니다. 다시 시작해보세요!`,
                action: () => switchSection('practice')
            });
        }

        // 기본 추천
        if (recommendations.length === 0) {
            recommendations.push({
                title: '새로운 문제 도전하기',
                description: '더 많은 문제를 풀어서 실력을 향상시켜보세요!',
                action: () => switchSection('practice')
            });
        }

        let html = '';
        recommendations.forEach(rec => {
            html += `
                <div class="recommendation-item">
                    <div class="recommendation-title">${rec.title}</div>
                    <div class="recommendation-description">${rec.description}</div>
                    <button class="recommendation-action" onclick="progressManager.executeRecommendation('${rec.title}')">
                        시작하기
                    </button>
                </div>
            `;
        });
        
        container.innerHTML = html;
        this.currentRecommendations = recommendations;
    }

    // 추천 실행
    executeRecommendation(title) {
        const recommendation = this.currentRecommendations.find(rec => rec.title === title);
        if (recommendation && recommendation.action) {
            recommendation.action();
        }
    }

    // 주제로 이동
    goToTopic(topic) {
        switchSection('learn');
        setTimeout(() => {
            showTopic(topic);
        }, 100);
    }

    // 답변 기록
    recordAnswer(isCorrect, topic, points = 10) {
        this.data.totalQuestions++;
        if (isCorrect) {
            this.data.correctAnswers++;
            this.data.currentStreak++;
            this.data.maxStreak = Math.max(this.data.maxStreak, this.data.currentStreak);
        } else {
            this.data.currentStreak = 0;
        }

        // 점수 업데이트
        if (isCorrect) {
            const newScore = this.data.correctAnswers * points;
            this.data.highScore = Math.max(this.data.highScore, newScore);
        }

        // 주제별 통계 업데이트
        if (topic && this.data.topicStats[topic]) {
            this.data.topicStats[topic].attempted++;
            if (isCorrect) {
                this.data.topicStats[topic].correct++;
            }
        }

        // 최근 답변 기록
        this.data.recentAnswers.push({
            correct: isCorrect,
            topic: topic,
            timestamp: Date.now()
        });
        
        // 최근 50개만 유지
        if (this.data.recentAnswers.length > 50) {
            this.data.recentAnswers.shift();
        }

        // 일일 활동 기록
        if (!this.data.dailyActivity[this.todayKey]) {
            this.data.dailyActivity[this.todayKey] = { questions: 0, time: 0 };
        }
        this.data.dailyActivity[this.todayKey].questions++;

        this.saveProgressData();
        
        // 진도 페이지가 활성화되어 있으면 업데이트
        if (document.getElementById('progress').classList.contains('active')) {
            this.initializeProgress();
        }
    }

    // 학습 시간 기록
    recordStudyTime(seconds) {
        this.data.totalTime += seconds;
        
        if (!this.data.dailyActivity[this.todayKey]) {
            this.data.dailyActivity[this.todayKey] = { questions: 0, time: 0 };
        }
        this.data.dailyActivity[this.todayKey].time += seconds;
        
        this.saveProgressData();
    }
}

// 진도 내보내기
function exportProgress() {
    const progressData = progressManager.data;
    const exportData = {
        exported: new Date().toISOString(),
        stats: {
            totalTime: Math.floor(progressData.totalTime / 60),
            totalQuestions: progressData.totalQuestions,
            correctAnswers: progressData.correctAnswers,
            accuracy: progressData.totalQuestions > 0 ? 
                Math.round((progressData.correctAnswers / progressData.totalQuestions) * 100) : 0,
            maxStreak: progressData.maxStreak
        },
        topicStats: progressData.topicStats
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `chemistry_progress_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// 통계 초기화
function resetProgress() {
    if (confirm('정말로 모든 학습 통계를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
        localStorage.removeItem('chemistryProgress');
        progressManager = new ProgressManager();
        alert('학습 통계가 초기화되었습니다.');
    }
}

// 전역 진도 관리자 초기화
let progressManager;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    progressManager = new ProgressManager();
    window.progressManager = progressManager; // 전역 접근 가능하도록 설정
    
    // 5분마다 학습 시간 기록
    setInterval(() => {
        progressManager.recordStudyTime(300); // 5분 = 300초
    }, 300000);
});