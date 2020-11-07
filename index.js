const startBtn = document.getElementById('start-btn')
const noteToPlay = document.getElementById('note-to-play')

const startGame = ({ target }) => {
  target.innerText === 'Start' && (target.innerText = 'Next')
  const noteNr = Math.floor(Math.random() * notes.length)
  noteToPlay.innerText = notes[noteNr].note
  document.querySelector('.is-valid')?.classList.remove('is-valid')
}

startBtn.onclick = startGame

notes.forEach(({ note, audio }) => {
  const btn = document.createElement('button')
  btn.classList.add('note', note)
  btn.onclick = (e) => {
    audio.cloneNode().play()
    if (note === noteToPlay.innerText) {
      e.target.classList.add('is-valid')
    } else {
      e.target.classList.add('is-invalid')
      setTimeout(() => e.target.classList.remove('is-invalid'), 350)
    }
  }
  document.querySelector('.piano-wrapper').append(btn)
})
