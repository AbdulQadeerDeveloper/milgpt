"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

interface GoogleOAuthProviderWrapperProps {
  children: React.ReactNode;
}

export default function GoogleOAuthProviderWrapper({
  children,
}: GoogleOAuthProviderWrapperProps) {
  const clientId =
    "845238468423-a0lqtb10nefllc1m4k0hotj2m91uli45.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
  );
}
