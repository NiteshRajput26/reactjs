function customRender(reactElement,container){

     // **************************VERSION 1**********************

    // const domElement = document.createElement(reactElement.type)       // dom element create krna padega fir usko apend child krenge
    // domElement.innerHTML = reactElement.children    // add child in created element
    // domElement.setAttribute('href',reactElement.props.href)    // set atributes
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)  // root container me dom element inject kr do

      // UPDATED VERSION 2
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {       // VERSION 1 me bar bar attribute set krna pd rha tha isliye loop ka use kiya h
      if(prop === 'children')continue;
      domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
   type:'a',
   props:{
    href:'https://google.com',
    target:'_blank'
   } ,
   children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

// customize react lib 
// reactElement ye simulation krne ke liye ki jo html me function diya h wo end of the day react ko kaisa dikhta h ya fir react usko compile krne ke bad kaise dekhta h
// react tree bnanne ki koshish krta h eg type ,props
// render krna mtlb jo hamra root h div h uske ander hum kuch add krna chahte h... 