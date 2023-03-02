import { useEffect, useState } from "react";
import NewUserCheckout from "./components/NewUserCheckout/NewUserCheckout";
import UpsellPage from "./components/Upsell/UpsellPage";
import Loading from "./components/Loading/Loading";

export default function App() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="">
      {page === 1 && <NewUserCheckout stateChanger={setPage} />}
      {page === "loading" && <Loading />}
      {page === 2 && <UpsellPage />}
    </div>
  );
}
