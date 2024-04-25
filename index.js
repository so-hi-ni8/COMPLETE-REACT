// const root= document.getElementById('root')
// const p = document.createElement('p')
// p.innerText = "Hello from user2.0"
// root.appendChild(p)


//THROUGH REACT:
const child1 = React.createElement('p', {}, "I am a child1") //------>jsx coverts into createElement or ReactElement which eventually returns a ReactElement object that contains all details about the element and while passing the object to the root, it eventually gets rendered as a tag
const child2 = React.createElement('p', {}, "I am a child2")
const div = React.createElement('div', {className: 'text'}, [child1, child2])
//const div = <div className = "text"> hello!!2 </div> ------->jsx
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)