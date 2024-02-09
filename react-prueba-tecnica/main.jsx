import { createRoot } from "react-dom/client";
import { News } from "./src/NewsAndRecords.jsx";
import { SearchRecords } from "./src/SearchRecords.jsx";
const root = createRoot(document.getElementById("app"));

root.render(<SearchRecords />);
