soundsUrls.map((audioObj) => {
    new Audio(`assets/audio/notes/${audioObj.src}`)
    return audioObj
  })
  .forEach(({ note, src }) => {
    const btn = document.createElement('button')
    btn.classList.add('note', note);
    btn.onclick = () => new Audio(`assets/audio/notes/${src}`).play()
    document.querySelector('.piano-wrapper').append(btn)
  })
