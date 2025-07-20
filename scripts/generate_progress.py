#!/usr/bin/env python3
"""
GitHub Actions에서 실행되는 진도 데이터 생성 스크립트
실제 서버 대신 이 스크립트가 주기적으로 데이터를 업데이트합니다.
"""

import json
import os
from datetime import datetime, timedelta
import random

def generate_sample_progress():
    """샘플 진도 데이터 생성"""
    # 실제로는 사용자 제출 데이터를 처리하겠지만,
    # 데모를 위해 샘플 데이터 생성
    
    users = {}
    
    # 몇 명의 샘플 사용자 생성
    for i in range(5):
        user_id = f"demo_user_{i+1}"
        
        # 랜덤한 진도 데이터
        total_questions = random.randint(10, 100)
        correct_answers = random.randint(int(total_questions * 0.5), total_questions)
        
        users[user_id] = {
            "totalTime": random.randint(30, 300),  # 30분 ~ 5시간
            "totalQuestions": total_questions,
            "correctAnswers": correct_answers,
            "score": correct_answers * 10,
            "lastAccessed": (datetime.now() - timedelta(hours=random.randint(1, 72))).isoformat(),
            "topics": {
                "covalent": random.randint(0, 100),
                "ionic": random.randint(0, 100),
                "molecular": random.randint(0, 100),
                "bonding": random.randint(0, 100)
            }
        }
    
    return users

def update_progress_file():
    """progress.json 파일 업데이트"""
    progress_file = "api/progress.json"
    
    # 기존 데이터 로드
    if os.path.exists(progress_file):
        with open(progress_file, 'r', encoding='utf-8') as f:
            try:
                existing_data = json.load(f)
            except:
                existing_data = {}
    else:
        existing_data = {}
    
    # 새 샘플 데이터 추가 (실제로는 사용자 제출 데이터 처리)
    new_data = generate_sample_progress()
    
    # 데이터 병합
    existing_data.update(new_data)
    
    # 파일 저장
    os.makedirs("api", exist_ok=True)
    with open(progress_file, 'w', encoding='utf-8') as f:
        json.dump(existing_data, f, ensure_ascii=False, indent=2)
    
    print(f"Progress data updated: {len(existing_data)} users")

if __name__ == "__main__":
    update_progress_file()