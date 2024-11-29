import { BrowserRouter, Route, Routes } from "react-router";
import OnboardingLayout from "./Layout/OnboardingLayout";
// import ProfileLayout from "./Layout/ProfileLayout";
import Verifymail from "./components/Auth/Verify-mail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<OnboardingLayout />} />
          <Route path="/profile" index element={<Verifymail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
