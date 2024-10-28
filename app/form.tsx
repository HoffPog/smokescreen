

"use client"

interface Character {
    id: number;
    name: string;
}


import React, { useState } from 'react';
import { getToonID } from './api';

const MyForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [characterID, setCharacterID] = useState<Character | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    // Handle the button click, e.g., log the input value
    console.log(inputValue);

    const returnedToonID = await getToonID(inputValue)

    setCharacterID(returnedToonID.characters[0])

  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a character name..."
        className="border rounded p-2 text-neutral-950"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white rounded p-2 ml-2"
      >
        Find characterID
      </button>

      {characterID && (
        <div>
            <h2>Toon Details</h2>
            <p>ID: {characterID.id}</p>
            <p>Name: {characterID.name}</p>

        </div>
      )}

    </div>
  );
};

export default MyForm;
