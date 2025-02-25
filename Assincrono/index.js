const delay = (ms, message) => new Promise(resolve => setTimeout(
    () => console.log(message), ms
    )
)

delay(2000, 'aaaaaaaa');
console.log('Mundo!');