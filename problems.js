// 문제 생성기
const problemTemplates = {
    easy: [
        {
            category: 'covalent',
            templates: [
                {
                    question: "물(H₂O) 분자에서 수소와 산소는 어떤 결합으로 연결되어 있나요?",
                    type: "multiple-choice",
                    options: ["공유결합", "이온결합", "금속결합", "수소결합"],
                    correctIndex: 0,
                    explanation: "물 분자에서 수소와 산소는 전자를 공유하는 공유결합으로 연결되어 있습니다.",
                    hint: "원자들이 전자를 공유하는 결합을 생각해보세요."
                },
                {
                    question: "다음 중 공유결합 물질은 무엇인가요?",
                    type: "multiple-choice",
                    options: ["소금(NaCl)", "이산화탄소(CO₂)", "철(Fe)", "구리(Cu)"],
                    correctIndex: 1,
                    explanation: "이산화탄소는 탄소와 산소가 전자를 공유하는 공유결합 물질입니다.",
                    hint: "비금속 원소들로 이루어진 물질을 찾아보세요."
                }
            ]
        },
        {
            category: 'ionic',
            templates: [
                {
                    question: "소금(NaCl)은 어떤 종류의 화합물인가요?",
                    type: "multiple-choice",
                    options: ["공유결합 화합물", "이온화합물", "금속", "혼합물"],
                    correctIndex: 1,
                    explanation: "소금은 나트륨 양이온(Na⁺)과 염소 음이온(Cl⁻)이 정전기적 인력으로 결합한 이온화합물입니다.",
                    hint: "금속과 비금속이 만나면 어떤 결합을 하나요?"
                },
                {
                    question: "이온화합물의 특징이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["높은 녹는점", "전기 전도성(용융 상태)", "물에 잘 녹음", "상온에서 기체"],
                    correctIndex: 3,
                    explanation: "이온화합물은 일반적으로 상온에서 고체 상태입니다.",
                    hint: "소금이나 설탕의 상태를 생각해보세요."
                }
            ]
        }
    ],
    
    medium: [
        {
            category: 'covalent',
            templates: [
                {
                    question: "메탄(CH₄) 분자의 구조는 어떤 모양인가요?",
                    type: "multiple-choice",
                    options: ["직선형", "평면 삼각형", "정사면체", "팔면체"],
                    correctIndex: 2,
                    explanation: "메탄은 탄소 원자를 중심으로 4개의 수소가 정사면체 모양으로 배치됩니다.",
                    hint: "탄소는 4개의 결합을 만들 수 있습니다."
                },
                {
                    question: "이중결합을 포함하는 분자는?",
                    type: "multiple-choice",
                    options: ["H₂O", "CO₂", "CH₄", "NH₃"],
                    correctIndex: 1,
                    explanation: "이산화탄소(CO₂)는 O=C=O 구조로 탄소와 산소 사이에 이중결합을 가집니다.",
                    hint: "탄소가 산소 두 개와 결합하는 방법을 생각해보세요."
                }
            ]
        },
        {
            category: 'bonding',
            templates: [
                {
                    question: "다음 중 가장 강한 결합은?",
                    type: "multiple-choice",
                    options: ["C-C 단일결합", "C=C 이중결합", "C≡C 삼중결합", "C-H 결합"],
                    correctIndex: 2,
                    explanation: "삼중결합은 가장 많은 전자를 공유하므로 가장 강한 결합입니다.",
                    hint: "공유하는 전자쌍이 많을수록 결합이 강해집니다."
                },
                {
                    question: "결합 에너지가 가장 큰 것은?",
                    type: "multiple-choice",
                    options: ["H-H", "H-F", "H-Cl", "H-Br"],
                    correctIndex: 1,
                    explanation: "H-F 결합은 전기음성도 차이가 크고 원자 크기가 작아 가장 강한 결합입니다.",
                    hint: "플루오린(F)은 가장 전기음성도가 큰 원소입니다."
                }
            ]
        }
    ],
    
    hard: [
        {
            category: 'molecular',
            templates: [
                {
                    question: "NH₃ 분자의 결합각이 109.5°보다 작은 이유는?",
                    type: "short-answer",
                    keywords: ["비공유", "전자쌍", "반발"],
                    answer: "비공유 전자쌍의 반발력이 공유 전자쌍보다 크기 때문",
                    explanation: "암모니아의 질소 원자에는 비공유 전자쌍이 있어 공유 전자쌍을 더 강하게 밀어내므로 결합각이 줄어듭니다.",
                    hint: "질소 원자의 전자 배치를 생각해보세요."
                }
            ]
        },
        {
            category: 'bonding',
            templates: [
                {
                    question: "벤젠(C₆H₆)의 탄소-탄소 결합은 단일결합과 이중결합의 중간 성질을 가집니다. 이를 설명하는 개념은?",
                    type: "fill-blank",
                    answer: "공명",
                    explanation: "벤젠은 공명 구조로 인해 모든 C-C 결합이 동일한 길이와 세기를 가집니다.",
                    hint: "전자가 여러 위치에 분포할 수 있는 현상"
                }
            ]
        }
    ]
};

// 문제 생성 함수
function generateProblem(difficulty) {
    const templates = problemTemplates[difficulty];
    const categoryIndex = Math.floor(Math.random() * templates.length);
    const category = templates[categoryIndex];
    const problemIndex = Math.floor(Math.random() * category.templates.length);
    const problem = { ...category.templates[problemIndex] };
    
    // 동적 요소 추가
    problem.points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30;
    problem.id = Date.now();
    
    // 선택지 섞기 (객관식인 경우)
    if (problem.type === 'multiple-choice') {
        problem = shuffleOptions(problem);
    }
    
    return problem;
}

// 선택지 섞기
function shuffleOptions(problem) {
    const correctAnswer = problem.options[problem.correctIndex];
    const shuffled = [...problem.options].sort(() => Math.random() - 0.5);
    problem.options = shuffled;
    problem.correctIndex = shuffled.indexOf(correctAnswer);
    return problem;
}

// 특정 주제의 문제 생성
function generateTopicProblem(topic, difficulty) {
    const templates = problemTemplates[difficulty];
    const topicTemplates = templates.filter(t => t.category === topic);
    
    if (topicTemplates.length === 0) {
        return generateProblem(difficulty); // 폴백
    }
    
    const template = topicTemplates[0];
    const problemIndex = Math.floor(Math.random() * template.templates.length);
    return { ...template.templates[problemIndex] };
}

// 문제 풀이 통계
const problemStats = {
    byCategory: {
        covalent: { attempted: 0, correct: 0 },
        ionic: { attempted: 0, correct: 0 },
        molecular: { attempted: 0, correct: 0 },
        bonding: { attempted: 0, correct: 0 }
    },
    
    updateStats(category, isCorrect) {
        this.byCategory[category].attempted++;
        if (isCorrect) {
            this.byCategory[category].correct++;
        }
    },
    
    getAccuracy(category) {
        const stats = this.byCategory[category];
        if (stats.attempted === 0) return 0;
        return Math.round((stats.correct / stats.attempted) * 100);
    }
};

// 추가 문제 템플릿 (동적 생성용)
const dynamicProblemGenerators = {
    // 화학식 문제 생성기
    formulaProblem() {
        const compounds = [
            { formula: "H₂O", name: "물", type: "covalent" },
            { formula: "CO₂", name: "이산화탄소", type: "covalent" },
            { formula: "NH₃", name: "암모니아", type: "covalent" },
            { formula: "CH₄", name: "메탄", type: "covalent" },
            { formula: "NaCl", name: "염화나트륨", type: "ionic" },
            { formula: "CaCO₃", name: "탄산칼슘", type: "ionic" },
            { formula: "MgO", name: "산화마그네슘", type: "ionic" }
        ];
        
        const compound = compounds[Math.floor(Math.random() * compounds.length)];
        
        return {
            question: `${compound.name}의 화학식은 무엇인가요?`,
            type: "fill-blank",
            answer: compound.formula.replace(/[₀-₉]/g, match => String.fromCharCode(match.charCodeAt(0) - 0x2050)),
            explanation: `${compound.name}의 올바른 화학식은 ${compound.formula}입니다.`,
            category: compound.type,
            hint: compound.type === "ionic" ? "금속과 비금속의 조합입니다." : "비금속 원소들의 조합입니다."
        };
    },
    
    // 전자 배치 문제 생성기
    electronProblem() {
        const elements = [
            { symbol: "H", electrons: 1, shells: "1" },
            { symbol: "C", electrons: 6, shells: "2,4" },
            { symbol: "N", electrons: 7, shells: "2,5" },
            { symbol: "O", electrons: 8, shells: "2,6" },
            { symbol: "F", electrons: 9, shells: "2,7" },
            { symbol: "Na", electrons: 11, shells: "2,8,1" },
            { symbol: "Cl", electrons: 17, shells: "2,8,7" }
        ];
        
        const element = elements[Math.floor(Math.random() * elements.length)];
        
        return {
            question: `${element.symbol} 원자의 전자 배치는?`,
            type: "multiple-choice",
            options: generateElectronOptions(element.shells),
            correctIndex: 0,
            explanation: `${element.symbol} 원자는 ${element.electrons}개의 전자를 가지며, ${element.shells} 배치를 가집니다.`,
            category: "atomic",
            hint: `총 ${element.electrons}개의 전자를 가집니다.`
        };
    }
};

// 전자 배치 선택지 생성
function generateElectronOptions(correct) {
    const options = [correct];
    const variations = ["2,8,8", "2,6", "2,8,2", "2,8,5", "2,4,1"];
    
    while (options.length < 4) {
        const variation = variations[Math.floor(Math.random() * variations.length)];
        if (!options.includes(variation)) {
            options.push(variation);
        }
    }
    
    return options.sort(() => Math.random() - 0.5);
}