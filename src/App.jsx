import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
    <div className="flex gap-3">
      <div className="min-w-[263px]">
        <Sidebar/>
      </div>
      <div className="flex-1 border-l border-[#E5E7EB]">
        <Layout/>
      </div>
    </div>
    </>
  )
}

export default App
