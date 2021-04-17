import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput } from 'react-native'
import Categories from './Categories'
import FilterList from './FilterList'
import FoodFilterList from './FoodFilterList'
import Recommended from './RecommendedList'
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import GilroyText from '../components/GilroyText'
import PopularProductList from './PopularProductList'

export default class index extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.navigaBar}>
                    <Text>HOME</Text>
                </View>
                
                <View style={styles.searchContainer}>
                      <EvilIcons name="search" size={24} color="black" />
                      <TextInput 
                        flex={1}
                        autoCapitalize='none'
                        clearButtonMode='always'
                        placeholder="search foods"
                      />

                      <Octicons name="settings" size={24} color="black" />
                </View>
                <View height={32}/>
                <GilroyText fontStyle='SemiBold' style={{fontSize: 16, color:'#ff6c44',}}><Text>Delivery to</Text></GilroyText>
                <GilroyText style={{fontSize:16, color:'#111A2C'}}><Text>300 Post Street San Francisco, CA</Text></GilroyText>
               
                <View height={32}/>
                <Categories />
                
                <View style={styles.listTitle}>
                    <GilroyText  fontStyle='SemiBold' style={{fontSize:16, color:'#111a2c'}}><Text>Popular Near You</Text></GilroyText>
                    <GilroyText style={{fontSize:14, color:'#ff6c44'}}><Text>Show All</Text></GilroyText>
                </View>
                
                {/* <PopularNearList /> */}
                <PopularProductList />

                <View style={styles.listTitle}>
                <GilroyText  fontStyle='SemiBold' style={{fontSize:16, color:'#111a2c'}}><Text>Recommended</Text></GilroyText>
                    <GilroyText style={{fontSize:14, color:'#ff6c44'}}><Text>Show All</Text></GilroyText>
                </View>
                
                <Recommended />
                <FilterList />
                <FoodFilterList />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    navigaBar: {
        height: 32,
        //backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: '700',
        
    },
    searchContainer: {
        height: 56,
        borderRadius: 12,
        backgroundColor: '#F5F5F8',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 32,
        marginHorizontal: 24,
      },
      listTitle: {
          flexDirection: 'row',
          marginVertical:16,
          justifyContent: 'space-between'
      }
    
})
