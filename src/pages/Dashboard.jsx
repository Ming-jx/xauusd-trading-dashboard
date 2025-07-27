import { useState } from 'react';

const PASSWORD = import.meta.env.VITE_DASHBOARD_PASSWORD;

function Dashboard() {
  const [input, setInput] = useState('');
  const [access, setAccess] = useState(false);

  const handleLogin = () => {
    if (input === PASSWORD) setAccess(true);
    else alert('Wrong password!');
  };

  if (!access) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <input
          type="password"
          className="border p-2 rounded"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">XAUUSD Semi-Auto Dashboard</h1>
      <p>Strategy Controls:</p>
      <div className="grid gap-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Supply & Demand</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Breakout</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Pullback</button>
      </div>
      <p>Telegram Alerts and CSV Logging coming soon.</p>
    </div>
  );
}

export default Dashboard;
