import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

type DataItem = {
  id: string;
  userlogin: string;
};

const testdata: DataItem[] = [];
for (let i = 0; i < 10000; i++) {
  testdata.push({
    id: `id${i}`,
    userlogin: `Login${Math.floor(Math.random() * 100000)}`,
  });
}

export default function App() {
  const [data, setData] = React.useState<DataItem[]>([]);

  function changedata() {
    data.length > 1 ? setData([]) : setData(testdata);
  }

  return (
    <>
      <View style={styles.container}>
        <Button testID="fill_data" title="fill data" onPress={changedata} />
        <View style={styles.flatlist}>
          <FlatList
            testID="list"
            data={data}
            renderItem={info => <Item item={info.item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
}

const Item = ({item}: {item: DataItem}) => (
  <View style={styles.message}>
    <Text>{item.id}</Text>
    <Text> {item.userlogin}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  flatlist: {
    width: '90%',
    height: 300,
    borderColor: 'green',
    borderWidth: 1,
  },
  message: {
    flexDirection: 'row',
  },
});
