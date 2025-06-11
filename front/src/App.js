import React, { useState } from 'react';
import CrystalBallScene from './components/CrystalBallScene';
import NameInput from './components/NameInput';
import ConcernInput from './components/ConcernInput';
import titleImg from './img/title.png';
import namePromptImg from './img/name.png';
import './App.css';

function App() {
  const [step, setStep] = useState('start');
  const [name, setName] = useState('');
  const [concern, setConcern] = useState('');
  const [magicOrbMessage, setMagicOrbMessage] = useState('');

  const handleStartClick = () => {
    setStep('nameInput');
    setMagicOrbMessage('이름을 알려주세요');
  };

  const handleNameSubmit = (enteredName) => {
    setName(enteredName);
    setMagicOrbMessage(`${enteredName} 이름이 정말 예쁘다!`);
    setStep('concernInput');
  };

  const handleConcernSubmit = (enteredConcern) => {
    setConcern(enteredConcern);
    setMagicOrbMessage('고민을 잘 전달받았어요.');
    setStep('result');
  };

  return (
    <div className="app-background" style={{ height: '100vh' }}>
      {step === 'start' ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={handleStartClick}
        >
          <img
            src={titleImg}
            alt="타이틀"
            style={{ maxWidth: '80%', height: 'auto' }}
          />
        </div>
      ) : (
        <div style={{ display: 'flex', height: '100%' }}>
          {/* 수정구슬 위치 (조금 아래+오른쪽) */}
          <div
            style={{
              width: '400px',
              height: '400px',
              position: 'relative',
              marginTop: '40px',
              marginLeft: '40px',
            }}
          >
            <CrystalBallScene />
            {magicOrbMessage && (
              <div className="magic-orb-overlay-message">
                {magicOrbMessage === '이름을 알려주세요' ? (
                  <img
                    src={namePromptImg}
                    alt="이름을 알려주세요"
                    style={{ width: '220px', height: 'auto' }}
                  />
                ) : (
                  <span>{magicOrbMessage}</span>
                )}
              </div>
            )}
          </div>

          {/* 별 & 입력 칸 영역 */}
          <div
            style={{
              marginLeft: '50px',
              flexGrow: 1,
              paddingLeft: '500px',
              paddingBottom: '300px',
            }}
          >
            {step === 'nameInput' && <NameInput onSubmit={handleNameSubmit} />}
            {step === 'concernInput' && (
              <ConcernInput onSubmit={handleConcernSubmit} />
            )}
            {step === 'result' && (
              <div style={{ color: 'white' }}>
                <p>{name}님의 고민이 수정구슬에 전달되었습니다.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;