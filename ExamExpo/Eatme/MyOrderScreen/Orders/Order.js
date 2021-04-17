import React, { Component } from "react";
import { Text, StyleSheet, View , Image} from "react-native";
import GilroyText from "../../components/GilroyText";
import SelectedButton from '../../components/SelectedButton'
import PropTypes from 'prop-types'


class Order extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} />
            </View>
          
          <View style={styles.detailsContainer}>
            <View style={styles.productNameContainer}>
              <GilroyText style={{fontSize: 16, color: '#111A2C'}} fontStyle='SemiBold'>
                <Text>{this.props.companyName}</Text>
              </GilroyText>
              
              <GilroyText>
                <Text style={{fontSize: 16, color: '#FF6C44'}} fontStyle='SemiBold'>{this.props.companyId}</Text>
              </GilroyText>
            </View>
            <GilroyText style={{fontSize: 12}}>
              <Text>{this.props.numberItems} items</Text>
            </GilroyText>
            <View flexDirection='row' alignItems='center'>
              <View style={styles.smallCirle}></View>
              <GilroyText style={{fontSize: 12, color: '#FFA133'}}>
                <Text>{this.props.status}</Text>
              </GilroyText>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <SelectedButton title="Track order" style={{flex: 1, height: 38}} selected={true}  fontSize={12}/>
          <View width={16} /> 
          <SelectedButton title="Cancel" style={{flex: 1, height: 38}} selected={false}  fontSize={12}/>
        </View>
      </View>
    );
  }
}

Order.propTypes = {
    companyName: PropTypes.string,
    companyId: PropTypes.string,
    numberItems: PropTypes.number,
    status: PropTypes.string,

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    borderRadius: 16,
    padding: 16,
  },
  infoContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: 58,
    height: 58,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
      backgroundColor: 'red',
      width: 36,
      height: 36,
  },
  detailsContainer: {
      flex: 1,
        justifyContent: "center",
        marginLeft: 16,
        marginBottom: 24,
  },
  productNameContainer: {
      flexDirection: "row",
      justifyContent: 'space-between',
  },
  smallCirle: {
      backgroundColor: '#FFA133',
      width: 7,
      height: 7,
      borderRadius: 7,
      marginRight: 8,
  }
});


export default Order;