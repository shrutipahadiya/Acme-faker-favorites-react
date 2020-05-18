const generateUsers = () => {
  let users = []
  for (let counter = 1; counter <= 20; counter++) {
    users.push(faker.helpers.createCard())
  }
  console.log(users)
  users.forEach((x, i) => {
    x.id = i;
    if (i % 2 === 0) {
      x.isFavorite = true
    }
    else {
      x.isFavorite = false
    }
  })
  return users
}
const usersArr = generateUsers()

const root = document.querySelector('#root')
const hr = React.createElement('hr', null)
ReactDOM.render(hr, root)



const e = React.createElement




class App extends React.Component {
  constructor(){
    super();
    this.state = {
        users: usersArr
    }
}
  // state = {
  //   users: []
  // };
  toggleFavorite = (ev) => {
    console.log('this works')
    console.log(ev.target)
    console.log(ev.target.id)
    if (ev.target && ev.target.nodeName == "LI") {
    this.state.users.forEach(x => {
     
        if (x.id == ev.target.id) {
          console.log("x.id  ", x.id);
          console.log("before ===>>> ", x.isFavorite);
        //  console.log(" !!!!!! ",!x.isFavorite);
          x.isFavorite = !x.isFavorite
          console.log("after ===>>> ", x.isFavorite);

          if (x.isFavorite == true) {
            console.log("inside true case ==== ")
            ev.target.classList.add('favorite')
            console.log("classList is ", ev.target.classList)
          }else{
            console.log("inside false case ==== ")
            ev.target.classList.remove('favorite')
          }
        }
      
       
      })
    }
    this.setState([this.state.users]) 
  }


  render() {
   const users = this.state;
    const header = e('h2', null , [`You have favs:${this.state.users.filter( user => user.isFavorite).length}`]);
    //const lis = this.state.users.map((x, i) => e('li', { id: i, className: (x.isFavorite) ? 'favorite':'listItem', onClick: this.toggleFavorite }, e('p', null, x.name), e('p', null, x.username)))
    const lis = this.state.users.map((x, i) => e('li', { id: i, key:x.name, className: (x.isFavorite) ? 'favorite':'listItem', onClick: this.toggleFavorite} ,x.name ,"\n",x.username))
    const app = e('ul', null, header,lis)
    return app
  }
}
ReactDOM.render(e(App), root,
  () => {
    console.log('I have rendered!');
  })