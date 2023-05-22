// import Styling from "./src/components/Styling";
// import RNComponents from "./src/components/RNComponents";

import { SafeAreaView } from "react-native";
import Paragraph from "./src/components/Paragraph";

function App() {
  return (
    <SafeAreaView>
      {/* <Styling /> */}
      {/* <RNComponents /> */}

      <Paragraph
        title="Deneme"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tenetur sequi assumenda aliquam quia libero non vitae molestias, distinctio perferendis aut alias architecto esse eius fuga corporis? Culpa, voluptas quisquam?"
        commentCount={19}
        isVisible={true}
        onCommentPress={() => alert("Yorumlar")}
      />

      <Paragraph
        title="Selam"
        description="Selam naber"
        commentCount={10}
        isVisible={true}
        onCommentPress={() => alert("Yorumlar")}
      />
    </SafeAreaView>
  );
}

export default App;
