const startBtn = document.getElementById('start-btn')
const noteToPlay = document.getElementById('note-to-play')

const startGame = ({ target }) => {
  target.innerText === 'Start' && (target.innerText = 'Next')
  const noteNr = Math.floor(Math.random() * notes.length)
  noteToPlay.innerText = notes[noteNr].note
  document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'))
}

const validateGame = (target, note) => {
  if (note === noteToPlay.innerText) {
    target.classList.add('is-valid')
  } else {
    target.classList.add('is-invalid')
    setTimeout(() => target.classList.remove('is-invalid'), 350)
  }
}

startBtn.onclick = startGame

notes.forEach(({ note, audio }) => {
  const btn = document.createElement('button')
  btn.classList.add('note', note)
  btn.onclick = ({ target }) => {
    audio.cloneNode().play()
    noteToPlay.innerText && validateGame(target, note)
  }
  document.querySelector('.piano-wrapper').append(btn)
})
