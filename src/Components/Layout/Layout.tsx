import { AppShell, Container } from "@mantine/core";

type LayoutTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutTypes) => {
  return (
    <AppShell padding="md" >
      <Container size="md">{children}</Container>
    </AppShell>
  );
};

export default Layout;