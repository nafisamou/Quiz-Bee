
import { RouterProvider } from 'react-router-dom'
import Statistics from './components/Statistics';
import router from './utils/routes'
function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
