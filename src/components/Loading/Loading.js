import orderStyles from "./orderProcessing.module.css";
import { SpinnerDotted } from "spinners-react";

export default function Loading() {
  const arrQuotes = [
    `"The world is a strange place, but that's why it's so
    interesting."`,
    `"Believe you can and you're halfway there."  - Theodore Roosevelt`,
    `"A goal without a plan is just a wish."`,
    `We are what we repeatedly do. Excellence, then, is not an act, but a habit.`
  ];
  const randomMessage = () => {
    const randomIndex = Math.floor(Math.random() * arrQuotes.length);
    return arrQuotes[randomIndex];
  };

  return (
    <div className="App">
      <div className={orderStyles.App}>
        <div className={orderStyles.screen}>
          <div className={orderStyles.app_loader}>
            <div className={orderStyles.container}>
              <SpinnerDotted color={"#01010F"} />
            </div>
            {/* <p className={orderStyles.processing}>Processing your order</p> */}
            <p className={orderStyles.quote}>{randomMessage()}</p>
          </div>
          {/* <div className={orderStyles.loadingText}>Processing your order</div>
          <div className={orderStyles.quote}>
            "The world is a strange place, but that's why it's so interesting."
          </div> */}
          <div className={orderStyles.bg}></div>
        </div>
      </div>
    </div>
  );
}
