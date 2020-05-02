import {
    SUCCESS_PHRASE
} from '../actionTypes'

export default (state = { phrase: null }, action) => {
    switch (action.type) {
        case SUCCESS_PHRASE:
            const phrases = [
                "Yes!",
                "Woot!",
                "Yay!",
                "Nice!",
                "Woohoo!",
                "Congrats!",
                "Awesome!",
                "Great job!",
                "Way to go!",
                "You got it!",
                "Booyah!",
                "That's right!",
                "You rock!",
                "You're a genius!",
                "Correct!",
                "Nice work!",
                "Hooray!",
                "Amazing!",
                "Marvelous!"
            ]
            const genRandomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
            return { ...state, phrase: genRandomPhrase }

        default:
            return state
    }
}