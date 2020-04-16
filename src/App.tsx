import React from 'react';
import { Frames, CardNumber, ExpiryDate, Cvv } from './frames';

import './App.css';

function App() {
    return (
        <div className="App">
            <Frames
                config={{
                    debug: true,
                    publicKey: 'pk_test_6e40a700-d563-43cd-89d0-f9bb17d35e73',
                    localization: {
                        cardNumberPlaceholder: 'Card number',
                        expiryMonthPlaceholder: 'MM',
                        expiryYearPlaceholder: 'YY',
                        cvvPlaceholder: 'CVV',
                    },
                    style: {
                        base: {
                            fontSize: '17px',
                        },
                    },
                }}
                ready={() => {}}
                frameActivated={(e) => {}}
                frameFocus={(e) => {}}
                frameBlur={(e) => {}}
                frameValidationChanged={(e) => {}}
                paymentMethodChanged={(e) => {}}
                cardValidationChanged={(e) => {}}
                cardSubmitted={() => {}}
                cardTokenized={(e) => {
                    alert(e.token);
                }}
                cardTokenizationFailed={(e) => {}}
            >
                <CardNumber />
                <div className="date-and-code">
                    <ExpiryDate />
                    <Cvv />
                </div>
                <button
                    id="pay-button"
                    onClick={() => {
                        Frames.submitCard();
                    }}
                >
                    PAY GBP 25.00
                </button>
            </Frames>
        </div>
    );
}

export default App;
