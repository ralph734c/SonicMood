import { useState } from 'react';
import './App.css';
import {
  SignUpButton,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton,
} from '@clerk/clerk-react';

function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton
            showName={true}
            appearance={{ elements: { userButtonAvatarBox: 'mr-4' } }}
          />
          <SignOutButton />
        </SignedIn>
      </header>
      <br />
      <h1>SonicMood</h1>
      <br />
      <div>
        Generate a Spotify playlist based on your listening history and mood, or
        emotion.
      </div>
    </>
  );
}

export default App;
