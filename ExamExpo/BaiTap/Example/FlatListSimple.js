import React from 'react'
import { StyleSheet, Text, View , SectionList, StatusBar} from 'react-native'

const DATA = [
    {
        title: 'Main Dishes',
        data: ['Piza','Bugger','Risoto'],
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
      },
      {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
      },
      {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
      }
];

const Item = ({item}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
    </View>
);

const FlatListSimple = () => {
    return (
        <View style={styles.container}>
            <SectionList 
                sections={DATA}
                keyExtractor={(item,index) => item + index}
                renderItem={({item}) => <Item item={item}/>}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    )
}

export default FlatListSimple

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });
