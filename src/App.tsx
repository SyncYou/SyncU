import { BrowserRouter, Route, Routes } from "react-router";
import OnboardingLayout from "./Layout/OnboardingLayout";
import ProfileLayout from "./Layout/ProfileLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<OnboardingLayout />} />
          <Route path="/profile" index element={<ProfileLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
