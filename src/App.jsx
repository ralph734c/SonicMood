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

      <h1>Started</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed doloremque, fugiat, dignissimos aut esse officia iste nisi natus eaque doloribus laboriosam ipsum quam maiores neque veritatis suscipit quae dolorem.</p>
    </>
  );
}

export default App;
