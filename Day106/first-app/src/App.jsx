import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="card 1" description="card1 desc"/>
        <Card title="card 2" description="card2 desc"/>
        <Card title="card 3" description="card3 desc"/>
        <Card title="card 4" description="card4 desc"/>
        
      </div>
      <Footer/>
    </>
  )
}

export default App
