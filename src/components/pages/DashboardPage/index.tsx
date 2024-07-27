import DashboardTemplate from "../../templates/Dashboard";
import useDashboard from "./hooks";

export default function DashboardPage() {

  const dashboardHooks = useDashboard()

  return (
    <DashboardTemplate {...dashboardHooks} />
  )
}