❗️BETA

This project is a minumalistic React wrapper over [Checkout.com Frames](https://docs.checkout.com/docs/frames).

# Add or load the CDN

Make sure that you load the CD before you mount the Frames component. You can add it for example in your index.html file

```html
<script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
```

If you do server side rendering you can add it in the Head:

```jsx
<Head>
    <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
</Head>
```

# Import

```js
import { Frames, CardNumber, ExpiryDate, Cvv } "johnny-tools-frames-react";
```

# Use

```js
<Frames config={config}>
    <CardNumber />
    <ExpiryDate />
    <Cvv />
</Frames>
```

#### The : `config`

The config is an object following the reference of [Checkout.com Frames](https://docs.checkout.com/docs/frames-reference#section-configuration-options).
Here is an example:

```js
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
>
    ...
</Frames>
```

#### Event handlers

The event handlers are simply translated as props, so you can simply follow the Frames event hanlers [reference](https://docs.checkout.com/docs/frames-reference#section-events).
Here is an example:

```js
<Frames
    config={config}
    ready={() => {}}
    frameActivated={(e) => {}}
    frameFocusead={(e) => {}}
    frameBlur={(e) => {}}
    frameValidationChanged={(e) => {}}
    paymentMethodChanged={(e) => {}}
    cardValidationChanged={(e) => {}}
    cardSubmitted={(e) => {}}
    cardTokenized={(e) => {}}
    cardTokenizationFailed={(e) => {}}
>
    <CardNumber />
    <ExpiryDate />
    <Cvv />
</Frames>
```

#### Trigger tokenisation

To trigger the tokenisation, this wrapper has a static methods called `submitCard()`
Here is a full example of the full flow:

```js
<Frames
    config={{
        publicKey: 'pk_test_6e40a700-d563-43cd-89d0-f9bb17d35e73',
    }}
    cardTokenized={(e) => {
        alert(e.token);
    }}
>
    <ExpiryDate />
    <Cvv />

    <button
        onClick={() => {
            Frames.submitCard();
        }}
    >
        PAY GBP 25.00
    </button>
</Frames>
```

#### Static methods

The actions described in the [Frames reference actions section](https://docs.checkout.com/docs/frames-reference#section-actions) are present heres as static methods:

```js
Frames.init();
Frames.isCardValid();
Frames.submitCard();
Frames.addEventHandler();
Frames.removeEventHandler();
Frames.removeAllEventHandlers();
Frames.enableSubmitForm();
```

#### Cardholder

If you need to inject the cardholder name on go, for cases where you render the payment form
at the same time as the input for the billing and cardholder name, you can simply update
the props and Frames will reflect the latest changes

```js
const [cardholder, setCardholder] = useState({
   name: '',
   phone: '',
   billingAddress: {
       addressLine1: '',
   },
});
...
<Frames
   config={{
       cardholder: {
           name: cardholder.name,
           phone: cardholder.phone,
           billingAddress: cardholder.billingAddress,
       }
   }}
   ...
/>
...
<ExampleInput
   onChange={(e) => {
       setCardholder({
           name: e.target.value,
           phone: '7123456789',
           billingAddress: {
               addressLine1: 'London Street',
           },
       });
   }}
/>
```
