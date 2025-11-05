import React, { useState } from 'react';

interface ApiKeyInputProps {
  onSave: (apiKey: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onSave }) => {
  const [key, setKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onSave(key.trim());
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg p-8 shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-center text-dark mb-2">Enter Your Gemini API Key</h3>
      <p className="text-center text-gray-600 mb-6">
        To use the translator, you need a Google Gemini API key. Your key is stored securely in your browser's local storage.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="api-key" className="block text-sm font-medium text-gray-700 mb-1">
            API Key
          </label>
          <input
            id="api-key"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
            placeholder="***************************************"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Save and Continue
        </button>
      </form>
      <div className="mt-6 text-center">
        <a
          href="https://ai.google.dev/gemini-api/docs/api-key"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:text-red-700 underline"
        >
          Don't have a key? Get one here.
        </a>
      </div>
    </div>
  );
};

export default ApiKeyInput;