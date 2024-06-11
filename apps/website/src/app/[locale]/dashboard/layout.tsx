import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Sidebar</div>
      {/*FIXME: hardcoded 64 */}
      <div className="ml-64">{children}</div>
    </>
  );
}
