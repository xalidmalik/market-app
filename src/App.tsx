import { Footer } from "containers/layout/footer";
import { Header } from "containers/layout/header";
import { Layout } from "containers/layout/layout";
import { Basket } from "containers/main/basket";
import { Filter } from "containers/main/filter";
import { Main } from "containers/main/main";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Filter />
        <Main />
        <Basket />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
