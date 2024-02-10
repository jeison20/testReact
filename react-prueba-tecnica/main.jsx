import { createRoot } from "react-dom/client";
import { News } from "./src/NewsAndRecords.jsx";
import { SearchRecords } from "./src/SearchRecords.jsx";
import { Routerpages } from './src/pages/routerpages.jsx';
const root = createRoot(document.getElementById("app"));

root.render(<Routerpages />);
