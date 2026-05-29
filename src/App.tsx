import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'

function App() {


  //clear data(!)

  // useEffect(() => {
  //   localStorage.removeItem('dogs');
  //   localStorage.removeItem('hosts');
  // }, []);


  return(
  <>
  <RouterProvider router={router} />
  </>
  )
}

export default App
