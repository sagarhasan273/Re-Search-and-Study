import Home from '../pages/Home';
import JavaScriptDoc from '../pages/JavaScriptDoc';
import ProjectEuler from '../pages/ProjectEuler';

export const routes = [
  { path: '/home', component: <Home /> },
  { path: '/javascript', component: <JavaScriptDoc /> },
  { path: '/project_euler', component: <ProjectEuler /> },
];
