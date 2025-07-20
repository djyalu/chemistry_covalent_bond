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
                    hint: "소금의 상태를 생각해보세요."
                }
            ]
        },
        {
            category: 'bonding',
            templates: [
                {
                    question: "다음 중 가장 강한 결합은?",
                    type: "multiple-choice",
                    options: ["단일결합", "이중결합", "삼중결합", "수소결합"],
                    correctIndex: 2,
                    explanation: "삼중결합은 가장 많은 전자쌍을 공유하므로 가장 강한 결합입니다.",
                    hint: "공유하는 전자쌍의 개수를 생각해보세요."
                },
                {
                    question: "수소 분자(H₂)는 몇 개의 전자를 공유하나요?",
                    type: "multiple-choice",
                    options: ["1개", "2개", "3개", "4개"],
                    correctIndex: 1,
                    explanation: "수소 분자는 단일결합으로 2개의 전자를 공유합니다.",
                    hint: "단일결합에서 공유하는 전자 개수를 생각해보세요."
                }
            ]
        },
        {
            category: 'basic-concepts',
            templates: [
                {
                    question: "원자가 전자는 어디에 위치하나요?",
                    type: "multiple-choice",
                    options: ["내부 전자껍질", "가장 바깥 전자껍질", "원자핵", "모든 전자껍질"],
                    correctIndex: 1,
                    explanation: "원자가 전자는 가장 바깥 전자껍질에 위치하며 화학 결합에 참여합니다.",
                    hint: "화학 결합에 참여하는 전자를 생각해보세요."
                },
                {
                    question: "옥텟 규칙이란?",
                    type: "multiple-choice",
                    options: ["8개의 원자가 결합", "8개의 원자가 전자", "8개의 핵", "8개의 분자"],
                    correctIndex: 1,
                    explanation: "옥텟 규칙은 원자가 안정해지기 위해 8개의 원자가 전자를 갖으려 한다는 규칙입니다.",
                    hint: "안정한 전자 배치 상태를 생각해보세요."
                },
                {
                    question: "전기음성도가 가장 큰 원소는?",
                    type: "multiple-choice",
                    options: ["산소", "질소", "플루오린", "염소"],
                    correctIndex: 2,
                    explanation: "플루오린(F)은 전기음성도가 4.0으로 가장 큰 원소입니다.",
                    hint: "주기율표에서 오른쪽 위에 있는 원소일수록 전기음성도가 큽니다."
                },
                {
                    question: "H₂ 분자의 결합 차수는?",
                    type: "multiple-choice",
                    options: ["0", "1", "2", "3"],
                    correctIndex: 1,
                    explanation: "H₂는 2개의 결합 전자와 0개의 반결합 전자를 가져 결합 차수는 (2-0)/2 = 1입니다.",
                    hint: "수소는 각각 1개의 전자를 제공합니다."
                },
                {
                    question: "다음 중 극성 분자는?",
                    type: "multiple-choice",
                    options: ["CO₂", "CH₄", "H₂O", "N₂"],
                    correctIndex: 2,
                    explanation: "물(H₂O)은 굽은 구조로 인해 극성을 띠는 분자입니다.",
                    hint: "분자의 모양과 전기음성도 차이를 고려해보세요."
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
                },
                {
                    question: "다음 중 결합 에너지가 가장 큰 것은? (단위: kJ/mol)",
                    type: "multiple-choice",
                    options: ["N-N (160)", "N=N (410)", "N≡N (942)", "O=O (495)"],
                    correctIndex: 2,
                    explanation: "질소의 삼중결합(942 kJ/mol)이 가장 강한 결합입니다.",
                    hint: "결합 차수가 높을수록 결합이 강합니다."
                }
            ]
        },
        {
            category: 'bonding',
            templates: [
                {
                    question: "결합 에너지가 클수록 결합 길이는?",
                    type: "multiple-choice",
                    options: ["길어진다", "짧아진다", "변하지 않는다", "무관하다"],
                    correctIndex: 1,
                    explanation: "결합 에너지가 클수록 원자들이 더 강하게 끌어당겨져 결합 길이가 짧아집니다.",
                    hint: "강한 결합일수록 원자들이 더 가까이 있습니다."
                },
                {
                    question: "이중결합(C=C)과 단일결합(C-C) 중 어느 것이 더 강한가요?",
                    type: "multiple-choice",
                    options: ["단일결합", "이중결합", "같다", "조건에 따라 다름"],
                    correctIndex: 1,
                    explanation: "이중결합은 더 많은 전자를 공유하므로 단일결합보다 강합니다.",
                    hint: "공유하는 전자의 개수를 비교해보세요."
                },
                {
                    question: "물 분자에서 O-H 결합은 어떤 종류의 결합인가요?",
                    type: "multiple-choice",
                    options: ["이온결합", "공유결합", "금속결합", "수소결합"],
                    correctIndex: 1,
                    explanation: "물 분자 내의 O-H는 산소와 수소가 전자를 공유하는 공유결합입니다.",
                    hint: "같은 분자 내의 원자들 사이의 결합을 생각해보세요."
                }
            ]
        },
        {
            category: 'advanced-concepts',
            templates: [
                {
                    question: "공명 구조를 가지는 분자는?",
                    type: "multiple-choice",
                    options: ["메탄", "물", "벤젠", "암모니아"],
                    correctIndex: 2,
                    explanation: "벤젠은 전자가 비편재화되어 여러 공명 구조를 가집니다.",
                    hint: "방향족 화합물의 특징을 생각해보세요."
                },
                {
                    question: "분자간 힘 중 가장 강한 것은?",
                    type: "multiple-choice",
                    options: ["반데르발스 힘", "쌍극자-쌍극자 힘", "수소결합", "분산력"],
                    correctIndex: 2,
                    explanation: "수소결합은 분자간 힘 중 가장 강한 힘입니다.",
                    hint: "물의 높은 끓는점의 원인을 생각해보세요."
                },
                {
                    question: "VSEPR 이론에서 NH₃의 전자쌍 기하구조는?",
                    type: "multiple-choice",
                    options: ["직선형", "삼각평면형", "정사면체형", "삼각쌍뿔형"],
                    correctIndex: 2,
                    explanation: "NH₃는 3개의 결합전자쌍과 1개의 비공유전자쌍으로 정사면체형 전자쌍 기하구조를 가집니다.",
                    hint: "전체 전자쌍의 개수를 세어보세요."
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
                },
                {
                    question: "CO₂ 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["직선형", "굽은형", "삼각형", "정사면체형"],
                    correctIndex: 0,
                    explanation: "이산화탄소는 C=O=C 구조로 직선형 분자입니다.",
                    hint: "탄소 원자 주위의 전자쌍 배치를 생각해보세요."
                },
                {
                    question: "CH₄ 분자에서 H-C-H 결합각은 약 몇 도인가요?",
                    type: "multiple-choice",
                    options: ["90°", "109.5°", "120°", "180°"],
                    correctIndex: 1,
                    explanation: "메탄은 정사면체 구조로 결합각이 109.5°입니다.",
                    hint: "정사면체 구조에서의 결합각을 생각해보세요."
                }
            ]
        },
        {
            category: 'bonding',
            templates: [
                {
                    question: "다음 중 결합이 가장 강한 것은?",
                    type: "multiple-choice",
                    options: ["H-H", "C-C", "N≡N", "O-H"],
                    correctIndex: 2,
                    explanation: "질소의 삼중결합(N≡N)이 가장 강한 결합입니다.",
                    hint: "결합 차수가 높을수록 결합이 강합니다."
                },
                {
                    question: "메탄이 연소할 때 무엇이 생성되나요?",
                    type: "multiple-choice",
                    options: ["CO + H₂O", "CO₂ + H₂", "CO₂ + H₂O", "C + H₂O"],
                    correctIndex: 2,
                    explanation: "메탄(CH₄)이 완전연소하면 이산화탄소(CO₂)와 물(H₂O)이 생성됩니다.",
                    hint: "완전연소의 생성물을 생각해보세요."
                },
                {
                    question: "C≡C 삼중결합이 C=C 이중결합보다 강한 이유는?",
                    type: "short-answer",
                    keywords: ["전자쌍", "공유", "많은"],
                    answer: "더 많은 전자쌍을 공유하기 때문",
                    explanation: "삼중결합은 3개의 전자쌍을 공유하여 이중결합(2개)보다 강한 결합을 형성합니다.",
                    hint: "결합 차수와 결합 세기의 관계를 생각해보세요."
                }
            ]
        },
        {
            category: 'reactions',
            templates: [
                {
                    question: "연소 반응에서 항상 필요한 것은?",
                    type: "multiple-choice",
                    options: ["물", "산소", "이산화탄소", "수소"],
                    correctIndex: 1,
                    explanation: "연소 반응은 물질이 산소와 반응하여 열과 빛을 내는 반응입니다.",
                    hint: "태우기 위해 꼭 필요한 기체를 생각해보세요."
                },
                {
                    question: "물의 전기분해에서 생성되는 기체는?",
                    type: "multiple-choice",
                    options: ["수소와 산소", "수소와 이산화탄소", "산소와 질소", "수소와 질소"],
                    correctIndex: 0,
                    explanation: "물(H₂O)을 전기분해하면 수소 기체(H₂)와 산소 기체(O₂)가 생성됩니다.",
                    hint: "물 분자가 어떤 원소로 이루어져 있는지 생각해보세요."
                }
            ]
        }
    ]
};

// 문제 생성 함수
function generateProblem(difficulty) {
    try {
        console.log('generateProblem 호출됨, difficulty:', difficulty);
        
        const templates = problemTemplates[difficulty];
        console.log('템플릿 개수:', templates ? templates.length : 'undefined');
        
        if (!templates || templates.length === 0) {
            console.error('템플릿이 없습니다:', difficulty);
            return null;
        }
        
        const categoryIndex = Math.floor(Math.random() * templates.length);
        const category = templates[categoryIndex];
        console.log('선택된 카테고리:', category.category, '문제 개수:', category.templates.length);
        
        const problemIndex = Math.floor(Math.random() * category.templates.length);
        let problem = { ...category.templates[problemIndex] };
        
        console.log('선택된 문제:', problem);
        
        // 동적 요소 추가
        problem.points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30;
        problem.id = Date.now();
        
        // 선택지 섞기 (객관식인 경우)
        if (problem.type === 'multiple-choice') {
            problem = shuffleOptions(problem);
        }
        
        console.log('최종 문제:', problem);
        return problem;
        
    } catch (error) {
        console.error('문제 생성 중 오류:', error);
        return null;
    }
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
            answer: compound.formula,
            explanation: `${compound.name}의 올바른 화학식은 ${compound.formula}입니다.`,
            category: compound.type,
            hint: compound.type === "ionic" ? "금속과 비금속의 조합입니다." : "비금속 원소들의 조합입니다."
        };
    },
    
    // 결합 에너지 문제 생성기
    bondEnergyProblem() {
        const bonds = [
            { bond: "H-H", energy: 436, type: "단일결합" },
            { bond: "C-C", energy: 347, type: "단일결합" },
            { bond: "C=C", energy: 602, type: "이중결합" },
            { bond: "C≡C", energy: 835, type: "삼중결합" },
            { bond: "N≡N", energy: 942, type: "삼중결합" },
            { bond: "O=O", energy: 495, type: "이중결합" }
        ];
        
        const bond = bonds[Math.floor(Math.random() * bonds.length)];
        
        return {
            question: `${bond.bond} 결합의 결합 에너지는 약 몇 kJ/mol인가요?`,
            type: "multiple-choice",
            options: [bond.energy, bond.energy + 100, bond.energy - 100, bond.energy + 200].sort(() => Math.random() - 0.5),
            correctIndex: 0,
            answer: bond.energy.toString(),
            explanation: `${bond.bond} ${bond.type}의 결합 에너지는 ${bond.energy} kJ/mol입니다.`,
            category: "bonding",
            hint: `${bond.type}의 세기를 고려해보세요.`
        };
    },
    
    // 분자 구조 문제 생성기
    molecularShapeProblem() {
        const molecules = [
            { formula: "H₂O", name: "물", shape: "굽은형", angle: "104.5°" },
            { formula: "CH₄", name: "메탄", shape: "정사면체형", angle: "109.5°" },
            { formula: "CO₂", name: "이산화탄소", shape: "직선형", angle: "180°" },
            { formula: "NH₃", name: "암모니아", shape: "삼각뿔형", angle: "107°" },
            { formula: "BF₃", name: "삼플루오린화붕소", shape: "삼각평면형", angle: "120°" }
        ];
        
        const molecule = molecules[Math.floor(Math.random() * molecules.length)];
        
        return {
            question: `${molecule.name}(${molecule.formula}) 분자의 모양은?`,
            type: "multiple-choice",
            options: ["직선형", "굽은형", "정사면체형", "삼각평면형"].sort(() => Math.random() - 0.5),
            correctIndex: 0,
            answer: molecule.shape,
            explanation: `${molecule.name}은 ${molecule.shape}이며, 결합각은 약 ${molecule.angle}입니다.`,
            category: "molecular",
            hint: "중심 원자 주위의 전자쌍 배치를 생각해보세요."
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

// 전역 함수로 내보내기
window.generateProblem = generateProblem;
window.generateTopicProblem = generateTopicProblem;
window.problemStats = problemStats;