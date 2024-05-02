import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/index.tsx'
function App() {

  return (
    <>
        <div>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
