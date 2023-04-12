import { FC, ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../../store";

export type ProviderProps = {
  children: ReactNode;
};

export const Providers: FC<ProviderProps> = ({ children }): ReactElement => {
  console.log("providers");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
