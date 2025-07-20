// 새로운 시각적 설명 모듈
function showVisualExplanation() {
    console.log('새로운 시각적 설명 함수 호출됨');
    
    // 기본 확인
    if (!window.currentQuestion) {
        alert('현재 문제가 없습니다.');
        return;
    }
    
    // 컨테이너 찾기
    const container = document.getElementById('molecule-visualization');
    if (!container) {
        alert('시각화 영역을 찾을 수 없습니다.');
        return;
    }
    
    // 안전한 텍스트 추출
    let explanation = '';
    let hint = '';
    
    try {
        explanation = window.currentQuestion.explanation || '이 문제에 대한 추가 설명입니다.';
        hint = window.currentQuestion.hint || '';
    } catch (e) {
        explanation = '문제 설명을 불러올 수 없습니다.';
    }
    
    // HTML 생성
    container.innerHTML = `
        <h4>🔬 시각적 설명</h4>
        <div class="visual-content">
            <div class="explanation-section">
                <h5>💡 문제 해설</h5>
                <p>${explanation}</p>
                ${hint ? `<p><strong>힌트:</strong> ${hint}</p>` : ''}
            </div>
        </div>
        <div class="viz-controls">
            <button onclick="hideVisualExplanation()">닫기</button>
        </div>
    `;
    
    // 표시
    container.style.display = 'block';
    
    // 버튼 숨기기
    const btn = document.getElementById('visual-aid-btn');
    if (btn) {
        btn.style.display = 'none';
    }
    
    console.log('시각적 설명 표시 완료');
}

function hideVisualExplanation() {
    const container = document.getElementById('molecule-visualization');
    if (container) {
        container.style.display = 'none';
    }
    
    const btn = document.getElementById('visual-aid-btn');
    if (btn) {
        btn.style.display = 'inline-block';
    }
}

// 전역으로 등록
window.showVisualExplanation = showVisualExplanation;
window.hideVisualExplanation = hideVisualExplanation;