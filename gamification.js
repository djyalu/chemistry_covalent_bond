// 게임화 시스템
class GameSystem {
    constructor() {
        this.playerData = this.loadPlayerData();
        this.achievements = new AchievementSystem();
        this.levelSystem = new LevelSystem();
        this.dailyChallenge = new DailyChallenge();
        this.streakCounter = new StreakCounter();
    }
    
    loadPlayerData() {
        const saved = localStorage.getItem('chemGameData');
        return saved ? JSON.parse(saved) : {
            username: this.generateUsername(),
            level: 1,
            experience: 0,
            coins: 0,
            gems: 0,
            achievements: [],
            statistics: {
                totalQuestions: 0,
                correctAnswers: 0,
                perfectStreak: 0,
                studyTime: 0,
                topicsCompleted: []
            },
            inventory: {
                powerups: {},
                avatars: ['default'],
                titles: ['초보 화학자']
            },
            currentAvatar: 'default',
            currentTitle: '초보 화학자'
        };
    }
    
    generateUsername() {
        const adjectives = ['똑똑한', '호기심많은', '열정적인', '창의적인', '탐구하는'];
        const nouns = ['화학자', '연구원', '탐험가', '발명가', '과학자'];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${adj}${noun}${Math.floor(Math.random() * 1000)}`;
    }
    
    savePlayerData() {
        localStorage.setItem('chemGameData', JSON.stringify(this.playerData));
    }
    
    addExperience(amount) {
        this.playerData.experience += amount;
        const levelUp = this.levelSystem.checkLevelUp(this.playerData);
        
        if (levelUp) {
            this.showLevelUpAnimation(levelUp.newLevel, levelUp.rewards);
        }
        
        this.savePlayerData();
        return levelUp;
    }
    
    addCoins(amount) {
        this.playerData.coins += amount;
        this.showCoinAnimation(amount);
        this.savePlayerData();
    }
    
    showLevelUpAnimation(newLevel, rewards) {
        const overlay = document.createElement('div');
        overlay.className = 'level-up-overlay';
        overlay.innerHTML = `
            <div class="level-up-content">
                <h2>🎉 레벨 업! 🎉</h2>
                <div class="new-level">레벨 ${newLevel}</div>
                <div class="rewards">
                    <h3>보상:</h3>
                    <ul>
                        ${rewards.coins ? `<li>💰 ${rewards.coins} 코인</li>` : ''}
                        ${rewards.gems ? `<li>💎 ${rewards.gems} 보석</li>` : ''}
                        ${rewards.title ? `<li>🏆 새 칭호: ${rewards.title}</li>` : ''}
                        ${rewards.powerup ? `<li>⚡ 파워업: ${rewards.powerup}</li>` : ''}
                    </ul>
                </div>
                <button onclick="this.parentElement.parentElement.remove()">확인</button>
            </div>
        `;
        document.body.appendChild(overlay);
        
        // 애니메이션
        setTimeout(() => overlay.classList.add('show'), 10);
    }
    
    showCoinAnimation(amount) {
        const coin = document.createElement('div');
        coin.className = 'coin-animation';
        coin.textContent = `+${amount} 💰`;
        coin.style.position = 'fixed';
        coin.style.top = '50%';
        coin.style.left = '50%';
        coin.style.transform = 'translate(-50%, -50%)';
        coin.style.fontSize = '24px';
        coin.style.fontWeight = 'bold';
        coin.style.color = '#FFD700';
        coin.style.zIndex = '9999';
        
        document.body.appendChild(coin);
        
        // 애니메이션
        coin.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: 'translate(-50%, -150%) scale(1.5)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => coin.remove();
    }
}

// 레벨 시스템
class LevelSystem {
    constructor() {
        this.levels = this.generateLevels();
    }
    
    generateLevels() {
        const levels = [];
        for (let i = 1; i <= 100; i++) {
            levels.push({
                level: i,
                requiredExp: Math.floor(100 * Math.pow(1.5, i - 1)),
                rewards: this.getLevelRewards(i)
            });
        }
        return levels;
    }
    
    getLevelRewards(level) {
        const rewards = {
            coins: level * 50,
            gems: 0,
            title: null,
            powerup: null,
            avatar: null
        };
        
        // 5레벨마다 보석
        if (level % 5 === 0) {
            rewards.gems = Math.floor(level / 5) * 10;
        }
        
        // 10레벨마다 새 칭호
        if (level % 10 === 0) {
            const titles = [
                '견습 화학자', '중급 화학자', '고급 화학자', 
                '전문 화학자', '마스터 화학자', '그랜드마스터',
                '화학 박사', '화학 천재', '화학의 신', '레전드'
            ];
            rewards.title = titles[Math.floor(level / 10) - 1] || '전설적인 화학자';
        }
        
        // 특정 레벨에서 파워업
        const powerupLevels = [15, 25, 40, 60, 80, 100];
        if (powerupLevels.includes(level)) {
            rewards.powerup = this.getRandomPowerup();
        }
        
        return rewards;
    }
    
    getRandomPowerup() {
        const powerups = [
            '시간 연장', '힌트 2배', '경험치 부스터',
            '코인 2배', '실수 방어막', '연속 정답 보너스'
        ];
        return powerups[Math.floor(Math.random() * powerups.length)];
    }
    
    checkLevelUp(playerData) {
        const currentLevel = playerData.level;
        const nextLevel = this.levels.find(l => l.level === currentLevel + 1);
        
        if (nextLevel && playerData.experience >= nextLevel.requiredExp) {
            playerData.level = nextLevel.level;
            playerData.experience -= nextLevel.requiredExp;
            
            // 보상 지급
            const rewards = nextLevel.rewards;
            playerData.coins += rewards.coins;
            playerData.gems += rewards.gems;
            
            if (rewards.title) {
                playerData.inventory.titles.push(rewards.title);
            }
            
            if (rewards.powerup) {
                playerData.inventory.powerups[rewards.powerup] = 
                    (playerData.inventory.powerups[rewards.powerup] || 0) + 1;
            }
            
            return {
                newLevel: nextLevel.level,
                rewards: rewards
            };
        }
        
        return null;
    }
    
    getProgressToNextLevel(playerData) {
        const nextLevel = this.levels.find(l => l.level === playerData.level + 1);
        if (!nextLevel) return { percent: 100, needed: 0 };
        
        const percent = (playerData.experience / nextLevel.requiredExp) * 100;
        const needed = nextLevel.requiredExp - playerData.experience;
        
        return { percent, needed };
    }
}

// 업적 시스템
class AchievementSystem {
    constructor() {
        this.achievements = [
            // 학습 관련
            {
                id: 'first_correct',
                name: '첫 정답',
                description: '첫 문제를 맞추세요',
                icon: '🎯',
                condition: (stats) => stats.correctAnswers >= 1,
                reward: { coins: 10, exp: 10 }
            },
            {
                id: 'perfect_10',
                name: '완벽한 10',
                description: '10문제 연속 정답',
                icon: '💯',
                condition: (stats) => stats.perfectStreak >= 10,
                reward: { coins: 100, exp: 50, gems: 5 }
            },
            {
                id: 'chemistry_master',
                name: '화학 마스터',
                description: '모든 주제 학습 완료',
                icon: '🏆',
                condition: (stats) => stats.topicsCompleted.length >= 4,
                reward: { coins: 500, exp: 200, title: '화학 마스터' }
            },
            
            // 시간 관련
            {
                id: 'dedicated_learner',
                name: '열정적인 학습자',
                description: '총 60분 이상 학습',
                icon: '⏰',
                condition: (stats) => stats.studyTime >= 60,
                reward: { coins: 50, exp: 30 }
            },
            
            // 특별 업적
            {
                id: 'early_bird',
                name: '얼리버드',
                description: '오전 6시에 학습',
                icon: '🌅',
                condition: (stats, time) => new Date(time).getHours() === 6,
                reward: { coins: 30, exp: 20 }
            },
            {
                id: 'night_owl',
                name: '올빼미',
                description: '밤 10시 이후 학습',
                icon: '🦉',
                condition: (stats, time) => new Date(time).getHours() >= 22,
                reward: { coins: 30, exp: 20 }
            }
        ];
    }
    
    checkAchievements(playerData) {
        const newAchievements = [];
        const stats = playerData.statistics;
        const currentTime = new Date();
        
        this.achievements.forEach(achievement => {
            if (!playerData.achievements.includes(achievement.id)) {
                if (achievement.condition(stats, currentTime)) {
                    playerData.achievements.push(achievement.id);
                    newAchievements.push(achievement);
                    
                    // 보상 지급
                    if (achievement.reward.coins) {
                        playerData.coins += achievement.reward.coins;
                    }
                    if (achievement.reward.exp) {
                        playerData.experience += achievement.reward.exp;
                    }
                    if (achievement.reward.gems) {
                        playerData.gems += achievement.reward.gems;
                    }
                    if (achievement.reward.title) {
                        playerData.inventory.titles.push(achievement.reward.title);
                    }
                }
            }
        });
        
        // 새 업적 표시
        newAchievements.forEach(achievement => {
            this.showAchievementUnlock(achievement);
        });
        
        return newAchievements;
    }
    
    showAchievementUnlock(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <h4>업적 달성!</h4>
                <p>${achievement.name}</p>
                <small>${achievement.description}</small>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // 애니메이션
        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// 일일 도전
class DailyChallenge {
    constructor() {
        this.challenges = [
            {
                id: 'daily_5',
                name: '일일 학습',
                description: '오늘 5문제 풀기',
                target: 5,
                reward: { coins: 50, exp: 30 }
            },
            {
                id: 'perfect_day',
                name: '완벽한 하루',
                description: '오늘 정답률 80% 이상',
                target: 0.8,
                reward: { coins: 100, exp: 50, gems: 10 }
            },
            {
                id: 'topic_master',
                name: '주제 정복',
                description: '한 주제에서 10문제 풀기',
                target: 10,
                reward: { coins: 75, exp: 40 }
            }
        ];
        
        this.todayChallenge = this.getOrGenerateDailyChallenge();
    }
    
    getOrGenerateDailyChallenge() {
        const today = new Date().toDateString();
        const saved = localStorage.getItem('dailyChallenge');
        
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.date === today) {
                return parsed.challenge;
            }
        }
        
        // 새 일일 도전 생성
        const challenge = this.challenges[Math.floor(Math.random() * this.challenges.length)];
        const dailyData = {
            date: today,
            challenge: challenge,
            progress: 0,
            completed: false
        };
        
        localStorage.setItem('dailyChallenge', JSON.stringify(dailyData));
        return challenge;
    }
    
    updateProgress(type, value) {
        const saved = JSON.parse(localStorage.getItem('dailyChallenge'));
        if (!saved || saved.completed) return;
        
        // 진행도 업데이트 로직
        let updated = false;
        
        switch(saved.challenge.id) {
            case 'daily_5':
                if (type === 'question_answered') {
                    saved.progress++;
                    updated = true;
                }
                break;
                
            case 'perfect_day':
                if (type === 'accuracy_update') {
                    saved.progress = value;
                    updated = true;
                }
                break;
                
            case 'topic_master':
                if (type === 'topic_question' && value === saved.topicId) {
                    saved.progress++;
                    updated = true;
                }
                break;
        }
        
        if (updated) {
            // 완료 확인
            if (this.checkCompletion(saved)) {
                saved.completed = true;
                this.completeDailyChallenge(saved.challenge);
            }
            
            localStorage.setItem('dailyChallenge', JSON.stringify(saved));
        }
    }
    
    checkCompletion(challengeData) {
        const challenge = challengeData.challenge;
        
        switch(challenge.id) {
            case 'daily_5':
            case 'topic_master':
                return challengeData.progress >= challenge.target;
                
            case 'perfect_day':
                return challengeData.progress >= challenge.target;
                
            default:
                return false;
        }
    }
    
    completeDailyChallenge(challenge) {
        // 보상 지급 알림
        const notification = document.createElement('div');
        notification.className = 'daily-complete-notification';
        notification.innerHTML = `
            <h3>🎊 일일 도전 완료! 🎊</h3>
            <p>${challenge.name}</p>
            <div class="rewards">
                ${challenge.reward.coins ? `<span>💰 ${challenge.reward.coins}</span>` : ''}
                ${challenge.reward.exp ? `<span>⭐ ${challenge.reward.exp} EXP</span>` : ''}
                ${challenge.reward.gems ? `<span>💎 ${challenge.reward.gems}</span>` : ''}
            </div>
        `;
        
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => notification.remove(), 5000);
    }
}

// 연속 학습 기록
class StreakCounter {
    constructor() {
        this.loadStreak();
    }
    
    loadStreak() {
        const saved = localStorage.getItem('studyStreak');
        this.streakData = saved ? JSON.parse(saved) : {
            currentStreak: 0,
            longestStreak: 0,
            lastStudyDate: null,
            streakRewards: []
        };
    }
    
    updateStreak() {
        const today = new Date().toDateString();
        const lastDate = this.streakData.lastStudyDate;
        
        if (lastDate === today) {
            return; // 오늘 이미 학습함
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayString = yesterday.toDateString();
        
        if (lastDate === yesterdayString) {
            // 연속 학습
            this.streakData.currentStreak++;
        } else {
            // 연속 학습 끊김
            this.streakData.currentStreak = 1;
        }
        
        // 최고 기록 업데이트
        if (this.streakData.currentStreak > this.streakData.longestStreak) {
            this.streakData.longestStreak = this.streakData.currentStreak;
        }
        
        this.streakData.lastStudyDate = today;
        
        // 연속 학습 보상
        this.checkStreakRewards();
        
        this.saveStreak();
    }
    
    checkStreakRewards() {
        const streak = this.streakData.currentStreak;
        const milestones = [3, 7, 14, 30, 60, 100, 365];
        
        milestones.forEach(milestone => {
            if (streak === milestone && !this.streakData.streakRewards.includes(milestone)) {
                this.streakData.streakRewards.push(milestone);
                this.giveStreakReward(milestone);
            }
        });
    }
    
    giveStreakReward(days) {
        const rewards = {
            3: { coins: 100, exp: 50, title: '성실한 학습자' },
            7: { coins: 300, exp: 150, gems: 10, title: '일주일 개근' },
            14: { coins: 700, exp: 350, gems: 25, title: '2주 마스터' },
            30: { coins: 1500, exp: 750, gems: 50, title: '한달 개근왕' },
            60: { coins: 3000, exp: 1500, gems: 100, title: '열정의 화신' },
            100: { coins: 5000, exp: 2500, gems: 200, title: '백일의 약속' },
            365: { coins: 20000, exp: 10000, gems: 1000, title: '일년의 전설' }
        };
        
        const reward = rewards[days];
        if (reward) {
            // 보상 지급 및 알림
            this.showStreakReward(days, reward);
        }
    }
    
    showStreakReward(days, reward) {
        const notification = document.createElement('div');
        notification.className = 'streak-reward-notification';
        notification.innerHTML = `
            <h2>🔥 ${days}일 연속 학습 달성! 🔥</h2>
            <div class="reward-details">
                ${reward.coins ? `<p>💰 ${reward.coins} 코인</p>` : ''}
                ${reward.exp ? `<p>⭐ ${reward.exp} 경험치</p>` : ''}
                ${reward.gems ? `<p>💎 ${reward.gems} 보석</p>` : ''}
                ${reward.title ? `<p>🏅 새 칭호: ${reward.title}</p>` : ''}
            </div>
        `;
        
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 10);
    }
    
    saveStreak() {
        localStorage.setItem('studyStreak', JSON.stringify(this.streakData));
    }
}

// 리더보드 시스템
class LeaderboardSystem {
    constructor() {
        this.leaderboards = {
            weekly: [],
            monthly: [],
            allTime: []
        };
    }
    
    async loadLeaderboard(type = 'weekly') {
        // GitHub Actions로 생성된 리더보드 데이터 로드
        try {
            const response = await fetch(`api/leaderboard-${type}.json`);
            const data = await response.json();
            this.leaderboards[type] = data;
            return data;
        } catch (error) {
            // 로컬 데이터로 폴백
            return this.generateMockLeaderboard(type);
        }
    }
    
    generateMockLeaderboard(type) {
        const names = [
            '화학천재', '분자마스터', '원소왕', '결합의달인', 
            '이온챔피언', '반응속도왕', 'pH마스터', '주기율표외우기왕'
        ];
        
        return names.map((name, index) => ({
            rank: index + 1,
            username: name + Math.floor(Math.random() * 100),
            score: Math.floor(Math.random() * 10000) * (10 - index),
            level: Math.floor(Math.random() * 50) + 20,
            achievements: Math.floor(Math.random() * 30) + 10
        }));
    }
    
    displayLeaderboard(container, type = 'weekly') {
        const leaderboard = this.leaderboards[type];
        
        container.innerHTML = `
            <div class="leaderboard">
                <div class="leaderboard-header">
                    <h3>${this.getLeaderboardTitle(type)}</h3>
                    <div class="leaderboard-tabs">
                        <button class="${type === 'weekly' ? 'active' : ''}" 
                                onclick="switchLeaderboard('weekly')">주간</button>
                        <button class="${type === 'monthly' ? 'active' : ''}" 
                                onclick="switchLeaderboard('monthly')">월간</button>
                        <button class="${type === 'allTime' ? 'active' : ''}" 
                                onclick="switchLeaderboard('allTime')">전체</button>
                    </div>
                </div>
                <div class="leaderboard-list">
                    ${leaderboard.map(player => this.renderLeaderboardEntry(player)).join('')}
                </div>
            </div>
        `;
    }
    
    renderLeaderboardEntry(player) {
        const medals = ['🥇', '🥈', '🥉'];
        const medal = medals[player.rank - 1] || '';
        
        return `
            <div class="leaderboard-entry ${player.rank <= 3 ? 'top-rank' : ''}">
                <span class="rank">${medal || player.rank}</span>
                <span class="username">${player.username}</span>
                <span class="level">Lv.${player.level}</span>
                <span class="score">${player.score.toLocaleString()}</span>
            </div>
        `;
    }
    
    getLeaderboardTitle(type) {
        const titles = {
            weekly: '주간 랭킹',
            monthly: '월간 랭킹',
            allTime: '전체 랭킹'
        };
        return titles[type] || '랭킹';
    }
}

// 게임 시스템 초기화
const gameSystem = new GameSystem();

// 전역 함수로 내보내기
window.gameSystem = gameSystem;
window.addGameExperience = (amount) => gameSystem.addExperience(amount);
window.addGameCoins = (amount) => gameSystem.addCoins(amount);
window.checkGameAchievements = () => gameSystem.achievements.checkAchievements(gameSystem.playerData);