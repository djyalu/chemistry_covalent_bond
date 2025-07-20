// 향상된 문제 유형들

// 매칭 문제 생성기
class MatchingProblem {
    constructor() {
        this.pairs = {
            formulas: [
                { left: 'H₂O', right: '물' },
                { left: 'CO₂', right: '이산화탄소' },
                { left: 'NH₃', right: '암모니아' },
                { left: 'CH₄', right: '메탄' },
                { left: 'NaCl', right: '염화나트륨' },
                { left: 'HCl', right: '염산' },
                { left: 'H₂SO₄', right: '황산' },
                { left: 'CaCO₃', right: '탄산칼슘' }
            ],
            bondTypes: [
                { left: '단일결합', right: 'C-C' },
                { left: '이중결합', right: 'C=C' },
                { left: '삼중결합', right: 'C≡C' },
                { left: '이온결합', right: 'Na⁺Cl⁻' },
                { left: '수소결합', right: 'H---O' }
            ],
            properties: [
                { left: '공유결합 물질', right: '물에 잘 안 녹음' },
                { left: '이온화합물', right: '물에 잘 녹음' },
                { left: '금속결합', right: '전기 전도성' },
                { left: '극성 분자', right: '쌍극자 모멘트' },
                { left: '무극성 분자', right: '대칭 구조' }
            ]
        };
    }
    
    generate(category, count = 4) {
        const pairs = this.pairs[category] || this.pairs.formulas;
        const selected = this.shuffleArray(pairs).slice(0, count);
        
        const leftItems = selected.map(pair => pair.left);
        const rightItems = this.shuffleArray(selected.map(pair => pair.right));
        
        return {
            type: 'matching',
            category: category,
            question: '왼쪽과 오른쪽을 올바르게 연결하세요.',
            leftItems: leftItems,
            rightItems: rightItems,
            correctPairs: selected,
            points: 20
        };
    }
    
    shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }
}

// 드래그 앤 드롭 문제
class DragDropProblem {
    constructor() {
        this.templates = [
            {
                question: '다음 원소들을 주기율표의 올바른 위치에 배치하세요.',
                type: 'periodic-table',
                elements: ['H', 'He', 'Li', 'C', 'N', 'O', 'F', 'Na', 'Cl'],
                dropZones: [
                    { id: '1-1', row: 1, col: 1, accepts: 'H' },
                    { id: '1-18', row: 1, col: 18, accepts: 'He' },
                    { id: '2-1', row: 2, col: 1, accepts: 'Li' },
                    { id: '2-14', row: 2, col: 14, accepts: 'C' },
                    { id: '2-15', row: 2, col: 15, accepts: 'N' },
                    { id: '2-16', row: 2, col: 16, accepts: 'O' },
                    { id: '2-17', row: 2, col: 17, accepts: 'F' },
                    { id: '3-1', row: 3, col: 1, accepts: 'Na' },
                    { id: '3-17', row: 3, col: 17, accepts: 'Cl' }
                ]
            },
            {
                question: '분자를 구성하는 원자들을 올바르게 배치하여 물 분자를 만드세요.',
                type: 'molecule-builder',
                atoms: ['H', 'H', 'O', 'C', 'N'],
                targetMolecule: 'H2O',
                correctArrangement: ['H', 'O', 'H']
            },
            {
                question: '다음 물질들을 공유결합과 이온결합으로 분류하세요.',
                type: 'classification',
                items: ['H₂O', 'NaCl', 'CO₂', 'MgO', 'CH₄', 'CaCl₂'],
                categories: ['공유결합', '이온결합'],
                correctClassification: {
                    '공유결합': ['H₂O', 'CO₂', 'CH₄'],
                    '이온결합': ['NaCl', 'MgO', 'CaCl₂']
                }
            }
        ];
    }
    
    generate() {
        const template = this.templates[Math.floor(Math.random() * this.templates.length)];
        return {
            ...template,
            type: 'drag-drop',
            points: 25
        };
    }
}

// 시퀀스 문제 (순서 맞추기)
class SequenceProblem {
    constructor() {
        this.sequences = [
            {
                question: '이온화합물이 형성되는 과정을 순서대로 배열하세요.',
                steps: [
                    '금속 원자가 전자를 잃음',
                    '비금속 원자가 전자를 얻음',
                    '양이온과 음이온 형성',
                    '정전기적 인력으로 결합'
                ]
            },
            {
                question: '물의 전기분해 과정을 순서대로 배열하세요.',
                steps: [
                    '전극에 전류를 가함',
                    '물 분자가 이온으로 분해',
                    '양극에서 산소 기체 발생',
                    '음극에서 수소 기체 발생'
                ]
            },
            {
                question: '화학 반응의 에너지 변화 순서를 배열하세요.',
                steps: [
                    '반응물의 초기 에너지',
                    '활성화 에너지 극복',
                    '전이 상태 형성',
                    '생성물로 전환',
                    '에너지 방출 또는 흡수'
                ]
            }
        ];
    }
    
    generate() {
        const sequence = this.sequences[Math.floor(Math.random() * this.sequences.length)];
        const shuffledSteps = [...sequence.steps].sort(() => Math.random() - 0.5);
        
        return {
            type: 'sequence',
            question: sequence.question,
            steps: shuffledSteps,
            correctOrder: sequence.steps,
            points: 15
        };
    }
}

// 인터랙티브 시뮬레이션 문제
class SimulationProblem {
    constructor() {
        this.simulations = [
            {
                type: 'bond-formation',
                question: '두 수소 원자를 가까이 이동시켜 H₂ 분자를 만드세요.',
                initialState: {
                    atoms: [
                        { element: 'H', x: 100, y: 150, electrons: 1 },
                        { element: 'H', x: 300, y: 150, electrons: 1 }
                    ]
                },
                targetState: {
                    molecule: 'H2',
                    bondType: 'single'
                },
                hints: [
                    '수소 원자를 드래그하여 이동시킬 수 있습니다.',
                    '두 원자가 충분히 가까워지면 결합이 형성됩니다.'
                ]
            },
            {
                type: 'ph-scale',
                question: '주어진 물질들을 pH 척도의 올바른 위치에 배치하세요.',
                items: ['레몬즙', '물', '비누', '위산', '우유'],
                scale: {
                    min: 0,
                    max: 14,
                    correctPositions: {
                        '레몬즙': 2,
                        '물': 7,
                        '비누': 9,
                        '위산': 1,
                        '우유': 6.5
                    }
                }
            }
        ];
    }
    
    generate() {
        const simulation = this.simulations[Math.floor(Math.random() * this.simulations.length)];
        return {
            ...simulation,
            type: 'simulation',
            points: 30
        };
    }
}

// 그림 그리기 문제
class DrawingProblem {
    constructor() {
        this.templates = [
            {
                question: '물 분자(H₂O)의 구조를 그려보세요.',
                targetMolecule: 'H2O',
                requiredElements: ['H', 'H', 'O'],
                requiredBonds: 2,
                checkCriteria: {
                    bentShape: true,
                    bondAngle: { min: 100, max: 110 }
                }
            },
            {
                question: '메탄(CH₄) 분자를 그려보세요.',
                targetMolecule: 'CH4',
                requiredElements: ['C', 'H', 'H', 'H', 'H'],
                requiredBonds: 4,
                checkCriteria: {
                    tetrahedralShape: true
                }
            }
        ];
    }
    
    generate() {
        const template = this.templates[Math.floor(Math.random() * this.templates.length)];
        return {
            ...template,
            type: 'drawing',
            points: 35,
            tools: ['atom-selector', 'bond-drawer', 'eraser', 'clear']
        };
    }
}

// 확장된 문제 생성기
function generateEnhancedProblem(type, difficulty) {
    switch(type) {
        case 'matching':
            const matching = new MatchingProblem();
            return matching.generate('formulas');
            
        case 'drag-drop':
            const dragDrop = new DragDropProblem();
            return dragDrop.generate();
            
        case 'sequence':
            const sequence = new SequenceProblem();
            return sequence.generate();
            
        case 'simulation':
            const simulation = new SimulationProblem();
            return simulation.generate();
            
        case 'drawing':
            const drawing = new DrawingProblem();
            return drawing.generate();
            
        default:
            // 기존 문제 유형으로 폴백
            return generateProblem(difficulty);
    }
}

// 문제 유형별 렌더러
class ProblemRenderer {
    static renderMatching(problem, container) {
        const html = `
            <div class="matching-problem">
                <div class="matching-columns">
                    <div class="left-column">
                        ${problem.leftItems.map((item, i) => `
                            <div class="match-item" data-index="${i}" draggable="true">
                                ${item}
                            </div>
                        `).join('')}
                    </div>
                    <div class="connection-area">
                        <canvas id="connection-canvas"></canvas>
                    </div>
                    <div class="right-column">
                        ${problem.rightItems.map((item, i) => `
                            <div class="match-target" data-index="${i}">
                                ${item}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = html;
        
        // 드래그 앤 드롭 이벤트 설정
        this.setupMatchingEvents(container);
    }
    
    static renderDragDrop(problem, container) {
        let html = '';
        
        switch(problem.type) {
            case 'classification':
                html = `
                    <div class="classification-problem">
                        <div class="items-pool">
                            ${problem.items.map(item => `
                                <div class="draggable-item" draggable="true">
                                    ${item}
                                </div>
                            `).join('')}
                        </div>
                        <div class="categories">
                            ${problem.categories.map(cat => `
                                <div class="category-box" data-category="${cat}">
                                    <h4>${cat}</h4>
                                    <div class="drop-zone"></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;
                
            case 'molecule-builder':
                html = `
                    <div class="molecule-builder">
                        <div class="atom-palette">
                            ${problem.atoms.map((atom, i) => `
                                <div class="atom-tile" draggable="true" data-element="${atom}">
                                    ${atom}
                                </div>
                            `).join('')}
                        </div>
                        <div class="build-area">
                            <div class="molecule-slots">
                                ${problem.correctArrangement.map(() => `
                                    <div class="atom-slot"></div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
                break;
        }
        
        container.innerHTML = html;
        this.setupDragDropEvents(container);
    }
    
    static renderSequence(problem, container) {
        const html = `
            <div class="sequence-problem">
                <div class="sequence-list">
                    ${problem.steps.map((step, i) => `
                        <div class="sequence-item" draggable="true" data-index="${i}">
                            <span class="step-number">${i + 1}</span>
                            <span class="step-text">${step}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML = html;
        
        // Sortable 기능 구현
        this.setupSequenceEvents(container);
    }
    
    static renderSimulation(problem, container) {
        const html = `
            <div class="simulation-problem">
                <canvas id="simulation-canvas" width="500" height="300"></canvas>
                <div class="simulation-controls">
                    <button onclick="resetSimulation()">다시 시작</button>
                    <button onclick="checkSimulation()">확인</button>
                </div>
            </div>
        `;
        container.innerHTML = html;
        
        // 시뮬레이션 초기화
        this.initializeSimulation(problem);
    }
    
    static renderDrawing(problem, container) {
        const html = `
            <div class="drawing-problem">
                <div class="drawing-tools">
                    <select id="element-selector">
                        <option value="H">H (수소)</option>
                        <option value="C">C (탄소)</option>
                        <option value="N">N (질소)</option>
                        <option value="O">O (산소)</option>
                    </select>
                    <button onclick="setBondType('single')">단일결합</button>
                    <button onclick="setBondType('double')">이중결합</button>
                    <button onclick="clearDrawing()">지우기</button>
                </div>
                <canvas id="drawing-canvas" width="500" height="300"></canvas>
            </div>
        `;
        container.innerHTML = html;
        
        // 그리기 도구 초기화
        const drawer = new MoleculeDrawer('drawing-canvas');
        window.currentDrawer = drawer;
    }
    
    // 이벤트 핸들러들
    static setupMatchingEvents(container) {
        // 매칭 문제 드래그 앤 드롭 구현
        const items = container.querySelectorAll('.match-item');
        const targets = container.querySelectorAll('.match-target');
        
        items.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('index', e.target.dataset.index);
            });
        });
        
        targets.forEach(target => {
            target.addEventListener('dragover', (e) => e.preventDefault());
            target.addEventListener('drop', (e) => {
                e.preventDefault();
                const fromIndex = e.dataTransfer.getData('index');
                // 연결 로직 구현
            });
        });
    }
    
    static setupDragDropEvents(container) {
        // 드래그 앤 드롭 문제 이벤트 구현
    }
    
    static setupSequenceEvents(container) {
        // 시퀀스 정렬 이벤트 구현
    }
    
    static initializeSimulation(problem) {
        // 시뮬레이션 초기화 로직
    }
}

// 전역 함수로 내보내기
window.generateEnhancedProblem = generateEnhancedProblem;
window.ProblemRenderer = ProblemRenderer;