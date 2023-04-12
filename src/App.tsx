import { Template } from "./components/template";
import { Providers } from "./components/providers";
import AppRouter from "./router";

function App() {
  return (
    <Providers>
      <Template>
        <AppRouter />
      </Template>
    </Providers>
  );
}

export default App;
