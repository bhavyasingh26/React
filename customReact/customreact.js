function customRender(element,container){
    /*const domElement = document.createElement(element.typeof)
    domElement.innerHTML = element.Children
    domElement.setAttribute('href',element.props.href)
    domElement.setAttribute('target',element.props.target)

    container.appendChild(domElement)
    */
   const domElement = document.createElement(element.typeof)
   domElement.innerHTML= element.Children
   for (const prop in element.props){
    if (prop==='Children') 
        continue;
    domElement.setAttribute(prop,element.props[prop])
   }
   container.appendChild(domElement)
}
const element = {
    typeof: "a",
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(element, mainContainer)