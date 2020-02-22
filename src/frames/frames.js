import React from 'react';
import loadCdn from './utils/loadCdn';

export class Frames extends React.Component {
    componentDidMount = async prp => {
        try {
            await this.loadScript();
            this.initialiseFrames();
        } catch (e) {
            console.error('Could not add the CDN to the DOM');
        }
    };

    static init = () => {
        // remove event handlers to avoid event duplication
        window.Frames.removeAllEventHandlers(window.Frames.Events.CARD_SUBMITTED);
        window.Frames.removeAllEventHandlers(window.Frames.Events.CARD_TOKENIZATION_FAILED);
        window.Frames.removeAllEventHandlers(window.Frames.Events.CARD_TOKENIZED);
        window.Frames.removeAllEventHandlers(window.Frames.Events.CARD_VALIDATION_CHANGED);
        window.Frames.removeAllEventHandlers(window.Frames.Events.FRAME_ACTIVATED);
        window.Frames.removeAllEventHandlers(window.Frames.Events.FRAME_BLUR);
        window.Frames.removeAllEventHandlers(window.Frames.Events.FRAME_FOCUS);
        window.Frames.removeAllEventHandlers(window.Frames.Events.FRAME_VALIDATION_CHANGED);
        window.Frames.removeAllEventHandlers(window.Frames.Events.PAYMENT_METHOD_CHANGED);
        window.Frames.removeAllEventHandlers(window.Frames.Events.READY);
        window.Frames.init();
    };

    static isCardValid = () => {
        return window.Frames.isCardValid();
    };

    static submitCard = () => {
        window.Frames.submitCard();
    };

    static addEventHandler = (event, handler) => {
        window.Frames.addEventHandler(event, handler);
    };

    static removeEventHandler = (event, handler) => {
        window.Frames.removeEventHandler(event, handler);
    };

    static removeAllEventHandlers = event => {
        window.Frames.removeAllEventHandlers(event);
    };

    static enableSubmitForm = () => {
        window.Frames.enableSubmitForm();
    };

    async loadScript() {
        return loadCdn().catch(er => {
            throw er;
        });
    }

    initialiseFrames() {
        let config = {
            publicKey: this.props.config.publicKey,
            debug: this.props.config.debug || false,
            style: this.props.config.style,
            cardholder: this.props.config.cardholder,
            localization: this.props.config.localization,
            ready: this.props.ready,
            frameActivated: this.props.frameActivated,
            frameFocus: this.props.frameFocus,
            frameBlur: this.props.frameBlur,
            frameValidationChanged: this.props.frameValidationChanged,
            paymentMethodChanged: this.props.paymentMethodChanged,
            cardValidationChanged: this.props.cardValidationChanged,
            cardSubmitted: this.props.cardSubmitted,
            cardTokenized: this.props.cardTokenized,
            cardTokenizationFailed: this.props.cardTokenizationFailed
        };

        // Frames throws an errror if the crdholder object is mentioned but not defined
        // To avoid this we remove the proprety completely if not set as a prop.
        if (this.props.cardholder === undefined) {
            delete config.cardholder;
        }

        try {
            window.Frames.init(config);
        } catch (e) {
            console.error('Could not initilse Frames. Check your configuration.');
            throw e;
        }
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}
