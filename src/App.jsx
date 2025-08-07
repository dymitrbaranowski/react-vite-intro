import { Header } from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DefferencesSection from "./components/DefferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
// import ModernCssBtn from "./components/ModernCss/ModernCssBtn";

export function App() {
  const [tab, settab] = useState("feedback");
  return (
    <>
      <Header />

      <main>
        <IntroSection />
        {/* <ModernCssBtn /> */}
        <TabsSection active={tab} onChange={(current) => settab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DefferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}
      </main>
    </>
  );
}
