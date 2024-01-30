import { HomePage } from "./Portfolio/pages/HomePage"
import { PortfolioRoutes } from "./Portfolio/routes/PortfolioRoutes"
import { ThemeProvide } from "./context/themeProvide"


export const App = () => {
  return (
    <ThemeProvide>
      <PortfolioRoutes></PortfolioRoutes>
    </ThemeProvide>
  )
}
