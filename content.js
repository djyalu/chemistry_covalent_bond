// 학습 컨텐츠
const topicContents = {
    covalent: `
        <div class="content-wrapper">
            <button class="back-btn" onclick="document.getElementById('topic-content').style.display='none'">← 돌아가기</button>
            
            <h2>🔗 공유결합 (Covalent Bond)</h2>
            
            <div class="content-section">
                <h3>공유결합이란?</h3>
                <p>공유결합은 두 개 이상의 원자가 <strong>전자를 공유</strong>하여 만드는 화학 결합입니다.</p>
                
                <div class="example-box">
                    <h4>💧 물(H₂O) 분자의 예</h4>
                    <p>수소 원자 2개와 산소 원자 1개가 전자를 공유하여 결합합니다.</p>
                    <div class="molecule-diagram">
                        H - O - H
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>공유결합의 특징</h3>
                <ul class="feature-list">
                    <li>🔵 주로 <strong>비금속 원소</strong>들 사이에서 일어납니다</li>
                    <li>🔵 전자를 <strong>공유</strong>하여 안정한 전자 배치를 만듭니다</li>
                    <li>🔵 결합의 세기가 강하여 분자가 안정합니다</li>
                    <li>🔵 일반적으로 녹는점과 끓는점이 낮습니다</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3>공유결합의 종류</h3>
                
                <div class="bond-types">
                    <div class="bond-type">
                        <h4>단일결합 (Single Bond)</h4>
                        <p>전자쌍 1개를 공유</p>
                        <div class="formula">H-H (수소 분자)</div>
                    </div>
                    
                    <div class="bond-type">
                        <h4>이중결합 (Double Bond)</h4>
                        <p>전자쌍 2개를 공유</p>
                        <div class="formula">O=O (산소 분자)</div>
                    </div>
                    
                    <div class="bond-type">
                        <h4>삼중결합 (Triple Bond)</h4>
                        <p>전자쌍 3개를 공유</p>
                        <div class="formula">N≡N (질소 분자)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>일상생활 속 공유결합 물질</h3>
                <div class="daily-examples">
                    <div class="example-item">
                        <span class="icon">💧</span>
                        <span>물 (H₂O)</span>
                    </div>
                    <div class="example-item">
                        <span class="icon">🍬</span>
                        <span>설탕 (C₁₂H₂₂O₁₁)</span>
                    </div>
                    <div class="example-item">
                        <span class="icon">💨</span>
                        <span>이산화탄소 (CO₂)</span>
                    </div>
                    <div class="example-item">
                        <span class="icon">🔥</span>
                        <span>메탄 (CH₄)</span>
                    </div>
                </div>
            </div>
            
            <div class="quiz-prompt">
                <p>학습을 마쳤나요? <button onclick="startTopicPractice('covalent')">공유결합 문제 풀어보기 →</button></p>
            </div>
        </div>
    `,
    
    ionic: `
        <div class="content-wrapper">
            <button class="back-btn" onclick="document.getElementById('topic-content').style.display='none'">← 돌아가기</button>
            
            <h2>⚡ 이온화합물 (Ionic Compound)</h2>
            
            <div class="content-section">
                <h3>이온화합물이란?</h3>
                <p>이온화합물은 <strong>양이온(+)</strong>과 <strong>음이온(-)</strong>이 정전기적 인력으로 결합한 화합물입니다.</p>
                
                <div class="example-box">
                    <h4>🧂 소금(NaCl)의 예</h4>
                    <p>나트륨(Na)은 전자를 잃어 Na⁺가 되고, 염소(Cl)는 전자를 얻어 Cl⁻가 됩니다.</p>
                    <div class="ion-diagram">
                        Na → Na⁺ + e⁻<br>
                        Cl + e⁻ → Cl⁻<br>
                        Na⁺ + Cl⁻ → NaCl
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>이온화합물의 형성</h3>
                <div class="formation-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <p>금속 원자가 전자를 잃어 양이온이 됩니다</p>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <p>비금속 원자가 전자를 얻어 음이온이 됩니다</p>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <p>양이온과 음이온이 정전기적 인력으로 결합합니다</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>이온화합물의 특징</h3>
                <ul class="feature-list">
                    <li>⚡ <strong>금속</strong>과 <strong>비금속</strong>의 결합입니다</li>
                    <li>⚡ 높은 녹는점과 끓는점을 가집니다</li>
                    <li>⚡ 고체 상태에서는 전기가 통하지 않습니다</li>
                    <li>⚡ 녹거나 물에 녹으면 전기가 통합니다</li>
                    <li>⚡ 대부분 물에 잘 녹습니다</li>
                    <li>⚡ 결정 구조를 가집니다</li>
                </ul>
            </div>
            
            <div class="content-section">
                <h3>일상생활 속 이온화합물</h3>
                <div class="daily-examples">
                    <div class="example-item">
                        <span class="icon">🧂</span>
                        <span>소금 (NaCl)</span>
                    </div>
                    <div class="example-item">
                        <span class="icon">🥛</span>
                        <span>탄산칼슘 (CaCO₃) - 치약, 분필</span>
                    </div>
                    <div class="example-item">
                        <span class="icon">💊</span>
                        <span>수산화마그네슘 (Mg(OH)₂) - 제산제</span>
                    </div>
                    <div class="example-item">
                        <span class="icon">🍞</span>
                        <span>탄산수소나트륨 (NaHCO₃) - 베이킹소다</span>
                    </div>
                </div>
            </div>
            
            <div class="quiz-prompt">
                <p>학습을 마쳤나요? <button onclick="startTopicPractice('ionic')">이온화합물 문제 풀어보기 →</button></p>
            </div>
        </div>
    `,
    
    molecular: `
        <div class="content-wrapper">
            <button class="back-btn" onclick="document.getElementById('topic-content').style.display='none'">← 돌아가기</button>
            
            <h2>🔬 분자 구조 (Molecular Structure)</h2>
            
            <div class="content-section">
                <h3>분자의 3차원 구조</h3>
                <p>분자는 평면이 아닌 <strong>3차원 공간</strong>에 특정한 모양을 가지고 있습니다.</p>
                
                <div class="structure-gallery">
                    <div class="structure-item">
                        <h4>직선형</h4>
                        <div class="structure-diagram">A-B-C</div>
                        <p>예: CO₂</p>
                    </div>
                    
                    <div class="structure-item">
                        <h4>굽은형</h4>
                        <div class="structure-diagram">
                            &nbsp;&nbsp;A<br>
                            &nbsp;/ \\<br>
                            B&nbsp;&nbsp;&nbsp;C
                        </div>
                        <p>예: H₂O</p>
                    </div>
                    
                    <div class="structure-item">
                        <h4>삼각평면형</h4>
                        <div class="structure-diagram">
                            &nbsp;&nbsp;B<br>
                            &nbsp;&nbsp;|<br>
                            A-C<br>
                            &nbsp;&nbsp;|<br>
                            &nbsp;&nbsp;D
                        </div>
                        <p>예: BF₃</p>
                    </div>
                    
                    <div class="structure-item">
                        <h4>정사면체형</h4>
                        <div class="structure-diagram">3D 구조</div>
                        <p>예: CH₄</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>VSEPR 이론</h3>
                <p>VSEPR(전자쌍 반발 이론)은 분자의 모양을 예측하는 이론입니다.</p>
                
                <div class="theory-box">
                    <h4>기본 원리</h4>
                    <p>중심 원자 주위의 전자쌍들은 서로 <strong>최대한 멀리 떨어지려고</strong> 합니다.</p>
                    
                    <ul>
                        <li>전자쌍 2개 → 직선형 (180°)</li>
                        <li>전자쌍 3개 → 삼각평면형 (120°)</li>
                        <li>전자쌍 4개 → 정사면체형 (109.5°)</li>
                    </ul>
                    
                    <p><strong>주의:</strong> 비공유 전자쌍(혼자 있는 전자)이 있으면 분자 모양이 달라집니다. 예를 들어, 물(H₂O)은 전자쌍이 4개이지만 비공유 전자쌍 때문에 굽은형이 됩니다.</p>
                </div>
            </div>
            
            <div class="content-section">
                <h3>분자 구조가 중요한 이유</h3>
                <div class="importance-grid">
                    <div class="importance-item">
                        <h4>🧲 극성</h4>
                        <p>분자의 모양이 극성을 결정합니다</p>
                    </div>
                    <div class="importance-item">
                        <h4>🧬 생물학적 기능</h4>
                        <p>효소와 기질의 결합은 구조에 의존합니다</p>
                    </div>
                    <div class="importance-item">
                        <h4>💊 약물 작용</h4>
                        <p>약물의 효과는 분자 구조와 관련됩니다</p>
                    </div>
                    <div class="importance-item">
                        <h4>🎨 물질의 성질</h4>
                        <p>녹는점, 끓는점 등이 구조에 영향받습니다</p>
                    </div>
                </div>
            </div>
            
            <div class="quiz-prompt">
                <p>학습을 마쳤나요? <button onclick="startTopicPractice('molecular')">분자구조 문제 풀어보기 →</button></p>
            </div>
        </div>
    `,
    
    bonding: `
        <div class="content-wrapper">
            <button class="back-btn" onclick="document.getElementById('topic-content').style.display='none'">← 돌아가기</button>
            
            <h2>💪 결합의 세기 (Bond Strength)</h2>
            
            <div class="content-section">
                <h3>결합 에너지란?</h3>
                <p><strong>결합 에너지</strong>는 결합을 끊는 데 필요한 에너지입니다. 결합이 강할수록 더 많은 에너지가 필요합니다.</p>
                
                <div class="energy-comparison">
                    <h4>결합 종류별 에너지 비교</h4>
                    <div class="energy-bars">
                        <div class="energy-bar">
                            <div class="bar" style="width: 40%"></div>
                            <span>C-C 단일결합: 347 kJ/mol</span>
                        </div>
                        <div class="energy-bar">
                            <div class="bar" style="width: 70%"></div>
                            <span>C=C 이중결합: 602 kJ/mol</span>
                        </div>
                        <div class="energy-bar">
                            <div class="bar" style="width: 95%"></div>
                            <span>C≡C 삼중결합: 835 kJ/mol</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>결합 세기에 영향을 주는 요인</h3>
                
                <div class="factor-cards">
                    <div class="factor-card">
                        <h4>1. 결합 차수</h4>
                        <p>공유하는 전자쌍이 많을수록 결합이 강합니다</p>
                        <div class="example">삼중결합 > 이중결합 > 단일결합</div>
                    </div>
                    
                    <div class="factor-card">
                        <h4>2. 원자 크기</h4>
                        <p>작은 원자끼리의 결합이 더 강합니다</p>
                        <div class="example">H-F > H-Cl > H-Br > H-I</div>
                    </div>
                    
                    <div class="factor-card">
                        <h4>3. 전기음성도 차이</h4>
                        <p>전기음성도 차이가 클수록 결합이 강해집니다</p>
                        <div class="example">극성이 큰 결합이 더 강함</div>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>결합 길이와 세기의 관계</h3>
                <div class="relationship-box">
                    <p><strong>반비례 관계</strong>: 결합이 짧을수록 더 강합니다!</p>
                    
                    <table class="bond-table">
                        <tr>
                            <th>결합</th>
                            <th>결합 길이</th>
                            <th>결합 에너지</th>
                        </tr>
                        <tr>
                            <td>C-C</td>
                            <td>1.54 Å</td>
                            <td>347 kJ/mol</td>
                        </tr>
                        <tr>
                            <td>C=C</td>
                            <td>1.34 Å</td>
                            <td>602 kJ/mol</td>
                        </tr>
                        <tr>
                            <td>C≡C</td>
                            <td>1.20 Å</td>
                            <td>835 kJ/mol</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-section">
                <h3>실생활 예시</h3>
                <div class="real-life-examples">
                    <div class="example">
                        <h4>💎 다이아몬드</h4>
                        <p>탄소-탄소 단일결합의 3차원 네트워크로 매우 단단합니다</p>
                    </div>
                    <div class="example">
                        <h4>🔥 연료의 연소</h4>
                        <p>C-H 결합을 끊고 더 강한 C=O, O-H 결합을 만들어 에너지를 방출합니다</p>
                    </div>
                    <div class="example">
                        <h4>🧬 DNA</h4>
                        <p>약한 수소결합으로 쉽게 분리되고 재결합할 수 있습니다</p>
                    </div>
                </div>
            </div>
            
            <div class="quiz-prompt">
                <p>학습을 마쳤나요? <button onclick="startTopicPractice('bonding')">결합세기 문제 풀어보기 →</button></p>
            </div>
        </div>
    `
};

// 주제 내용 가져오기
function getTopicContent(topicId) {
    return topicContents[topicId] || '<p>콘텐츠를 준비 중입니다.</p>';
}

// 추가 학습 자료
const additionalResources = {
    videos: [
        {
            title: "공유결합의 원리",
            url: "https://example.com/video1",
            duration: "5:30"
        },
        {
            title: "이온화합물 만들기 실험",
            url: "https://example.com/video2",
            duration: "7:45"
        }
    ],
    
    experiments: [
        {
            title: "소금 결정 만들기",
            difficulty: "쉬움",
            materials: ["소금", "물", "실", "연필"],
            steps: [
                "따뜻한 물에 소금을 녹입니다",
                "실을 연필에 묶어 용액에 담급니다",
                "며칠간 기다리면 결정이 자랍니다"
            ]
        }
    ],
    
    glossary: {
        "공유결합": "두 개 이상의 원자가 전자를 공유하여 만드는 화학 결합",
        "이온결합": "양이온과 음이온 사이의 정전기적 인력에 의한 결합",
        "전기음성도": "원자가 전자를 끌어당기는 능력의 상대적 크기",
        "극성": "분자 내에서 전하가 고르게 분포하지 않은 상태",
        "VSEPR": "Valence Shell Electron Pair Repulsion, 전자쌍 반발 이론"
    }
};