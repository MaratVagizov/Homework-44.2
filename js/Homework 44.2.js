let data = [
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: '1',
            img: 1,
            img2: 'points'
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: '2',
            img: 2,
            img2: 'points'
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: '3',
            img: 3,
            img2: 'points'
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: '4',
            img: 4,
            img2: 'points'
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: '5',
            img: 5,
            img2: 'points'
        }
    },
]

let container = document.querySelector('.container')
let input = document.querySelector('.input')
let cancel = document.querySelector('.cancel')
let save = document.querySelector('.save') 
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')



const reload = (arr) => {
    container.innerHTML = ""

    for ( let item of arr) {

        let box = document.createElement('div')
        let box_top = document.createElement('div')
        let note = document.createElement('p')
        let img_points = document.createElement('img')
        let p_deadline = document.createElement('p')
        let box_bot = document.createElement('div')
        let box_bot_in = document.createElement('div')
        let img_user = document.createElement('img')
        let id = document.createElement('p')
        let date = document.createElement('p')
    
    
        box.classList.add('box')
        box_top.classList.add('box_top')
        note.innerHTML = item.title
        note.classList.add('note')
        img_points.src = `./img/${item.author.img2}.png`
        img_points.classList.add('img_points')
        p_deadline.innerHTML = `Deadline: ${item.deadline}`
        p_deadline.classList.add('p_deadline')
        box_bot.classList.add('box_bot')
        box_bot_in.classList.add('box_bot_in')
        img_user.src = `./img/${item.author.img}.png`
        img_user.classList.add('img_user')
        id.innerHTML = `ID${item.author.id}`
        id.classList.add('id')
        date.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}`
        date.classList.add('date')
    
    
        container.append(box)
        box.append(box_top, p_deadline, box_bot)
        box_top.append(note, img_points)
        box_bot.append(box_bot_in, date)
        box_bot_in.append(img_user, id)
    
    
        img_points.onclick = () => {
    
            openModal()
    
            save.onclick = () => {
            
                if (input.value == item.author.id) {
                        data = data.filter(elem => elem.id !== item.author.id)
                        reload(data)
                        console.log(input.value);
                        console.log(item.author.id);
                        console.log(data);
                }
    
                else {
                    console.log(input.value);
                    console.log(item.id);
                }
    
                item.name = input.value
    
                modal.style.display = 'none'
                modal_bg.style.display = 'none'
    
                setTimeout(
                    () => {
                        modal.style.opacity = '0'
                        modal_bg.style.opacity = '0'
                    }, 100)
                reload(data)
                // input.value = ''
    
                      cancel.onclick = () => {
    
                closeModal()
    
            }
        }
        }
        cancel.onclick = () => {
    
            closeModal()
    
        }
    }

}




const openModal = () => {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'

    setTimeout(
        () => {
            modal.style.opacity = '1'
            modal_bg.style.opacity = '1'
        }, 100)
}

const closeModal = () => {
            modal.style.display = 'none'
            modal_bg.style.display = 'none'

            setTimeout(
                () => {
                    modal.style.opacity = '0'
                    modal_bg.style.opacity = '0'
                }, 100)
}


reload(data)