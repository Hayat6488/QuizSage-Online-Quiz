import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Error from './Components/ErrorPage/Error';
import Quiz from './Components/Quiz/Quiz';
import Quizes from './Components/Quizes/Quizes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/topic/:topicId',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Quizes></Quizes>
        },
        {
          path: '/statistics',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    }
])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
