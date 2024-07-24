import { useState } from 'react';
import './App.css';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <h1>SonicMood</h1>
      <p>
        Generate a Spotify playlist based on your listening history and mood, or emotion.
      </p>
    </>
  );
}

export default App;
