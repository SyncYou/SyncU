import { BrowserRouter, Route, Routes } from "react-router";
import OnboardingLayout from "./Layout/OnboardingLayout";
import Verifymail from "./components/Auth/Verify-mail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>syncU</h1>} />
          <Route path="/auth/signup" index element={<OnboardingLayout />} />
          <Route path="/verify-email" index element={<Verifymail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
