import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GilroyText from "../components/GilroyText";
import StarAndNumber from "../components/StarAndNumber";
import Duration from "../components/Duration";
import FreeShipping from "../components/FreeShipping";
import Sizes from "../components/Sizes";
import SmallRestaurant from "../components/SmallRestaurant";
import Rating from "../components/Rating";
import Quantity from "../components/Quantity";
import BuyNow from "../components/BuyNow";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.goBack}>
                <Ionicons name="chevron-back" size={24} color="black" />
          </View>
          <GilroyText style={{color:'#111A2C', fontSize:16,}} fontStyle="SemiBold">
             <Text>DETAILS</Text>
          </GilroyText>
         
          <View style={styles.logo}>
               <AntDesign name="shoppingcart" size={24} color="black" />
          </View>
        </View>

        <View height={24}/>
        <View style={styles.foodImageDetail}>
            <View style={styles.foodImageDetailTopBar}>
                <Text>🔥 78 Calories</Text>
                <View flex={1}></View>
                <AntDesign name="heart" size={16} color="#FF6C44" />
            </View>
          <Image source={require("../assets/monan1.png")} />
        </View>

        <View height={24}/>
        <View style={styles.foodDescription}>
          <GilroyText
            style={{ color: "#111A2C", fontSize: 24 }}
            fontStyle="SemiBold"
          >
            <Text>Vegetable Biryani</Text>
          </GilroyText>
          <View height={24}/>
          <GilroyText style={{ color: "#525C67", fontSize: 12 }}>
            <Text>
              A popular spice and vegetables mixed favoured rice dish which is
              typically prepared by layering the biryani gravy and basmati rice
              in flat bottom vessel.
            </Text>
          </GilroyText>
        </View>
        <View height={24}/>
        <View flexDirection="row" style={{marginLeft:24}}>
          <StarAndNumber number={4.5}/>
          <Duration title="30 Mins"  style={{marginLeft:24}}/>
          <FreeShipping  style={{marginLeft:24}}/>
        </View>

        <View height={24}/>
        <Sizes items={['12"', '14"', '16"', '18"']}  style={{marginLeft:24}}/>

        <View height={24}/>
        <View style={styles.horizonLIne}></View>

        <View height={24}/>
        <View flexDirection="row" alignItems="center" style={{marginLeft:24}} justifyContent='space-between'>
          <SmallRestaurant
            company="Toyota Food"
            distance="1.2 Km from you"
            imagePath={require("../assets/Logo.png")}
          />
          <Rating number={4}  style={{marginHorizontal:24}}/>
        </View>

        <View height={24}/>
        <View style={styles.horizonLIne}></View>

        <View height={24}/>
        <View flexDirection="row" alignItems="center" style={{marginLeft:24}}>
          <Quantity />
          <BuyNow price="$15.99" style={{marginLeft:24}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 24,
  },
  goBack: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BBBDC1",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BBBDC1",
    justifyContent: "center",
    alignItems: "center",
  },
  foodImageDetail: {
    //flex:1,
    backgroundColor: "#F5F5F8",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
  },
  foodDescription: {
    marginHorizontal: 24,
  },
  horizonLIne: {
    height: 0.5,
    backgroundColor: "#898B9A",
  },
  foodImageDetailTopBar: {
    //width: '70%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
    //backgroundColor: 'red',
  },
});
