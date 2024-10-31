import Home from '../pages/Home';
import JavaScriptDoc from '../pages/JavaScriptDoc';
import ProjectEuler from '../pages/ProjectEuler';

export const routes = [
  { path: '/Re-Search-and-Study/home', component: <Home /> },
  { path: '/Re-Search-and-Study/javascript', component: <JavaScriptDoc /> },
  { path: '/Re-Search-and-Study/project_euler', component: <ProjectEuler /> },
  { path: '/Re-Search-and-Study/*', component: <Home /> },
];
