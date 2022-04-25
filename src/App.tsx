import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './layouts';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/global';
// import FontStyle from './base/fonts/fonts';
const allRoutes = {
    path: '/',
    cart: '/cart',
    greetings: '/greetings',
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* <FontStyle /> */}
            <GlobalStyles />
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path={allRoutes.path} element={<Homepage />} />
                        {/* <Route path={allRoutes.cart} element={<StoreCart />} />
                        <Route path={allRoutes.greetings} element={<StoreGreetings />} /> */}
                    </Routes>
                </Router>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
