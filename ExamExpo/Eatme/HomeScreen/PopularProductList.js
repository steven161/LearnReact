import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import  foods from './data/foods'
import PopularProduct from './PopularProduct';
const url = 'https://training.softech.cloud/api/products/popular';

export default class PopularProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            popularProducts : [],
        };
    }

    componentDidMount(){
        fetch(url).then((res) => { 
            return  res.json();
        }).then((json) => {
            this.setState({
                popularProducts : json.products,
                loading: false,
            });
        })
    }

    renderItem = ({item, index}) => {
        return (
            <PopularProduct 
                calories = {item.calories}
                isFavorite = {item.isFavorite}
                imageUrl={item.imageUrl}
                name = {item.name}
                description = {item.description}
                price = {item.price}
            />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                { this.state.loading && <ActivityIndicator /> }
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={this.state.popularProducts}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>{ 
                    return 'Popular-' +  item.id;
                }}
                ItemSeparatorComponent = {() => <View width={16}/> }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
})
