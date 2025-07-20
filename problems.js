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
                },
                {
                    question: "공유결합에서 원자들이 공유하는 것은?",
                    type: "multiple-choice",
                    options: ["양성자", "중성자", "전자", "원자핵"],
                    correctIndex: 2,
                    explanation: "공유결합에서는 원자들이 원자가 전자를 공유합니다.",
                    hint: "화학 결합에 참여하는 입자를 생각해보세요."
                },
                {
                    question: "암모니아(NH₃)에서 질소와 수소는 어떤 결합을 하나요?",
                    type: "multiple-choice",
                    options: ["이온결합", "공유결합", "금속결합", "반데르발스 힘"],
                    correctIndex: 1,
                    explanation: "암모니아에서 질소와 수소는 전자를 공유하는 공유결합을 합니다.",
                    hint: "두 비금속 원소 사이의 결합을 생각해보세요."
                },
                {
                    question: "다음 중 공유결합을 형성하는 원소 쌍은?",
                    type: "multiple-choice",
                    options: ["Na-Cl", "C-O", "Ca-F", "K-Br"],
                    correctIndex: 1,
                    explanation: "탄소(C)와 산소(O)는 모두 비금속으로 공유결합을 형성합니다.",
                    hint: "비금속끼리 결합하는 경우를 찾아보세요."
                },
                {
                    question: "메탄(CH₄)에서 탄소는 몇 개의 공유결합을 만드나요?",
                    type: "multiple-choice",
                    options: ["1개", "2개", "3개", "4개"],
                    correctIndex: 3,
                    explanation: "메탄에서 탄소는 4개의 수소와 각각 공유결합을 만듭니다.",
                    hint: "탄소의 원자가 전자 개수를 생각해보세요."
                },
                {
                    question: "HCl 분자에서 수소와 염소 사이의 결합은?",
                    type: "multiple-choice",
                    options: ["이온결합", "공유결합", "금속결합", "배위결합"],
                    correctIndex: 1,
                    explanation: "염화수소에서 수소와 염소는 전자를 공유하여 공유결합을 형성합니다.",
                    hint: "두 비금속 원소 사이의 결합을 생각해보세요."
                },
                {
                    question: "다음 중 공유결합으로만 이루어진 분자는?",
                    type: "multiple-choice",
                    options: ["KBr", "O₂", "MgO", "CaCl₂"],
                    correctIndex: 1,
                    explanation: "산소 분자(O₂)는 두 산소 원자가 전자를 공유하는 공유결합 분자입니다.",
                    hint: "같은 원소끼리 결합한 경우를 찾아보세요."
                },
                {
                    question: "F₂ 분자에서 플루오린 원자들은 몇 개의 전자를 공유하나요?",
                    type: "multiple-choice",
                    options: ["1개", "2개", "4개", "6개"],
                    correctIndex: 1,
                    explanation: "F₂ 분자에서는 각 플루오린 원자가 1개씩의 전자를 내어 총 2개를 공유합니다.",
                    hint: "단일결합에서 공유되는 전자 개수를 생각해보세요."
                },
                {
                    question: "공유결합의 특징이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["방향성이 있다", "전자를 공유한다", "녹는점이 높다", "분자를 형성한다"],
                    correctIndex: 2,
                    explanation: "공유결합 물질은 일반적으로 이온화합물에 비해 녹는점이 낮습니다.",
                    hint: "얼음과 소금의 녹는점을 비교해보세요."
                },
                {
                    question: "Cl₂ 분자가 형성되는 이유는?",
                    type: "multiple-choice",
                    options: ["전자를 주고받기 위해", "옥텟 규칙을 만족하기 위해", "전기적 중성을 유지하기 위해", "금속결합을 하기 위해"],
                    correctIndex: 1,
                    explanation: "염소 원자는 전자 7개를 가지고 있어, 1개를 더 얻어 옥텟을 완성하려고 합니다.",
                    hint: "염소 원자의 바깥 전자 개수를 생각해보세요."
                },
                {
                    question: "다음 중 극성 공유결합을 하는 것은?",
                    type: "multiple-choice",
                    options: ["H₂", "Cl₂", "HF", "N₂"],
                    correctIndex: 2,
                    explanation: "HF는 수소와 플루오린의 전기음성도 차이가 커서 극성 공유결합을 합니다.",
                    hint: "서로 다른 원소끼리의 결합을 찾아보세요."
                },
                {
                    question: "CCl₄ 분자에서 탄소와 염소는 몇 개의 공유결합을 만드나요?",
                    type: "multiple-choice",
                    options: ["1개", "2개", "3개", "4개"],
                    correctIndex: 3,
                    explanation: "사염화탄소에서 탄소는 4개의 염소와 각각 단일 공유결합을 만듭니다.",
                    hint: "탄소는 항상 4개의 결합을 만듭니다."
                },
                {
                    question: "H₂S에서 황과 수소 사이의 결합 타입은?",
                    type: "multiple-choice",
                    options: ["이온결합", "공유결합", "수소결합", "반데르발스 힘"],
                    correctIndex: 1,
                    explanation: "황화수소에서 황과 수소는 전자를 공유하는 공유결합을 형성합니다.",
                    hint: "두 비금속 원소 사이의 화학결합을 생각해보세요."
                },
                {
                    question: "공유결합에서 결합 길이가 짧을수록 결합은?",
                    type: "multiple-choice",
                    options: ["약해진다", "강해진다", "변하지 않는다", "불안정해진다"],
                    correctIndex: 1,
                    explanation: "결합 길이가 짧을수록 원자들이 더 가깝게 결합되어 있어 결합이 강해집니다.",
                    hint: "원자 사이의 거리와 인력의 관계를 생각해보세요."
                }
            ]
        },
        {
            category: 'molecular',
            templates: [
                {
                    question: "물(H₂O) 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["직선형", "굽은형", "삼각형", "정사면체형"],
                    correctIndex: 1,
                    explanation: "물 분자는 산소의 비공유 전자쌍 때문에 굽은형 구조를 가집니다.",
                    hint: "산소 원자 주위의 전자쌍 배치를 생각해보세요."
                },
                {
                    question: "VSEPR 이론이란?",
                    type: "multiple-choice",
                    options: ["원자가 결합 이론", "원자가 껍질 전자쌍 반발 이론", "분자 궤도 이론", "혼성 궤도 이론"],
                    correctIndex: 1,
                    explanation: "VSEPR 이론은 원자가 껍질의 전자쌍들이 서로 반발하여 분자의 모양을 결정한다는 이론입니다.",
                    hint: "전자쌍들이 서로 멀어지려고 하는 현상을 설명하는 이론입니다."
                },
                {
                    question: "분자의 극성을 결정하는 요인은?",
                    type: "multiple-choice",
                    options: ["분자의 크기", "분자의 모양과 극성 결합", "원자의 개수", "분자량"],
                    correctIndex: 1,
                    explanation: "분자의 극성은 극성 결합의 존재와 분자의 대칭성에 의해 결정됩니다.",
                    hint: "결합의 극성과 분자 전체의 대칭성을 고려해보세요."
                },
                {
                    question: "암모니아(NH₃) 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["평면 삼각형", "삼각뿔형", "정사면체형", "직선형"],
                    correctIndex: 1,
                    explanation: "암모니아는 질소의 비공유 전자쌍 때문에 삼각뿔형 구조를 가집니다.",
                    hint: "질소 원자의 비공유 전자쌍을 고려해보세요."
                },
                {
                    question: "이산화탄소(CO₂)가 무극성인 이유는?",
                    type: "multiple-choice",
                    options: ["극성 결합이 없어서", "직선형 대칭 구조", "쌍극자 모멘트가 커서", "이온성 화합물이라서"],
                    correctIndex: 1,
                    explanation: "CO₂는 직선형 대칭 구조로 인해 쌍극자 모멘트가 상쇄되어 무극성입니다.",
                    hint: "O=C=O 구조의 대칭성을 생각해보세요."
                },
                {
                    question: "다음 중 직선형 분자는?",
                    type: "multiple-choice",
                    options: ["H₂O", "NH₃", "CO₂", "CH₄"],
                    correctIndex: 2,
                    explanation: "이산화탄소(CO₂)는 O=C=O 구조로 직선형 분자입니다.",
                    hint: "탄소 원자 주위에 2개의 이중결합이 있는 분자를 찾아보세요."
                },
                {
                    question: "분자의 모양을 결정하는 주요 요인은?",
                    type: "multiple-choice",
                    options: ["원자의 크기", "전자쌍의 반발", "원자량", "결합 에너지"],
                    correctIndex: 1,
                    explanation: "VSEPR 이론에 따르면 전자쌍들의 반발이 분자의 모양을 결정합니다.",
                    hint: "전자들은 서로 밀어내려는 성질이 있습니다."
                },
                {
                    question: "BeF₂ 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["굽은형", "직선형", "삼각형", "정사면체형"],
                    correctIndex: 1,
                    explanation: "BeF₂는 베릴륨 주위에 2개의 결합 전자쌍만 있어 직선형 구조입니다.",
                    hint: "2개의 전자쌍이 가장 멀리 떨어지는 배치를 생각해보세요."
                },
                {
                    question: "CHCl₃ 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["평면형", "정사면체형", "삼각뿔형", "직선형"],
                    correctIndex: 1,
                    explanation: "클로로폼(CHCl₃)은 탄소 중심에 4개의 결합이 있어 정사면체 구조입니다.",
                    hint: "탄소는 항상 4개의 결합을 만들어 정사면체를 형성합니다."
                },
                {
                    question: "H₂Se 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["직선형", "굽은형", "삼각형", "T자형"],
                    correctIndex: 1,
                    explanation: "셀렌화수소는 물과 같은 구조로 굽은형 분자입니다.",
                    hint: "물(H₂O)과 같은 족 원소의 화합물입니다."
                },
                {
                    question: "분자간 힘 중 가장 약한 것은?",
                    type: "multiple-choice",
                    options: ["수소결합", "쌍극자-쌍극자 힘", "런던 분산력", "이온-쌍극자 힘"],
                    correctIndex: 2,
                    explanation: "런던 분산력(반데르발스 힘)은 분자간 힘 중 가장 약한 힘입니다.",
                    hint: "모든 분자에 존재하지만 가장 약한 힘을 생각해보세요."
                },
                {
                    question: "극성 분자끼리 작용하는 힘은?",
                    type: "multiple-choice",
                    options: ["런던 분산력", "쌍극자-쌍극자 힘", "이온결합", "금속결합"],
                    correctIndex: 1,
                    explanation: "극성 분자들은 부분적 양전하와 음전하 사이의 쌍극자-쌍극자 힘으로 상호작용합니다.",
                    hint: "극성 분자의 δ+와 δ- 사이의 인력을 생각해보세요."
                },
                {
                    question: "CCl₄가 무극성인 이유는?",
                    type: "multiple-choice",
                    options: ["C-Cl 결합이 무극성이라서", "분자가 대칭구조라서", "이온화합물이라서", "분자량이 크다서"],
                    correctIndex: 1,
                    explanation: "사염화탄소는 정사면체 대칭 구조로 인해 극성 결합들의 쌍극자가 상쇄되어 무극성입니다.",
                    hint: "정사면체 구조에서 결합들의 방향을 생각해보세요."
                },
                {
                    question: "분자의 끓는점을 결정하는 주요 요인은?",
                    type: "multiple-choice",
                    options: ["분자량만", "분자간 힘만", "분자량과 분자간 힘 모두", "원자 개수만"],
                    correctIndex: 2,
                    explanation: "분자의 끓는점은 분자량과 분자간 힘(수소결합, 쌍극자 힘 등) 모두에 의해 결정됩니다.",
                    hint: "물과 에탄올의 끓는점 차이를 생각해보세요."
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
                },
                {
                    question: "양이온은 어떻게 형성되나요?",
                    type: "multiple-choice",
                    options: ["전자를 얻어서", "전자를 잃어서", "양성자를 얻어서", "중성자를 잃어서"],
                    correctIndex: 1,
                    explanation: "양이온은 원자가 전자를 잃어서 양전하를 띠게 된 이온입니다.",
                    hint: "양전하를 띠려면 어떤 입자가 줄어들어야 할까요?"
                },
                {
                    question: "다음 중 이온화합물은?",
                    type: "multiple-choice",
                    options: ["H₂O", "CO₂", "CaF₂", "CH₄"],
                    correctIndex: 2,
                    explanation: "CaF₂(플루오린화칼슘)는 금속(Ca)과 비금속(F)이 결합한 이온화합물입니다.",
                    hint: "금속과 비금속의 결합을 찾아보세요."
                },
                {
                    question: "나트륨 이온(Na⁺)의 전자 개수는?",
                    type: "multiple-choice",
                    options: ["10개", "11개", "12개", "23개"],
                    correctIndex: 0,
                    explanation: "나트륨 원자(11개 전자)가 1개 전자를 잃어 Na⁺가 되므로 10개 전자를 가집니다.",
                    hint: "나트륨 원자에서 전자 1개가 빠진 상태입니다."
                },
                {
                    question: "이온결합이 형성되는 주요 원인은?",
                    type: "multiple-choice",
                    options: ["공유전자쌍", "정전기적 인력", "자기장", "핵력"],
                    correctIndex: 1,
                    explanation: "이온결합은 양이온과 음이온 사이의 정전기적 인력에 의해 형성됩니다.",
                    hint: "반대 전하끼리 끌어당기는 힘을 생각해보세요."
                },
                {
                    question: "다음 중 음이온은?",
                    type: "multiple-choice",
                    options: ["Na⁺", "Ca²⁺", "Cl⁻", "K⁺"],
                    correctIndex: 2,
                    explanation: "Cl⁻(염화 이온)은 전자를 얻어 음전하를 띠는 음이온입니다.",
                    hint: "음의 전하(-)를 가진 이온을 찾아보세요."
                },
                {
                    question: "염화칼슘(CaCl₂)에서 칼슘 이온의 전하는?",
                    type: "multiple-choice",
                    options: ["Ca⁺", "Ca²⁺", "Ca³⁺", "Ca⁻"],
                    correctIndex: 1,
                    explanation: "칼슘은 2족 원소로 2개의 전자를 잃어 Ca²⁺ 이온이 됩니다.",
                    hint: "칼슘은 알칼리 토금속 원소입니다."
                },
                {
                    question: "이온결합 화합물이 물에 잘 녹는 이유는?",
                    type: "multiple-choice",
                    options: ["물이 무극성이라서", "이온이 물 분자에 둘러싸이기 때문", "공유결합이 약해서", "분자량이 작아서"],
                    correctIndex: 1,
                    explanation: "물은 극성 분자로 이온들을 둘러싸서 용해시킵니다(수화 현상).",
                    hint: "물 분자의 극성을 생각해보세요."
                },
                {
                    question: "다음 중 이온화 에너지가 가장 큰 원소는?",
                    type: "multiple-choice",
                    options: ["Li", "Na", "K", "Rb"],
                    correctIndex: 0,
                    explanation: "이온화 에너지는 원자 크기가 작을수록 큽니다. Li가 가장 작으므로 이온화 에너지가 가장 큽니다.",
                    hint: "같은 족에서 위로 갈수록 원자가 작아집니다."
                },
                {
                    question: "전자친화도가 가장 큰 원소는?",
                    type: "multiple-choice",
                    options: ["F", "Cl", "Br", "I"],
                    correctIndex: 1,
                    explanation: "염소(Cl)가 가장 큰 전자친화도를 가집니다.",
                    hint: "할로겐족에서 주기의 중간 정도에 있는 원소입니다."
                },
                {
                    question: "이온 반지름과 원자 반지름의 관계는?",
                    type: "multiple-choice",
                    options: ["양이온 > 원자 > 음이온", "음이온 > 원자 > 양이온", "원자 > 양이온 > 음이온", "모두 같다"],
                    correctIndex: 1,
                    explanation: "전자를 얻으면 크기가 커지고(음이온), 전자를 잃으면 크기가 작아집니다(양이온).",
                    hint: "전자를 얻거나 잃을 때 크기 변화를 생각해보세요."
                },
                {
                    question: "다음 이온 화합물들을 격자 에너지가 큰 순서로 배열하세요.",
                    type: "sequence",
                    steps: ["LiF", "NaCl", "KBr", "CsI"],
                    correctOrder: [0, 1, 2, 3],
                    explanation: "격자 에너지는 이온의 전하가 클수록, 크기가 작을수록 큽니다.",
                    hint: "이온의 크기와 전하를 고려해보세요."
                },
                {
                    question: "이온 화합물 형성 과정을 올바른 순서로 배열하세요.",
                    type: "sequence",
                    steps: ["금속 원자가 전자를 잃는다", "비금속 원자가 전자를 얻는다", "양이온과 음이온이 형성된다", "정전기적 인력으로 결합한다"],
                    correctOrder: [0, 1, 2, 3],
                    explanation: "이온화합물은 전자 이동 → 이온 형성 → 정전기적 결합 순서로 형성됩니다.",
                    hint: "전자의 이동부터 최종 결합까지의 과정을 생각해보세요."
                },
                {
                    question: "다음 이온들을 양이온과 음이온으로 분류하세요.",
                    type: "drag-drop",
                    items: ["Na⁺", "Cl⁻", "Ca²⁺", "O²⁻", "Al³⁺", "S²⁻", "Mg²⁺", "F⁻"],
                    categories: {
                        "양이온": ["Na⁺", "Ca²⁺", "Al³⁺", "Mg²⁺"],
                        "음이온": ["Cl⁻", "O²⁻", "S²⁻", "F⁻"]
                    },
                    explanation: "양이온은 전자를 잃어 양전하를 띠고, 음이온은 전자를 얻어 음전하를 띱니다.",
                    hint: "전하의 부호를 확인해보세요."
                },
                {
                    question: "소금(NaCl) 결정에서 Na⁺ 하나 주위에 몇 개의 Cl⁻이 있나요?",
                    type: "multiple-choice",
                    options: ["4개", "6개", "8개", "12개"],
                    correctIndex: 1,
                    explanation: "NaCl은 면심입방 구조로 각 이온 주위에 6개의 반대 이온이 배치됩니다.",
                    hint: "이온 결정의 배위수를 생각해보세요."
                },
                {
                    question: "이온화합물의 용융점이 높은 이유를 설명하세요.",
                    type: "short-answer",
                    keywords: ["강한", "정전기", "인력", "결합"],
                    answer: "이온들 사이의 강한 정전기적 인력 때문",
                    explanation: "양이온과 음이온 사이의 강한 쿨롱 힘으로 인해 높은 에너지가 필요합니다.",
                    hint: "반대 전하끼리의 인력을 생각해보세요."
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
                },
                {
                    question: "결합 에너지가 클수록 결합은?",
                    type: "multiple-choice",
                    options: ["약해진다", "강해진다", "변하지 않는다", "끊어진다"],
                    correctIndex: 1,
                    explanation: "결합 에너지가 클수록 원자들 사이의 결합이 강해집니다.",
                    hint: "결합을 끊는 데 필요한 에너지를 생각해보세요."
                },
                {
                    question: "다음 중 결합 길이가 가장 짧은 것은?",
                    type: "multiple-choice",
                    options: ["C-C", "C=C", "C≡C", "모두 같다"],
                    correctIndex: 2,
                    explanation: "결합 차수가 높을수록 결합 길이가 짧아집니다. C≡C가 가장 짧습니다.",
                    hint: "전자를 많이 공유할수록 원자들이 더 가까워집니다."
                },
                {
                    question: "N₂ 분자의 결합 차수는?",
                    type: "multiple-choice",
                    options: ["1", "2", "3", "4"],
                    correctIndex: 2,
                    explanation: "질소 분자는 N≡N 삼중결합을 하므로 결합 차수가 3입니다.",
                    hint: "질소 원자가 옥텟을 만족하는 방법을 생각해보세요."
                },
                {
                    question: "결합 극성이 가장 작은 것은?",
                    type: "multiple-choice",
                    options: ["H-F", "H-Cl", "H-Br", "H-I"],
                    correctIndex: 3,
                    explanation: "H-I는 전기음성도 차이가 가장 작아 결합 극성이 가장 작습니다.",
                    hint: "할로겐족에서 아래로 갈수록 전기음성도가 감소합니다."
                },
                {
                    question: "다음 중 가장 안정한 분자는?",
                    type: "multiple-choice",
                    options: ["H₂", "O₂", "N₂", "F₂"],
                    correctIndex: 2,
                    explanation: "N₂는 삼중결합으로 가장 강한 결합을 가져 가장 안정합니다.",
                    hint: "결합 에너지가 가장 큰 분자를 찾아보세요."
                },
                {
                    question: "공유결합에서 전자는 어떻게 분포하나요?",
                    type: "multiple-choice",
                    options: ["한쪽 원자에만", "두 원자 사이에 균등하게", "전기음성도에 따라", "무작위로"],
                    correctIndex: 2,
                    explanation: "공유결합에서 전자는 두 원자의 전기음성도 차이에 따라 분포합니다.",
                    hint: "극성 결합과 무극성 결합의 차이를 생각해보세요."
                },
                {
                    question: "결합 해리 에너지란?",
                    type: "multiple-choice",
                    options: ["결합을 만드는 에너지", "결합을 끊는 에너지", "전자를 얻는 에너지", "이온화 에너지"],
                    correctIndex: 1,
                    explanation: "결합 해리 에너지는 화학 결합을 끊어서 중성 원자로 만드는 데 필요한 에너지입니다.",
                    hint: "해리는 '나뉘어진다'는 뜻입니다."
                },
                {
                    question: "O₂ 분자의 결합 차수는?",
                    type: "multiple-choice",
                    options: ["1", "2", "3", "1.5"],
                    correctIndex: 1,
                    explanation: "산소 분자는 O=O 이중결합을 하므로 결합 차수가 2입니다.",
                    hint: "산소 원자가 옥텟을 만족하는 결합 방법을 생각해보세요."
                },
                {
                    question: "결합의 극성을 나타내는 기호는?",
                    type: "multiple-choice",
                    options: ["α, β", "δ+, δ-", "σ, π", "+, -"],
                    correctIndex: 1,
                    explanation: "δ+(델타 플러스)와 δ-(델타 마이너스)는 부분전하를 나타내는 기호입니다.",
                    hint: "부분적인 양전하와 음전하를 나타내는 기호입니다."
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
                    question: "주기율표에서 같은 족의 원소들이 가지는 공통점은?",
                    type: "multiple-choice",
                    options: ["같은 원자량", "같은 원자가 전자 수", "같은 전자 껍질 수", "같은 밀도"],
                    correctIndex: 1,
                    explanation: "같은 족의 원소들은 가장 바깥 전자껍질의 전자 수(원자가 전자 수)가 같습니다.",
                    hint: "족은 세로줄, 주기는 가로줄입니다."
                },
                {
                    question: "네온(Ne)이 화학적으로 안정한 이유는?",
                    type: "multiple-choice",
                    options: ["원자량이 크기 때문", "원자가 전자가 8개이기 때문", "금속이기 때문", "전기음성도가 크기 때문"],
                    correctIndex: 1,
                    explanation: "네온은 원자가 전자가 8개로 옥텟을 만족하여 화학적으로 매우 안정합니다.",
                    hint: "비활성 기체의 특성을 생각해보세요."
                },
                {
                    question: "화학 결합이 일어나는 주된 이유는?",
                    type: "multiple-choice",
                    options: ["원자량을 줄이기 위해", "에너지를 낮춰 안정해지기 위해", "크기를 키우기 위해", "속도를 빠르게 하기 위해"],
                    correctIndex: 1,
                    explanation: "원자들은 결합을 통해 에너지가 낮은 안정한 상태가 되려고 합니다.",
                    hint: "자연은 항상 에너지가 낮은 상태를 선호합니다."
                },
                {
                    question: "원소를 금속과 비금속으로 구분하는 기준이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["전기 전도성", "연성과 전성", "원자량", "금속 광택"],
                    correctIndex: 2,
                    explanation: "원자량은 금속과 비금속을 구분하는 기준이 아닙니다.",
                    hint: "물리적 성질을 기준으로 구분됩니다."
                },
                {
                    question: "다음 중 비금속 원소는?",
                    type: "multiple-choice",
                    options: ["철(Fe)", "황(S)", "구리(Cu)", "아연(Zn)"],
                    correctIndex: 1,
                    explanation: "황(S)은 비금속 원소입니다. 나머지는 모두 금속입니다.",
                    hint: "주기율표에서 오른쪽에 위치한 원소들이 비금속입니다."
                },
                {
                    question: "화학식 H₂SO₄에서 각 원소의 개수를 올바르게 나타낸 것은?",
                    type: "multiple-choice",
                    options: ["H:1, S:1, O:4", "H:2, S:1, O:4", "H:2, S:2, O:4", "H:1, S:2, O:4"],
                    correctIndex: 1,
                    explanation: "H₂SO₄는 수소 2개, 황 1개, 산소 4개로 구성되어 있습니다.",
                    hint: "첨자가 없으면 1개입니다."
                },
                {
                    question: "원자 번호의 의미는?",
                    type: "multiple-choice",
                    options: ["중성자 수", "양성자 수", "전자 수", "핵자 수"],
                    correctIndex: 1,
                    explanation: "원자 번호는 원자핵에 있는 양성자의 개수를 나타냅니다.",
                    hint: "원소의 정체성을 결정하는 입자를 생각해보세요."
                },
                {
                    question: "동위원소란?",
                    type: "multiple-choice",
                    options: ["같은 전자 수", "같은 양성자 수, 다른 중성자 수", "같은 중성자 수", "같은 원자량"],
                    correctIndex: 1,
                    explanation: "동위원소는 양성자 수는 같지만 중성자 수가 다른 원자들입니다.",
                    hint: "탄소-12와 탄소-14의 차이점을 생각해보세요."
                },
                {
                    question: "분자량과 원자량의 관계는?",
                    type: "multiple-choice",
                    options: ["분자량 = 원자량의 합", "분자량 > 원자량", "분자량 < 원자량", "관계없음"],
                    correctIndex: 0,
                    explanation: "분자량은 분자를 구성하는 모든 원자량의 합입니다.",
                    hint: "H₂O의 분자량 = H(1) × 2 + O(16) = 18"
                },
                {
                    question: "아보가드로 수의 값은?",
                    type: "multiple-choice",
                    options: ["6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴", "6.02 × 10²⁵"],
                    correctIndex: 1,
                    explanation: "아보가드로 수는 6.02 × 10²³ 개/mol입니다.",
                    hint: "1몰에 포함된 입자의 개수입니다."
                },
                {
                    question: "몰(mole)의 정의는?",
                    type: "multiple-choice",
                    options: ["질량의 단위", "부피의 단위", "물질량의 단위", "농도의 단위"],
                    correctIndex: 2,
                    explanation: "몰은 물질량의 SI 기본 단위입니다.",
                    hint: "아보가드로 수만큼의 입자를 포함하는 양입니다."
                },
                {
                    question: "표준 상태(STP)에서 기체 1몰의 부피는?",
                    type: "multiple-choice",
                    options: ["22.4 L", "24.5 L", "20.0 L", "25.0 L"],
                    correctIndex: 0,
                    explanation: "STP(0℃, 1기압)에서 모든 기체 1몰의 부피는 22.4L입니다.",
                    hint: "아보가드로의 법칙에 의한 결과입니다."
                },
                {
                    question: "화학 반응식의 균형을 맞추는 이유는?",
                    type: "multiple-choice",
                    options: ["보기 좋게 하려고", "질량 보존 법칙 때문", "에너지 보존 때문", "속도를 빠르게 하려고"],
                    correctIndex: 1,
                    explanation: "질량 보존 법칙에 따라 반응 전후 원자의 개수가 같아야 합니다.",
                    hint: "라부아지에의 질량 보존 법칙을 생각해보세요."
                },
                {
                    question: "이온이란?",
                    type: "multiple-choice",
                    options: ["전하를 가진 원자나 분자", "중성인 원자", "방사성 원자", "큰 원자"],
                    correctIndex: 0,
                    explanation: "이온은 전자를 얻거나 잃어서 전하를 띠게 된 원자나 분자입니다.",
                    hint: "Na⁺, Cl⁻와 같이 전하를 표시하는 입자들입니다."
                },
                {
                    question: "화학 결합의 종류가 아닌 것은?",
                    type: "multiple-choice",
                    options: ["이온결합", "공유결합", "금속결합", "핵력결합"],
                    correctIndex: 3,
                    explanation: "핵력결합은 원자핵 내부의 힘으로 화학 결합이 아닙니다.",
                    hint: "화학 결합은 원자가 전자가 관여하는 결합입니다."
                },
                {
                    question: "산과 염기의 공통점은?",
                    type: "multiple-choice",
                    options: ["모두 신맛", "모두 쓴맛", "모두 전해질", "모두 기체"],
                    correctIndex: 2,
                    explanation: "산과 염기는 모두 물에 녹아 이온을 만드는 전해질입니다.",
                    hint: "이온을 만들어 전기를 통하게 합니다."
                },
                {
                    question: "pH 7인 용액의 성질은?",
                    type: "multiple-choice",
                    options: ["강산성", "약산성", "중성", "염기성"],
                    correctIndex: 2,
                    explanation: "pH 7은 중성을 나타내며, 순수한 물의 pH입니다.",
                    hint: "pH 스케일에서 7은 중간값입니다."
                },
                {
                    question: "산화와 환원을 구분하는 기준은?",
                    type: "multiple-choice",
                    options: ["색깔 변화", "전자의 이동", "온도 변화", "부피 변화"],
                    correctIndex: 1,
                    explanation: "산화는 전자를 잃는 것, 환원은 전자를 얻는 것입니다.",
                    hint: "OIL RIG - Oxidation Is Loss, Reduction Is Gain"
                },
                {
                    question: "촉매의 특징이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["반응속도 증가", "활성화에너지 감소", "반응 후 소모됨", "적은 양으로 효과적"],
                    correctIndex: 2,
                    explanation: "촉매는 반응 후에도 그대로 남아있어 계속 사용할 수 있습니다.",
                    hint: "촉매는 반응을 도와주지만 자신은 변하지 않습니다."
                },
                {
                    question: "화학식량 단위는?",
                    type: "multiple-choice",
                    options: ["g", "amu (u)", "kg", "mol"],
                    correctIndex: 1,
                    explanation: "화학식량의 단위는 원자질량단위(amu 또는 u)입니다.",
                    hint: "원자나 분자의 상대적 질량을 나타내는 단위입니다."
                },
                {
                    question: "원자 번호가 의미하는 것은?",
                    type: "multiple-choice",
                    options: ["중성자 수", "양성자 수", "전자 수", "중성자 + 전자 수"],
                    correctIndex: 1,
                    explanation: "원자 번호는 원자핵에 있는 양성자의 개수를 나타냅니다.",
                    hint: "원자의 정체성을 결정하는 기본 요소입니다."
                },
                {
                    question: "동위원소란?",
                    type: "multiple-choice",
                    options: ["양성자 수가 같고 중성자 수가 다른 원자", "중성자 수가 같고 양성자 수가 다른 원자", "전자 수가 다른 원자", "모든 것이 같은 원자"],
                    correctIndex: 0,
                    explanation: "동위원소는 같은 원소(양성자 수 동일)이지만 중성자 수가 다른 원자들입니다.",
                    hint: "탄소-12, 탄소-14 같은 예를 생각해보세요."
                },
                {
                    question: "이온과 원자의 차이점은?",
                    type: "multiple-choice",
                    options: ["양성자 수가 다르다", "중성자 수가 다르다", "전자 수가 다르다", "원자량이 다르다"],
                    correctIndex: 2,
                    explanation: "이온은 전자를 얻거나 잃어서 전자 수가 양성자 수와 달라진 원자입니다.",
                    hint: "전하를 띠는 이유를 생각해보세요."
                },
                {
                    question: "분자와 화합물의 관계를 올바르게 설명한 것은?",
                    type: "multiple-choice",
                    options: ["모든 분자는 화합물이다", "모든 화합물은 분자다", "일부 화합물은 분자가 아니다", "분자와 화합물은 관련이 없다"],
                    correctIndex: 2,
                    explanation: "이온화합물 같은 화합물은 분자를 형성하지 않습니다.",
                    hint: "소금(NaCl)은 화합물이지만 분자가 아닙니다."
                },
                {
                    question: "원소 기호 작성 규칙으로 옳은 것은?",
                    type: "multiple-choice",
                    options: ["모두 대문자로", "모두 소문자로", "첫 글자만 대문자", "상관없다"],
                    correctIndex: 2,
                    explanation: "원소 기호는 첫 글자는 대문자, 둘째 글자부터는 소문자로 씁니다.",
                    hint: "Ca, Cl, Na 등의 예를 생각해보세요."
                },
                {
                    question: "원자와 분자를 구분하는 기준은?",
                    type: "multiple-choice",
                    options: ["크기", "원소의 종류 수", "전하", "상태"],
                    correctIndex: 1,
                    explanation: "원자는 한 종류의 원소로만, 분자는 한 종류 이상의 원소로 이루어집니다.",
                    hint: "H₂는 분자, H는 원자입니다."
                },
                {
                    question: "화학 반응에서 보존되는 것은?",
                    type: "multiple-choice",
                    options: ["분자 수", "원자 수", "에너지만", "부피"],
                    correctIndex: 1,
                    explanation: "화학 반응에서는 원자의 종류와 개수가 보존됩니다(질량 보존 법칙).",
                    hint: "라부아지에의 질량 보존 법칙을 생각해보세요."
                },
                {
                    question: "몰(mol)의 정의로 가장 적절한 것은?",
                    type: "multiple-choice",
                    options: ["6.02×10²³개의 입자를 나타내는 단위", "1g의 질량", "1L의 부피", "1개의 원자"],
                    correctIndex: 0,
                    explanation: "몰은 아보가드로 수(6.02×10²³)만큼의 입자를 나타내는 단위입니다.",
                    hint: "아보가드로 수를 기억해보세요."
                },
                {
                    question: "화학식에서 계수와 첨자의 역할이 다른 이유는?",
                    type: "short-answer",
                    keywords: ["분자", "개수", "구성", "비율"],
                    answer: "계수는 분자의 개수, 첨자는 분자 내 원자의 개수를 나타내기 때문",
                    explanation: "계수는 화학반응에서 분자의 개수를, 첨자는 분자 구성을 나타냅니다.",
                    hint: "2H₂O에서 2는 계수, ₂는 첨자입니다."
                },
                {
                    question: "물질의 상태 변화에서 보존되는 것은?",
                    type: "multiple-choice",
                    options: ["분자 수", "부피", "밀도", "질량"],
                    correctIndex: 3,
                    explanation: "상태가 변해도 질량은 보존됩니다(질량 보존 법칙).",
                    hint: "얼음이 물로 녹을 때 변하지 않는 것을 생각해보세요."
                },
                {
                    question: "화학적 성질과 물리적 성질을 구분하는 기준은?",
                    type: "multiple-choice",
                    options: ["측정 방법", "물질의 본질 변화 여부", "관찰 시간", "실험 도구"],
                    correctIndex: 1,
                    explanation: "물질의 본질이 변하면 화학적 성질, 변하지 않으면 물리적 성질입니다.",
                    hint: "연소는 화학적, 녹는점은 물리적 성질입니다."
                },
                {
                    question: "원소의 화학적 성질을 결정하는 주요 요인은?",
                    type: "multiple-choice",
                    options: ["원자량", "원자가 전자", "중성자 수", "원자 반지름"],
                    correctIndex: 1,
                    explanation: "원자가 전자의 수와 배치가 원소의 화학적 성질을 결정합니다.",
                    hint: "같은 족의 원소들이 비슷한 성질을 갖는 이유를 생각해보세요."
                },
                {
                    question: "농도를 나타내는 단위가 아닌 것은?",
                    type: "multiple-choice",
                    options: ["몰농도(M)", "퍼센트농도(%)", "몰랄농도(m)", "밀도(g/mL)"],
                    correctIndex: 3,
                    explanation: "밀도는 농도가 아니라 단위 부피당 질량을 나타내는 물리량입니다.",
                    hint: "농도는 용질과 용매의 비율을 나타냅니다."
                },
                {
                    question: "화학 반응의 속도에 영향을 주지 않는 요인은?",
                    type: "multiple-choice",
                    options: ["온도", "농도", "촉매", "용기의 재질"],
                    correctIndex: 3,
                    explanation: "용기의 재질은 일반적으로 반응 속도에 영향을 주지 않습니다.",
                    hint: "반응하는 물질 자체나 반응 조건과 관련된 요인들을 생각해보세요."
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
                },
                {
                    question: "다음 중 화합 반응(synthesis reaction)은?",
                    type: "multiple-choice",
                    options: ["2H₂O → 2H₂ + O₂", "2Na + Cl₂ → 2NaCl", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu"],
                    correctIndex: 1,
                    explanation: "화합 반응은 두 개 이상의 물질이 결합하여 하나의 물질을 만드는 반응입니다.",
                    hint: "A + B → AB 형태의 반응을 찾아보세요."
                },
                {
                    question: "분해 반응의 특징은?",
                    type: "multiple-choice",
                    options: ["하나가 여러 개로", "여러 개가 하나로", "원소가 바뀜", "상태만 변함"],
                    correctIndex: 0,
                    explanation: "분해 반응은 하나의 화합물이 여러 개의 간단한 물질로 분해되는 반응입니다.",
                    hint: "AB → A + B 형태를 생각해보세요."
                },
                {
                    question: "치환 반응에서 일어나는 일은?",
                    type: "multiple-choice",
                    options: ["새로운 원소 생성", "원소들의 자리 바뀜", "에너지만 변화", "상태 변화만"],
                    correctIndex: 1,
                    explanation: "치환 반응은 한 원소가 화합물 속의 다른 원소와 자리를 바꾸는 반응입니다.",
                    hint: "A + BC → AC + B 형태를 생각해보세요."
                },
                {
                    question: "발열 반응의 특징은?",
                    type: "multiple-choice",
                    options: ["온도가 내려감", "에너지를 흡수", "에너지를 방출", "온도 변화 없음"],
                    correctIndex: 2,
                    explanation: "발열 반응은 에너지를 방출하여 주변 온도가 올라가는 반응입니다.",
                    hint: "손난티나 연소 반응을 생각해보세요."
                },
                {
                    question: "흡열 반응의 예는?",
                    type: "multiple-choice",
                    options: ["연소", "중화", "광합성", "호흡"],
                    correctIndex: 2,
                    explanation: "광합성은 빛 에너지를 흡수하여 포도당을 만드는 흡열 반응입니다.",
                    hint: "에너지를 흡수해야 일어나는 반응을 생각해보세요."
                },
                {
                    question: "촉매의 역할은?",
                    type: "multiple-choice",
                    options: ["반응물이 됨", "생성물이 됨", "반응속도 증가", "반응 방향 바꿈"],
                    correctIndex: 2,
                    explanation: "촉매는 자신은 변하지 않으면서 반응속도를 빠르게 해주는 물질입니다.",
                    hint: "반응 후에 그대로 남아있으면서 도와주는 역할을 생각해보세요."
                },
                {
                    question: "화학 반응에서 질량이 보존되는 이유는?",
                    type: "multiple-choice",
                    options: ["원자가 생성되어서", "원자가 소멸되어서", "원자 개수가 변하지 않아서", "분자가 커져서"],
                    correctIndex: 2,
                    explanation: "화학 반응에서는 원자가 생성되거나 소멸되지 않고 재배열만 일어나므로 질량이 보존됩니다.",
                    hint: "원자는 영원불멸하다는 원리를 생각해보세요."
                },
                {
                    question: "다음 중 침전 반응은?",
                    type: "multiple-choice",
                    options: ["HCl + NaOH → NaCl + H₂O", "AgNO₃ + NaCl → AgCl↓ + NaNO₃", "CH₄ + O₂ → CO₂ + H₂O", "CaCO₃ → CaO + CO₂"],
                    correctIndex: 1,
                    explanation: "침전 반응은 용해도가 작은 물질이 고체로 석출되는 반응입니다.",
                    hint: "↓ 기호가 있는 반응을 찾아보세요."
                },
                {
                    question: "기체 발생 반응의 예는?",
                    type: "multiple-choice",
                    options: ["NaCl + AgNO₃ → AgCl + NaNO₃", "Zn + HCl → ZnCl₂ + H₂↑", "HCl + NaOH → NaCl + H₂O", "CuSO₄ + Fe → FeSO₄ + Cu"],
                    correctIndex: 1,
                    explanation: "아연과 염산의 반응에서 수소 기체가 발생합니다.",
                    hint: "↑ 기호가 있는 반응을 찾아보세요."
                },
                {
                    question: "복분해 반응의 특징은?",
                    type: "multiple-choice",
                    options: ["A + B → AB", "AB → A + B", "A + BC → AC + B", "AB + CD → AD + CB"],
                    correctIndex: 3,
                    explanation: "복분해 반응은 두 화합물이 이온을 서로 교환하는 반응입니다.",
                    hint: "이온들이 파트너를 바꾸는 반응을 생각해보세요."
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
                {
                    question: "설탕을 물에 녹였을 때 일어나는 현상은?",
                    type: "multiple-choice",
                    options: ["화학 변화", "물리 변화", "분해 반응", "산화 반응"],
                    correctIndex: 1,
                    explanation: "설탕이 물에 녹는 것은 분자 구조는 변하지 않는 물리 변화입니다.",
                    hint: "설탕의 맛이 그대로 남아있는 이유를 생각해보세요."
                },
                {
                    question: "소금(NaCl)이 물에 잘 녹는 이유는?",
                    type: "multiple-choice",
                    options: ["무극성이라서", "이온성 화합물이라서", "공유결합이라서", "크기가 작아서"],
                    correctIndex: 1,
                    explanation: "소금은 이온화합물로 극성인 물 분자와 잘 섞입니다.",
                    hint: "'비슷한 것끼리 녹는다'는 원리를 생각해보세요."
                },
                {
                    question: "달걀이 익을 때 일어나는 변화는?",
                    type: "multiple-choice",
                    options: ["물리 변화", "화학 변화", "상태 변화", "용해"],
                    correctIndex: 1,
                    explanation: "달걀이 익으면서 단백질 구조가 바뀌므로 화학 변화입니다.",
                    hint: "익은 달걀을 다시 날달걀로 만들 수 있는지 생각해보세요."
                },
                {
                    question: "드라이아이스가 승화하는 현상은?",
                    type: "multiple-choice",
                    options: ["고체→액체", "액체→기체", "고체→기체", "기체→고체"],
                    correctIndex: 2,
                    explanation: "승화는 고체가 액체를 거치지 않고 바로 기체가 되는 현상입니다.",
                    hint: "드라이아이스에서 물이 나오지 않는 이유를 생각해보세요."
                },
                {
                    question: "과일이 갈변하는 현상의 주된 원인은?",
                    type: "multiple-choice",
                    options: ["수분 증발", "산화 반응", "발효", "응고"],
                    correctIndex: 1,
                    explanation: "과일이 갈색으로 변하는 것은 공기 중 산소에 의한 산화 반응입니다.",
                    hint: "사과를 자르고 두면 갈색으로 변하는 이유를 생각해보세요."
                },
                {
                    question: "비타민 C의 주요 기능은?",
                    type: "multiple-choice",
                    options: ["산화 촉진", "항산화", "산성화", "중화"],
                    correctIndex: 1,
                    explanation: "비타민 C는 강력한 항산화제로 활성산소를 제거합니다.",
                    hint: "과일이 갈변하는 것을 방지하는 역할을 생각해보세요."
                },
                {
                    question: "카페인이 각성 효과를 나타내는 이유는?",
                    type: "multiple-choice",
                    options: ["뇌의 수용체 차단", "혈압 상승", "혈당 증가", "체온 상승"],
                    correctIndex: 0,
                    explanation: "카페인은 아데노신 수용체를 차단하여 졸음을 방지합니다.",
                    hint: "카페인이 뇌에서 졸음을 유발하는 물질을 막는다고 생각해보세요."
                },
                {
                    question: "치약에 포함된 플루오라이드(불소)의 역할은?",
                    type: "multiple-choice",
                    options: ["치아 미백", "충치 예방", "잇몸 강화", "입냄새 제거"],
                    correctIndex: 1,
                    explanation: "불소는 치아 에나멜을 강화하여 충치를 예방합니다.",
                    hint: "치아가 산성에 강해지도록 도와주는 역할을 생각해보세요."
                },
                {
                    question: "연료 전지의 장점이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["친환경적", "효율이 높음", "소음이 적음", "설치비가 저렴함"],
                    correctIndex: 3,
                    explanation: "연료 전지는 초기 설치비용이 높다는 단점이 있습니다.",
                    hint: "새로운 기술은 보통 초기 비용이 어떤지 생각해보세요."
                },
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
                },
                {
                    question: "에틸렌(C₂H₄) 분자에서 탄소-탄소 결합은?",
                    type: "multiple-choice",
                    options: ["단일결합", "이중결합", "삼중결합", "배위결합"],
                    correctIndex: 1,
                    explanation: "에틸렌에서 두 탄소 원자는 C=C 이중결합으로 연결되어 있습니다.",
                    hint: "C₂H₄에서 각 탄소가 4개의 결합을 만들어야 합니다."
                },
                {
                    question: "HCN 분자에서 탄소와 질소 사이의 결합은?",
                    type: "multiple-choice",
                    options: ["단일결합", "이중결합", "삼중결합", "배위결합"],
                    correctIndex: 2,
                    explanation: "시안화수소에서 탄소와 질소는 C≡N 삼중결합으로 연결됩니다.",
                    hint: "HCN에서 탄소와 질소가 옥텟을 만족하는 방법을 생각해보세요."
                },
                {
                    question: "극성 공유결합이 형성되는 조건은?",
                    type: "multiple-choice",
                    options: ["같은 원소끼리 결합", "전기음성도 차이가 클 때", "금속과 비금속의 결합", "이온화 에너지가 클 때"],
                    correctIndex: 1,
                    explanation: "결합하는 원자들의 전기음성도 차이가 클수록 극성 공유결합이 형성됩니다.",
                    hint: "전자를 끌어당기는 능력의 차이를 생각해보세요."
                },
                {
                    question: "다음 중 결합 극성이 가장 큰 것은?",
                    type: "multiple-choice",
                    options: ["C-H", "N-H", "O-H", "F-H"],
                    correctIndex: 3,
                    explanation: "플루오린이 가장 큰 전기음성도를 가지므로 F-H 결합의 극성이 가장 큽니다.",
                    hint: "주기율표에서 전기음성도가 가장 큰 원소를 찾아보세요."
                },
                {
                    question: "공명 구조(resonance)란?",
                    type: "multiple-choice",
                    options: ["분자가 진동하는 것", "여러 Lewis 구조가 가능한 것", "전자가 이동하는 것", "결합이 끊어지는 것"],
                    correctIndex: 1,
                    explanation: "공명은 하나의 분자를 여러 개의 Lewis 구조로 나타낼 수 있는 현상입니다.",
                    hint: "벤젠과 같은 분자의 구조를 생각해보세요."
                },
                {
                    question: "P₄ 분자에서 인 원자 하나가 만드는 공유결합의 수는?",
                    type: "multiple-choice",
                    options: ["1개", "2개", "3개", "4개"],
                    correctIndex: 2,
                    explanation: "P₄는 정사면체 구조로 각 인 원자는 3개의 다른 인 원자와 결합합니다.",
                    hint: "인 원자의 바깥 전자 개수는 5개입니다."
                },
                {
                    question: "배위결합의 특징으로 옳은 것은?",
                    type: "multiple-choice",
                    options: ["두 원자가 전자를 하나씩 제공", "한 원자가 전자쌍을 모두 제공", "전자가 한쪽으로 완전히 이동", "자유전자가 결합에 참여"],
                    correctIndex: 1,
                    explanation: "배위결합은 한 원자가 전자쌍을 모두 제공하여 형성되는 공유결합의 특별한 경우입니다.",
                    hint: "NH₄⁺ 이온의 형성 과정을 생각해보세요."
                }
            ]
        },
        {
            category: 'molecular',
            templates: [
                {
                    question: "BF₃ 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["직선형", "삼각평면형", "삼각뿔형", "정사면체형"],
                    correctIndex: 1,
                    explanation: "BF₃는 붕소 주위에 3개의 결합 전자쌍만 있어 삼각평면형 구조입니다.",
                    hint: "붕소 원자의 전자 부족을 고려해보세요."
                },
                {
                    question: "분자의 쌍극자 모멘트가 0인 것은?",
                    type: "multiple-choice",
                    options: ["H₂O", "NH₃", "CO₂", "HCl"],
                    correctIndex: 2,
                    explanation: "CO₂는 직선형 대칭 구조로 쌍극자 모멘트가 상쇄되어 0입니다.",
                    hint: "대칭 구조를 가진 분자를 찾아보세요."
                },
                {
                    question: "CH₂O 분자에서 C-O 결합의 특징은?",
                    type: "multiple-choice",
                    options: ["단일결합", "이중결합", "삼중결합", "배위결합"],
                    correctIndex: 1,
                    explanation: "포름알데하이드(CH₂O)에서 탄소와 산소는 이중결합을 형성합니다.",
                    hint: "탄소가 4개, 산소가 2개의 결합을 만들어야 합니다."
                },
                {
                    question: "극성 분자와 무극성 분자를 구분하는 기준은?",
                    type: "multiple-choice",
                    options: ["분자량", "쌍극자 모멘트", "결합 개수", "원자 개수"],
                    correctIndex: 1,
                    explanation: "쌍극자 모멘트가 0이 아니면 극성 분자, 0이면 무극성 분자입니다.",
                    hint: "전기적 비대칭성을 나타내는 물리량을 생각해보세요."
                },
                {
                    question: "SF₆ 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["정사면체형", "삼각쌍뿔형", "정팔면체형", "평면 정사각형"],
                    correctIndex: 2,
                    explanation: "육플루오린화황(SF₆)은 황 원자 주위에 6개의 결합이 있어 정팔면체 구조입니다.",
                    hint: "6개의 결합 전자쌍이 가장 멀리 떨어지는 배치를 생각해보세요."
                },
                {
                    question: "PCl₅ 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["정사면체형", "삼각쌍뿔형", "정팔면체형", "평면 오각형"],
                    correctIndex: 1,
                    explanation: "오염화인(PCl₅)은 인 원자 주위에 5개의 결합이 있어 삼각쌍뿔 구조입니다.",
                    hint: "5개의 전자쌍 배치에서 3개는 평면에, 2개는 축에 위치합니다."
                },
                {
                    question: "ClF₃ 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["삼각평면형", "T자형", "직선형", "삼각뿔형"],
                    correctIndex: 1,
                    explanation: "삼플루오린화염소는 3개의 결합과 2개의 비공유 전자쌍으로 T자형 구조입니다.",
                    hint: "5개의 전자쌍 중 2개가 비공유 전자쌍인 경우를 생각해보세요."
                },
                {
                    question: "분자의 모양에서 비공유 전자쌍의 영향은?",
                    type: "multiple-choice",
                    options: ["영향이 없다", "결합각을 넓힌다", "결합각을 좁힌다", "분자를 직선형으로 만든다"],
                    correctIndex: 2,
                    explanation: "비공유 전자쌍은 공유 전자쌍보다 더 많은 공간을 차지하여 결합각을 좁힙니다.",
                    hint: "암모니아의 결합각이 109.5°보다 작은 이유를 생각해보세요."
                },
                {
                    question: "XeF₄ 분자의 모양은?",
                    type: "multiple-choice",
                    options: ["정사면체형", "평면 정사각형", "삼각쌍뿔형", "정팔면체형"],
                    correctIndex: 1,
                    explanation: "사플루오린화제논은 4개의 결합과 2개의 비공유 전자쌍으로 평면 정사각형 구조입니다.",
                    hint: "6개의 전자쌍 중 2개가 비공유 전자쌍인 경우를 생각해보세요."
                },
                {
                    question: "분자간 수소결합이 일어나는 조건은?",
                    type: "multiple-choice",
                    options: ["H가 모든 원소와 결합", "H가 N, O, F와 결합", "H가 금속과 결합", "H가 할로겐과 결합"],
                    correctIndex: 1,
                    explanation: "수소결합은 수소가 전기음성도가 매우 큰 N, O, F와 결합했을 때만 일어납니다.",
                    hint: "전기음성도가 가장 큰 3개 원소를 생각해보세요."
                },
                {
                    question: "분자의 쌍극자 모멘트를 결정하는 요인은?",
                    type: "multiple-choice",
                    options: ["결합의 극성만", "분자의 모양만", "결합의 극성과 분자의 모양", "원자의 크기만"],
                    correctIndex: 2,
                    explanation: "분자의 쌍극자 모멘트는 개별 결합의 극성과 분자 전체의 기하학적 배치에 의해 결정됩니다.",
                    hint: "극성 결합이 있어도 대칭 구조면 무극성이 될 수 있습니다."
                },
                {
                    question: "I₃⁻ 이온의 모양은?",
                    type: "multiple-choice",
                    options: ["굽은형", "직선형", "삼각형", "T자형"],
                    correctIndex: 1,
                    explanation: "삼요오드 음이온은 5개의 전자쌍 중 3개가 비공유 전자쌍이어서 직선형 구조입니다.",
                    hint: "5개 전자쌍 중 2개만 결합에 참여하는 경우를 생각해보세요."
                },
                {
                    question: "물 분자에서 H-O-H 결합각이 104.5°인 이유는?",
                    type: "multiple-choice",
                    options: ["수소가 작아서", "산소의 비공유 전자쌍 때문", "수소결합 때문", "이온성 때문"],
                    correctIndex: 1,
                    explanation: "물 분자의 산소에는 2개의 비공유 전자쌍이 있어 이들이 결합 전자쌍을 밀어내어 결합각이 줄어듭니다.",
                    hint: "정사면체 각도 109.5°보다 작아진 이유를 생각해보세요."
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
                },
                {
                    question: "결합 진동 주파수가 높을수록 결합의 특성은?",
                    type: "multiple-choice",
                    options: ["약하고 길다", "강하고 짧다", "약하고 짧다", "강하고 길다"],
                    correctIndex: 1,
                    explanation: "진동 주파수가 높을수록 결합이 강하고 길이가 짧습니다.",
                    hint: "스프링이 딱딱할수록 진동수가 높아지는 것과 같습니다."
                },
                {
                    question: "C-H, N-H, O-H 결합 중 가장 극성이 큰 것은?",
                    type: "multiple-choice",
                    options: ["C-H", "N-H", "O-H", "모두 같다"],
                    correctIndex: 2,
                    explanation: "산소의 전기음성도가 가장 크므로 O-H 결합이 가장 극성입니다.",
                    hint: "전기음성도: O > N > C"
                },
                {
                    question: "결합 차수 1.5를 가지는 것은?",
                    type: "multiple-choice",
                    options: ["벤젠의 C-C 결합", "O₂ 분자", "N₂ 분자", "H₂ 분자"],
                    correctIndex: 0,
                    explanation: "벤젠의 탄소-탄소 결합은 공명으로 인해 결합 차수가 1.5입니다.",
                    hint: "공명 구조를 가지는 분자를 생각해보세요."
                },
                {
                    question: "van der Waals 반지름과 공유 반지름의 관계는?",
                    type: "multiple-choice",
                    options: ["van der Waals > 공유", "공유 > van der Waals", "항상 같다", "원소에 따라 다름"],
                    correctIndex: 0,
                    explanation: "van der Waals 반지름이 공유 반지름보다 큽니다. 공유결합에서는 원자들이 더 가까워집니다.",
                    hint: "결합을 할 때와 하지 않을 때의 크기를 비교해보세요."
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
                    question: "결합의 이온성 비율이 가장 큰 것은?",
                    type: "multiple-choice",
                    options: ["H-F", "H-Cl", "H-Br", "H-I"],
                    correctIndex: 0,
                    explanation: "H-F는 전기음성도 차이가 가장 커서 이온성 비율이 가장 큽니다.",
                    hint: "전기음성도 차이가 클수록 이온성이 커집니다."
                },
                {
                    question: "Born-Haber 사이클에서 격자 에너지는?",
                    type: "multiple-choice",
                    options: ["항상 음수", "항상 양수", "0", "온도에 따라 변함"],
                    correctIndex: 1,
                    explanation: "격자 에너지는 이온 결정을 기체 이온으로 분해하는 데 필요한 에너지로 항상 양수입니다.",
                    hint: "결정을 분해하는 데는 에너지가 필요합니다."
                },
                {
                    question: "다음 중 가장 큰 격자 에너지를 가지는 것은?",
                    type: "multiple-choice",
                    options: ["LiF", "LiCl", "NaF", "NaCl"],
                    correctIndex: 0,
                    explanation: "LiF는 이온의 전하 곱이 크고 이온 반지름 합이 가장 작아 격자 에너지가 가장 큽니다.",
                    hint: "격자 에너지는 이온의 전하에 비례하고 거리에 반비례합니다."
                },
                {
                    question: "금속결합에서 자유전자의 역할은?",
                    type: "multiple-choice",
                    options: ["절연체 역할", "도체 역할", "반도체 역할", "역할 없음"],
                    correctIndex: 1,
                    explanation: "자유전자는 금속의 전기 전도성과 열 전도성을 담당합니다.",
                    hint: "금속이 전기를 잘 통하는 이유를 생각해보세요."
                },
                {
                    question: "합금에서 원자들 사이의 결합은?",
                    type: "multiple-choice",
                    options: ["이온결합", "공유결합", "금속결합", "반데르발스 힘"],
                    correctIndex: 2,
                    explanation: "합금은 금속들의 혼합물로 금속결합이 주된 결합입니다.",
                    hint: "구리와 아연으로 만든 황동을 생각해보세요."
                },
                {
                    question: "결합 해리 엔탈피와 결합 형성 엔탈피의 관계는?",
                    type: "multiple-choice",
                    options: ["같다", "부호가 반대", "비례관계", "관계없다"],
                    correctIndex: 1,
                    explanation: "결합 해리는 흡열(+), 결합 형성은 발열(-)로 부호가 반대입니다.",
                    hint: "에너지 관점에서 결합을 끊는 것과 만드는 것을 비교해보세요."
                }
            ]
        },
        {
            category: 'bonding',
            templates: [
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
                },
                {
                    question: "활성화 에너지가 클수록 반응속도는?",
                    type: "multiple-choice",
                    options: ["빨라진다", "느려진다", "변하지 않는다", "온도에 따라 달라진다"],
                    correctIndex: 1,
                    explanation: "활성화 에너지가 클수록 반응이 시작되기 어려워 반응속도가 느려집니다.",
                    hint: "반응이 시작되는 데 필요한 최소 에너지를 생각해보세요."
                },
                {
                    question: "다음 중 가역반응은?",
                    type: "multiple-choice",
                    options: ["CH₄ + 2O₂ → CO₂ + 2H₂O", "N₂ + 3H₂ ⇌ 2NH₃", "2KClO₃ → 2KCl + 3O₂", "Zn + 2HCl → ZnCl₂ + H₂"],
                    correctIndex: 1,
                    explanation: "하버법 반응(N₂ + 3H₂ ⇌ 2NH₃)은 대표적인 가역반응입니다.",
                    hint: "⇌ 기호가 있는 반응을 찾아보세요."
                },
                {
                    question: "산화수가 변하지 않는 반응은?",
                    type: "multiple-choice",
                    options: ["Zn + CuSO₄ → ZnSO₄ + Cu", "HCl + NaOH → NaCl + H₂O", "2H₂O₂ → 2H₂O + O₂", "CH₄ + 2O₂ → CO₂ + 2H₂O"],
                    correctIndex: 1,
                    explanation: "중화반응에서는 원소들의 산화수가 변하지 않습니다.",
                    hint: "전자의 이동이 없는 반응을 찾아보세요."
                },
                {
                    question: "반응 차수가 2차인 반응의 속도식은?",
                    type: "multiple-choice",
                    options: ["v = k[A]", "v = k[A]²", "v = k[A][B]", "v = k[A]² 또는 v = k[A][B]"],
                    correctIndex: 3,
                    explanation: "2차 반응은 v = k[A]² (한 성분에 대해) 또는 v = k[A][B] (두 성분에 대해) 형태입니다.",
                    hint: "농도 지수의 합이 2가 되는 경우를 생각해보세요."
                },
                {
                    question: "르 샤틀리에 원리에 따르면, 압력 증가 시 평형은?",
                    type: "multiple-choice",
                    options: ["분자 수가 적은 쪽으로", "분자 수가 많은 쪽으로", "변하지 않음", "온도에 따라 달라짐"],
                    correctIndex: 0,
                    explanation: "압력이 증가하면 평형은 분자 수가 적어서 부피가 작은 쪽으로 이동합니다.",
                    hint: "압력과 부피는 반비례 관계입니다."
                },
                {
                    question: "반감기가 농도에 무관한 반응 차수는?",
                    type: "multiple-choice",
                    options: ["0차", "1차", "2차", "3차"],
                    correctIndex: 1,
                    explanation: "1차 반응의 반감기는 t₁/₂ = ln2/k로 초기 농도에 무관합니다.",
                    hint: "방사성 동위원소의 붕괴를 생각해보세요."
                },
                {
                    question: "평형상수 K가 클수록?",
                    type: "multiple-choice",
                    options: ["반응물이 많다", "생성물이 많다", "반응속도가 빠르다", "활성화에너지가 크다"],
                    correctIndex: 1,
                    explanation: "평형상수가 클수록 평형 시 생성물의 농도가 반응물보다 높습니다.",
                    hint: "K = [생성물]/[반응물] 관계를 생각해보세요."
                },
                {
                    question: "엔트로피가 증가하는 반응은?",
                    type: "multiple-choice",
                    options: ["2H₂ + O₂ → 2H₂O", "N₂ + 3H₂ → 2NH₃", "CaCO₃ → CaO + CO₂", "C + O₂ → CO₂"],
                    correctIndex: 2,
                    explanation: "고체에서 기체가 발생하는 반응은 엔트로피가 증가합니다.",
                    hint: "분자의 무질서도가 증가하는 반응을 찾아보세요."
                },
                {
                    question: "다음 중 자발적 반응의 조건은?",
                    type: "multiple-choice",
                    options: ["ΔG > 0", "ΔG < 0", "ΔG = 0", "ΔH < 0만"],
                    correctIndex: 1,
                    explanation: "깁스 자유에너지 변화(ΔG)가 음수일 때 반응이 자발적으로 일어납니다.",
                    hint: "자유에너지가 감소하는 방향으로 반응이 진행됩니다."
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
                },
                {
                    question: "d 궤도의 모양과 특징을 설명하세요.",
                    type: "short-answer",
                    keywords: ["d궤도", "5개", "모양", "전이원소"],
                    answer: "5개의 서로 다른 모양을 가진 궤도로 전이원소의 특성을 결정",
                    explanation: "d 궤도는 5개의 다른 공간 방향을 가지며, 전이원소의 색깔과 자기적 성질을 결정합니다.",
                    hint: "전이금속의 특성과 관련된 궤도입니다."
                },
                {
                    question: "분자 궤도 이론에서 He₂가 존재하지 않는 이유는?",
                    type: "multiple-choice",
                    options: ["결합차수가 0", "전자가 부족", "궤도가 없음", "에너지가 높음"],
                    correctIndex: 0,
                    explanation: "He₂는 결합성 궤도와 반결합성 궤도에 같은 수의 전자가 들어가 결합차수가 0이 됩니다.",
                    hint: "결합차수 = (결합성 전자 - 반결합성 전자) / 2"
                },
                {
                    question: "결정장 이론에서 d 궤도 분리가 일어나는 이유는?",
                    type: "multiple-choice",
                    options: ["온도 변화", "리간드의 전기장", "압력 변화", "pH 변화"],
                    correctIndex: 1,
                    explanation: "리간드의 전기장이 중심 원자의 d 궤도를 서로 다른 에너지 준위로 분리시킵니다.",
                    hint: "착화합물에서 중심 원자 주변의 리간드를 생각해보세요."
                },
                {
                    question: "Jahn-Teller 효과란?",
                    type: "short-answer",
                    keywords: ["분자", "왜곡", "전자", "불안정"],
                    answer: "전자적으로 불안정한 분자가 구조 왜곡을 통해 안정화되는 현상",
                    explanation: "축퇴된 궤도에 전자가 불균등하게 채워질 때 분자 구조가 왜곡되어 에너지를 낮추는 현상입니다.",
                    hint: "Cu²⁺ 착화합물의 왜곡을 생각해보세요."
                },
                {
                    question: "스핀-궤도 결합이란?",
                    type: "multiple-choice",
                    options: ["전자의 회전과 공전의 상호작용", "핵의 스핀", "분자의 회전", "진동 운동"],
                    correctIndex: 0,
                    explanation: "전자의 스핀과 궤도 각운동량 사이의 상호작용으로 미세구조를 만듭니다.",
                    hint: "전자의 자기적 성질과 관련됩니다."
                },
                {
                    question: "밴드 이론에서 절연체의 특징은?",
                    type: "multiple-choice",
                    options: ["전도대가 가득참", "밴드갭이 큼", "밴드갭이 작음", "밴드갭이 없음"],
                    correctIndex: 1,
                    explanation: "절연체는 원자가대와 전도대 사이의 밴드갭이 커서 전자가 전도대로 이동하기 어렵습니다.",
                    hint: "다이아몬드와 같은 절연체의 전자 구조를 생각해보세요."
                },
                {
                    question: "Van der Waals 방정식에서 실제 기체의 보정항은?",
                    type: "multiple-choice",
                    options: ["a와 b", "P와 V", "n과 R", "T와 P"],
                    correctIndex: 0,
                    explanation: "a는 분자간 인력, b는 분자의 부피를 보정하는 상수입니다.",
                    hint: "이상기체 방정식과의 차이점을 생각해보세요."
                },
                {
                    question: "유효핵전하(Zeff)가 증가하면 원자 반지름은?",
                    type: "multiple-choice",
                    options: ["증가", "감소", "변화없음", "불규칙변화"],
                    correctIndex: 1,
                    explanation: "유효핵전하가 클수록 전자가 핵에 더 강하게 끌려 원자 반지름이 감소합니다.",
                    hint: "핵이 전자를 끌어당기는 힘이 세지는 효과를 생각해보세요."
                },
                {
                    question: "Hund의 규칙의 내용은?",
                    type: "short-answer",
                    keywords: ["전자", "궤도", "같은", "스핀"],
                    answer: "같은 에너지의 궤도에 전자가 채워질 때 스핀이 같은 방향으로 하나씩 먼저 채워짐",
                    explanation: "전자들은 가능한 한 같은 스핀을 가지고 서로 다른 궤도를 먼저 차지합니다.",
                    hint: "질소 원자의 전자 배치를 생각해보세요."
                },
                {
                    question: "Pauli 배타 원리란?",
                    type: "multiple-choice",
                    options: ["같은 궤도에 전자 2개까지", "스핀이 반대여야 함", "4개의 양자수가 달라야 함", "모든 내용"],
                    correctIndex: 3,
                    explanation: "하나의 원자에서 두 전자가 4개의 양자수를 모두 같게 가질 수 없다는 원리입니다.",
                    hint: "전자의 정체성을 구별하는 양자수들을 생각해보세요."
                },
                {
                    question: "양자수 중 궤도의 모양을 결정하는 것은?",
                    type: "multiple-choice",
                    options: ["주양자수(n)", "방위양자수(l)", "자기양자수(ml)", "스핀양자수(ms)"],
                    correctIndex: 1,
                    explanation: "방위양자수 l이 궤도의 모양(s, p, d, f)을 결정합니다.",
                    hint: "s, p, d 궤도의 서로 다른 모양을 생각해보세요."
                },
                {
                    question: "전자친화도가 가장 큰 원소는?",
                    type: "multiple-choice",
                    options: ["플루오린", "염소", "산소", "질소"],
                    correctIndex: 1,
                    explanation: "염소가 전자친화도가 가장 크며, 전자를 가장 쉽게 받아들입니다.",
                    hint: "할로겐 원소 중에서 생각해보세요."
                },
                {
                    question: "쌍극자 모멘트의 단위는?",
                    type: "multiple-choice",
                    options: ["Debye", "Pascal", "Joule", "Coulomb"],
                    correctIndex: 0,
                    explanation: "쌍극자 모멘트의 단위는 Debye(D)입니다.",
                    hint: "전기적 성질을 나타내는 단위입니다."
                },
                {
                    question: "혼성화가 일어나는 이유는?",
                    type: "short-answer",
                    keywords: ["에너지", "안정화", "결합", "최적"],
                    answer: "원자 궤도들이 혼합되어 더 안정한 결합을 형성하기 위해",
                    explanation: "혼성화를 통해 더 효과적인 궤도 겹침이 가능해져 결합이 강해집니다.",
                    hint: "탄소의 4개 결합이 모두 같은 이유를 생각해보세요."
                },
                {
                    question: "금속 결합의 특징이 아닌 것은?",
                    type: "multiple-choice",
                    options: ["전자바다 모델", "방향성 없음", "높은 전기전도도", "분자 형성"],
                    correctIndex: 3,
                    explanation: "금속 결합은 분자를 형성하지 않고 거대한 금속 결정을 만듭니다.",
                    hint: "금속의 물리적 성질을 생각해보세요."
                },
                {
                    question: "London 분산력이 강해지는 조건은?",
                    type: "multiple-choice",
                    options: ["분자량 증가", "분자량 감소", "온도 증가", "압력 감소"],
                    correctIndex: 0,
                    explanation: "분자량이 클수록 전자가 많아져 순간 쌍극자가 쉽게 형성되어 분산력이 강해집니다.",
                    hint: "할로겐 원소들의 끓는점 변화를 생각해보세요."
                },
                {
                    question: "공명 안정화 에너지란?",
                    type: "short-answer",
                    keywords: ["공명", "안정화", "에너지", "낮음"],
                    answer: "공명 구조로 인해 실제 분자가 예상보다 낮은 에너지를 갖는 정도",
                    explanation: "벤젠과 같은 분자는 공명으로 인해 이론적 계산보다 더 안정합니다.",
                    hint: "벤젠의 실제 결합 에너지와 계산값의 차이를 생각해보세요."
                },
                {
                    question: "분자의 비선형성과 관련된 개념은?",
                    type: "multiple-choice",
                    options: ["대칭성", "극성", "진동모드", "모든 내용"],
                    correctIndex: 3,
                    explanation: "분자의 비선형성은 대칭성, 극성, 진동모드 등 여러 성질에 영향을 줍니다.",
                    hint: "물 분자와 이산화탄소의 차이점을 생각해보세요."
                },
                {
                    question: "Born-Oppenheimer 근사란?",
                    type: "short-answer",
                    keywords: ["핵", "전자", "질량", "분리"],
                    answer: "핵과 전자의 운동을 분리하여 취급하는 근사법",
                    explanation: "핵이 전자보다 훨씬 무거워 핵의 운동과 전자의 운동을 따로 다룰 수 있다고 가정합니다.",
                    hint: "양자화학 계산의 기본 가정입니다."
                },
                {
                    question: "터널링 효과란?",
                    type: "multiple-choice",
                    options: ["장벽을 뛰어넘는 현상", "장벽을 뚫고 지나가는 현상", "장벽을 돌아가는 현상", "장벽을 무너뜨리는 현상"],
                    correctIndex: 1,
                    explanation: "양자역학적 효과로 입자가 에너지 장벽을 뚫고 지나갈 수 있는 현상입니다.",
                    hint: "고전물리학으로는 설명할 수 없는 양자 현상입니다."
                },
                {
                    question: "Zero-point energy란?",
                    type: "short-answer",
                    keywords: ["영점", "에너지", "진동", "최저"],
                    answer: "절대영도에서도 분자가 갖는 최소한의 진동 에너지",
                    explanation: "양자역학적 불확정성 원리에 의해 분자는 절대영도에서도 진동합니다.",
                    hint: "하이젠베르크 불확정성 원리와 관련됩니다."
                },
                {
                    question: "Aufbau 원리란?",
                    type: "multiple-choice",
                    options: ["에너지가 낮은 궤도부터 채움", "스핀이 같은 방향", "하나씩 먼저 채움", "양자수가 달라야 함"],
                    correctIndex: 0,
                    explanation: "전자들은 에너지가 낮은 궤도부터 차례로 채워진다는 원리입니다.",
                    hint: "전자 배치의 기본 원리입니다."
                },
                {
                    question: "분자 대칭성과 쌍극자 모멘트의 관계는?",
                    type: "short-answer",
                    keywords: ["대칭", "중심", "무극성", "극성"],
                    answer: "대칭중심이 있으면 무극성, 없으면 극성일 가능성",
                    explanation: "분자에 대칭중심(inversion center)이 있으면 쌍극자 모멘트가 0이 됩니다.",
                    hint: "CO₂와 H₂O의 대칭성 차이를 생각해보세요."
                },
                {
                    question: "Lewis 산-염기 이론에서 산의 정의는?",
                    type: "multiple-choice",
                    options: ["전자쌍 주개", "전자쌍 받개", "양성자 주개", "양성자 받개"],
                    correctIndex: 1,
                    explanation: "Lewis 산은 전자쌍을 받아들이는 물질입니다.",
                    hint: "BF₃이 Lewis 산인 이유를 생각해보세요."
                },
                {
                    question: "Slater 규칙의 목적은?",
                    type: "short-answer",
                    keywords: ["유효핵전하", "계산", "차폐", "효과"],
                    answer: "다른 전자들의 차폐 효과를 고려하여 유효핵전하를 계산",
                    explanation: "각 전자가 느끼는 실제 핵전하를 다른 전자들의 차폐 효과를 고려하여 계산하는 방법입니다.",
                    hint: "원자가 전자가 느끼는 실제 핵의 세기를 구하는 방법입니다."
                },
                {
                    question: "분자 궤도의 대칭성 분류에서 σ와 π의 차이는?",
                    type: "multiple-choice",
                    options: ["회전 대칭성", "거울 대칭성", "점 대칭성", "평행이동 대칭성"],
                    correctIndex: 0,
                    explanation: "σ 궤도는 결합축 주위로 회전해도 변하지 않지만, π 궤도는 변합니다.",
                    hint: "결합축을 중심으로 한 회전을 생각해보세요."
                }
            ]
        }
    ],
    
    hard: [
        {
            category: 'covalent',
            templates: [
                {
                    question: "벤젠(C₆H₆) 분자에서 탄소-탄소 결합의 특징을 설명하세요.",
                    type: "short-answer",
                    keywords: ["공명", "비편재화", "중간", "길이"],
                    answer: "공명 구조로 인해 단일결합과 이중결합의 중간 길이를 가짐",
                    explanation: "벤젠의 탄소-탄소 결합은 공명 구조로 인해 전자가 비편재화되어 단일결합과 이중결합의 중간 성질을 나타냅니다.",
                    hint: "방향족 화합물의 전자 구조를 생각해보세요."
                },
                {
                    question: "하이브리드 궤도(sp³, sp², sp)에 따른 결합각을 올바르게 매칭하세요.",
                    type: "matching",
                    pairs: [
                        { left: "sp³ 혼성", right: "109.5°" },
                        { left: "sp² 혼성", right: "120°" },
                        { left: "sp 혼성", right: "180°" }
                    ],
                    explanation: "혼성 궤도의 종류에 따라 결합각이 달라집니다. sp³는 정사면체, sp²는 평면삼각형, sp는 직선형입니다.",
                    hint: "전자쌍 개수에 따른 기하학적 배치를 생각해보세요."
                },
                {
                    question: "다음 분자들의 극성을 판단하고 그 이유를 설명하세요: CH₄, NH₃, CO₂, H₂O",
                    type: "short-answer",
                    keywords: ["대칭", "쌍극자", "극성", "무극성"],
                    answer: "CH₄, CO₂는 무극성(대칭구조), NH₃, H₂O는 극성(비대칭구조)",
                    explanation: "분자의 극성은 극성 결합의 존재와 분자의 대칭성에 의해 결정됩니다. 대칭 구조는 쌍극자가 상쇄되어 무극성이 됩니다.",
                    hint: "분자의 모양과 결합의 극성을 함께 고려해보세요."
                },
                {
                    question: "σ 결합과 π 결합의 차이점을 설명하세요.",
                    type: "short-answer",
                    keywords: ["시그마", "파이", "중첩", "회전"],
                    answer: "σ결합은 궤도의 머리-머리 중첩, π결합은 옆면-옆면 중첩으로 형성됨",
                    explanation: "σ결합은 원자 궤도가 직접 중첩되어 강하고 회전 가능하며, π결합은 궤도가 평행하게 중첩되어 상대적으로 약하고 회전이 제한됩니다.",
                    hint: "이중결합에서 첫 번째와 두 번째 결합의 차이를 생각해보세요."
                },
                {
                    question: "다음 중 분자간 수소결합이 가능한 분자들을 모두 고르세요.",
                    type: "multiple-choice",
                    options: ["CH₄, NH₃, H₂O", "NH₃, H₂O, HF", "CO₂, CH₄, N₂", "HCl, HBr, HI"],
                    correctIndex: 1,
                    explanation: "수소결합은 H가 N, O, F와 결합했을 때만 가능합니다. NH₃, H₂O, HF가 모두 해당됩니다.",
                    hint: "전기음성도가 매우 큰 원소들과 결합한 수소를 찾아보세요."
                },
                {
                    question: "전자 밀도가 높은 영역에서 낮은 영역으로의 이동을 나타내는 화살표를 그려보세요: H-Cl",
                    type: "short-answer",
                    keywords: ["화살표", "전자", "염소", "극성"],
                    answer: "H → Cl (전자가 염소 쪽으로 치우침)",
                    explanation: "염소가 수소보다 전기음성도가 크므로 공유 전자쌍이 염소 쪽으로 치우쳐 극성을 나타냅니다.",
                    hint: "더 전기음성도가 큰 원소 쪽으로 전자가 끌려갑니다."
                },
                {
                    question: "분자 궤도 이론에서 결합성 궤도와 반결합성 궤도의 차이점은?",
                    type: "short-answer",
                    keywords: ["결합성", "반결합성", "에너지", "안정성"],
                    answer: "결합성 궤도는 에너지가 낮아 안정하고, 반결합성 궤도는 에너지가 높아 불안정함",
                    explanation: "결합성 궤도는 원자 궤도가 건설적으로 간섭하여 낮은 에너지를 가지며, 반결합성 궤도는 파괴적 간섭으로 높은 에너지를 가집니다.",
                    hint: "파동의 보강 간섭과 상쇄 간섭을 생각해보세요."
                },
                {
                    question: "C₂H₂ (아세틸렌)의 C≡C 삼중결합에서 σ결합과 π결합의 개수는?",
                    type: "multiple-choice",
                    options: ["σ 1개, π 2개", "σ 2개, π 1개", "σ 3개, π 0개", "σ 0개, π 3개"],
                    correctIndex: 0,
                    explanation: "삼중결합은 1개의 σ결합과 2개의 π결합으로 구성됩니다.",
                    hint: "다중결합에서 첫 번째는 항상 σ결합입니다."
                }
            ]
        },
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
                },
                {
                    question: "다음 분자들을 쌍극자 모멘트의 크기 순으로 배열하세요: CO₂, H₂O, NH₃, CH₄",
                    type: "short-answer",
                    keywords: ["H₂O", "NH₃", "대칭", "무극성"],
                    answer: "H₂O > NH₃ > CO₂ = CH₄ (무극성)",
                    explanation: "물이 가장 큰 쌍극자 모멘트를 가지고, CO₂와 CH₄는 대칭 구조로 무극성입니다.",
                    hint: "분자의 대칭성과 결합의 극성을 모두 고려해보세요."
                },
                {
                    question: "BrF₅ 분자의 모양과 극성을 예측하세요.",
                    type: "short-answer",
                    keywords: ["사각뿔", "극성", "전자쌍"],
                    answer: "사각뿔형, 극성 분자",
                    explanation: "오플루오린화브롬은 6개의 전자쌍(5개 결합, 1개 비공유)으로 사각뿔 구조이며 비대칭이므로 극성입니다.",
                    hint: "6개 전자쌍 중 1개가 비공유 전자쌍인 경우를 생각해보세요."
                },
                {
                    question: "다음 화합물들의 혼성 궤도를 올바르게 매칭하세요.",
                    type: "matching",
                    pairs: [
                        { left: "CH₄", right: "sp³" },
                        { left: "C₂H₄", right: "sp²" },
                        { left: "C₂H₂", right: "sp" },
                        { left: "NH₃", right: "sp³" }
                    ],
                    explanation: "탄소나 질소 주위의 전자쌍 개수에 따라 혼성이 결정됩니다.",
                    hint: "4개 전자쌍은 sp³, 3개는 sp², 2개는 sp 혼성입니다."
                },
                {
                    question: "분자간 힘의 세기를 비교하여 끓는점 순서를 예측하세요: Ne, HF, H₂O, NH₃",
                    type: "short-answer",
                    keywords: ["H₂O", "HF", "NH₃", "Ne"],
                    answer: "H₂O > HF > NH₃ > Ne",
                    explanation: "수소결합 > 분산력 순으로 강하며, 물은 수소결합을 2개 형성할 수 있어 가장 높은 끓는점을 가집니다.",
                    hint: "수소결합 가능 개수와 분자 크기를 고려해보세요."
                },
                {
                    question: "Lewis 구조에서 옥텟 규칙의 예외인 분자들을 설명하세요.",
                    type: "short-answer",
                    keywords: ["BF₃", "SF₆", "전자부족", "확장옥텟"],
                    answer: "BF₃(전자부족), SF₆(확장옥텟) 등이 예외",
                    explanation: "3주기 이후 원소들은 d궤도를 이용해 옥텟을 확장할 수 있고, 붕소는 전자가 부족한 상태로 안정합니다.",
                    hint: "주기별 사용 가능한 궤도의 차이를 생각해보세요."
                },
                {
                    question: "분자 궤도 이론으로 O₂ 분자의 자기적 성질을 설명하세요.",
                    type: "short-answer",
                    keywords: ["상자성", "홀전자", "분자궤도"],
                    answer: "반결합성 π* 궤도에 홀전자 2개가 있어 상자성",
                    explanation: "분자 궤도 이론에 따르면 O₂는 반결합성 궤도에 홀전자가 있어 상자성을 나타냅니다.",
                    hint: "O₂가 자석에 끌리는 성질을 분자 궤도로 설명해보세요."
                },
                {
                    question: "다음 이온들의 결합각을 비교하고 설명하세요: H₃O⁺, NH₄⁺, OH⁻",
                    type: "short-answer",
                    keywords: ["109.5", "정사면체", "삼각뿔"],
                    answer: "NH₄⁺ (109.5°) > H₃O⁺ > OH⁻",
                    explanation: "NH₄⁺는 완전한 정사면체, H₃O⁺는 삼각뿔형으로 비공유 전자쌍의 영향으로 각도가 감소합니다.",
                    hint: "비공유 전자쌍의 개수와 그 영향을 고려해보세요."
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
                },
                {
                    question: "분자 궤도 이론에서 결합 차수를 계산하는 공식을 적용하여 He₂⁺의 안정성을 예측하세요.",
                    type: "short-answer",
                    keywords: ["결합차수", "0.5", "안정"],
                    answer: "결합 차수 0.5로 약하지만 안정함",
                    explanation: "He₂⁺는 (결합성 전자 2개 - 반결합성 전자 1개)/2 = 0.5의 결합 차수를 가져 약한 결합이지만 존재 가능합니다.",
                    hint: "분자 궤도 에너지 준위와 전자 배치를 고려해보세요."
                },
                {
                    question: "결정장 이론에서 d궤도 분열을 설명하고, 정팔면체 착물에서의 에너지 차이를 나타내세요.",
                    type: "short-answer",
                    keywords: ["t2g", "eg", "분열", "정팔면체"],
                    answer: "d궤도가 t2g(낮은 에너지)와 eg(높은 에너지) 준위로 분열됨",
                    explanation: "정팔면체 착물에서 리간드의 전기장에 의해 d궤도가 에너지 차이를 가지는 두 그룹으로 분열됩니다.",
                    hint: "배위자와 d궤도의 상호작용을 생각해보세요."
                },
                {
                    question: "다음 화합물들의 결합성을 정량적으로 비교 분석하세요: LiF, BeO, B₂O₃, CO₂",
                    type: "short-answer",
                    keywords: ["이온성", "공유성", "전기음성도", "경향"],
                    answer: "LiF(이온성) > BeO(혼합) > B₂O₃(공유성) > CO₂(순수 공유성)",
                    explanation: "전기음성도 차이에 따라 LiF는 순수 이온성, CO₂는 순수 공유성이며, BeO와 B₂O₃는 중간적 성질을 보입니다.",
                    hint: "주기율표에서 금속성과 비금속성의 변화를 고려해보세요."
                },
                {
                    question: "Pauling의 전기음성도 척도와 Mulliken의 전기음성도 척도의 차이점을 설명하세요.",
                    type: "short-answer",
                    keywords: ["열화학", "이온화에너지", "전자친화도"],
                    answer: "Pauling은 열화학 데이터, Mulliken은 이온화에너지와 전자친화도 평균 사용",
                    explanation: "Pauling 척도는 결합 에너지 데이터를 기반으로 하고, Mulliken 척도는 원자의 이온화 에너지와 전자 친화도의 평균값을 사용합니다.",
                    hint: "두 척도가 사용하는 실험 데이터의 종류를 비교해보세요."
                },
                {
                    question: "반데르발스 상수 a와 b가 분자간 힘에 미치는 영향을 정량적으로 분석하세요.",
                    type: "short-answer",
                    keywords: ["인력", "부피", "보정"],
                    answer: "a는 분자간 인력 보정, b는 분자 자체 부피 보정",
                    explanation: "van der Waals 방정식에서 a는 분자간 인력으로 인한 압력 감소를, b는 분자 자체가 차지하는 부피를 보정합니다.",
                    hint: "이상기체 방정식과의 차이점을 생각해보세요."
                },
                {
                    question: "초분자 화학에서 비공유 결합의 협동 효과를 설명하세요.",
                    type: "short-answer",
                    keywords: ["협동", "증강", "다중", "결합"],
                    answer: "다중 비공유 결합이 개별 결합의 합보다 강한 결합력 나타냄",
                    explanation: "여러 개의 약한 비공유 결합이 동시에 작용할 때 개별 결합 세기의 단순 합보다 훨씬 강한 전체 결합 세기를 나타내는 현상입니다.",
                    hint: "DNA의 이중나선 구조가 안정한 이유를 생각해보세요."
                },
                {
                    question: "전이금속 착물에서 18전자 규칙의 예외 사례들을 분류하고 설명하세요.",
                    type: "short-answer",
                    keywords: ["16전자", "20전자", "d8", "예외"],
                    answer: "d8 평면사각형(16전자), 일부 d0-d3 착물(전자부족), d10 착물(전자과잉)",
                    explanation: "18전자 규칙은 일반적 안정성 지침이지만, 평면사각형 d8 착물, 전자가 부족한 초기 전이금속 착물 등에서 예외가 나타납니다.",
                    hint: "d궤도 전자 개수와 배위 기하학의 관계를 고려해보세요."
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
                },
                {
                    question: "아레니우스 방정식 k = Ae^(-Ea/RT)에서 각 항의 의미를 설명하세요.",
                    type: "short-answer",
                    keywords: ["빈도인자", "활성화에너지", "온도"],
                    answer: "A는 빈도인자, Ea는 활성화에너지, R은 기체상수, T는 절대온도",
                    explanation: "아레니우스 방정식은 반응속도상수와 온도의 관계를 나타내며, 활성화에너지가 클수록 온도의 영향이 큽니다.",
                    hint: "지수 함수에서 온도와 활성화에너지의 역할을 생각해보세요."
                },
                {
                    question: "연쇄반응의 단계를 순서대로 나열하고 각각을 설명하세요.",
                    type: "short-answer",
                    keywords: ["개시", "전파", "종결"],
                    answer: "개시(initiation) → 전파(propagation) → 종결(termination)",
                    explanation: "개시에서 라디칼이 생성되고, 전파에서 연쇄적으로 반응이 계속되며, 종결에서 라디칼이 소멸됩니다.",
                    hint: "자유 라디칼의 생성, 반응, 소멸 과정을 생각해보세요."
                },
                {
                    question: "미하엘리스-멘텐 식 v = Vmax[S]/(Km + [S])에서 Km의 물리적 의미는?",
                    type: "short-answer",
                    keywords: ["친화도", "반최대속도", "기질농도"],
                    answer: "효소와 기질의 친화도를 나타내며, 반최대속도일 때의 기질농도",
                    explanation: "Km이 작을수록 효소와 기질의 친화도가 크고, Vmax/2일 때의 기질농도를 나타냅니다.",
                    hint: "효소-기질 복합체의 안정성을 생각해보세요."
                },
                {
                    question: "반응 메커니즘에서 속도결정단계의 특징을 설명하세요.",
                    type: "short-answer",
                    keywords: ["가장느린", "전체속도", "활성화에너지"],
                    answer: "가장 느린 단계로 전체 반응속도를 결정하며, 가장 큰 활성화에너지를 가짐",
                    explanation: "여러 단계 반응에서 가장 느린 단계가 전체 반응의 속도를 결정하므로 속도결정단계라고 합니다.",
                    hint: "교통체증에서 가장 좁은 구간이 전체 흐름을 결정하는 것과 같습니다."
                },
                {
                    question: "촉매작용의 종류별 특징을 비교 설명하세요: 균일촉매 vs 불균일촉매",
                    type: "short-answer",
                    keywords: ["상", "분리", "선택성"],
                    answer: "균일촉매는 반응물과 같은 상, 불균일촉매는 다른 상에서 작용",
                    explanation: "균일촉매는 분리가 어렵지만 선택성이 높고, 불균일촉매는 분리가 쉽지만 확산제한이 있습니다.",
                    hint: "기체-고체, 액체-액체 반응을 생각해보세요."
                },
                {
                    question: "농도-시간 그래프에서 0차, 1차, 2차 반응을 구별하는 방법을 설명하세요.",
                    type: "short-answer",
                    keywords: ["직선", "지수감소", "쌍곡선"],
                    answer: "0차: [A]-t 직선, 1차: ln[A]-t 직선, 2차: 1/[A]-t 직선",
                    explanation: "적분 속도식을 이용하여 적절한 함수로 플롯했을 때 직선이 되는 것으로 반응차수를 결정합니다.",
                    hint: "각 차수별 적분 속도식의 형태를 생각해보세요."
                },
                {
                    question: "병렬반응 A → B, A → C에서 생성물 선택성을 높이는 방법을 제시하세요.",
                    type: "short-answer",
                    keywords: ["온도", "촉매", "활성화에너지"],
                    answer: "원하는 반응의 활성화에너지를 낮추는 촉매 사용 또는 온도 조절",
                    explanation: "두 반응의 활성화에너지 차이를 이용하여 온도를 조절하거나 선택적 촉매를 사용합니다.",
                    hint: "아레니우스 방정식에서 활성화에너지와 온도의 관계를 고려해보세요."
                },
                {
                    question: "펜톤 반응의 메커니즘과 환경정화에의 응용을 설명하세요.",
                    type: "short-answer",
                    keywords: ["철", "과산화수소", "하이드록시라디칼"],
                    answer: "Fe²⁺ + H₂O₂ → Fe³⁺ + OH⁻ + •OH로 강력한 산화제인 하이드록시 라디칼 생성",
                    explanation: "펜톤 반응으로 생성된 하이드록시 라디칼은 유기오염물질을 효과적으로 분해할 수 있어 폐수처리에 활용됩니다.",
                    hint: "철 이온과 과산화수소의 반응을 생각해보세요."
                },
                {
                    question: "고압 조건에서 기체 반응의 평형상수 표현을 압력과 몰분율로 나타내세요.",
                    type: "short-answer",
                    keywords: ["압력", "몰분율", "푸가시티"],
                    answer: "이상기체: Kp = ΠPi^νi, 실제기체: 푸가시티 사용",
                    explanation: "고압에서는 기체의 비이상성을 고려하여 압력 대신 푸가시티를 사용해야 합니다.",
                    hint: "실제 기체의 거동을 고려한 열역학적 활동도를 생각해보세요."
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
        problem.category = category.category; // 카테고리 정보 추가
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
    
    // 주제 매핑 (각 주제별 카테고리 명확히 구분 + 관련 카테고리 포함)
    const topicMapping = {
        'covalent': ['covalent', 'basic-concepts'],  // 기본 개념도 포함
        'ionic': ['ionic'],
        'molecular': ['molecular', 'advanced-concepts'],  // 고급 개념도 포함  
        'bonding': ['bonding'],
        'reactions': ['reactions'],
        'dailyChemistry': ['dailyChemistry']
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
            problem.category = category.category; // 카테고리 정보 추가
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
    // 화학식 문제 생성기 (확장됨)
    formulaProblem() {
        const compounds = [
            { formula: "H₂O", name: "물", type: "covalent" },
            { formula: "CO₂", name: "이산화탄소", type: "covalent" },
            { formula: "NH₃", name: "암모니아", type: "covalent" },
            { formula: "CH₄", name: "메탄", type: "covalent" },
            { formula: "NaCl", name: "염화나트륨", type: "ionic" },
            { formula: "CaCO₃", name: "탄산칼슘", type: "ionic" },
            { formula: "MgO", name: "산화마그네슘", type: "ionic" },
            { formula: "H₂SO₄", name: "황산", type: "covalent" },
            { formula: "HCl", name: "염화수소", type: "covalent" },
            { formula: "KOH", name: "수산화칼륨", type: "ionic" },
            { formula: "CaCl₂", name: "염화칼슘", type: "ionic" },
            { formula: "Al₂O₃", name: "산화알루미늄", type: "ionic" },
            { formula: "C₂H₆", name: "에탄", type: "covalent" },
            { formula: "C₂H₄", name: "에틸렌", type: "covalent" },
            { formula: "C₂H₂", name: "아세틸렌", type: "covalent" }
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

    // pH 계산 문제 생성기
    pHCalculationProblem() {
        const solutions = [
            { concentration: 0.1, type: "HCl", pH: 1, description: "강산" },
            { concentration: 0.01, type: "HCl", pH: 2, description: "강산" },
            { concentration: 0.1, type: "NaOH", pH: 13, description: "강염기" },
            { concentration: 0.01, type: "NaOH", pH: 12, description: "강염기" },
            { concentration: 1e-7, type: "순수한 물", pH: 7, description: "중성" }
        ];
        
        const solution = solutions[Math.floor(Math.random() * solutions.length)];
        
        return {
            question: `${solution.concentration} M ${solution.type} 용액의 pH는?`,
            type: "multiple-choice",
            options: [solution.pH, solution.pH + 1, solution.pH - 1, solution.pH + 2].sort(() => Math.random() - 0.5),
            correctIndex: 0,
            explanation: `${solution.description}인 ${solution.type}의 ${solution.concentration} M 용액의 pH는 ${solution.pH}입니다.`,
            category: "acid-base",
            hint: "강산과 강염기는 완전히 이온화됩니다."
        };
    },

    // 원자량 계산 문제 생성기
    atomicMassProblem() {
        const elements = [
            { symbol: "C", mass: 12, name: "탄소" },
            { symbol: "N", mass: 14, name: "질소" },
            { symbol: "O", mass: 16, name: "산소" },
            { symbol: "Na", mass: 23, name: "나트륨" },
            { symbol: "Mg", mass: 24, name: "마그네슘" },
            { symbol: "Al", mass: 27, name: "알루미늄" },
            { symbol: "P", mass: 31, name: "인" },
            { symbol: "S", mass: 32, name: "황" },
            { symbol: "Cl", mass: 35.5, name: "염소" },
            { symbol: "K", mass: 39, name: "칼륨" },
            { symbol: "Ca", mass: 40, name: "칼슘" }
        ];
        
        const element = elements[Math.floor(Math.random() * elements.length)];
        
        return {
            question: `${element.name}(${element.symbol})의 원자량은?`,
            type: "multiple-choice",
            options: [element.mass, element.mass + 1, element.mass - 1, element.mass + 2].sort(() => Math.random() - 0.5),
            correctIndex: 0,
            explanation: `${element.name}의 원자량은 ${element.mass}입니다.`,
            category: "basic-concepts",
            hint: "주기율표를 참고하세요."
        };
    },

    // 전자배치 문제 생성기 (확장됨)
    electronConfigProblem() {
        const elements = [
            { symbol: "Li", config: "1s² 2s¹", electrons: 3 },
            { symbol: "Be", config: "1s² 2s²", electrons: 4 },
            { symbol: "B", config: "1s² 2s² 2p¹", electrons: 5 },
            { symbol: "C", config: "1s² 2s² 2p²", electrons: 6 },
            { symbol: "N", config: "1s² 2s² 2p³", electrons: 7 },
            { symbol: "O", config: "1s² 2s² 2p⁴", electrons: 8 },
            { symbol: "F", config: "1s² 2s² 2p⁵", electrons: 9 },
            { symbol: "Ne", config: "1s² 2s² 2p⁶", electrons: 10 },
            { symbol: "Na", config: "[Ne] 3s¹", electrons: 11 },
            { symbol: "Mg", config: "[Ne] 3s²", electrons: 12 },
            { symbol: "Al", config: "[Ne] 3s² 3p¹", electrons: 13 },
            { symbol: "Si", config: "[Ne] 3s² 3p²", electrons: 14 },
            { symbol: "P", config: "[Ne] 3s² 3p³", electrons: 15 },
            { symbol: "S", config: "[Ne] 3s² 3p⁴", electrons: 16 },
            { symbol: "Cl", config: "[Ne] 3s² 3p⁵", electrons: 17 },
            { symbol: "Ar", config: "[Ne] 3s² 3p⁶", electrons: 18 }
        ];
        
        const element = elements[Math.floor(Math.random() * elements.length)];
        
        return {
            question: `${element.symbol} 원자의 전자배치는?`,
            type: "multiple-choice",
            options: [element.config, "1s² 2s² 2p⁶", "[He] 2s² 2p⁶", "[Ne] 3s² 3p⁶"].sort(() => Math.random() - 0.5),
            correctIndex: 0,
            explanation: `${element.symbol} 원자는 ${element.electrons}개의 전자를 가지며, 전자배치는 ${element.config}입니다.`,
            category: "advanced-concepts",
            hint: `${element.electrons}개의 전자를 에너지 순서대로 배치하세요.`
        };
    },

    // 농도 계산 문제 생성기
    concentrationProblem() {
        const problems = [
            { mass: 58.5, volume: 1, molarity: 1, compound: "NaCl", mw: 58.5 },
            { mass: 117, volume: 2, molarity: 1, compound: "NaCl", mw: 58.5 },
            { mass: 40, volume: 1, molarity: 1, compound: "NaOH", mw: 40 },
            { mass: 80, volume: 2, molarity: 1, compound: "NaOH", mw: 40 },
            { mass: 36.5, volume: 1, molarity: 1, compound: "HCl", mw: 36.5 }
        ];
        
        const problem = problems[Math.floor(Math.random() * problems.length)];
        
        return {
            question: `${problem.compound} ${problem.mass}g을 물에 녹여 ${problem.volume}L로 만든 용액의 몰농도는?`,
            type: "multiple-choice",
            options: [`${problem.molarity} M`, `${problem.molarity * 2} M`, `${problem.molarity / 2} M`, `${problem.molarity * 0.5} M`],
            correctIndex: 0,
            explanation: `몰농도 = mol/L = (${problem.mass}g ÷ ${problem.mw}g/mol) ÷ ${problem.volume}L = ${problem.molarity} M`,
            category: "basic-concepts",
            hint: "몰농도 = 용질의 몰수 ÷ 용액의 부피(L)"
        };
    },

    // 기체 법칙 문제 생성기
    gasLawProblem() {
        const problems = [
            { 
                law: "보일의 법칙", 
                description: "일정한 온도에서 기체의 부피는 압력에 반비례",
                formula: "PV = 상수",
                question: "온도가 일정할 때, 압력이 2배가 되면 부피는?",
                answer: "1/2배",
                options: ["2배", "1/2배", "4배", "1/4배"]
            },
            {
                law: "샤를의 법칙",
                description: "일정한 압력에서 기체의 부피는 절대온도에 비례",
                formula: "V/T = 상수",
                question: "압력이 일정할 때, 절대온도가 2배가 되면 부피는?",
                answer: "2배",
                options: ["2배", "1/2배", "4배", "1/4배"]
            },
            {
                law: "아보가드로의 법칙",
                description: "같은 온도, 압력에서 같은 부피의 기체는 같은 분자 수",
                formula: "V ∝ n",
                question: "STP에서 모든 기체 1몰의 부피는?",
                answer: "22.4 L",
                options: ["22.4 L", "24.5 L", "20.0 L", "25.0 L"]
            }
        ];
        
        const problem = problems[Math.floor(Math.random() * problems.length)];
        
        return {
            question: `${problem.law}: ${problem.question}`,
            type: "multiple-choice",
            options: problem.options,
            correctIndex: problem.options.indexOf(problem.answer),
            explanation: `${problem.law}은 ${problem.description}입니다. ${problem.formula}`,
            category: "basic-concepts",
            hint: `${problem.law}의 정의를 생각해보세요.`
        };
    },

    // 화학결합 에너지 비교 문제 생성기
    bondEnergyComparisonProblem() {
        const bonds = [
            { bond: "H-H", energy: 436, type: "단일결합" },
            { bond: "C-C", energy: 348, type: "단일결합" },
            { bond: "C=C", energy: 614, type: "이중결합" },
            { bond: "C≡C", energy: 839, type: "삼중결합" },
            { bond: "N≡N", energy: 942, type: "삼중결합" },
            { bond: "O=O", energy: 495, type: "이중결합" },
            { bond: "H-F", energy: 567, type: "단일결합" },
            { bond: "H-Cl", energy: 431, type: "단일결합" }
        ];
        
        const bond1 = bonds[Math.floor(Math.random() * bonds.length)];
        let bond2 = bonds[Math.floor(Math.random() * bonds.length)];
        while (bond2 === bond1) {
            bond2 = bonds[Math.floor(Math.random() * bonds.length)];
        }
        
        const stronger = bond1.energy > bond2.energy ? bond1 : bond2;
        
        return {
            question: `다음 중 결합 에너지가 더 큰 것은? ${bond1.bond} vs ${bond2.bond}`,
            type: "multiple-choice",
            options: [stronger.bond, bond1.bond === stronger.bond ? bond2.bond : bond1.bond, "같다", "판단불가"],
            correctIndex: 0,
            explanation: `${stronger.bond} 결합의 에너지(${stronger.energy} kJ/mol)가 더 큽니다.`,
            category: "bonding",
            hint: "결합 차수가 높을수록 결합 에너지가 큽니다."
        };
    },

    // 산화수 계산 문제 생성기
    oxidationStateProblem() {
        const compounds = [
            { formula: "H₂O", element: "H", oxidation: "+1", explanation: "물에서 수소의 산화수는 +1" },
            { formula: "H₂O", element: "O", oxidation: "-2", explanation: "물에서 산소의 산화수는 -2" },
            { formula: "NH₃", element: "N", oxidation: "-3", explanation: "암모니아에서 질소의 산화수는 -3" },
            { formula: "CH₄", element: "C", oxidation: "-4", explanation: "메탄에서 탄소의 산화수는 -4" },
            { formula: "CO₂", element: "C", oxidation: "+4", explanation: "이산화탄소에서 탄소의 산화수는 +4" },
            { formula: "SO₂", element: "S", oxidation: "+4", explanation: "이산화황에서 황의 산화수는 +4" },
            { formula: "H₂SO₄", element: "S", oxidation: "+6", explanation: "황산에서 황의 산화수는 +6" }
        ];
        
        const compound = compounds[Math.floor(Math.random() * compounds.length)];
        
        return {
            question: `${compound.formula}에서 ${compound.element}의 산화수는?`,
            type: "multiple-choice",
            options: [compound.oxidation, "+2", "-1", "0"].sort(() => Math.random() - 0.5),
            correctIndex: 0,
            explanation: compound.explanation,
            category: "reactions",
            hint: "산화수 규칙을 적용해보세요."
        };
    },

    // 분자 모양 예측 문제 생성기
    molecularGeometryProblem() {
        const molecules = [
            { formula: "BeF₂", shape: "직선형", angle: "180°", reason: "2개 결합전자쌍" },
            { formula: "BF₃", shape: "삼각평면형", angle: "120°", reason: "3개 결합전자쌍" },
            { formula: "CH₄", shape: "정사면체형", angle: "109.5°", reason: "4개 결합전자쌍" },
            { formula: "NH₃", shape: "삼각뿔형", angle: "107°", reason: "3개 결합전자쌍 + 1개 비공유전자쌍" },
            { formula: "H₂O", shape: "굽은형", angle: "104.5°", reason: "2개 결합전자쌍 + 2개 비공유전자쌍" },
            { formula: "PCl₅", shape: "삼각쌍뿔형", angle: "90°, 120°", reason: "5개 결합전자쌍" },
            { formula: "SF₆", shape: "정팔면체형", angle: "90°", reason: "6개 결합전자쌍" }
        ];
        
        const molecule = molecules[Math.floor(Math.random() * molecules.length)];
        
        return {
            question: `VSEPR 이론에 따라 ${molecule.formula}의 분자 모양은?`,
            type: "multiple-choice",
            options: [molecule.shape, "직선형", "삼각평면형", "정사면체형"].filter((v, i, a) => a.indexOf(v) === i),
            correctIndex: 0,
            explanation: `${molecule.formula}는 ${molecule.reason}으로 ${molecule.shape}입니다.`,
            category: "molecular",
            hint: "중심 원자 주위의 전자쌍 개수를 세어보세요."
        };
    },

    // 동적 문제 생성 함수 - 랜덤하게 위의 생성기 중 하나를 호출
    generateDynamicProblem() {
        const generators = [
            this.formulaProblem,
            this.pHCalculationProblem,
            this.atomicMassProblem,
            this.electronConfigProblem,
            this.concentrationProblem,
            this.gasLawProblem,
            this.bondEnergyComparisonProblem,
            this.oxidationStateProblem,
            this.molecularGeometryProblem
        ];
        
        const generator = generators[Math.floor(Math.random() * generators.length)];
        const problem = generator.call(this);
        
        // 동적 생성 문제임을 표시
        problem.isDynamic = true;
        problem.id = Date.now() + Math.random();
        problem.uniqueId = `dynamic_${problem.category}_${Date.now()}`;
        
        return problem;
    }
    
    // 결합 에너지 문제 생성기
    bondEnergyProblem() {
        const bonds = [
            { bond: "H-H", energy: 436, type: "단일결합" },
            { bond: "C-C", energy: 348, type: "단일결합" },
            { bond: "C=C", energy: 614, type: "이중결합" },
            { bond: "C≡C", energy: 839, type: "삼중결합" },
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

// 중복 방지 문제 생성 (동적 생성 지원)
function generateUniqueQuestion(difficulty) {
    const templates = problemTemplates[difficulty];
    if (!templates || templates.length === 0) {
        // 정적 템플릿이 없으면 동적 생성 시도
        console.log(`${difficulty} 난이도 정적 템플릿 없음 - 동적 생성 시도`);
        return dynamicProblemGenerators.generateDynamicProblem();
    }
    
    // 모든 문제를 다 사용했으면 동적 생성과 혼합
    const totalQuestions = templates.reduce((sum, category) => sum + category.templates.length, 0);
    if (usedProblems[difficulty].size >= totalQuestions) {
        // 50% 확률로 동적 생성 사용
        if (Math.random() < 0.5) {
            console.log(`${difficulty} 난이도 모든 정적 문제 사용됨 - 동적 생성 사용`);
            return dynamicProblemGenerators.generateDynamicProblem();
        } else {
            usedProblems[difficulty].clear();
            console.log(`${difficulty} 난이도 문제 풀이 완료 - 문제 풀이 기록 초기화`);
        }
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
    
    // 정적 문제를 찾지 못하면 동적 생성
    if (!problem) {
        console.log(`${difficulty} 난이도 정적 문제 찾기 실패 - 동적 생성 사용`);
        problem = dynamicProblemGenerators.generateDynamicProblem();
    }
    
    return problem;
}

// 전역 함수로 내보내기
window.generateProblem = generateUniqueQuestion; // 중복 방지 버전 사용
window.generateTopicProblem = generateTopicProblem; // 개선된 주제별 문제 생성
window.dynamicProblemGenerators = dynamicProblemGenerators; // 동적 문제 생성기
window.problemTemplates = problemTemplates; // 정적 문제 템플릿
window.problemStats = problemStats;
window.resetUsedProblems = resetUsedProblems;
window.resetTopicProblems = resetTopicProblems;
window.usedProblems = usedProblems;
window.usedTopicProblems = usedTopicProblems;