import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

/*
const ReactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google' 
}
*/

// ReactElemet obj did not execute as MyApp since its parameters will not be matching the rendering which is done React, in custom app we have done the same thing but also have created our own render method with similar param

// Let's see if we provide ReactElement params in same format as MyApp then will it work

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

// So we can say there is conversion going on behind the scene

// Now let's create the reactElement which is similar to how React elements are created to understand what type of props they are using
// To create that we will need React and here we have to follow their syntax and not use things like type, children etc.

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click to visit Google'
)

// So to conclude we can say that we could insert obj to run customreact file but we have to follow React syntax

ReactDOM.createRoot(document.getElementById('root')).render(
    
    // <MyApp/>
    // anotherElement
    // reactElement

    <App/>

)
