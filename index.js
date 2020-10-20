const sounds = soundsUrls.forEach(({ src, note }, i) => {
  const btn = document.createElement('button')
  btn.classList.add('note', note);
  btn.onclick = () => new Audio(`assets/audio/notes/${src}`).play()
  document.querySelector('.piano-wrapper').append(btn)
})
