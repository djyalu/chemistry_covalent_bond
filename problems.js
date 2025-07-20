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
                }
            ]
        },
        {
            category: 'reactions',
            templates: [
                {
                    question: "다음 중 연소 반응의 예는?",
                    type: "multiple-choice",
                    options: ["C + O₂ → CO₂", "NaCl + H₂O → Na⁺ + Cl⁻", "H₂O → H⁺ + OH⁻", "N₂ + 3H₂ → 2NH₃"],
                    correctIndex: 0,
                    explanation: "연소 반응은 물질이 산소와 반응하여 이산화탄소와 물을 생성하는 반응입니다.",
                    hint: "산소와 반응하여 에너지를 방출하는 반응을 생각해보세요."
                },
                {
                    question: "산-염기 중화 반응의 생성물은?",
                    type: "multiple-choice",
                    options: ["물과 이산화탄소", "물과 염", "수소 기체", "산소 기체"],
                    correctIndex: 1,
                    explanation: "산과 염기가 반응하면 물과 염이 생성됩니다.",
                    hint: "HCl + NaOH → ? 반응을 생각해보세요."
                },
                {
                    question: "산화-환원 반응에서 전자를 잃는 것은?",
                    type: "multiple-choice",
                    options: ["산화", "환원", "중성화", "이온화"],
                    correctIndex: 0,
                    explanation: "산화는 전자를 잃는 과정이고, 환원은 전자를 얻는 과정입니다.",
                    hint: "OIL RIG - Oxidation Is Loss, Reduction Is Gain"
                },
                {
                    question: "반응속도에 영향을 주는 요인이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["온도", "농도", "촉매", "생성물의 색깔"],
                    correctIndex: 3,
                    explanation: "반응속도는 온도, 농도, 촉매, 표면적에 의해 영향을 받습니다.",
                    hint: "화학 반응의 빠르기에 영향을 주는 조건들을 생각해보세요."
                }
            ]
        },
        {
            category: 'dailyChemistry',
            templates: [
                {
                    question: "베이킹소다(NaHCO₃)의 주요 용도는?",
                    type: "multiple-choice",
                    options: ["산성 중화", "산화 방지", "단백질 분해", "지방 유화"],
                    correctIndex: 0,
                    explanation: "베이킹소다는 약염기성을 가져 산성을 중화하는 데 사용됩니다.",
                    hint: "위산 과다일 때 사용하는 이유를 생각해보세요."
                },
                {
                    question: "비누가 때를 제거하는 원리는?",
                    type: "multiple-choice",
                    options: ["산화", "환원", "유화", "중화"],
                    correctIndex: 2,
                    explanation: "비누는 친수성과 소수성 부분을 가져 기름때를 물에 분산시킵니다.",
                    hint: "기름과 물을 섞이게 하는 작용을 생각해보세요."
                },
                {
                    question: "철이 녹스는 현상은 어떤 반응인가요?",
                    type: "multiple-choice",
                    options: ["중화반응", "산화반응", "환원반응", "분해반응"],
                    correctIndex: 1,
                    explanation: "철이 녹스는 것은 철이 산소와 반응하여 산화되는 과정입니다.",
                    hint: "철이 산소와 만나서 일어나는 변화를 생각해보세요."
                },
                {
                    question: "식초의 주성분인 아세트산의 화학식은?",
                    type: "multiple-choice",
                    options: ["CH₃COOH", "HCl", "H₂SO₄", "C₆H₁₂O₆"],
                    correctIndex: 0,
                    explanation: "식초의 주성분은 아세트산(CH₃COOH)으로 약한 산입니다.",
                    hint: "탄소 2개, 수소 4개, 산소 2개로 이루어진 산입니다."
                },
                {
                    question: "다음 중 극성 분자는?",
                    type: "multiple-choice",
                    options: ["CO₂", "CH₄", "H₂O", "N₂"],
                    correctIndex: 2,
                    explanation: "물(H₂O)은 굽은 구조로 인해 극성을 띠는 분자입니다.",
                    hint: "분자의 모양과 전기음성도 차이를 고려해보세요."
                },
                // 새로운 문제 유형들 추가
                {
                    question: "다음 화학식과 이름을 올바르게 연결하세요.",
                    type: "matching",
                    pairs: [
                        { left: "H₂O", right: "물" },
                        { left: "CO₂", right: "이산화탄소" },
                        { left: "NH₃", right: "암모니아" },
                        { left: "CH₄", right: "메탄" }
                    ],
                    explanation: "화학식과 화합물 이름을 정확히 매칭할 수 있어야 합니다.",
                    hint: "일상생활에서 접할 수 있는 화합물들입니다."
                },
                {
                    question: "공유결합 형성 과정을 올바른 순서로 배열하세요.",
                    type: "sequence",
                    steps: [
                        "두 원자가 가까워진다",
                        "원자가 전자가 겹친다", 
                        "전자쌍을 공유한다",
                        "안정한 분자가 형성된다"
                    ],
                    correctOrder: [0, 1, 2, 3],
                    explanation: "공유결합은 원자들이 가까워지면서 전자를 공유하여 안정한 분자를 만드는 과정입니다.",
                    hint: "원자가 결합하는 자연스러운 순서를 생각해보세요."
                },
                {
                    question: "빈칸에 들어갈 올바른 단어를 선택하세요: 물 분자에서 산소와 수소는 ___을 공유하여 결합합니다.",
                    type: "fill-dropdown",
                    options: ["전자", "양성자", "중성자", "이온"],
                    correctIndex: 0,
                    explanation: "공유결합에서는 전자를 공유합니다.",
                    hint: "공유결합의 '공유'가 무엇을 뜻하는지 생각해보세요."
                },
                // 추가 문제들
                {
                    question: "다음 중 비금속 원소끼리 만드는 결합은?",
                    type: "multiple-choice",
                    options: ["이온결합", "공유결합", "금속결합", "배위결합"],
                    correctIndex: 1,
                    explanation: "비금속 원소끼리는 전자를 공유하여 공유결합을 만듭니다.",
                    hint: "비금속 원소들은 전자를 주고받기보다는..."
                },
                {
                    question: "루이스 점 구조에서 점이 나타내는 것은?",
                    type: "multiple-choice", 
                    options: ["양성자", "중성자", "원자가 전자", "내부 전자"],
                    correctIndex: 2,
                    explanation: "루이스 점 구조에서 점은 원자가 전자를 나타냅니다.",
                    hint: "화학 결합에 참여하는 전자를 생각해보세요."
                },
                {
                    question: "다음 화학 반응식을 완성하세요: 2H₂ + O₂ → ?",
                    type: "multiple-choice",
                    options: ["H₂O", "2H₂O", "H₂O₂", "2H₂O₂"],
                    correctIndex: 1,
                    explanation: "수소 2분자와 산소 1분자가 반응하여 물 2분자가 생성됩니다.",
                    hint: "원자의 개수가 좌변과 우변에서 같아야 합니다."
                },
                {
                    question: "공유결합 화합물이 전기를 통하지 않는 이유는?",
                    type: "short-answer",
                    keywords: ["이온", "없", "전자", "이동"],
                    answer: "자유롭게 이동할 수 있는 이온이나 전자가 없기 때문",
                    explanation: "공유결합 화합물은 분자로 이루어져 있어 전하를 띤 입자가 자유롭게 이동할 수 없습니다.",
                    hint: "전기가 통하려면 무엇이 이동해야 할까요?"
                },
                {
                    question: "다음 분자들을 결합 에너지가 큰 순서대로 배열하세요.",
                    type: "sequence",
                    steps: ["H-H", "C-C", "C=C", "C≡C"],
                    correctOrder: [3, 2, 1, 0],
                    explanation: "삼중결합 > 이중결합 > 단일결합 순으로 결합 에너지가 큽니다.",
                    hint: "결합 차수가 높을수록..."
                },
                {
                    question: "다음 물질들을 극성/무극성으로 분류하세요.",
                    type: "drag-drop",
                    items: ["H₂O", "CO₂", "NH₃", "CH₄", "HCl", "O₂"],
                    categories: {
                        "극성 분자": ["H₂O", "NH₃", "HCl"],
                        "무극성 분자": ["CO₂", "CH₄", "O₂"]
                    },
                    explanation: "분자의 구조와 전기음성도 차이가 극성을 결정합니다.",
                    hint: "분자의 대칭성을 고려해보세요."
                },
                {
                    question: "가상 실험: 메탄 연소 반응",
                    type: "simulation",
                    scenario: "메탄 가스에 불을 붙이면 어떤 일이 일어날까요?",
                    steps: [
                        "메탄 가스(CH₄)를 준비한다",
                        "충분한 산소(O₂)를 공급한다",
                        "점화한다",
                        "푸른 불꽃이 나타난다"
                    ],
                    correctAnswer: "메탄이 산소와 반응하여 이산화탄소와 물이 생성되며 열이 발생한다",
                    explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O + 열",
                    hint: "완전연소 반응을 생각해보세요."
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
                },
                // 드래그 앤 드롭 문제
                {
                    question: "다음 원소들을 공유결합을 형성하는 그룹과 이온결합을 형성하는 그룹으로 분류하세요.",
                    type: "drag-drop",
                    items: ["탄소(C)", "나트륨(Na)", "산소(O)", "염소(Cl)", "질소(N)", "칼슘(Ca)"],
                    categories: {
                        "공유결합 형성": ["탄소(C)", "산소(O)", "질소(N)"],
                        "이온결합 형성": ["나트륨(Na)", "염소(Cl)", "칼슘(Ca)"]
                    },
                    explanation: "비금속끼리는 공유결합을, 금속과 비금속은 이온결합을 형성합니다.",
                    hint: "금속인지 비금속인지 구분해보세요."
                },
                // 실험 시뮬레이션 문제
                {
                    question: "가상 실험: 소금물 전기분해",
                    type: "simulation",
                    scenario: "소금물에 전류를 흘려보세요. 어떤 현상이 일어날까요?",
                    steps: [
                        "전극을 소금물에 넣는다",
                        "전류를 흘린다", 
                        "기체가 발생한다",
                        "Na⁺는 (-)극으로, Cl⁻는 (+)극으로 이동한다"
                    ],
                    correctAnswer: "이온들이 각각 반대 극으로 이동하여 전기가 통한다",
                    explanation: "이온화합물이 물에 녹으면 이온으로 분리되어 전기가 통하게 됩니다.",
                    hint: "이온화합물의 전기 전도성을 생각해보세요."
                }
            ]
        },
        {
            category: 'reactions',
            templates: [
                {
                    question: "다음 반응에서 산화되는 물질은? Zn + CuSO₄ → ZnSO₄ + Cu",
                    type: "multiple-choice",
                    options: ["Zn", "Cu", "S", "O"],
                    correctIndex: 0,
                    explanation: "아연(Zn)이 전자를 잃고 Zn²⁺이 되므로 산화됩니다.",
                    hint: "전자를 잃는 것이 산화입니다."
                },
                {
                    question: "반응 속도를 빠르게 하는 방법이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["온도 올리기", "농도 높이기", "촉매 첨가", "압력 낮추기"],
                    correctIndex: 3,
                    explanation: "기체 반응에서 압력을 낮추면 반응속도가 느려집니다.",
                    hint: "기체의 농도와 압력의 관계를 생각해보세요."
                },
                {
                    question: "중화열이 가장 큰 반응은?",
                    type: "multiple-choice",
                    options: ["HCl + NaOH", "CH₃COOH + NaOH", "HCl + NH₃", "CH₃COOH + NH₃"],
                    correctIndex: 0,
                    explanation: "강산과 강염기의 중화반응에서 중화열이 가장 큽니다.",
                    hint: "강산과 강염기를 찾아보세요."
                }
            ]
        },
        {
            category: 'dailyChemistry',
            templates: [
                {
                    question: "세제가 기름때를 제거하는 원리를 설명하세요.",
                    type: "fill-dropdown",
                    question_template: "세제 분자는 {선택1}과 {선택2} 부분을 가져 기름을 {선택3}시킵니다.",
                    dropdowns: {
                        "선택1": ["친수성", "소수성", "중성", "산성"],
                        "선택2": ["친수성", "소수성", "중성", "염기성"],
                        "선택3": ["분해", "유화", "중화", "산화"]
                    },
                    correctAnswers: ["친수성", "소수성", "유화"],
                    explanation: "세제는 친수성과 소수성 부분을 모두 가져 기름을 작은 입자로 분산시킵니다.",
                    hint: "물과 기름 사이를 연결하는 역할을 생각해보세요."
                },
                {
                    question: "다음 중 항산화제로 사용되는 것은?",
                    type: "multiple-choice",
                    options: ["비타민 C", "소금", "설탕", "전분"],
                    correctIndex: 0,
                    explanation: "비타민 C(아스코르브산)는 대표적인 항산화제입니다.",
                    hint: "산화를 방지하는 물질을 생각해보세요."
                },
                {
                    question: "pH 지시약 실험: 가정용품의 산성도 측정",
                    type: "simulation",
                    scenario: "리트머스 종이를 사용해 각 용액의 산성도를 측정해보세요.",
                    items: ["레몬즙", "비누물", "물", "식초"],
                    expected_results: {
                        "레몬즙": "빨간색 (산성)",
                        "비누물": "파란색 (염기성)",
                        "물": "변화없음 (중성)",
                        "식초": "빨간색 (산성)"
                    },
                    explanation: "산성 용액은 리트머스를 빨갛게, 염기성 용액은 파랗게 변화시킵니다.",
                    hint: "신맛이 나는 것은 산성, 미끌거리는 것은 염기성입니다."
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
                },
                {
                    question: "분자간 수소결합이 가능한 물질끼리 매칭하세요.",
                    type: "matching",
                    pairs: [
                        { left: "H₂O", right: "물 분자끼리" },
                        { left: "NH₃", right: "암모니아 분자끼리" },
                        { left: "HF", right: "플루오린화수소 분자끼리" },
                        { left: "CH₃OH", right: "메탄올 분자끼리" }
                    ],
                    explanation: "O, N, F와 결합한 H가 있는 분자들은 수소결합이 가능합니다.",
                    hint: "전기음성도가 큰 원소와 결합한 수소를 찾아보세요."
                },
                {
                    question: "sp³ 혼성 궤도를 가지는 분자는?",
                    type: "multiple-choice",
                    options: ["BF₃", "CH₄", "CO₂", "C₂H₄"],
                    correctIndex: 1,
                    explanation: "메탄(CH₄)의 탄소는 sp³ 혼성으로 정사면체 구조를 가집니다.",
                    hint: "4개의 단일결합을 가진 탄소를 찾아보세요."
                },
                {
                    question: "다음 이온 결정의 격자 에너지가 가장 큰 것은?",
                    type: "multiple-choice",
                    options: ["NaCl", "KCl", "MgO", "CaO"],
                    correctIndex: 2,
                    explanation: "MgO는 이온의 전하가 크고(Mg²⁺, O²⁻) 크기가 작아 격자 에너지가 가장 큽니다.",
                    hint: "이온의 전하와 크기를 고려해보세요."
                }
            ]
        },
        {
            category: 'reactions',
            templates: [
                {
                    question: "다음 반응식을 완성하세요: CH₄ + O₂ → ? + ?",
                    type: "fill-blank",
                    answer: "CO₂ + H₂O",
                    explanation: "메탄의 완전연소: CH₄ + 2O₂ → CO₂ + 2H₂O",
                    hint: "완전연소 반응의 생성물을 생각해보세요."
                },
                {
                    question: "반응 엔탈피(ΔH)가 음수인 반응은?",
                    type: "multiple-choice",
                    options: ["흡열반응", "발열반응", "평형반응", "가역반응"],
                    correctIndex: 1,
                    explanation: "ΔH < 0이면 에너지를 방출하는 발열반응입니다.",
                    hint: "에너지 변화의 방향을 생각해보세요."
                },
                {
                    question: "촉매의 역할을 설명하세요.",
                    type: "short-answer",
                    keywords: ["활성화", "에너지", "낮춤", "속도"],
                    answer: "활성화 에너지를 낮춰 반응속도를 빠르게 함",
                    explanation: "촉매는 반응의 활성화 에너지를 낮춰 반응이 더 쉽게 일어나도록 도와줍니다.",
                    hint: "반응이 시작되는 데 필요한 에너지를 생각해보세요."
                },
                {
                    question: "화학 평형에서 Le Chatelier 원리란?",
                    type: "short-answer",
                    keywords: ["평형", "이동", "변화", "상쇄"],
                    answer: "외부 조건 변화에 대해 평형이 그 변화를 상쇄하는 방향으로 이동",
                    explanation: "온도, 압력, 농도 등이 변하면 평형은 그 변화를 최소화하는 방향으로 이동합니다.",
                    hint: "평형상태에서 조건이 바뀔 때 일어나는 현상을 생각해보세요."
                }
            ]
        },
        {
            category: 'dailyChemistry',
            templates: [
                {
                    question: "계면활성제가 세정 효과를 나타내는 원리를 설명하세요.",
                    type: "short-answer",
                    keywords: ["친수성", "소수성", "유화", "표면장력"],
                    answer: "친수성과 소수성 부분으로 기름과 물 사이의 표면장력을 낮춰 유화시킴",
                    explanation: "계면활성제는 양친매성 분자로 기름과 물 사이를 연결하여 유화 현상을 일으킵니다.",
                    hint: "비누나 세제의 분자 구조를 생각해보세요."
                },
                {
                    question: "식품 보존에 사용되는 화학적 방법은?",
                    type: "multiple-choice",
                    options: ["산화 촉진", "pH 조절", "온도 상승", "습도 증가"],
                    correctIndex: 1,
                    explanation: "pH를 조절하여 세균의 번식을 억제하는 것이 대표적인 화학적 보존 방법입니다.",
                    hint: "세균이 자라기 어려운 환경을 만드는 방법을 생각해보세요."
                },
                {
                    question: "발효 과정에서 일어나는 주요 화학 반응은?",
                    type: "multiple-choice",
                    options: ["산화", "환원", "분해", "중합"],
                    correctIndex: 2,
                    explanation: "발효는 미생물이 유기물을 분해하여 알코올이나 산을 만드는 과정입니다.",
                    hint: "당분이 알코올로 변하는 과정을 생각해보세요."
                },
                {
                    question: "콜라의 탄산이 빠지는 현상을 화학적으로 설명하세요.",
                    type: "short-answer", 
                    keywords: ["CO₂", "용해도", "압력", "온도"],
                    answer: "압력 감소나 온도 상승으로 CO₂의 용해도가 감소하여 기체로 빠져나감",
                    explanation: "기체의 용해도는 압력에 비례하고 온도에 반비례하므로 병을 열거나 온도가 올라가면 CO₂가 빠져나갑니다.",
                    hint: "헨리의 법칙을 생각해보세요."
                },
                {
                    question: "화학 평형 상태의 특징이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["정반응과 역반응의 속도가 같다", "농도가 일정하다", "반응이 완전히 멈춘다", "동적 평형 상태이다"],
                    correctIndex: 2,
                    explanation: "화학 평형은 정반응과 역반응이 같은 속도로 계속 일어나는 동적 평형입니다.",
                    hint: "평형 상태에서도 분자 수준에서는..."
                },
                {
                    question: "완충 용액을 만들기 위한 물질 조합으로 적절한 것은?",
                    type: "drag-drop",
                    items: ["CH₃COOH", "CH₃COONa", "HCl", "NaOH", "NH₃", "NH₄Cl"],
                    categories: {
                        "아세트산 완충액": ["CH₃COOH", "CH₃COONa"],
                        "암모니아 완충액": ["NH₃", "NH₄Cl"]
                    },
                    explanation: "약산과 그 짝염기, 또는 약염기와 그 짝산의 조합으로 완충액을 만듭니다.",
                    hint: "약산/약염기와 그들의 염을 찾아보세요."
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

// 주제별 중복 방지를 위한 사용된 문제 추적
const usedTopicProblems = {};

// 특정 주제의 문제 생성 (개선됨)
function generateTopicProblem(topic, difficulty) {
    const templates = problemTemplates[difficulty];
    
    // 주제 매핑 (각 주제별 카테고리 명확히 구분)
    const topicMapping = {
        'covalent': ['covalent'],
        'ionic': ['ionic'], 
        'molecular': ['molecular'],
        'bonding': ['bonding', 'reactions']
    };
    
    const allowedCategories = topicMapping[topic] || [topic];
    const topicTemplates = templates.filter(t => allowedCategories.includes(t.category));
    
    // 디버깅 로그
    console.log(`주제: ${topic}, 난이도: ${difficulty}`);
    console.log(`허용된 카테고리:`, allowedCategories);
    console.log(`찾은 템플릿 개수: ${topicTemplates.length}`);
    console.log(`템플릿 카테고리들:`, topicTemplates.map(t => t.category));
    
    if (topicTemplates.length === 0) {
        console.warn(`주제 '${topic}'에 대한 문제가 없습니다. 일반 문제로 대체합니다.`);
        return generateUniqueQuestion(difficulty); // 폴백
    }
    
    // 중복 방지 키 생성
    const topicKey = `${topic}_${difficulty}`;
    if (!usedTopicProblems[topicKey]) {
        usedTopicProblems[topicKey] = new Set();
    }
    
    // 모든 주제별 문제를 다 사용했으면 초기화
    const totalTopicQuestions = topicTemplates.reduce((sum, cat) => sum + cat.templates.length, 0);
    if (usedTopicProblems[topicKey].size >= totalTopicQuestions) {
        usedTopicProblems[topicKey].clear();
        console.log(`${topic} 주제 문제 풀이 완료 - 주제별 문제 기록 초기화`);
    }
    
    // 사용하지 않은 주제별 문제 찾기
    let attempts = 0;
    let problem = null;
    
    while (attempts < 30) {
        const categoryIndex = Math.floor(Math.random() * topicTemplates.length);
        const category = topicTemplates[categoryIndex];
        const problemIndex = Math.floor(Math.random() * category.templates.length);
        
        const problemId = `${category.category}_${problemIndex}`;
        
        if (!usedTopicProblems[topicKey].has(problemId)) {
            problem = { ...category.templates[problemIndex] };
            problem.points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30;
            problem.id = Date.now();
            problem.uniqueId = problemId;
            problem.topicFocused = true; // 주제 특화 문제임을 표시
            
            // 선택지 섞기
            if (problem.type === 'multiple-choice') {
                problem = shuffleOptions(problem);
            }
            
            // 사용된 문제로 기록
            usedTopicProblems[topicKey].add(problemId);
            break;
        }
        
        attempts++;
    }
    
    // 찾지 못했으면 일반 문제 생성
    if (!problem) {
        console.warn(`${topic} 주제의 새로운 문제를 찾지 못해 일반 문제로 대체합니다.`);
        return generateUniqueQuestion(difficulty);
    }
    
    return problem;
}

// 주제별 문제 기록 초기화
function resetTopicProblems(topic) {
    Object.keys(usedTopicProblems).forEach(key => {
        if (key.startsWith(topic + '_')) {
            usedTopicProblems[key].clear();
        }
    });
}

// 문제 풀이 통계
const problemStats = {
    byCategory: {
        covalent: { attempted: 0, correct: 0 },
        ionic: { attempted: 0, correct: 0 },
        molecular: { attempted: 0, correct: 0 },
        bonding: { attempted: 0, correct: 0 },
        reactions: { attempted: 0, correct: 0 },
        dailyChemistry: { attempted: 0, correct: 0 },
        'basic-concepts': { attempted: 0, correct: 0 },
        'advanced-concepts': { attempted: 0, correct: 0 }
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

// 사용된 문제 추적
const usedProblems = {
    easy: new Set(),
    medium: new Set(),
    hard: new Set()
};

// 문제 사용 기록 초기화
function resetUsedProblems() {
    usedProblems.easy.clear();
    usedProblems.medium.clear();
    usedProblems.hard.clear();
}

// 중복 방지 문제 생성
function generateUniqueQuestion(difficulty) {
    const templates = problemTemplates[difficulty];
    if (!templates || templates.length === 0) {
        return null;
    }
    
    // 모든 문제를 다 사용했으면 초기화
    const totalQuestions = templates.reduce((sum, category) => sum + category.templates.length, 0);
    if (usedProblems[difficulty].size >= totalQuestions) {
        usedProblems[difficulty].clear();
        console.log(`${difficulty} 난이도 문제 풀이 완료 - 문제 풀이 기록 초기화`);
    }
    
    // 사용하지 않은 문제 찾기
    let attempts = 0;
    let problem = null;
    
    while (attempts < 50) { // 무한 루프 방지
        const categoryIndex = Math.floor(Math.random() * templates.length);
        const category = templates[categoryIndex];
        const problemIndex = Math.floor(Math.random() * category.templates.length);
        
        const problemId = `${category.category}_${problemIndex}`;
        
        if (!usedProblems[difficulty].has(problemId)) {
            problem = { ...category.templates[problemIndex] };
            problem.points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30;
            problem.id = Date.now();
            problem.uniqueId = problemId;
            
            // 선택지 섞기
            if (problem.type === 'multiple-choice') {
                problem = shuffleOptions(problem);
            }
            
            // 사용된 문제로 기록
            usedProblems[difficulty].add(problemId);
            break;
        }
        
        attempts++;
    }
    
    return problem;
}

// 전역 함수로 내보내기
window.generateProblem = generateUniqueQuestion; // 중복 방지 버전 사용
window.generateTopicProblem = generateTopicProblem; // 개선된 주제별 문제 생성
window.problemStats = problemStats;
window.resetUsedProblems = resetUsedProblems;
window.resetTopicProblems = resetTopicProblems;
window.usedProblems = usedProblems;
window.usedTopicProblems = usedTopicProblems;