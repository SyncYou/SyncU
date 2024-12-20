import { BrowserRouter, Route, Routes } from "react-router";
import OnboardingLayout from "./Layout/OnboardingLayout";
import Verifymail from "./components/Auth/Verify-mail";
import TellUsAboutYourself from "./components/Profile/Tell-us-about-yourself";
import ProfileLayout from "./Layout/ProfileLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>syncU</h1>} />
          <Route path="/auth/signup" index element={<OnboardingLayout />} />
          <Route path="/onboarding" element={<ProfileLayout/>}>
          <Route path="/onboarding/tell-us-about-yourself" element={<TellUsAboutYourself/>} />
          </Route>
          <Route path="/verify-email" index element={<Verifymail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
