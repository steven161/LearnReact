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
import FoodCalories from "./FoodCalories";
import Rating10 from "../components/Rating10";

const sizes = [
  {
    name: '12"',
    price: 12.99
  },
  {
    name: '14"',
    price: 14.99
  },
  {
    name: '16"',
    price: 15.99
  },
  {
    name: '18"',
    price: 18.99
  },
];
export default class index extends Component {
  state ={ 
    size: null,
    quantity: 1,
  };

  getTotal = () => {
    let t = this.state.size !== null ? this.state.quantity * sizes[this.state.size].price : 0;
    return parseFloat(t.toFixed(2));
  };

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

        <FoodCalories calories={78} style={[styles.marginStyle,{flex: 1}]}/>

        <View style={styles.marginStyle}>
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
        
        <View flexDirection="row" style={styles.marginStyle}>
          <StarAndNumber number={4.5}/>
          <Duration duration={30}  style={{marginLeft:24}}/>
          <FreeShipping style={{marginLeft:24}}/>
        </View>

        <Sizes items={sizes}  style={styles.marginStyle} onPress={(i) => {
          this.setState({size: i});
        }}/>

        <View style={styles.horizonLIne}></View>

        <View flexDirection="row" alignItems="center" style={styles.marginStyle} justifyContent='space-between'>
          <SmallRestaurant
            company="Toyota Food"
            distance={1.2}
          />
          <Rating10 number={3.6}/>
        </View>

        <View style={styles.horizonLIne}></View>

        <View style={[styles.bottomGroup,styles.marginStyle]}>
          <Quantity onPress={(q) => {
            this.setState({quantity: q});
          }}/>
          <BuyNow total={this.getTotal()} onPress={() => {
              console.log("BuyNow " + JSON.stringify(this.state));
              
          }}/>
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
  horizonLIne: {
    height: 0.5,
    backgroundColor: "#898B9A",
    marginTop:24,
  },
  marginStyle: {
    margin:24,
    marginBottom: 0,
  },
  bottomGroup: {
    flexDirection:"row",
   justifyContent:"space-between",
     alignItems:"center" ,
  },
  
});
