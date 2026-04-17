import React from 'react';

export function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white border border-border rounded-4xl shadow-sm p-8 sm:p-10">
          <div className="mb-8 text-center">
            <p className="text-3xl font-bold text-secondary">{title}</p>
            {subtitle && (
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {subtitle}
              </p>
            )}
          </div>

          {children}

          {footer && <div className="mt-8 text-sm text-slate-500">{footer}</div>}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
