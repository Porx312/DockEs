import { technologies } from "@/data/technologies"; // Importar los datos en el servidor
import ChooseTechnologyClient, {
  Technology,
} from "./components/ChooseTechnology";

export default function ChooseTechnologyPage() {
  return <ChooseTechnologyClient technologies={technologies as Technology[]} />;
}
