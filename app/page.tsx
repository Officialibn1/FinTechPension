import FinancialAdvisors from "./components/Advisors";
import ConvertKnowledge from "./components/Convert";
import Header from "./components/Header";
import Impact from "./components/Impact";

export default function Home() {
  return (
    <main>
      <Header />

      <ConvertKnowledge />

      <FinancialAdvisors />

      <Impact />
    </main>
  )
}
