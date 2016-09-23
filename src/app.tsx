import * as React from 'react'
import {render} from 'react-dom'
import * as configureTapEvent from 'react-tap-event-plugin'
import * as firebase from 'firebase'
import './styles/main.scss'

configureTapEvent()

const container = document.querySelector('#root')

const app = firebase.initializeApp({
    apiKey: 'AIzaSyDh9TM6k6I7Z_r6p6TXBuSeN82RbbqGcWY',
    authDomain: 'paper-ships.firebaseapp.com',
    databaseURL: 'https://paper-ships.firebaseio.com',
    storageBucket: 'paper-ships.appspot.com',
    messagingSenderId: '376920100379'
})

render(<div>app</div>, container)
