import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <h1>Noted</h1>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </>
  );
};

export default Page;
