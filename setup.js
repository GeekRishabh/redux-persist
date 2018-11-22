import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleProvider, Root } from 'native-base';
import stripe from 'tipsi-stripe';
import App from '../AppNavigator';
import configureStore from './configureStore';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/commonColor';

stripe.setOptions({ publishableKey: 'pk_test_aDxAOMO6SQZkZ4KRKfTSSGXA' });
const { store, persistor } = configureStore();

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Root>
              <App />
            </Root>
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}
