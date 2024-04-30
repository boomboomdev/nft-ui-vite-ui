import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/index.tsx'
import { Suspense } from "react"
function App() {

  return (
    <>
        <div className="md:container mx-auto px-4 py-3" >
          <BrowserRouter>
            <Suspense fallback={<></>} >
            <AppRoutes/>
            </Suspense>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
