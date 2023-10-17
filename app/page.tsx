import FinancialAdvisors from "./components/Advisors";
import ConvertKnowledge from "./components/Convert";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <ConvertKnowledge />

      <FinancialAdvisors />
    </main>
  )
}
