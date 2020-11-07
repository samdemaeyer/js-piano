soundsUrls.forEach(({ note, audio }) => {
  const btn = document.createElement('button')
  btn.classList.add('note', note)
  btn.onclick = () => audio.cloneNode().play()
  document.querySelector('.piano-wrapper').append(btn)
})
