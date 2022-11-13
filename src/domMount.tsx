import { render } from "solid-js/web";

import App from "./app";
import { assertElementById } from "./utils";

render(() => <App />, assertElementById("app-root"));
