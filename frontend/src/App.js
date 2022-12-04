import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/Routes";
import { EmbedSDK } from "@pushprotocol/uiembed";

const App = () => { 
  useEffect(() => {
    if (account) {
      EmbedSDK.init({
        targetID: 'sdk-trigger-id',
        appName: 'consumerApp',
        user: account,
        chainId: 1,
        viewOptions: {
            type: 'sidebar',
            showUnreadIndicator: true,
            unreadIndicatorColor: '#cc1919',
            unreadIndicatorPosition: 'bottom-right',
        },
        theme: 'light',
        onOpen: () => {
          console.log('-> client dApp onOpen callback');
        },
        onClose: () => {
          console.log('-> client dApp onClose callback');
        }
      });
    }
    return () => {
      EmbedSDK.cleanup();
    };
  }, []);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
