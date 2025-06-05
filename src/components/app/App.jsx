import { useState, useEffect } from 'react';

import FileUploader from '../file-load/FileUploader.jsx';
import FileDownloader from '../file-load/FileDownloader.jsx';
import Service from "../service/Service.jsx";
import './app.scss';

const App = () => {
    const [message, setMessage] = useState('');
    const [p, setP] = useState('');
    const [q, setQ] = useState('');
    const [e, setE] = useState('');
    const [n, setN] = useState('');
    const [d, setD] = useState('');
    const [fn, setFn] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [result, setResult] = useState('');
    const { rsaEncode, rsaDecode, publicKeyGen, privateKeyGen } = Service();

    useEffect(() => {
        readKey('public');
        readKey('private');
    }, [publicKey, privateKey]);

    const crypt = async () => {
        const res = await rsaEncode(message, e, d, n);
        console.log(res.result);
        setResult(res.result);
        setN(res.n);
        setD(res.d);
    };

    const decrypt = async () => {
        // const res = await rsaDecode(result, n, d);
        if (Array.isArray(message)) {
            console.log(message);
        } else {
            console.log(message)
        }
        const res = await rsaDecode(message, n, d);
        setResult(res.result.join(''));
    };

    // KEYS INIT START

    const publicKeyProceed = (ev) => {
        const { p, q, e, n, fn } = ev;
        setPublicKey(`${e} ${n}`);
        setN(n);
        setE(e);
        setP(p);
        setQ(q);
        setFn(fn);
        readKey('');
    }

    const privateKeyProceed = (ev) => {
        const { d, n } = ev;
        setPrivateKey(`${d} ${n}`);
        setD(d);
        setN(n);
    }

    const readKey = (type) => {
        if (type === 'public') {
            const [e, n] = publicKey.split(' ');
            setE(e);
            setN(n);
        }
        if (type === 'private') {
            const [d, n] = privateKey.split(' ');
            setD(d);
            setN(n);
        }
    }

    // KEYS INIT END

    return (
        <>
            <main className="main">
                <div className="main__container">
                    <div className="main__start">
                        <FileUploader title="Text" setFileText={setMessage} />
                        <FileUploader title="Public Key" setFileText={setPublicKey} />
                        <FileUploader title="Private Key" setFileText={setPrivateKey} />
                    </div>
                    <div className="main__mid">
                        <button
                            onClick={crypt}
                        >Crypt</button>
                        <button
                            onClick={decrypt}
                        >Decrypt</button>
                        <div className="main__gen">
                            <input
                                type="text"
                                value={p}
                                onChange={(e) => setP(e.target.value)}
                                placeholder="p"
                            />
                            <input
                                type="text"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="q"
                            />
                            <button
                                onClick={() => publicKeyGen(p, q).then(publicKeyProceed)}
                            >Public Key Gen</button>
                            <button
                                onClick={() => privateKeyGen(p, q, fn, e).then(privateKeyProceed)}
                            >Private Key Gen</button>
                        </div>
                    </div>
                    <div className="main__end">
                        <FileDownloader title={'Public Key'} fileContent={publicKey}/>
                        <FileDownloader title={'Private Key'} fileContent={privateKey}/>
                        <FileDownloader title={'Text'} fileContent={result}/>
                        {result && <p>{result}</p>}
                        {publicKey && <p>Public: {publicKey}</p>}
                        {privateKey && <p>Private: {privateKey}</p>}
                    </div>
                </div>
            </main>
        </>
    )
}

export default App;
