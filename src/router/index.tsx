import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "../components/spinner";

const HomePage = lazy(() => import("../pages/home"));
const UnfoundPage = lazy(() => import("../pages/unfound"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner size="large" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<UnfoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
