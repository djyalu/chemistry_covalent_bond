// 화학 학습 프로그램 테스트 분석 스크립트

// problems.js 로드 (Node.js 환경용)
const fs = require('fs');

// problems.js 파일 내용을 읽고 평가
const problemsContent = fs.readFileSync('./problems.js', 'utf8');

// problemTemplates 객체 추출
const templateStart = problemsContent.indexOf('const problemTemplates = {');
const templateEnd = problemsContent.indexOf('};', templateStart) + 2;
const templateCode = problemsContent.substring(templateStart, templateEnd);

// 템플릿 객체를 안전하게 추출
let problemTemplates;
try {
    eval(templateCode);
} catch (error) {
    console.error('문제 템플릿 로드 실패:', error);
    process.exit(1);
}

console.log('=== 화학 학습 프로그램 문제풀이 시스템 종합 테스트 ===\n');

// 1. 데이터 구조 분석
function analyzeDataStructure() {
    const analysis = {
        totalQuestions: 0,
        difficulties: Object.keys(problemTemplates),
        categories: new Set(),
        questionTypes: new Set(),
        byDifficulty: {},
        byCategory: {},
        validationErrors: []
    };

    analysis.difficulties.forEach(difficulty => {
        let difficultyCount = 0;
        analysis.byDifficulty[difficulty] = {};

        if (!problemTemplates[difficulty] || !Array.isArray(problemTemplates[difficulty])) {
            analysis.validationErrors.push(`${difficulty} 난이도 데이터가 올바르지 않습니다.`);
            return;
        }

        problemTemplates[difficulty].forEach((category, catIndex) => {
            if (!category.category || !category.templates) {
                analysis.validationErrors.push(`${difficulty}[${catIndex}] 카테고리 구조가 올바르지 않습니다.`);
                return;
            }

            const categoryName = category.category;
            analysis.categories.add(categoryName);
            
            const questionCount = category.templates.length;
            difficultyCount += questionCount;
            analysis.totalQuestions += questionCount;
            
            analysis.byDifficulty[difficulty][categoryName] = questionCount;
            analysis.byCategory[categoryName] = (analysis.byCategory[categoryName] || 0) + questionCount;

            category.templates.forEach((template, templateIndex) => {
                if (template.type) {
                    analysis.questionTypes.add(template.type);
                }
                
                // 문제 유효성 검사
                const validation = validateQuestion(template, `${difficulty}_${categoryName}_${templateIndex}`);
                if (!validation.isValid) {
                    analysis.validationErrors.push(`${difficulty}.${categoryName}[${templateIndex}]: ${validation.errors.join(', ')}`);
                }
            });
        });
    });

    return analysis;
}

// 2. 개별 문제 유효성 검증
function validateQuestion(question, questionId) {
    const errors = [];

    // 필수 필드 검증
    if (!question.question || question.question.trim() === '') {
        errors.push('문제 텍스트가 없습니다');
    }

    if (!question.type) {
        errors.push('문제 유형이 지정되지 않았습니다');
    }

    if (!question.explanation) {
        errors.push('설명이 없습니다');
    }

    // 타입별 검증
    if (question.type === 'multiple-choice') {
        if (!question.options || !Array.isArray(question.options)) {
            errors.push('객관식 선택지가 없습니다');
        } else {
            if (question.options.length < 2) {
                errors.push('선택지가 2개 미만입니다');
            }
            
            if (question.correctIndex === undefined || 
                question.correctIndex < 0 || 
                question.correctIndex >= question.options.length) {
                errors.push('정답 인덱스가 유효하지 않습니다');
            }
        }
    }

    if (question.type === 'short-answer') {
        if (!question.keywords && !question.answer) {
            errors.push('단답형 문제에 키워드나 정답이 없습니다');
        }
    }

    if (question.type === 'matching') {
        if (!question.pairs || !Array.isArray(question.pairs)) {
            errors.push('매칭 문제에 pairs 배열이 없습니다');
        }
    }

    if (question.type === 'sequence') {
        if (!question.steps || !Array.isArray(question.steps)) {
            errors.push('순서배열 문제에 steps 배열이 없습니다');
        }
        if (!question.correctOrder || !Array.isArray(question.correctOrder)) {
            errors.push('순서배열 문제에 correctOrder 배열이 없습니다');
        }
    }

    // 내용 검증
    if (question.question && question.question.length > 1000) {
        errors.push('문제 텍스트가 너무 깁니다 (1000자 초과)');
    }

    if (question.explanation && question.explanation.length > 2000) {
        errors.push('설명이 너무 깁니다 (2000자 초과)');
    }

    // 화학 내용 검증
    if (question.question) {
        // 잘못된 화학식 검사
        const chemicalFormulas = question.question.match(/[A-Z][a-z]?[₀-₉]*/g);
        if (chemicalFormulas) {
            chemicalFormulas.forEach(formula => {
                if (formula.includes('₀') && formula.length === 2) {
                    errors.push(`잘못된 화학식: ${formula}`);
                }
            });
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

// 3. 중복 방지 시스템 테스트
function testDuplicatePrevention() {
    console.log('🔍 중복 방지 시스템 테스트');
    
    // 함수 존재 여부 확인
    const functions = [
        'generateProblem', 'generateUniqueQuestion', 'generateTopicProblem',
        'shuffleOptions', 'resetUsedProblems'
    ];
    
    console.log('   필수 함수 존재 여부:');
    functions.forEach(funcName => {
        const exists = problemsContent.includes(`function ${funcName}`) || 
                      problemsContent.includes(`${funcName} =`) ||
                      problemsContent.includes(`window.${funcName}`);
        console.log(`   • ${funcName}: ${exists ? '✓' : '✗'}`);
    });
    
    // 중복 방지 로직 확인
    const hasUsedProblems = problemsContent.includes('usedProblems');
    const hasUsedTopicProblems = problemsContent.includes('usedTopicProblems');
    const hasUniqueCheck = problemsContent.includes('has(problemId)');
    
    console.log('   중복 방지 메커니즘:');
    console.log(`   • 사용된 문제 추적: ${hasUsedProblems ? '✓' : '✗'}`);
    console.log(`   • 주제별 문제 추적: ${hasUsedTopicProblems ? '✓' : '✗'}`);
    console.log(`   • 중복 검사 로직: ${hasUniqueCheck ? '✓' : '✗'}`);
    
    return {
        functionsExist: functions.every(f => problemsContent.includes(f)),
        duplicatePreventionExists: hasUsedProblems && hasUniqueCheck
    };
}

// 4. 주제별 매핑 검증
function validateTopicMapping() {
    console.log('🎯 주제별 매핑 검증');
    
    const expectedTopics = ['covalent', 'ionic', 'molecular', 'bonding', 'reactions', 'dailyChemistry'];
    const availableCategories = Array.from(analyzeDataStructure().categories);
    
    console.log('   예상 주제와 실제 카테고리 매핑:');
    expectedTopics.forEach(topic => {
        const hasCategory = availableCategories.includes(topic);
        console.log(`   • ${topic}: ${hasCategory ? '✓' : '✗'}`);
        if (!hasCategory) {
            console.log(`     → 대체 가능한 카테고리: ${availableCategories.filter(c => c.includes(topic.substring(0, 4))).join(', ') || '없음'}`);
        }
    });
    
    return {
        mappingComplete: expectedTopics.every(topic => availableCategories.includes(topic)),
        missingTopics: expectedTopics.filter(topic => !availableCategories.includes(topic))
    };
}

// 5. 문제 품질 분석
function analyzeQuestionQuality() {
    console.log('📋 문제 품질 분석');
    
    const analysis = analyzeDataStructure();
    const qualityMetrics = {
        averageQuestionsPerCategory: 0,
        balanceScore: 0,
        diversityScore: 0,
        validityScore: 0
    };
    
    // 카테고리별 균형성 분석
    const categoryQuestions = Object.values(analysis.byCategory);
    const avgQuestions = categoryQuestions.reduce((a, b) => a + b, 0) / categoryQuestions.length;
    const variance = categoryQuestions.reduce((sum, count) => sum + Math.pow(count - avgQuestions, 2), 0) / categoryQuestions.length;
    const standardDeviation = Math.sqrt(variance);
    
    qualityMetrics.averageQuestionsPerCategory = Math.round(avgQuestions * 10) / 10;
    qualityMetrics.balanceScore = Math.max(0, 100 - (standardDeviation / avgQuestions * 100));
    
    // 다양성 점수 (문제 유형 수)
    qualityMetrics.diversityScore = Math.min(100, analysis.questionTypes.size * 10);
    
    // 유효성 점수
    const totalQuestions = analysis.totalQuestions;
    const errorCount = analysis.validationErrors.length;
    qualityMetrics.validityScore = Math.max(0, 100 - (errorCount / totalQuestions * 100));
    
    console.log(`   • 카테고리별 평균 문제 수: ${qualityMetrics.averageQuestionsPerCategory}개`);
    console.log(`   • 균형성 점수: ${Math.round(qualityMetrics.balanceScore)}점/100점`);
    console.log(`   • 다양성 점수: ${Math.round(qualityMetrics.diversityScore)}점/100점`);
    console.log(`   • 유효성 점수: ${Math.round(qualityMetrics.validityScore)}점/100점`);
    
    return qualityMetrics;
}

// 메인 분석 실행
function runCompleteAnalysis() {
    console.log('📊 데이터 구조 분석');
    const dataAnalysis = analyzeDataStructure();
    
    console.log(`   • 총 문제 수: ${dataAnalysis.totalQuestions}개`);
    console.log(`   • 난이도 레벨: ${dataAnalysis.difficulties.length}개`);
    console.log(`   • 카테고리 수: ${dataAnalysis.categories.size}개`);
    console.log(`   • 문제 유형 수: ${dataAnalysis.questionTypes.size}개`);
    console.log(`   • 유효성 오류: ${dataAnalysis.validationErrors.length}개`);
    console.log();
    
    if (dataAnalysis.validationErrors.length > 0) {
        console.log('❌ 발견된 유효성 오류:');
        dataAnalysis.validationErrors.forEach(error => {
            console.log(`   • ${error}`);
        });
        console.log();
    }
    
    const duplicateTest = testDuplicatePrevention();
    console.log();
    
    const mappingTest = validateTopicMapping();
    console.log();
    
    const qualityAnalysis = analyzeQuestionQuality();
    console.log();
    
    // 종합 점수 계산
    const overallScore = [
        dataAnalysis.validationErrors.length === 0 ? 100 : Math.max(0, 100 - dataAnalysis.validationErrors.length * 5),
        duplicateTest.duplicatePreventionExists ? 100 : 50,
        mappingTest.mappingComplete ? 100 : Math.max(0, 100 - mappingTest.missingTopics.length * 20),
        (qualityAnalysis.balanceScore + qualityAnalysis.diversityScore + qualityAnalysis.validityScore) / 3
    ].reduce((a, b) => a + b, 0) / 4;
    
    console.log('🏆 종합 평가');
    console.log(`   • 전체 시스템 점수: ${Math.round(overallScore)}점/100점`);
    
    if (overallScore >= 90) {
        console.log('   • 평가: 매우 우수 ⭐⭐⭐⭐⭐');
    } else if (overallScore >= 80) {
        console.log('   • 평가: 우수 ⭐⭐⭐⭐');
    } else if (overallScore >= 70) {
        console.log('   • 평가: 양호 ⭐⭐⭐');
    } else if (overallScore >= 60) {
        console.log('   • 평가: 보통 ⭐⭐');
    } else {
        console.log('   • 평가: 개선 필요 ⭐');
    }
    
    console.log();
    generateRecommendations(dataAnalysis, duplicateTest, mappingTest, qualityAnalysis);
}

// 개선 권장사항 생성
function generateRecommendations(dataAnalysis, duplicateTest, mappingTest, qualityAnalysis) {
    console.log('💡 개선 권장사항');
    
    const recommendations = [];
    
    if (dataAnalysis.validationErrors.length > 0) {
        recommendations.push({
            priority: 'HIGH',
            category: '문제 품질',
            issue: `${dataAnalysis.validationErrors.length}개 문제에서 유효성 오류 발견`,
            action: '문제 데이터 검증 및 수정 필요'
        });
    }
    
    if (!duplicateTest.duplicatePreventionExists) {
        recommendations.push({
            priority: 'HIGH',
            category: '중복 방지',
            issue: '중복 방지 시스템이 완전하지 않음',
            action: '중복 방지 알고리즘 강화 필요'
        });
    }
    
    if (!mappingTest.mappingComplete) {
        recommendations.push({
            priority: 'MEDIUM',
            category: '주제 매핑',
            issue: `${mappingTest.missingTopics.length}개 주제의 매핑이 누락됨`,
            action: `누락된 주제 추가: ${mappingTest.missingTopics.join(', ')}`
        });
    }
    
    if (qualityAnalysis.balanceScore < 80) {
        recommendations.push({
            priority: 'MEDIUM',
            category: '문제 분포',
            issue: '카테고리별 문제 수가 불균형함',
            action: '문제 수가 적은 카테고리에 문제 추가'
        });
    }
    
    if (qualityAnalysis.diversityScore < 70) {
        recommendations.push({
            priority: 'LOW',
            category: '문제 다양성',
            issue: '문제 유형의 다양성이 부족함',
            action: '새로운 문제 유형 추가 (드래그앤드롭, 시뮬레이션 등)'
        });
    }
    
    // 추가 일반 권장사항
    recommendations.push({
        priority: 'LOW',
        category: '사용자 경험',
        issue: '학습 효과 증진',
        action: '문제별 맞춤형 피드백 및 시각적 설명 강화'
    });
    
    if (recommendations.length === 0) {
        console.log('   🎉 모든 검사를 통과했습니다! 추가 개선사항이 없습니다.');
    } else {
        recommendations.forEach((rec, index) => {
            console.log(`   ${index + 1}. [${rec.priority}] ${rec.category}`);
            console.log(`      문제: ${rec.issue}`);
            console.log(`      권장사항: ${rec.action}`);
            console.log();
        });
    }
}

// 분석 실행
runCompleteAnalysis();