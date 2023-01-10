import MuiColorTabs from "./components/MuiColorTabs"
import MuiResponsiveBox from "./components/MuiResponsiveBox"
import MuiResponsiveStack from "./components/MuiResponsiveStack"

function App() {

  return (
    <div>
      <MuiColorTabs/>
      <h2>change the viewport width to see responsive change</h2>
      <h3>responsive Box - width is changing on breakpoints</h3>
      <MuiResponsiveBox/>
      <h3>responsive Stack - layout direction is changing on breakpoints</h3>
      <MuiResponsiveStack/>
    </div>
  )
}

export default App
