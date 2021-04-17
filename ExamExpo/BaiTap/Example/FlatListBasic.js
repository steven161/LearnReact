import React from "react";
import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";

const arrName = [
  { key: "Devin" },
  { key: "Dan" },
  { key: "Robben" },
  { key: "Ronaldo" },
  { key: "Messi" },
  { key: "Van Persie" },
  { key: "Steven" },
];

const FlatListBasic = () => {
  let newArray = [...arrName, ...arrName, ...arrName];
  return (
    <View style={styles.container}>
      {/* <FlatList 
                data = {newArray}
                renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text> }
            /> */}
      <SectionList
        sections={[
          { title: "D", data: ["Dante", "Dominio", "Duncan"] },
          { title: "K", data: ["Dante", "Dominio", "Duncan"] },
          {title: "J", data: ["Java", "Javeniy", "Jupiter"]},
          {
            title: "W",
            data: [
              "Java",
              "Javeniy",
              "Jupiter",
              "Jimiy",
              "Jimyebawe",
              "Jaaaha",
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default FlatListBasic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "#ffacac",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    //marginTop: 5,
  },
});
