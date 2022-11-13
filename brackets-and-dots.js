const obj = { canal: '@TalkingAboutTesting' }
obj.canal // '@TalkingAboutTesting'
obj['canal'] // '@TalkingAboutTesting'
obj.greet = () => 'Seja bem vinda(o) ao Canal TAT!'
obj.greet() // 'Seja bem vinda(o) ao Canal TAT!'
obj['greet']() // 'Seja bem vinda(o) ao Canal TAT!'
obj.greet = greeting => `${greeting}! Seja bem vinda(o) ao Canal TAT.`
obj['greet']('Olá') // 'Olá! Seja bem vinda(o) ao Canal TAT.'
obj.greet('Daí tchê') // 'Daí tchê! Seja bem vinda(o) ao Canal TAT.'
const key = 'canal'
obj[key] // '@TalkingAboutTesting'
const fn = 'greet'
const greeting = 'Opa'
obj[fn](greeting) // 'Opa! Seja bem vinda(o) ao Canal TAT.'
