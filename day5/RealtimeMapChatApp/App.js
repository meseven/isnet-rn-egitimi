import { IoProvider } from "socket.io-react-hook";
import Container from "./src/components/Container";

export default function App() {
  return (
    <IoProvider>
      <Container />
    </IoProvider>
  );
}
