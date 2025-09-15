import { useAnimation } from '../hooks/useAnimation'
import catImage from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div className={`cat ${isAnimating ? 'dancing' : ''}`}>
        <img
          src={catImage}
          alt="춤추는 고양이"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className="dance-button"
          aria-label={isAnimating ? '애니메이션 정지' : '애니메이션 시작'}
          tabIndex={0}
        >
          {isAnimating ? '멈춰!' : '춤춰!'}
        </button>
        <div className="keyboard-hint">
          <small>스페이스바 또는 엔터로도 조작 가능</small>
        </div>
      </div>

      <div className="dance-floor">
        <div className="music-note note-1">♪</div>
        <div className="music-note note-2">♫</div>
        <div className="music-note note-3">♪</div>
        <div className="music-note note-4">♫</div>
      </div>
    </div>
  )
}

export default DancingCat