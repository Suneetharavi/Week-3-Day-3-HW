newPageTitle = 'DOM Practice';
document.querySelector('title').textContent = newPageTitle;

console.log(newPageTitle)

const div1 = document.querySelector("#parent");
console.log(div1)
div1.style.width = "500px";
div1.style.height = "450px";
div1.style.background = "red";
//div1.innerHTML = "Hello";

//Accessing Children elements
const children = document.querySelectorAll('.child')
console.log(children)
for(let child of children)
{
    child.style.backgroundColor = 'blue'
    child.style.width = '100%'
    child.style.height = '50px'
    child.style.margin = '30px 0px'
    child.style.textAlgin = 'center'
    child.style.color='#E0D635'
}

//Accessing GrandChildren
const grandchildren = document.querySelectorAll('.grandchild')
console.log(grandchildren)
for(let i=0; i< grandchildren.length; i++)
{
    let grandchild=grandchildren[i]
    grandchild.style.width = '100%'
    grandchild.style.height = '7px'
    grandchild.style.margin = '10px 0px 0px 0px'
    grandchild.style.textAlign = 'center'
    grandchild.style.color='#E0D635'
    grandchild.textContent= i+1
}

// Grandma's favorite
// Access the 14th grandchild and give them a font color of pink and italicize

document.querySelectorAll('.grandchild')[13].style.color = 'pink';
document.querySelectorAll('.grandchild')[13].style.fontStyle = 'italic';

// use array index to access the child and use 'children' to access the grandchild.
// Look at MDN DOM children property
// Assign a text color purple to the 14th grandchild

document.querySelectorAll('.child')[4].children[1].style.color = "purple"

// The JavaScript of Grandchildren
// Access the parent with the child named 9 and give the parent a position of relative
// Access the 9th child and assign it to a variable named blackSheep. Use the same method from above to access the child (children property)
// Give the following properties to blackSheep
// text color black
// font size 9rem
// text align right
// transform scale(-1, 1)
// position absolute
// top 30px
// left 500px

let blackSheep= get9thchild()
blackSheep.parentElement.style.position = 'relative'

function get9thchild(){
    for(let child of children)
    {
    for(let grandchild of child.children) 
        if(grandchild.textContent === "9")
        return grandchild
    }
}
    
blackSheep.style.color = 'black'
blackSheep.style.fontSize = '9rem'
blackSheep.style.textAlign = 'right'
blackSheep.style.transform = "scale(-1, 1)";
blackSheep.style.position = 'absolute'
blackSheep.style.top = '30px'
blackSheep.style.left = '500px'



