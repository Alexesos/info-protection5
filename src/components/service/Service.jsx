const Service = () => {
    const _apiBase = import.meta.env.VITE_API_BASE;

    const publicKeyGen = async (p, q) => {
        try {
            const res = await fetch(`${_apiBase}/generate/public-key`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    p,
                    q
                })
            });

            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
            return;
        }
    };

    const privateKeyGen = async (p, q, fn, e) => {
        try {
            const res = await fetch(`${_apiBase}/generate/private-key`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    p,
                    q,
                    fn,
                    e
                })
            });

            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
            return;
        }
    };

    const rsaEncode = async (message, e, d, n) => {
        try {
            const res = await fetch(`${_apiBase}/encrypt/rsa`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    e,
                    d,
                    n
                })
            });

            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
            return;
        }
    };

    const rsaDecode = async (message, n, d) => {
        try {
            const res = await fetch(`${_apiBase}/decrypt/rsa`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    n,
                    d
                })
            });

            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
            return;
        }
    };

    return {
        rsaEncode,
        rsaDecode,
        publicKeyGen,
        privateKeyGen
    }
}

export default Service;