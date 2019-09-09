import React from 'react';
import { LogoutPanel } from '../Logout';

export function Logout() {
  return (
    <main>
      <section className={'app-login-section'}>
        <LogoutPanel />
      </section>
    </main>
  );
}
