// 화학 학습 프로그램 중복 문제 시뮬레이션 테스트

// problems.js 파일에서 문제 데이터와 함수들을 가져오기
const fs = require('fs');
const path = require('path');

// problems.js 파일 내용을 불러와서 평가
try {
    const problemsContent = fs.readFileSync(path.join(__dirname, 'problems.js'), 'utf8');
    
    // problemTemplates 객체 추출 (정규식 개선)
    const templateMatch = problemsContent.match(/const problemTemplates = ({[\s\S]*?^});/m);
    if (!templateMatch) {
        throw new Error('problemTemplates를 찾을 수 없습니다.');
    }
    
    // JSON 형태로 변환하기 위해 처리
    let templateString = templateMatch[1];
    
    // 간단한 eval을 위한 안전한 변환
    const problemTemplates = eval('(' + templateString + ')');
    
    console.log('🧪 화학 학습 프로그램 중복 문제 테스트 시작\n');
    
    // 1. 주제별 문제풀이 테스트
    console.log('='.repeat(60));
    console.log('📊 1. 주제별 문제풀이 테스트');
    console.log('='.repeat(60));
    
    function testTopicProblems(topic, count, difficulty = 'easy') {
        console.log(`\n🔍 "${topic}" 주제에서 ${count}문제 연속 생성 테스트 (${difficulty} 난이도)`);
        
        const generatedProblems = [];
        const duplicates = [];
        
        // 해당 주제의 실제 문제 개수 계산
        const templates = problemTemplates[difficulty];
        const topicMapping = {
            'covalent': ['covalent'],
            'ionic': ['ionic'], 
            'molecular': ['molecular'],
            'bonding': ['bonding'],
            'reactions': ['reactions'],
            'dailyChemistry': ['dailyChemistry']
        };
        
        const allowedCategories = topicMapping[topic] || [topic];
        const topicTemplates = templates.filter(t => allowedCategories.includes(t.category));
        const totalTopicQuestions = topicTemplates.reduce((sum, cat) => sum + cat.templates.length, 0);
        
        console.log(`   ├─ 사용 가능한 문제 수: ${totalTopicQuestions}개`);
        
        for (let i = 0; i < count; i++) {
            // 문제 생성 시뮬레이션
            const categoryIndex = Math.floor(Math.random() * topicTemplates.length);
            const category = topicTemplates[categoryIndex];
            const problemIndex = Math.floor(Math.random() * category.templates.length);
            const problemId = `${category.category}_${problemIndex}`;
            
            // 중복 체크
            const isDuplicate = generatedProblems.some(p => p.id === problemId);
            if (isDuplicate) {
                duplicates.push({
                    index: i + 1,
                    problemId: problemId,
                    question: category.templates[problemIndex].question.substring(0, 50) + '...'
                });
            }
            
            generatedProblems.push({
                id: problemId,
                question: category.templates[problemIndex].question,
                category: category.category
            });
        }
        
        console.log(`   ├─ 생성된 문제 수: ${generatedProblems.length}개`);
        console.log(`   ├─ 중복 문제 수: ${duplicates.length}개`);
        console.log(`   └─ 중복률: ${((duplicates.length / count) * 100).toFixed(1)}%`);
        
        if (duplicates.length > 0) {
            console.log('\n   🚨 발견된 중복 문제들:');
            duplicates.forEach(dup => {
                console.log(`     - ${dup.index}번째: [${dup.problemId}] ${dup.question}`);
            });
        } else {
            console.log('   ✅ 중복 문제 없음');
        }
        
        return {
            total: count,
            duplicates: duplicates.length,
            duplicateRate: (duplicates.length / count) * 100,
            availableQuestions: totalTopicQuestions
        };
    }
    
    // 공유결합 주제 테스트
    const covalentTest = testTopicProblems('covalent', 10, 'easy');
    
    // 이온화합물 주제 테스트
    const ionicTest = testTopicProblems('ionic', 10, 'easy');
    
    // 2. 난이도별 문제풀이 테스트
    console.log('\n' + '='.repeat(60));
    console.log('📊 2. 난이도별 문제풀이 테스트');
    console.log('='.repeat(60));
    
    function testDifficultyProblems(difficulty, count) {
        console.log(`\n🔍 ${difficulty.toUpperCase()} 난이도에서 ${count}문제 연속 생성 테스트`);
        
        const templates = problemTemplates[difficulty];
        const totalQuestions = templates.reduce((sum, category) => sum + category.templates.length, 0);
        
        console.log(`   ├─ 사용 가능한 문제 수: ${totalQuestions}개`);
        
        const generatedProblems = [];
        const duplicates = [];
        
        for (let i = 0; i < count; i++) {
            const categoryIndex = Math.floor(Math.random() * templates.length);
            const category = templates[categoryIndex];
            const problemIndex = Math.floor(Math.random() * category.templates.length);
            const problemId = `${category.category}_${problemIndex}`;
            
            const isDuplicate = generatedProblems.some(p => p.id === problemId);
            if (isDuplicate) {
                duplicates.push({
                    index: i + 1,
                    problemId: problemId,
                    question: category.templates[problemIndex].question.substring(0, 50) + '...'
                });
            }
            
            generatedProblems.push({
                id: problemId,
                question: category.templates[problemIndex].question,
                category: category.category
            });
        }
        
        console.log(`   ├─ 생성된 문제 수: ${generatedProblems.length}개`);
        console.log(`   ├─ 중복 문제 수: ${duplicates.length}개`);
        console.log(`   └─ 중복률: ${((duplicates.length / count) * 100).toFixed(1)}%`);
        
        if (duplicates.length > 0) {
            console.log('\n   🚨 발견된 중복 문제들:');
            duplicates.slice(0, 5).forEach(dup => {
                console.log(`     - ${dup.index}번째: [${dup.problemId}] ${dup.question}`);
            });
            if (duplicates.length > 5) {
                console.log(`     ... 및 ${duplicates.length - 5}개 더`);
            }
        } else {
            console.log('   ✅ 중복 문제 없음');
        }
        
        return {
            total: count,
            duplicates: duplicates.length,
            duplicateRate: (duplicates.length / count) * 100,
            availableQuestions: totalQuestions
        };
    }
    
    const easyTest = testDifficultyProblems('easy', 20);
    const mediumTest = testDifficultyProblems('medium', 15);
    const hardTest = testDifficultyProblems('hard', 15);
    
    // 3. 문제 데이터 유효성 검증
    console.log('\n' + '='.repeat(60));
    console.log('📊 3. 문제 데이터 유효성 검증');
    console.log('='.repeat(60));
    
    function validateProblemData() {
        let totalProblems = 0;
        let invalidProblems = [];
        
        ['easy', 'medium', 'hard'].forEach(difficulty => {
            const templates = problemTemplates[difficulty];
            
            templates.forEach((category, catIndex) => {
                category.templates.forEach((problem, probIndex) => {
                    totalProblems++;
                    const problemId = `${difficulty}_${category.category}_${probIndex}`;
                    
                    // 필수 필드 검증
                    const requiredFields = ['question', 'explanation'];
                    const missingFields = requiredFields.filter(field => !problem[field]);
                    
                    // 객관식 문제 특별 검증
                    if (problem.type === 'multiple-choice') {
                        if (!problem.options || !Array.isArray(problem.options)) {
                            missingFields.push('options (배열)');
                        } else if (problem.options.length < 2) {
                            missingFields.push('options (최소 2개)');
                        }
                        
                        if (typeof problem.correctIndex !== 'number') {
                            missingFields.push('correctIndex (숫자)');
                        } else if (problem.options && (problem.correctIndex < 0 || problem.correctIndex >= problem.options.length)) {
                            missingFields.push('correctIndex (유효범위)');
                        }
                    }
                    
                    if (missingFields.length > 0) {
                        invalidProblems.push({
                            id: problemId,
                            question: problem.question?.substring(0, 50) + '...' || '제목 없음',
                            missingFields: missingFields
                        });
                    }
                });
            });
        });
        
        console.log(`\n🔍 총 문제 수: ${totalProblems}개`);
        console.log(`   ├─ 유효한 문제: ${totalProblems - invalidProblems.length}개`);
        console.log(`   ├─ 무효한 문제: ${invalidProblems.length}개`);
        console.log(`   └─ 유효성 비율: ${(((totalProblems - invalidProblems.length) / totalProblems) * 100).toFixed(1)}%`);
        
        if (invalidProblems.length > 0) {
            console.log('\n   🚨 문제가 있는 데이터:');
            invalidProblems.slice(0, 10).forEach(prob => {
                console.log(`     - [${prob.id}] ${prob.question}`);
                console.log(`       누락 필드: ${prob.missingFields.join(', ')}`);
            });
            if (invalidProblems.length > 10) {
                console.log(`     ... 및 ${invalidProblems.length - 10}개 더`);
            }
        } else {
            console.log('   ✅ 모든 문제가 유효함');
        }
        
        return {
            total: totalProblems,
            valid: totalProblems - invalidProblems.length,
            invalid: invalidProblems.length,
            validityRate: ((totalProblems - invalidProblems.length) / totalProblems) * 100
        };
    }
    
    const validationResult = validateProblemData();
    
    // 4. 중복 방지 알고리즘 효과성 테스트
    console.log('\n' + '='.repeat(60));
    console.log('📊 4. 중복 방지 알고리즘 효과성 분석');
    console.log('='.repeat(60));
    
    function analyzeDuplicationPrevention() {
        console.log('\n🔍 현재 중복 방지 메커니즘:');
        console.log('   ├─ usedProblems Set으로 사용된 문제 추적');
        console.log('   ├─ usedTopicProblems Map으로 주제별 문제 추적'); 
        console.log('   ├─ 모든 문제 사용 시 Set 초기화');
        console.log('   └─ 최대 시도 횟수 제한 (30-50회)');
        
        console.log('\n📊 문제 풀 분석:');
        ['easy', 'medium', 'hard'].forEach(difficulty => {
            const templates = problemTemplates[difficulty];
            const totalQuestions = templates.reduce((sum, category) => sum + category.templates.length, 0);
            
            const categoryBreakdown = templates.map(cat => ({
                category: cat.category,
                count: cat.templates.length
            }));
            
            console.log(`\n   ${difficulty.toUpperCase()} 난이도:`);
            console.log(`   ├─ 총 문제 수: ${totalQuestions}개`);
            categoryBreakdown.forEach(cat => {
                console.log(`   ├─ ${cat.category}: ${cat.count}개`);
            });
            
            // 예상 중복률 계산 (생일 문제 공식 근사)
            const expectedDuplicateRate = totalQuestions > 0 ? 
                Math.min(100, (Math.pow(20, 2) / (2 * totalQuestions)) * 100) : 0;
            console.log(`   └─ 20문제 연속 시 예상 중복률: ${expectedDuplicateRate.toFixed(1)}%`);
        });
    }
    
    analyzeDuplicationPrevention();
    
    // 5. 종합 분석 및 개선 방안
    console.log('\n' + '='.repeat(60));
    console.log('📊 5. 종합 분석 및 개선 방안');
    console.log('='.repeat(60));
    
    console.log('\n🎯 테스트 결과 요약:');
    console.log(`   ├─ 공유결합 주제 중복률: ${covalentTest.duplicateRate.toFixed(1)}%`);
    console.log(`   ├─ 이온화합물 주제 중복률: ${ionicTest.duplicateRate.toFixed(1)}%`);
    console.log(`   ├─ Easy 난이도 중복률: ${easyTest.duplicateRate.toFixed(1)}%`);
    console.log(`   ├─ Medium 난이도 중복률: ${mediumTest.duplicateRate.toFixed(1)}%`);
    console.log(`   ├─ Hard 난이도 중복률: ${hardTest.duplicateRate.toFixed(1)}%`);
    console.log(`   └─ 데이터 유효성: ${validationResult.validityRate.toFixed(1)}%`);
    
    console.log('\n🔧 발견된 문제점:');
    const issues = [];
    
    if (covalentTest.duplicateRate > 10) issues.push('공유결합 주제의 높은 중복률');
    if (ionicTest.duplicateRate > 10) issues.push('이온화합물 주제의 높은 중복률');
    if (easyTest.duplicateRate > 15) issues.push('Easy 난이도의 높은 중복률');
    if (mediumTest.duplicateRate > 15) issues.push('Medium 난이도의 높은 중복률');
    if (hardTest.duplicateRate > 15) issues.push('Hard 난이도의 높은 중복률');
    if (validationResult.validityRate < 95) issues.push('문제 데이터 무결성 이슈');
    
    if (issues.length > 0) {
        issues.forEach((issue, index) => {
            console.log(`   ${index + 1}. ${issue}`);
        });
    } else {
        console.log('   ✅ 주요 문제점 발견되지 않음');
    }
    
    console.log('\n💡 개선 방안:');
    console.log('   1. 문제 풀 확장: 각 주제별 최소 20-30개 문제 확보');
    console.log('   2. 동적 문제 생성: 매개변수를 변경한 유사 문제 생성');
    console.log('   3. 가중치 기반 선택: 덜 사용된 문제에 높은 확률 부여');
    console.log('   4. 세션별 추적: 사용자 세션별로 중복 방지 관리');
    console.log('   5. 난이도 적응: 사용자 실력에 따른 동적 난이도 조절');
    console.log('   6. 문제 유형 다양화: 객관식 외 다양한 문제 유형 추가');
    
    console.log('\n✅ 테스트 완료!');
    
} catch (error) {
    console.error('❌ 테스트 실행 중 오류 발생:', error.message);
    console.error('스택 트레이스:', error.stack);
}