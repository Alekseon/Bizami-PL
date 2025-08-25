import React from 'react';
import { Link } from 'gatsby';

export default function Logo({locale}) {
  return (
    <div className="logo">
      <Link to={locale==='en' ? '/en/' : '/'} title="Scroll to top of the site">
        <img src="/logo.svg" alt="Logo Bizami" width="290" height="40" />
      </Link>
    </div>
  );
}
