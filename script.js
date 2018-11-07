class UserList {
    constructor(container, numberOfUsers) {
        this.container = container
        this.users = []
        this.numberOfUsers = numberOfUsers
        this.init()

    }

    init() {
        this.render()
        this.fetchUsers()
    }

    fetchUsers() {
        fetch('https://randomuser.me/api/?results=' + this.numberOfUsers)
            .then((response) => response.json())
            .then(data => {
                this.users = data.results
                this.render()
            })
    }


    render() {
        this.container.innerHTML = ''

        const ul = document.createElement('ul')

        this.users.forEach((user,userIndex) => {
            const li = document.createElement('li')
            const button = document.createElement('button')
            button.innerText= 'X'

            li.innerText = `${user.name.first} ${user.name.last}`
            ul.appendChild(li)
            li.appendChild(button)
            li.addEventListener('click', () => alert(user.email))
            button.addEventListener('click',()=>{ this.users.splice(userIndex,1)
            this.render() })
        })

        this.container.appendChild(ul)
    }
}

const list = new UserList(document.body, 4)


