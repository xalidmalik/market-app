import { Basket } from "containers/main/basket";
import { Filter } from "containers/main/filter";
import { Footer } from "containers/main/footer";
import { Header } from "containers/main/header";
import { Layout } from "containers/main/layout";
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
