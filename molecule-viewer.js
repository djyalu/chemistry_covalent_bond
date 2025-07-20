// 3D 분자 시각화 모듈
class MoleculeViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.molecules = {
            'H2O': {
                name: '물',
                atoms: [
                    { element: 'O', position: [0, 0, 0], color: 0xFF0000 },
                    { element: 'H', position: [1, 0.5, 0], color: 0xFFFFFF },
                    { element: 'H', position: [-1, 0.5, 0], color: 0xFFFFFF }
                ],
                bonds: [
                    { start: 0, end: 1, type: 'single' },
                    { start: 0, end: 2, type: 'single' }
                ]
            },
            'CH4': {
                name: '메탄',
                atoms: [
                    { element: 'C', position: [0, 0, 0], color: 0x404040 },
                    { element: 'H', position: [1, 1, 1], color: 0xFFFFFF },
                    { element: 'H', position: [-1, -1, 1], color: 0xFFFFFF },
                    { element: 'H', position: [1, -1, -1], color: 0xFFFFFF },
                    { element: 'H', position: [-1, 1, -1], color: 0xFFFFFF }
                ],
                bonds: [
                    { start: 0, end: 1, type: 'single' },
                    { start: 0, end: 2, type: 'single' },
                    { start: 0, end: 3, type: 'single' },
                    { start: 0, end: 4, type: 'single' }
                ]
            },
            'CO2': {
                name: '이산화탄소',
                atoms: [
                    { element: 'C', position: [0, 0, 0], color: 0x404040 },
                    { element: 'O', position: [2, 0, 0], color: 0xFF0000 },
                    { element: 'O', position: [-2, 0, 0], color: 0xFF0000 }
                ],
                bonds: [
                    { start: 0, end: 1, type: 'double' },
                    { start: 0, end: 2, type: 'double' }
                ]
            },
            'NH3': {
                name: '암모니아',
                atoms: [
                    { element: 'N', position: [0, 0, 0], color: 0x0000FF },
                    { element: 'H', position: [1, 0.5, 0.5], color: 0xFFFFFF },
                    { element: 'H', position: [-0.5, -0.5, 1], color: 0xFFFFFF },
                    { element: 'H', position: [-0.5, -0.5, -1], color: 0xFFFFFF }
                ],
                bonds: [
                    { start: 0, end: 1, type: 'single' },
                    { start: 0, end: 2, type: 'single' },
                    { start: 0, end: 3, type: 'single' }
                ]
            },
            'NaCl': {
                name: '염화나트륨',
                atoms: [
                    { element: 'Na', position: [0, 0, 0], color: 0x9C27B0 },
                    { element: 'Cl', position: [2.5, 0, 0], color: 0x00FF00 }
                ],
                bonds: [
                    { start: 0, end: 1, type: 'ionic' }
                ]
            }
        };
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.currentMolecule = null;
        this.animationId = null;
    }
    
    init() {
        // 간단한 3D 시각화 (Three.js 없이)
        this.createCanvas();
    }
    
    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 300;
        canvas.style.border = '1px solid #ddd';
        canvas.style.borderRadius = '8px';
        canvas.style.backgroundColor = '#f5f5f5';
        this.container.appendChild(canvas);
        
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    
    displayMolecule(moleculeName) {
        const molecule = this.molecules[moleculeName];
        if (!molecule) return;
        
        this.currentMolecule = molecule;
        this.draw2DMolecule(molecule);
    }
    
    draw2DMolecule(molecule) {
        const ctx = this.ctx;
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Draw title
        ctx.font = '20px Arial';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.fillText(molecule.name, width / 2, 30);
        
        // Center coordinates
        const centerX = width / 2;
        const centerY = height / 2;
        const scale = 40;
        
        // Draw bonds
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 2;
        
        molecule.bonds.forEach(bond => {
            const atom1 = molecule.atoms[bond.start];
            const atom2 = molecule.atoms[bond.end];
            
            const x1 = centerX + atom1.position[0] * scale;
            const y1 = centerY + atom1.position[1] * scale;
            const x2 = centerX + atom2.position[0] * scale;
            const y2 = centerY + atom2.position[1] * scale;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            
            // Draw double/triple bonds
            if (bond.type === 'double') {
                const offset = 4;
                const angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;
                const dx = Math.cos(angle) * offset;
                const dy = Math.sin(angle) * offset;
                
                ctx.beginPath();
                ctx.moveTo(x1 + dx, y1 + dy);
                ctx.lineTo(x2 + dx, y2 + dy);
                ctx.stroke();
            }
            
            // Ionic bond (dashed)
            if (bond.type === 'ionic') {
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.setLineDash([]);
            }
        });
        
        // Draw atoms
        molecule.atoms.forEach((atom, index) => {
            const x = centerX + atom.position[0] * scale;
            const y = centerY + atom.position[1] * scale;
            
            // Atom circle
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = this.getColorString(atom.color);
            ctx.fill();
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Atom symbol
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(atom.element, x, y);
        });
        
        // Add rotation info
        ctx.font = '12px Arial';
        ctx.fillStyle = '#666';
        ctx.textAlign = 'center';
        ctx.fillText('(2D 표현)', width / 2, height - 20);
    }
    
    getColorString(hexColor) {
        return '#' + hexColor.toString(16).padStart(6, '0');
    }
    
    // 분자 회전 애니메이션 (간단한 시뮬레이션)
    animateMolecule() {
        let rotation = 0;
        
        const animate = () => {
            rotation += 0.02;
            
            if (this.currentMolecule) {
                // 회전 효과를 위한 간단한 변환
                const rotatedMolecule = {
                    ...this.currentMolecule,
                    atoms: this.currentMolecule.atoms.map(atom => ({
                        ...atom,
                        position: [
                            atom.position[0] * Math.cos(rotation) - atom.position[2] * Math.sin(rotation),
                            atom.position[1],
                            atom.position[0] * Math.sin(rotation) + atom.position[2] * Math.cos(rotation)
                        ]
                    }))
                };
                
                this.draw2DMolecule(rotatedMolecule);
            }
            
            this.animationId = requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

// 분자 그리기 도구
class MoleculeDrawer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.atoms = [];
        this.bonds = [];
        this.selectedAtom = null;
        this.currentElement = 'C';
        this.bondType = 'single';
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }
    
    handleClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // 원자 추가 또는 선택
        const clickedAtom = this.getAtomAt(x, y);
        
        if (clickedAtom) {
            if (this.selectedAtom && this.selectedAtom !== clickedAtom) {
                // 결합 생성
                this.addBond(this.selectedAtom, clickedAtom);
                this.selectedAtom = null;
            } else {
                this.selectedAtom = clickedAtom;
            }
        } else {
            // 새 원자 추가
            this.addAtom(x, y, this.currentElement);
            this.selectedAtom = null;
        }
        
        this.redraw();
    }
    
    addAtom(x, y, element) {
        this.atoms.push({
            x: x,
            y: y,
            element: element,
            color: this.getElementColor(element)
        });
    }
    
    addBond(atom1, atom2) {
        // 중복 결합 확인
        const existingBond = this.bonds.find(bond => 
            (bond.from === atom1 && bond.to === atom2) ||
            (bond.from === atom2 && bond.to === atom1)
        );
        
        if (!existingBond) {
            this.bonds.push({
                from: atom1,
                to: atom2,
                type: this.bondType
            });
        }
    }
    
    getAtomAt(x, y) {
        return this.atoms.find(atom => {
            const dx = atom.x - x;
            const dy = atom.y - y;
            return Math.sqrt(dx * dx + dy * dy) < 20;
        });
    }
    
    getElementColor(element) {
        const colors = {
            'H': '#FFFFFF',
            'C': '#404040',
            'N': '#0000FF',
            'O': '#FF0000',
            'S': '#FFFF00',
            'P': '#FF8800',
            'F': '#00FF00',
            'Cl': '#00FF00',
            'Br': '#8B4513',
            'I': '#800080'
        };
        return colors[element] || '#999999';
    }
    
    redraw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 결합 그리기
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 2;
        
        this.bonds.forEach(bond => {
            ctx.beginPath();
            ctx.moveTo(bond.from.x, bond.from.y);
            ctx.lineTo(bond.to.x, bond.to.y);
            ctx.stroke();
            
            // 이중/삼중 결합
            if (bond.type === 'double' || bond.type === 'triple') {
                const angle = Math.atan2(bond.to.y - bond.from.y, bond.to.x - bond.from.x);
                const perpAngle = angle + Math.PI / 2;
                const offset = 4;
                
                ctx.beginPath();
                ctx.moveTo(bond.from.x + Math.cos(perpAngle) * offset, bond.from.y + Math.sin(perpAngle) * offset);
                ctx.lineTo(bond.to.x + Math.cos(perpAngle) * offset, bond.to.y + Math.sin(perpAngle) * offset);
                ctx.stroke();
                
                if (bond.type === 'triple') {
                    ctx.beginPath();
                    ctx.moveTo(bond.from.x - Math.cos(perpAngle) * offset, bond.from.y - Math.sin(perpAngle) * offset);
                    ctx.lineTo(bond.to.x - Math.cos(perpAngle) * offset, bond.to.y - Math.sin(perpAngle) * offset);
                    ctx.stroke();
                }
            }
        });
        
        // 원자 그리기
        this.atoms.forEach(atom => {
            // 원자 원
            ctx.beginPath();
            ctx.arc(atom.x, atom.y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = atom.color;
            ctx.fill();
            ctx.strokeStyle = atom === this.selectedAtom ? '#2196F3' : '#333';
            ctx.lineWidth = atom === this.selectedAtom ? 3 : 2;
            ctx.stroke();
            
            // 원소 기호
            ctx.fillStyle = this.getTextColor(atom.color);
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(atom.element, atom.x, atom.y);
        });
    }
    
    getTextColor(bgColor) {
        // 배경색에 따라 텍스트 색상 결정
        const rgb = parseInt(bgColor.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = rgb & 0xff;
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? '#000' : '#fff';
    }
    
    clear() {
        this.atoms = [];
        this.bonds = [];
        this.selectedAtom = null;
        this.redraw();
    }
    
    setElement(element) {
        this.currentElement = element;
    }
    
    setBondType(type) {
        this.bondType = type;
    }
    
    exportMolecule() {
        return {
            atoms: this.atoms.map((atom, index) => ({
                id: index,
                element: atom.element,
                x: atom.x,
                y: atom.y
            })),
            bonds: this.bonds.map(bond => ({
                from: this.atoms.indexOf(bond.from),
                to: this.atoms.indexOf(bond.to),
                type: bond.type
            }))
        };
    }
}

// 내보내기
window.MoleculeViewer = MoleculeViewer;
window.MoleculeDrawer = MoleculeDrawer;