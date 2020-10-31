import Home from '../Pages/Home'
import Project from '../Pages/Project'

const Routes = [
   {
      component: Home,
      route: '/',
      name: 'Home'
   },
   {
      component: Project,
      route: '/project/:name',
      name: 'Project'
   }
]

export default Routes