# 화학 종합 학습 노트

이 문서는 일반화학의 핵심 개념과 Python을 활용한 화학 문제 해결 방법을 통합한 종합 학습 자료입니다.

## 목차

### Part 1: 일반화학 핵심 개념
1. [분자 궤도 이론 (Molecular Orbital Theory)](#분자-궤도-이론)
2. [공유 결합의 세기 (Strength of Covalent Bonds)](#공유-결합의-세기)
3. [화학 반응의 에너지 (Energy of Chemical Reactions)](#화학-반응의-에너지)

### Part 2: Python을 활용한 화학
4. [SMILES (Simplified Molecular Input Line Entry System) 개념](#smiles-개념)
5. [헤테로원자(Heteroatoms)의 존재 감지](#헤테로원자-감지)
6. [Python을 활용한 화학 문제 해결](#python-화학-문제-해결)

---

# Part 1: 일반화학 핵심 개념

## 1. 분자 궤도 이론 (Molecular Orbital Theory) {#분자-궤도-이론}

### 개요
분자 궤도 이론(MO Theory)은 원자들이 결합할 때 전자가 어떻게 배치되는지 설명하는 양자역학적 모델입니다.

### 핵심 개념

#### 1.1 분자 궤도의 형성
- **원자 궤도의 중첩**: 두 원자가 가까워지면 원자 궤도가 중첩되어 분자 궤도를 형성
- **선형 결합**: 원자 궤도들의 선형 결합으로 분자 궤도 생성 (LCAO-MO)

#### 1.2 분자 궤도의 종류
- **결합 분자 궤도 (Bonding MO)**
  - 기호: σ, π
  - 에너지가 원래 원자 궤도보다 낮음
  - 전자 밀도가 두 핵 사이에 집중
  - 안정화 효과

- **반결합 분자 궤도 (Antibonding MO)**
  - 기호: σ*, π*
  - 에너지가 원래 원자 궤도보다 높음
  - 두 핵 사이에 마디(node) 존재
  - 불안정화 효과

#### 1.3 분자 궤도 에너지 준위도
```
     σ*2p ----
π*2p ---- ----
     σ2p  ----
π2p  ---- ----
     σ*2s ----
     σ2s  ----
```

#### 1.4 전자 배치 규칙
- **Aufbau 원리**: 낮은 에너지 궤도부터 채움
- **Pauli 배타 원리**: 한 궤도에 최대 2개 전자 (반대 스핀)
- **Hund의 규칙**: 동일 에너지 궤도는 먼저 홀전자로 채움

#### 1.5 결합 차수 (Bond Order)
```
결합 차수 = (결합 전자수 - 반결합 전자수) / 2
```
- 결합 차수가 클수록 결합이 강하고 짧음
- 결합 차수 = 0: 분자 형성 안 됨
- 결합 차수 = 1: 단일 결합
- 결합 차수 = 2: 이중 결합
- 결합 차수 = 3: 삼중 결합

#### 1.6 동핵 이원자 분자 예시
- **H₂**: (σ1s)² → 결합 차수 = 1
- **He₂**: (σ1s)²(σ*1s)² → 결합 차수 = 0 (존재하지 않음)
- **N₂**: (σ2s)²(σ*2s)²(π2p)⁴(σ2p)² → 결합 차수 = 3
- **O₂**: (σ2s)²(σ*2s)²(σ2p)²(π2p)⁴(π*2p)² → 결합 차수 = 2

#### 1.7 자기적 성질
- **반자성 (Diamagnetic)**: 모든 전자가 짝지어짐
- **상자성 (Paramagnetic)**: 홀전자 존재 (예: O₂)

### Python으로 분자 궤도 이론 구현

```python
def calculate_bond_order(bonding_electrons, antibonding_electrons):
    """
    결합 차수 계산
    """
    return (bonding_electrons - antibonding_electrons) / 2

def predict_molecule_stability(bond_order):
    """
    결합 차수로 분자 안정성 예측
    """
    if bond_order <= 0:
        return "분자 형성 불가"
    elif bond_order == 1:
        return "단일 결합 - 안정"
    elif bond_order == 2:
        return "이중 결합 - 매우 안정"
    elif bond_order == 3:
        return "삼중 결합 - 극도로 안정"
    else:
        return f"부분 결합 (차수: {bond_order})"

# 예제
molecules = {
    "H2": {"bonding": 2, "antibonding": 0},
    "He2": {"bonding": 2, "antibonding": 2},
    "N2": {"bonding": 10, "antibonding": 4},
    "O2": {"bonding": 10, "antibonding": 6}
}

for mol, electrons in molecules.items():
    bo = calculate_bond_order(electrons["bonding"], electrons["antibonding"])
    stability = predict_molecule_stability(bo)
    print(f"{mol}: 결합 차수 = {bo}, {stability}")
```

---

## 2. 공유 결합의 세기 (Strength of Covalent Bonds) {#공유-결합의-세기}

### 개요
공유 결합의 세기는 분자의 안정성과 반응성을 결정하는 중요한 요소입니다.

### 핵심 개념

#### 2.1 결합 에너지 (Bond Energy)
- **정의**: 기체 상태에서 1몰의 결합을 끊는데 필요한 에너지
- **단위**: kJ/mol 또는 kcal/mol
- **결합 해리 에너지 (BDE)**: 특정 분자에서 특정 결합을 끊는데 필요한 에너지

#### 2.2 결합 세기에 영향을 미치는 요인

##### a) 결합 차수
- 단일 결합 < 이중 결합 < 삼중 결합
- 예시:
  - C-C: 348 kJ/mol
  - C=C: 614 kJ/mol
  - C≡C: 839 kJ/mol

##### b) 원자 크기
- 작은 원자 간 결합이 더 강함
- 결합 거리가 짧을수록 결합이 강함
- 예시:
  - H-F > H-Cl > H-Br > H-I

##### c) 전기음성도 차이
- 전기음성도 차이가 클수록 결합의 이온성 증가
- 부분적 이온성이 결합을 강화

##### d) 공명 구조
- 공명으로 인한 전자의 비편재화
- 실제 결합은 단일/이중 결합의 중간 성격

#### 2.3 일반적인 결합 에너지
| 결합 | 에너지 (kJ/mol) |
|------|----------------|
| H-H  | 436           |
| C-H  | 413           |
| C-C  | 348           |
| C=C  | 614           |
| C≡C  | 839           |
| N-N  | 163           |
| N=N  | 418           |
| N≡N  | 945           |
| O-O  | 146           |
| O=O  | 495           |

#### 2.4 결합 길이와 결합 세기의 관계
- **역비례 관계**: 결합 길이 ↓ → 결합 세기 ↑
- 같은 원소 간 결합에서:
  - 삼중 결합 < 이중 결합 < 단일 결합 (길이)
  - 삼중 결합 > 이중 결합 > 단일 결합 (세기)

### Python으로 결합 에너지 계산

```python
# 결합 에너지 데이터베이스
BOND_ENERGIES = {
    'H-H': 436, 'C-H': 413, 'N-H': 391, 'O-H': 463,
    'C-C': 348, 'C=C': 614, 'C#C': 839,
    'C-N': 293, 'C=N': 615, 'C#N': 891,
    'C-O': 358, 'C=O': 799,
    'N-N': 163, 'N=N': 418, 'N#N': 945,
    'O-O': 146, 'O=O': 495,
    'F-F': 158, 'Cl-Cl': 242, 'Br-Br': 193,
    'H-F': 567, 'H-Cl': 431, 'H-Br': 366
}

def estimate_reaction_enthalpy(bonds_broken, bonds_formed):
    """
    결합 에너지를 사용하여 반응 엔탈피 추정
    """
    energy_required = sum(BOND_ENERGIES.get(bond, 0) * count 
                         for bond, count in bonds_broken.items())
    energy_released = sum(BOND_ENERGIES.get(bond, 0) * count 
                         for bond, count in bonds_formed.items())
    
    delta_h = energy_required - energy_released
    return delta_h

# 예제: CH4 + 2O2 → CO2 + 2H2O
bonds_broken = {'C-H': 4, 'O=O': 2}
bonds_formed = {'C=O': 2, 'O-H': 4}

delta_h = estimate_reaction_enthalpy(bonds_broken, bonds_formed)
print(f"추정 반응 엔탈피: {delta_h} kJ/mol")
print(f"반응 유형: {'발열' if delta_h < 0 else '흡열'} 반응")
```

---

## 3. 화학 반응의 에너지 (Energy of Chemical Reactions) {#화학-반응의-에너지}

### 개요
화학 반응은 항상 에너지 변화를 수반하며, 이는 열역학 제1법칙에 따라 보존됩니다.

### 핵심 개념

#### 3.1 반응 엔탈피 (ΔH)
- **발열 반응 (Exothermic)**: ΔH < 0
  - 에너지 방출
  - 생성물이 반응물보다 안정
  - 예: 연소 반응

- **흡열 반응 (Endothermic)**: ΔH > 0
  - 에너지 흡수
  - 생성물이 반응물보다 불안정
  - 예: 광합성

#### 3.2 활성화 에너지 (Activation Energy, Ea)
- **정의**: 반응이 일어나기 위해 필요한 최소 에너지
- **전이 상태**: 반응물과 생성물 사이의 최고 에너지 상태
- **촉매의 역할**: 활성화 에너지를 낮춤 (반응 속도 증가)

#### 3.3 반응 에너지 다이어그램
```
에너지
  ↑
  |     [전이 상태]
  |        /\
  |       /  \
  |   Ea /    \ 
  |     /      \ ΔH
  |    /        \___[생성물]
  |___[반응물]
  |________________________> 반응 진행
```

#### 3.4 헤스의 법칙 (Hess's Law)
- **원리**: 반응의 엔탈피 변화는 경로와 무관하고 시작과 끝 상태에만 의존
- **응용**:
  - 여러 단계 반응의 전체 ΔH = 각 단계 ΔH의 합
  - 역반응의 ΔH = -정반응의 ΔH

#### 3.5 표준 생성 엔탈피 (ΔH°f)
- **정의**: 표준 상태에서 원소로부터 1몰의 화합물을 생성할 때의 엔탈피 변화
- **표준 상태**: 25°C, 1 atm
- **원소의 ΔH°f = 0**

### Python으로 반응 에너지 계산

```python
# 표준 생성 엔탈피 데이터 (kJ/mol)
STANDARD_FORMATION_ENTHALPIES = {
    'H2O(l)': -285.8,
    'CO2(g)': -393.5,
    'CH4(g)': -74.6,
    'C2H5OH(l)': -277.7,
    'O2(g)': 0,  # 원소의 표준 생성 엔탈피는 0
    'N2(g)': 0,
    'H2(g)': 0,
    'C(s)': 0
}

def calculate_reaction_enthalpy(reactants, products):
    """
    헤스의 법칙을 이용한 반응 엔탈피 계산
    ΔH°rxn = Σ(n × ΔH°f)products - Σ(n × ΔH°f)reactants
    """
    reactant_enthalpy = sum(coeff * STANDARD_FORMATION_ENTHALPIES.get(compound, 0) 
                           for compound, coeff in reactants.items())
    product_enthalpy = sum(coeff * STANDARD_FORMATION_ENTHALPIES.get(compound, 0) 
                          for compound, coeff in products.items())
    
    return product_enthalpy - reactant_enthalpy

def plot_energy_diagram(Ea_forward, delta_H, reaction_name=""):
    """
    반응 에너지 다이어그램 시각화 (텍스트 기반)
    """
    print(f"\n{reaction_name} 에너지 다이어그램:")
    print("에너지")
    print("  ↑")
    
    # 스케일링
    max_e = max(abs(Ea_forward), abs(delta_H)) + 10
    
    # 전이 상태
    print(f"  |{' ' * 10}[전이 상태]")
    print(f"  |{' ' * 10}  /\\")
    print(f"  |{' ' * 8} /  \\")
    print(f"  |  Ea={Ea_forward} /    \\")
    
    if delta_H < 0:  # 발열 반응
        print(f"  |{' ' * 6}/      \\ ΔH={delta_H}")
        print(f"  |{' ' * 5}/        \\___[생성물]")
        print(f"  |___[반응물]")
    else:  # 흡열 반응
        print(f"  |{' ' * 6}/      \\___[생성물]")
        print(f"  |{' ' * 5}/   ΔH={delta_H}")
        print(f"  |___[반응물]")
    
    print("  |________________________> 반응 진행\n")

# 예제: 메탄 연소
reactants = {'CH4(g)': 1, 'O2(g)': 2}
products = {'CO2(g)': 1, 'H2O(l)': 2}

delta_H = calculate_reaction_enthalpy(reactants, products)
print(f"메탄 연소 반응: CH4(g) + 2O2(g) → CO2(g) + 2H2O(l)")
print(f"반응 엔탈피 (ΔH°rxn): {delta_H:.1f} kJ/mol")
print(f"반응 유형: {'발열' if delta_H < 0 else '흡열'} 반응")

plot_energy_diagram(150, delta_H, "메탄 연소")
```

---

# Part 2: Python을 활용한 화학

## 4. SMILES 개념 {#smiles-개념}

### 4.1 SMILES란?
SMILES(Simplified Molecular Input Line Entry System)는 화학 구조를 ASCII 문자열로 표현하는 표기법입니다. 이를 통해 분자 구조를 컴퓨터가 읽고 처리할 수 있는 형태로 간단히 표현할 수 있습니다.

### 4.2 SMILES의 기본 규칙

#### 1. 원자 표현
- 대문자로 시작: C (탄소), N (질소), O (산소), S (황)
- 수소는 보통 생략되지만 명시할 수도 있음
- 대괄호 안에 원자를 넣어 전하나 동위원소 표현: [N+], [O-], [13C]

#### 2. 결합 표현
- 단일결합: 생략 또는 `-`
- 이중결합: `=`
- 삼중결합: `#`
- 방향족 결합: 소문자 사용 (c, n, o)

#### 3. 분기 표현
- 괄호 `()` 사용하여 분기 표현
- 예: `CC(C)C` - 이소부탄

#### 4. 고리 구조
- 숫자를 사용하여 고리 연결 표현
- 예: `C1CCCCC1` - 사이클로헥산

### 4.3 Python으로 SMILES 다루기

```python
# SMILES 문자열 파싱 예제
def parse_smiles(smiles_string):
    """
    간단한 SMILES 파서 구현
    """
    atoms = []
    bonds = []
    
    i = 0
    while i < len(smiles_string):
        char = smiles_string[i]
        
        # 원자 감지
        if char.isalpha() and char.isupper():
            atoms.append(char)
        
        # 결합 감지
        elif char in ['=', '#']:
            bonds.append(char)
        
        # 괄호 처리
        elif char == '(':
            # 분기 시작
            pass
        
        i += 1
    
    return atoms, bonds

# 예제 사용
methane = "C"
ethanol = "CCO"
benzene = "c1ccccc1"

print(f"메탄의 원자: {parse_smiles(methane)[0]}")
print(f"에탄올의 원자: {parse_smiles(ethanol)[0]}")
```

### 4.4 SMILES 예제
- 물: `O`
- 메탄: `C`
- 에탄올: `CCO`
- 아세트산: `CC(=O)O`
- 벤젠: `c1ccccc1` 또는 `C1=CC=CC=C1`
- 아스피린: `CC(=O)Oc1ccccc1C(=O)O`

---

## 5. 헤테로원자(Heteroatoms)의 존재 감지 {#헤테로원자-감지}

### 5.1 헤테로원자란?
헤테로원자는 유기 화합물에서 탄소(C)와 수소(H) 이외의 원자를 말합니다. 주요 헤테로원자로는:
- 질소 (N)
- 산소 (O)
- 황 (S)
- 인 (P)
- 할로겐 (F, Cl, Br, I)

### 5.2 헤테로원자의 중요성
1. **반응성**: 헤테로원자는 분자의 반응성을 크게 변화시킴
2. **극성**: 전기음성도 차이로 인한 극성 생성
3. **수소결합**: O, N, F는 수소결합 형성 가능
4. **생물학적 활성**: 약물의 활성 부위에 자주 포함

### 5.3 Python으로 헤테로원자 감지하기

```python
def detect_heteroatoms(smiles):
    """
    SMILES 문자열에서 헤테로원자 감지
    """
    # 일반적인 헤테로원자 목록
    heteroatoms = ['N', 'O', 'S', 'P', 'F', 'Cl', 'Br', 'I', 'n', 'o', 's', 'p']
    
    found_heteroatoms = []
    
    i = 0
    while i < len(smiles):
        # Cl, Br 같은 두 글자 원소 처리
        if i + 1 < len(smiles):
            two_char = smiles[i:i+2]
            if two_char in ['Cl', 'Br']:
                found_heteroatoms.append(two_char)
                i += 2
                continue
        
        # 한 글자 원소 처리
        if smiles[i] in heteroatoms:
            found_heteroatoms.append(smiles[i])
        
        i += 1
    
    return found_heteroatoms

def count_heteroatoms(smiles):
    """
    SMILES 문자열에서 헤테로원자 개수 세기
    """
    heteroatoms = detect_heteroatoms(smiles)
    
    # 원자별 개수 세기
    count_dict = {}
    for atom in heteroatoms:
        atom_upper = atom.upper()  # 방향족도 같은 원소로 취급
        count_dict[atom_upper] = count_dict.get(atom_upper, 0) + 1
    
    return count_dict

# 예제 사용
molecules = {
    "에탄올": "CCO",
    "아세톤": "CC(=O)C",
    "피리딘": "c1ccncc1",
    "시스테인": "C(C(C(=O)O)N)S",
    "클로로벤젠": "c1ccc(cc1)Cl"
}

for name, smiles in molecules.items():
    heteroatoms = detect_heteroatoms(smiles)
    counts = count_heteroatoms(smiles)
    print(f"{name} ({smiles}):")
    print(f"  헤테로원자: {heteroatoms}")
    print(f"  개수: {counts}")
    print()
```

### 5.4 헤테로원자 분석 고급 예제

```python
def analyze_heteroatom_positions(smiles):
    """
    헤테로원자의 위치와 환경 분석
    """
    analysis = {
        'total_atoms': 0,
        'heteroatoms': [],
        'heteroatom_ratio': 0,
        'functional_groups': []
    }
    
    # 원자 위치 추적
    atom_positions = []
    i = 0
    
    while i < len(smiles):
        char = smiles[i]
        
        # 원자 감지
        if char.isalpha():
            if char.upper() in ['C', 'H']:
                atom_positions.append(('C/H', i))
            else:
                atom_positions.append((char, i))
                analysis['heteroatoms'].append((char, i))
        
        i += 1
    
    analysis['total_atoms'] = len(atom_positions)
    if analysis['total_atoms'] > 0:
        analysis['heteroatom_ratio'] = len(analysis['heteroatoms']) / analysis['total_atoms']
    
    # 작용기 감지
    if 'O' in smiles:
        if '=O' in smiles:
            analysis['functional_groups'].append('카르보닐기')
        if 'OH' in smiles or 'O' in smiles:
            analysis['functional_groups'].append('하이드록실기 가능')
    
    if 'N' in smiles:
        analysis['functional_groups'].append('아민기')
    
    return analysis

# 분석 예제
test_molecule = "CC(=O)NC1=CC=C(C=C1)O"  # 파라세타몰
result = analyze_heteroatom_positions(test_molecule)
print(f"분자 분석 결과:")
print(f"전체 원자 수: {result['total_atoms']}")
print(f"헤테로원자: {result['heteroatoms']}")
print(f"헤테로원자 비율: {result['heteroatom_ratio']:.2%}")
print(f"작용기: {result['functional_groups']}")
```

---

## 6. Python을 활용한 화학 문제 해결 {#python-화학-문제-해결}

### 6.1 기본 화학 계산

#### 6.1.1 분자량 계산

```python
def calculate_molecular_weight(formula):
    """
    간단한 화학식에서 분자량 계산
    """
    # 원자량 사전
    atomic_weights = {
        'H': 1.008,
        'C': 12.011,
        'N': 14.007,
        'O': 15.999,
        'S': 32.065,
        'P': 30.974,
        'F': 18.998,
        'Cl': 35.453,
        'Br': 79.904,
        'I': 126.904
    }
    
    # 간단한 파싱 (실제로는 더 복잡한 파서 필요)
    total_weight = 0
    i = 0
    
    while i < len(formula):
        # 원소 찾기
        element = formula[i]
        
        # 두 글자 원소 처리
        if i + 1 < len(formula) and formula[i:i+2] in atomic_weights:
            element = formula[i:i+2]
            i += 2
        else:
            i += 1
        
        # 개수 찾기
        count = ''
        while i < len(formula) and formula[i].isdigit():
            count += formula[i]
            i += 1
        
        count = int(count) if count else 1
        
        # 분자량 계산
        if element in atomic_weights:
            total_weight += atomic_weights[element] * count
    
    return total_weight

# 예제
molecules = {
    'H2O': '물',
    'C6H12O6': '포도당',
    'C2H5OH': '에탄올',
    'C8H10N4O2': '카페인'
}

for formula, name in molecules.items():
    weight = calculate_molecular_weight(formula)
    print(f"{name} ({formula}): {weight:.2f} g/mol")
```

#### 6.1.2 원소 조성 계산

```python
def calculate_element_composition(formula):
    """
    화학식에서 각 원소의 질량 백분율 계산
    """
    # 원자량 사전
    atomic_weights = {
        'H': 1.008, 'C': 12.011, 'N': 14.007, 'O': 15.999,
        'S': 32.065, 'P': 30.974, 'F': 18.998, 'Cl': 35.453
    }
    
    # 원소별 개수 세기
    element_counts = {}
    i = 0
    
    while i < len(formula):
        # 원소 파싱
        if i + 1 < len(formula) and formula[i:i+2] in atomic_weights:
            element = formula[i:i+2]
            i += 2
        else:
            element = formula[i]
            i += 1
        
        # 개수 파싱
        count = ''
        while i < len(formula) and formula[i].isdigit():
            count += formula[i]
            i += 1
        
        count = int(count) if count else 1
        element_counts[element] = element_counts.get(element, 0) + count
    
    # 전체 분자량 계산
    total_weight = sum(atomic_weights[elem] * count 
                      for elem, count in element_counts.items())
    
    # 백분율 계산
    composition = {}
    for element, count in element_counts.items():
        weight = atomic_weights[element] * count
        percentage = (weight / total_weight) * 100
        composition[element] = {
            'count': count,
            'weight': weight,
            'percentage': percentage
        }
    
    return composition, total_weight

# 예제 사용
formula = "C6H12O6"  # 포도당
composition, total = calculate_element_composition(formula)

print(f"포도당 ({formula}) 조성 분석:")
print(f"총 분자량: {total:.2f} g/mol\n")

for element, data in composition.items():
    print(f"{element}: {data['count']}개")
    print(f"  질량: {data['weight']:.2f} g/mol")
    print(f"  백분율: {data['percentage']:.1f}%")
```

#### 6.1.3 SMILES를 이용한 분자 분석

```python
def analyze_molecule_from_smiles(smiles, name=""):
    """
    SMILES로부터 분자 정보 종합 분석
    """
    print(f"=== {name} 분자 분석 ===")
    print(f"SMILES: {smiles}\n")
    
    # 1. 헤테로원자 분석
    heteroatoms = detect_heteroatoms(smiles)
    hetero_counts = count_heteroatoms(smiles)
    
    print("1. 헤테로원자 분석:")
    if heteroatoms:
        print(f"   발견된 헤테로원자: {set(heteroatoms)}")
        print(f"   개수: {hetero_counts}")
    else:
        print("   헤테로원자 없음 (탄화수소)")
    
    # 2. 구조적 특징 분석
    print("\n2. 구조적 특징:")
    
    # 고리 구조 확인
    if any(char.isdigit() for char in smiles):
        print("   - 고리 구조 포함")
    
    # 방향족 확인
    if any(char.islower() for char in smiles):
        print("   - 방향족 구조 포함")
    
    # 다중 결합 확인
    if '=' in smiles:
        print("   - 이중 결합 포함")
    if '#' in smiles:
        print("   - 삼중 결합 포함")
    
    # 3. 작용기 예측
    print("\n3. 가능한 작용기:")
    
    functional_groups = []
    if 'O' in smiles:
        if 'C=O' in smiles:
            functional_groups.append("카르보닐기 (C=O)")
        if 'OH' in smiles or 'O' in smiles:
            functional_groups.append("하이드록실기 (-OH) 가능")
        if 'C(=O)O' in smiles:
            functional_groups.append("카르복실기 (-COOH)")
    
    if 'N' in smiles:
        functional_groups.append("아민기 (-NH2, -NH-, -N<)")
    
    if 'S' in smiles:
        if 'SH' in smiles:
            functional_groups.append("티올기 (-SH)")
        else:
            functional_groups.append("황 함유 작용기")
    
    for fg in functional_groups:
        print(f"   - {fg}")
    
    print("\n" + "="*40 + "\n")

# 다양한 분자 분석 예제
molecules_to_analyze = [
    ("CCO", "에탄올"),
    ("CC(=O)O", "아세트산"),
    ("c1ccccc1", "벤젠"),
    ("CC(C)C(=O)O", "이소부티르산"),
    ("c1ccc(cc1)N", "아닐린"),
    ("C1CCC(CC1)O", "사이클로헥산올")
]

for smiles, name in molecules_to_analyze:
    analyze_molecule_from_smiles(smiles, name)
```

### 6.2 화학 데이터 처리 실습

```python
# 분자 데이터베이스 시뮬레이션
class MoleculeDatabase:
    def __init__(self):
        self.molecules = {}
    
    def add_molecule(self, name, smiles, properties=None):
        """분자 추가"""
        self.molecules[name] = {
            'smiles': smiles,
            'properties': properties or {},
            'heteroatoms': count_heteroatoms(smiles)
        }
    
    def search_by_heteroatom(self, heteroatom):
        """특정 헤테로원자를 포함하는 분자 검색"""
        results = []
        for name, data in self.molecules.items():
            if heteroatom.upper() in data['heteroatoms']:
                results.append((name, data['smiles']))
        return results
    
    def filter_by_property(self, property_name, min_val=None, max_val=None):
        """속성 값으로 분자 필터링"""
        results = []
        for name, data in self.molecules.items():
            if property_name in data['properties']:
                value = data['properties'][property_name]
                if min_val is not None and value < min_val:
                    continue
                if max_val is not None and value > max_val:
                    continue
                results.append((name, value))
        return results

# 데이터베이스 사용 예제
db = MoleculeDatabase()

# 분자 추가
db.add_molecule("에탄올", "CCO", {"bp": 78.37, "mp": -114.14})
db.add_molecule("아세톤", "CC(=O)C", {"bp": 56.05, "mp": -94.7})
db.add_molecule("피리딘", "c1ccncc1", {"bp": 115.2, "mp": -41.6})
db.add_molecule("페놀", "c1ccc(cc1)O", {"bp": 181.7, "mp": 40.5})

# 질소를 포함하는 분자 검색
print("질소(N)를 포함하는 분자:")
for name, smiles in db.search_by_heteroatom('N'):
    print(f"  - {name}: {smiles}")

# 끓는점으로 필터링
print("\n끓는점이 50-100°C인 분자:")
for name, bp in db.filter_by_property('bp', 50, 100):
    print(f"  - {name}: {bp}°C")
```

---

## 개념 간 연결

### 일반화학과 Python 활용의 통합

#### 1. 분자 궤도 이론과 SMILES
- MO 이론으로 예측한 분자 구조를 SMILES로 표현
- 결합 차수와 SMILES에서의 결합 표현 연겴

#### 2. 결합 세기와 헤테로원자
- 헤테로원자의 전기음성도 차이가 결합 세기에 미치는 영향
- Python으로 헤테로원자 함량과 결합 세기 상관관계 분석

#### 3. 반응 에너지와 계산 화학
- 결합 에너지 데이터를 활용한 반응 엔탈피 예측
- Python으로 헤스의 법칙 구현

### 종합 예제: 분자 설계와 분석

```python
class MoleculeAnalyzer:
    """
    일반화학 개념과 Python을 통합한 분자 분석 도구
    """
    def __init__(self, smiles):
        self.smiles = smiles
        self.heteroatoms = self._detect_heteroatoms()
        self.bonds = self._analyze_bonds()
    
    def _detect_heteroatoms(self):
        """SMILES에서 헤테로원자 감지"""
        heteroatoms = ['N', 'O', 'S', 'P', 'F', 'Cl', 'Br', 'I']
        found = []
        for atom in heteroatoms:
            if atom in self.smiles:
                found.append(atom)
        return found
    
    def _analyze_bonds(self):
        """SMILES에서 결합 유형 분석"""
        bonds = {
            'single': self.smiles.count('-') + len([c for c in self.smiles if c.isupper()]) - 1,
            'double': self.smiles.count('='),
            'triple': self.smiles.count('#'),
            'aromatic': len([c for c in self.smiles if c.islower()])
        }
        return bonds
    
    def predict_properties(self):
        """
        분자 속성 예측
        """
        properties = {}
        
        # 극성 예측
        if self.heteroatoms:
            properties['polarity'] = '극성'
        else:
            properties['polarity'] = '무극성'
        
        # 수소결합 가능성
        h_bonding_atoms = ['N', 'O', 'F']
        if any(atom in self.heteroatoms for atom in h_bonding_atoms):
            properties['h_bonding'] = '가능'
        else:
            properties['h_bonding'] = '불가'
        
        # 방향족성
        if self.bonds['aromatic'] > 0:
            properties['aromaticity'] = '방향족'
        else:
            properties['aromaticity'] = '비방향족'
        
        return properties
    
    def estimate_bond_energy(self):
        """
        총 결합 에너지 추정 (단순화된 방법)
        """
        # 기본 결합 에너지 (가정치)
        energy_values = {
            'C-C': 348, 'C=C': 614, 'C#C': 839,
            'C-H': 413, 'C-O': 358, 'C=O': 799,
            'C-N': 293, 'O-H': 463, 'N-H': 391
        }
        
        # 단순화된 계산
        total_energy = 0
        total_energy += self.bonds['single'] * 350  # 평균 단일결합
        total_energy += self.bonds['double'] * 600  # 평균 이중결합
        total_energy += self.bonds['triple'] * 830  # 평균 삼중결합
        total_energy += self.bonds['aromatic'] * 500  # 방향족 결합
        
        return total_energy
    
    def full_analysis(self):
        """
        종합 분석 결과
        """
        print(f"=== 분자 분석 결과 ===")
        print(f"SMILES: {self.smiles}")
        print(f"\n1. 구조적 특징:")
        print(f"   헤테로원자: {self.heteroatoms}")
        print(f"   결합 유형: {self.bonds}")
        
        properties = self.predict_properties()
        print(f"\n2. 예측 속성:")
        for prop, value in properties.items():
            print(f"   {prop}: {value}")
        
        energy = self.estimate_bond_energy()
        print(f"\n3. 추정 총 결합 에너지: {energy} kJ/mol")
        print("=" * 40)

# 사용 예시
test_molecules = [
    ("CCO", "에탄올"),
    ("CC(=O)O", "아세트산"),
    ("c1ccccc1", "벤젠"),
    ("CC(=O)NC1=CC=C(C=C1)O", "파라세타몰")
]

for smiles, name in test_molecules:
    print(f"\n{name} 분석:")
    analyzer = MoleculeAnalyzer(smiles)
    analyzer.full_analysis()
```

---

## 연습 문제

### 문제 1: MO 이론과 SMILES 통합
N₂⁺ 이온의 결합 차수를 계산하고, 해당하는 SMILES 표현을 예측하시오.

**풀이**:
- N₂⁺: 13개 전자 → 결합 차수 = 2.5
- SMILES: N#N (삼중결합보다 약간 약함)

### 문제 2: 헤테로원자와 결합 에너지
다음 분자들의 C-O 결합 강도를 비교하고 그 이유를 설명하시오:
- 메탄올 (CH₃OH)
- 포름알데히드 (CH₂O)

**풀이**:
포름알데히드의 C=O 이중결합(799 kJ/mol)이 메탄올의 C-O 단일결합(358 kJ/mol)보다 강함.

### 문제 3: 반응 에너지 종합 계산
에탄올 연소 반응의 ΔH°rxn을 계산하시오:
C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)

**풀이**:
표준 생성 엔탈피 사용:
- ΔH°rxn = [2(-393.5) + 3(-285.8)] - [(-277.7) + 3(0)]
- ΔH°rxn = -1366.7 kJ/mol (발열 반응)

---

## 요약

이 종합 학습 노트에서는 다음 내용을 다루었습니다:

### Part 1: 일반화학 핵심 개념
1. **분자 궤도 이론**: 원자 궤도의 결합으로 분자 궤도 형성, 결합 차수로 안정성 예측
2. **결합 세기**: 결합 차수, 원자 크기, 전기음성도가 주요 영향 요인
3. **반응 에너지**: 결합의 형성과 해리에 따른 에너지 변화, 헤스의 법칙으로 계산 가능

### Part 2: Python을 활용한 화학
1. **SMILES 표기법**: 분자 구조를 문자열로 표현하는 방법
2. **헤테로원자 감지**: Python을 사용하여 분자 내 헤테로원자 식별 및 분석
3. **화학 문제 해결**: Python을 활용한 기본적인 화학 계산 및 분자 분석

이러한 기초 개념들은 화학정보학(Cheminformatics) 분야의 기초가 되며, 더 복잡한 분자 모델링, 약물 설계, 화학 데이터베이스 관리 등에 활용될 수 있습니다.

### 추가 학습 자료
- RDKit: Python용 화학정보학 라이브러리
- Open Babel: 화학 파일 형식 변환 도구
- PubChem: 화학 물질 데이터베이스
- ChEMBL: 생물활성 화합물 데이터베이스