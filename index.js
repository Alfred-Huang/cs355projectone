const data = {
    1: [
    {
        "id": 1,
        "title": "Virtual Machines",
        "desc":
            "Resizable compute capacity in the Cloud. Support Linux, Windows, RHEL. Up to 60 Cores / 120 Threads."
    },
    {
        "id": 2,
        "title": "Object Storage",
        "desc": "Resizable Storage capacity in the Cloud. Store any amount of data across classes with Cloud Storage."
    },
    {
        "id": 3,
        "title": "Data Warehouse",
        "desc": "Run analytic and democratize insights with BIgQuery to make decision."
    }],
    2 : [
        {
            "id": 4,
            "title": "Relational Databases",
            "desc":
                "Fully managed relational databases service for Mysql, PostgreSQL, and SOL server."
        },{
            "id": 5,
            "title": "AI Training",
            "desc": "Custom machine learning model training and development."
        },
        {
            "id": 6,
            "title": "Cloud GPUs",
            "desc": "GPUs for machine learning, scientific computing, and 3D visualization."
        }],
    3:[
        {
            "id": 7,
            "title": "Cloud CDN",
            "desc": "Content delivery network for serving web and video content."
        },
        {
            "id": 8,
            "title": "Advanced Protection",
            "desc": "Enforce the use of security key to make sure block access to untrusted apps and users."
        },
        {
            "id": 9,
            "title": "Operations",
            "desc": "Monitoring, logging, and application performance suite."
        }
    ],
};

const productData = new Map(Object.entries(data));


// --------------------Search Box-----------------------------
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

// -------------------Counter---------------------
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})

//  --------------------Progress Step-----------------------------
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const productsDescription1 = document.querySelector('.products-description-1')
const productsTitle1 = document.querySelector('.products-title-1')
const productsDescription2 = document.querySelector('.products-description-2')
const productsTitle2 = document.querySelector('.products-title-2')
const productsDescription3 = document.querySelector('.products-description-3')
const productsTitle3 = document.querySelector('.products-title-3')


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
    contentRender()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
    contentRender()
})

//  Product content
function contentRender(){
   let curContentList = productData.get(currentActive + '');
   for(let i = 0; i < curContentList.length; i++){
       let curContentObj = curContentList[i];
       let contentTitle = curContentObj.title;
       let content = curContentObj.desc;
       if(i === 0){
           productsTitle1.textContent = contentTitle;
           productsDescription1.textContent = content;
       }
       if(i === 1){
           productsTitle2.textContent = contentTitle;
           productsDescription2.textContent = content;
       }
       if(i === 2){
           productsTitle3.textContent = contentTitle;
           productsDescription3.textContent = content;
       }
   }
}


function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    if(actives.length <= 1){
        progress.style.width = "40%";
    }else{
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    }


    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


// box animation
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
