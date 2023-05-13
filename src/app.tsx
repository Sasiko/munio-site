import Router from "preact-router";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofServices from "./pages/TermsofServices";

export function App() {
  return (
    <Router>
      <Home path="/" />
      <PrivacyPolicy path="/privacy" />
      <TermsofServices path="/tos" />

    </Router>
  )
}
