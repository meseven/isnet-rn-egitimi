import { View, FlatList, Button } from "react-native";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useHttp from "../../hooks/useHttp";
import NewPostModal from "../../components/NewPostModal";
import { useEffect } from "react";

function HomeScreen({ navigation }) {
  const { data, setData, loading, error } = useHttp("/posts");

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <NewPostModal setData={setData} />,
    });
  }, [navigation]);

  if (loading) {
    return <Loading text="Loading posts..." />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.posts}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default HomeScreen;
