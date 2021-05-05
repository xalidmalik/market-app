import { Container, Grid } from "@chakra-ui/layout";
import React, { FC, memo } from "react";

export const Layout: FC = memo(({ children }) => {
  return (
    <Container>
      <Grid gridTemplateColumns="18.5rem 1fr 18.5rem" gap={4} marginTop="9">
        {children}
      </Grid>
    </Container>
  );
});
