console.log('app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(function(registration) {
      console.log('registration', registration)
    })
    .catch(function(err) {
      console.error('registration', err)
    })
}