import { ScrollView, View, StyleSheet, Text, Button } from "react-native";
import React from "react";

const News = () => {
  return (
    <ScrollView>

      {/* Do not not use this method */}
      {/* {users.map((user) => (
        <View
          key={user.id}
          style={[styles.listItem, user.id % 2 !== 0 ? styles.striped : {}]}
        >
          <Text style={styles.text}>{user.name}</Text>
        </View>
      ))} */}


      {/* Do this */}
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, qui.
        Velit, ab! Voluptatibus asperiores accusamus voluptates voluptatem
        incidunt, vero recusandae. Blanditiis mollitia vitae ratione nostrum
        nisi? Placeat est fugiat inventore.
      </Text>

      <Button title="Click" />

      {/* // image */}

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, qui.
        Velit, ab! Voluptatibus asperiores accusamus voluptates voluptatem
        incidunt, vero recusandae. Blanditiis mollitia vitae ratione nostrum
        nisi? Placeat est fugiat inventore.
      </Text>

      <Button title="Click" />

      {/* // image */}

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, qui.
        Velit, ab! Voluptatibus asperiores accusamus voluptates voluptatem
        incidunt, vero recusandae. Blanditiis mollitia vitae ratione nostrum
        nisi? Placeat est fugiat inventore.
      </Text>

      <Button title="Click" />

      {/* // image */}

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, qui.
        Velit, ab! Voluptatibus asperiores accusamus voluptates voluptatem
        incidunt, vero recusandae. Blanditiis mollitia vitae ratione nostrum
        nisi? Placeat est fugiat inventore.
      </Text>

      <Button title="Click" />

      {/* // image */}

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, qui.
        Velit, ab! Voluptatibus asperiores accusamus voluptates voluptatem
        incidunt, vero recusandae. Blanditiis mollitia vitae ratione nostrum
        nisi? Placeat est fugiat inventore.
      </Text>

      <Button title="Click" />
      <Button title="Click" />
      <Button title="Click" />
      <Button title="Click" />
      <Button title="Click" />

      {/* // image */}

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas
        asperiores cupiditate tempore adipisci architecto exercitationem qui!
        Ullam mollitia placeat recusandae doloribus hic assumenda atque ratione
        error minus. Maiores, eius.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#eee",
  },
  text: {
    fontSize: 18,
  },
  striped: {
    backgroundColor: "#EEE9DA",
  },
});

export default News;
