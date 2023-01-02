const PublicLayout = ({
  footer,
  children,
  userUnavailableAfterLogin,
}: {
  footer?: boolean;
  userUnavailableAfterLogin?: boolean;
  children: React.ReactNode;
}): any => {
  return <>{children}</>;
};

export { PublicLayout };
