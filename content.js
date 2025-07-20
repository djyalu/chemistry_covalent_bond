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
                    <p class="detail-info">
                        물 분자에서 산소는 6개의 원자가 전자를 가지고 있고, 
                        수소는 각각 1개의 전자를 가지고 있습니다. 
                        공유결합을 통해 산소는 8개, 수소는 2개의 전자를 갖게 되어 안정해집니다.
                    </p>
                </div>
                
                <div class="concept-highlight">
                    <h4>🔑 핵심 개념: 옥텟 규칙</h4>
                    <p>원자들은 가장 바깥 전자껍질에 8개의 전자를 갖으려고 합니다 (수소는 2개).</p>
                    <ul>
                        <li>원자가 전자를 공유하여 옥텟을 완성</li>
                        <li>비활성 기체의 전자 배치와 같아지려는 경향</li>
                        <li>화학적 안정성 달성</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3>공유결합의 형성 과정</h3>
                <div class="formation-process">
                    <div class="process-step">
                        <span class="step-number">1</span>
                        <h4>원자들이 접근</h4>
                        <p>두 원자가 서로 가까워지면서 전자 구름이 겹치기 시작합니다.</p>
                    </div>
                    <div class="process-step">
                        <span class="step-number">2</span>
                        <h4>전자 공유</h4>
                        <p>원자가 전자들이 두 원자핵 사이에서 공유됩니다.</p>
                    </div>
                    <div class="process-step">
                        <span class="step-number">3</span>
                        <h4>분자 형성</h4>
                        <p>안정한 분자가 형성되며, 에너지가 방출됩니다.</p>
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
                <h3>극성 공유결합과 무극성 공유결합</h3>
                <div class="polarity-comparison">
                    <div class="polarity-type">
                        <h4>무극성 공유결합</h4>
                        <p>같은 원자끼리 또는 전기음성도 차이가 작은 원자들의 결합</p>
                        <ul>
                            <li>H₂ (수소 분자)</li>
                            <li>O₂ (산소 분자)</li>
                            <li>N₂ (질소 분자)</li>
                            <li>CH₄ (메탄) - 대칭 구조</li>
                        </ul>
                    </div>
                    <div class="polarity-type">
                        <h4>극성 공유결합</h4>
                        <p>전기음성도 차이가 큰 원자들의 결합</p>
                        <ul>
                            <li>H₂O (물) - 굽은 구조</li>
                            <li>HCl (염화수소)</li>
                            <li>NH₃ (암모니아)</li>
                            <li>CO (일산화탄소)</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>일상생활 속 공유결합 물질</h3>
                <div class="daily-examples">
                    <div class="example-item">
                        <span class="icon">💧</span>
                        <span>물 (H₂O)</span>
                        <p class="example-detail">음료수, 얼음, 수증기 - 모든 상태에서 공유결합 유지</p>
                    </div>
                    <div class="example-item">
                        <span class="icon">🍬</span>
                        <span>설탕 (C₁₂H₂₂O₁₁)</span>
                        <p class="example-detail">단맛의 원인, 탄수화물의 기본 단위</p>
                    </div>
                    <div class="example-item">
                        <span class="icon">💨</span>
                        <span>이산화탄소 (CO₂)</span>
                        <p class="example-detail">탄산음료의 거품, 드라이아이스, 광합성에 필요</p>
                    </div>
                    <div class="example-item">
                        <span class="icon">🔥</span>
                        <span>메탄 (CH₄)</span>
                        <p class="example-detail">천연가스의 주성분, 가정용 연료</p>
                    </div>
                    <div class="example-item">
                        <span class="icon">🥚</span>
                        <span>단백질</span>
                        <p class="example-detail">아미노산들이 공유결합(펩타이드 결합)으로 연결</p>
                    </div>
                    <div class="example-item">
                        <span class="icon">🧴</span>
                        <span>플라스틱</span>
                        <p class="example-detail">탄소 원자들의 긴 사슬 공유결합</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>공유결합이 만드는 놀라운 물질들</h3>
                <div class="amazing-materials">
                    <div class="material-card">
                        <h4>💎 다이아몬드</h4>
                        <p>탄소 원자들이 3차원으로 공유결합한 가장 단단한 물질</p>
                        <ul>
                            <li>각 탄소가 4개의 다른 탄소와 결합</li>
                            <li>정사면체 구조의 네트워크</li>
                            <li>극도로 높은 녹는점 (3550°C)</li>
                        </ul>
                    </div>
                    <div class="material-card">
                        <h4>✏️ 흑연</h4>
                        <p>같은 탄소지만 다른 구조의 공유결합</p>
                        <ul>
                            <li>층상 구조로 배열</li>
                            <li>층 사이는 약한 힘으로 연결</li>
                            <li>전기 전도성 있음</li>
                        </ul>
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
                
                <div class="property-explanation">
                    <h4>왜 이런 특징을 가질까요?</h4>
                    <div class="explanation-card">
                        <h5>🔥 높은 녹는점의 이유</h5>
                        <p>양이온과 음이온 사이의 강한 정전기적 인력 때문에 많은 에너지가 필요합니다.</p>
                        <p class="example">소금(NaCl)의 녹는점: 801°C</p>
                    </div>
                    <div class="explanation-card">
                        <h5>⚡ 전기 전도성의 비밀</h5>
                        <p>고체: 이온이 고정되어 있어 전기가 통하지 않음</p>
                        <p>액체/수용액: 이온이 자유롭게 움직여 전기가 통함</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>이온의 크기와 전하</h3>
                <div class="ion-size-info">
                    <h4>이온 크기의 규칙</h4>
                    <ul>
                        <li>양이온은 원래 원자보다 작아집니다 (전자를 잃어서)</li>
                        <li>음이온은 원래 원자보다 커집니다 (전자를 얻어서)</li>
                        <li>같은 전자 배치를 가진 이온들 중 양성자 수가 많을수록 크기가 작습니다</li>
                    </ul>
                    
                    <div class="size-example">
                        <p><strong>예시:</strong> Na > Na⁺ (나트륨 원자가 나트륨 이온보다 큼)</p>
                        <p><strong>예시:</strong> Cl < Cl⁻ (염소 원자가 염화 이온보다 작음)</p>
                    </div>
                </div>
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
    `,
    
    // 새로운 주제: 화학 반응
    reactions: `
        <div class="content-wrapper">
            <button class="back-btn" onclick="document.getElementById('topic-content').style.display='none'">← 돌아가기</button>
            
            <h2>⚗️ 화학 반응 (Chemical Reactions)</h2>
            
            <div class="content-section">
                <h3>화학 반응이란?</h3>
                <p>화학 반응은 원자나 분자가 재배열되어 <strong>새로운 물질을 만드는 과정</strong>입니다.</p>
                
                <div class="reaction-basics">
                    <h4>화학 반응의 특징</h4>
                    <ul>
                        <li>원자의 종류와 개수는 변하지 않습니다 (질량 보존의 법칙)</li>
                        <li>화학 결합이 끊어지고 새로 만들어집니다</li>
                        <li>에너지가 흡수되거나 방출됩니다</li>
                        <li>반응 속도는 조건에 따라 달라집니다</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-section">
                <h3>화학 반응의 종류</h3>
                <div class="reaction-types">
                    <div class="reaction-card">
                        <h4>🔥 연소 반응</h4>
                        <p>물질이 산소와 빠르게 반응하여 열과 빛을 내는 반응</p>
                        <div class="equation">CH₄ + 2O₂ → CO₂ + 2H₂O</div>
                        <p class="example">예: 천연가스 연소, 촛불</p>
                    </div>
                    
                    <div class="reaction-card">
                        <h4>🧪 중화 반응</h4>
                        <p>산과 염기가 반응하여 물과 염을 생성하는 반응</p>
                        <div class="equation">HCl + NaOH → NaCl + H₂O</div>
                        <p class="example">예: 제산제의 작용</p>
                    </div>
                    
                    <div class="reaction-card">
                        <h4>⚡ 산화-환원 반응</h4>
                        <p>전자가 이동하는 반응</p>
                        <div class="equation">2Na + Cl₂ → 2NaCl</div>
                        <p class="example">예: 배터리, 금속의 부식</p>
                    </div>
                    
                    <div class="reaction-card">
                        <h4>💧 침전 반응</h4>
                        <p>두 수용액이 반응하여 고체가 생성되는 반응</p>
                        <div class="equation">AgNO₃ + NaCl → AgCl↓ + NaNO₃</div>
                        <p class="example">예: 염화은 침전</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>반응 속도에 영향을 주는 요인</h3>
                <div class="factor-grid">
                    <div class="factor-item">
                        <h4>🌡️ 온도</h4>
                        <p>온도가 높을수록 반응이 빨라집니다</p>
                        <p class="detail">10°C 상승 시 반응 속도 약 2배 증가</p>
                    </div>
                    <div class="factor-item">
                        <h4>📏 농도</h4>
                        <p>반응물의 농도가 높을수록 반응이 빨라집니다</p>
                        <p class="detail">충돌 빈도 증가</p>
                    </div>
                    <div class="factor-item">
                        <h4>🔨 표면적</h4>
                        <p>고체의 표면적이 클수록 반응이 빨라집니다</p>
                        <p class="detail">가루 > 덩어리</p>
                    </div>
                    <div class="factor-item">
                        <h4>⚗️ 촉매</h4>
                        <p>활성화 에너지를 낮춰 반응을 빠르게 합니다</p>
                        <p class="detail">자신은 변하지 않음</p>
                    </div>
                </div>
            </div>
            
            <div class="quiz-prompt">
                <p>학습을 마쳤나요? <button onclick="startTopicPractice('reactions')">화학반응 문제 풀어보기 →</button></p>
            </div>
        </div>
    `,
    
    // 새로운 주제: 일상 속 화학
    dailyChemistry: `
        <div class="content-wrapper">
            <button class="back-btn" onclick="document.getElementById('topic-content').style.display='none'">← 돌아가기</button>
            
            <h2>🏠 일상 속 화학 (Chemistry in Daily Life)</h2>
            
            <div class="content-section">
                <h3>주방에서 만나는 화학</h3>
                <div class="kitchen-chemistry">
                    <div class="daily-item">
                        <h4>🍞 베이킹 파우더</h4>
                        <p><strong>화학식:</strong> NaHCO₃ (탄산수소나트륨)</p>
                        <p><strong>원리:</strong> 열을 받으면 CO₂를 발생시켜 빵을 부풀립니다</p>
                        <div class="equation">2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑</div>
                    </div>
                    
                    <div class="daily-item">
                        <h4>🥤 탄산음료</h4>
                        <p><strong>원리:</strong> CO₂가 물에 녹아 탄산(H₂CO₃)을 형성</p>
                        <p><strong>반응:</strong> CO₂ + H₂O ⇌ H₂CO₃</p>
                        <p>압력이 낮아지면 CO₂가 빠져나와 거품 발생</p>
                    </div>
                    
                    <div class="daily-item">
                        <h4>🧂 소금의 역할</h4>
                        <p><strong>끓는점 상승:</strong> 파스타 물에 소금을 넣으면 끓는점이 높아집니다</p>
                        <p><strong>어는점 하강:</strong> 겨울철 도로에 뿌리는 염화칼슘</p>
                        <p><strong>삼투압:</strong> 김치를 절이는 원리</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>욕실에서 만나는 화학</h3>
                <div class="bathroom-chemistry">
                    <div class="daily-item">
                        <h4>🧼 비누의 원리</h4>
                        <p>비누 분자는 친수성 머리와 소수성 꼬리를 가집니다</p>
                        <ul>
                            <li>소수성 부분: 기름때와 결합</li>
                            <li>친수성 부분: 물과 결합</li>
                            <li>미셀 형성으로 때 제거</li>
                        </ul>
                    </div>
                    
                    <div class="daily-item">
                        <h4>🦷 치약의 불소</h4>
                        <p><strong>성분:</strong> NaF (불화나트륨)</p>
                        <p><strong>작용:</strong> 치아 에나멜을 강화시켜 충치 예방</p>
                        <p>Ca₁₀(PO₄)₆(OH)₂ + F⁻ → Ca₁₀(PO₄)₆F₂ + OH⁻</p>
                    </div>
                </div>
            </div>
            
            <div class="content-section">
                <h3>생활 속 화학 반응</h3>
                <div class="life-reactions">
                    <div class="reaction-example">
                        <h4>🍎 과일의 갈변</h4>
                        <p><strong>원인:</strong> 폴리페놀 산화효소에 의한 산화 반응</p>
                        <p><strong>방지법:</strong> 레몬즙(비타민C)으로 산화 방지</p>
                    </div>
                    
                    <div class="reaction-example">
                        <h4>🥛 우유의 상함</h4>
                        <p><strong>원인:</strong> 젖산균이 유당을 젖산으로 변환</p>
                        <p><strong>결과:</strong> pH 감소로 단백질 응고</p>
                    </div>
                    
                    <div class="reaction-example">
                        <h4>🔋 배터리의 원리</h4>
                        <p><strong>산화-환원 반응:</strong> 전자의 이동으로 전기 생성</p>
                        <p><strong>충전식 배터리:</strong> 역반응으로 재충전</p>
                    </div>
                </div>
            </div>
            
            <div class="quiz-prompt">
                <p>학습을 마쳤나요? <button onclick="startTopicPractice('dailyChemistry')">일상화학 문제 풀어보기 →</button></p>
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