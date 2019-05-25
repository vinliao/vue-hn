import Home from './components/Home'
import Comments from './components/Comments'

export const routes = [
  { path:'/', component:Home },
  { path:'/comments/:id', component:Comments },
]