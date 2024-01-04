import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { connectClientPy, grpcWebClientPy, connectClientGo, grpcWebClientGo } from './clients'

function App() {
  const [count, setCount] = useState(0)

  const pingGrpcWebPy = async () => {
    const response = await grpcWebClientPy.ping({number: 1n});
    console.log(response.number);
  }
  const pingConnectPy = async () => {
    const response = await connectClientPy.ping({number: 1n});
    console.log(response.number);
  }

  const pingGrpcWebGo = async () => {
    const response = await grpcWebClientGo.ping({number: 1n});
    console.log(response.number);
  }

  const pingConnectGo = async () => {
    const response = await connectClientGo.ping({number: 1n});
    console.log(response.number);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        PY
        <button onClick={pingGrpcWebPy}>
          Ping GrpcWeb
        </button>
        <button onClick={pingConnectPy}>
          Ping Connect
        </button>
      </div>
      <div className="card">
        GO
        <button onClick={pingGrpcWebGo}>
          Ping GrpcWeb
        </button>
        <button onClick={pingConnectGo}>
          Ping Connect
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
