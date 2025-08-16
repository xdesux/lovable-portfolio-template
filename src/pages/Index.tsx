import { useEffect } from "react"
import { DashboardPortfolio } from "@/components/portfolio/DashboardPortfolio"

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return <DashboardPortfolio />;
};

export default Index;
