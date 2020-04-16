import { CDN } from '../config/config';

const loadCdn = (): Promise<any> => {
    const existingScript = document.querySelector(`script[src$="${CDN}"]`);

    return new Promise(function (resolve, reject) {
        if (!existingScript) {
            try {
                const script = document.createElement('script');
                script.src = CDN;
                script.id = 'checkout-frames-cdn';
                document.body.appendChild(script);

                script.onload = () => {
                    resolve();
                };
                script.onerror = (er) => {
                    reject(er);
                };
            } catch (er) {
                reject(er);
            }
        } else {
            resolve();
        }
    });
};

export default loadCdn;
