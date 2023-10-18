import FinancialAdvisors from "./components/Advisors";
import ContactUs from "./components/ContactUs";
import ConvertKnowledge from "./components/Convert";
import Header from "./components/Header";
import Impact from "./components/Impact";
import Insights from "./components/Insights";

export default function Home() {
  return (
    <main>
      <Header />

      <ConvertKnowledge />

      <FinancialAdvisors />

      <Impact />

      <Insights />

      <ContactUs />
    </main>
  )
}
