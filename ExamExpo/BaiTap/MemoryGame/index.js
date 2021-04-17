import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "./Header";
import Score from "./Score";
import Card from "./Card";
import Helpers from "./Helpers";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import uuidv4 from "uuid/v4";

export default class index extends Component {
  constructor(props) {
    super(props);

    let source = {
      fontawesome: FontAwesome,
      entypo: Entypo,
      ionicons: Ionicons,
    };

    let cards = [
      {
        src: "fontawesome",
        name: "heart",
        color: "red",
      },
      {
        src: "entypo",
        name: "feather",
        color: "#7d4b12",
      },
      {
        src: "entypo",
        name: "flashlight",
        color: "#f7911f",
      },
      {
        src: "entypo",
        name: "flower",
        color: "#37b24d",
      },
      
      {
        src: "entypo",
        name: "moon",
        color: "#ffd43b",
      },
      
      {
        src: "entypo",
        name: "youtube",
        color: "#FF0000",
      },
      {
        src: "entypo",
        name: "shop",
        color: "#5f5f5f",
      },
      {
        src: "fontawesome",
        name: "github",
        color: "#24292e",
      },
      
      {
        src: "fontawesome",
        name: "skype",
        color: "#1686D9",
      },
      {
        src: "fontawesome",
        name: "send",
        color: "#1c7cd6",
      },
      {
        src: "ionicons",
        name: "ios-magnet",
        color: "#d61c1c",
      },
      {
        src: "ionicons",
        name: "logo-facebook",
        color: "#3C5B9B",
      },
      
    ];

    let clone = JSON.parse(JSON.stringify(cards));
    this.cards = cards.concat(clone);

    this.cards.map((obj) => {
      obj.id = uuidv4();
      obj.src = source[obj.src];
      obj.isOpen = false;
    });

    this.cards = this.cards.suffle();

    this.state = {
      cards: this.cards,
      current_selection: [],
      selected_pair: [],
      score: 0,
    };
  }

  getRowContents(cards) {
    let contents_r = [];
    let contents = [];
    let count = 0;
    cards.forEach((item) => {
      count += 1;
      contents.push(item);
      if (count == 4) {
        contents_r.push(contents);
        count = 0;
        contents = [];
      }
    });

    return contents_r;
  }

  renderRows() {
    let contents = this.getRowContents(this.state.cards);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          {this.renderCards(cards)}
        </View>
      );
    });
  }

  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <View key={card.id}>
          <Card
            key={card.id}
            src={card.src}
            name={card.name}
            color={card.color}
            isOpen={card.isOpen}
            clickCard={this.handleClickCard(card.id)}
          />
          <Text>{card.name}</Text>
        </View>
      );
    });
  }

  handleClickCard = (cardId) => () => {
    //console.log('card id  = ' + cardId);
    let { cards, current_selection, selected_pair, score } = this.state;
    let index = cards.findIndex((card) => {
      return card.id == cardId;
    });

    console.log("index = " + index);
    

    if (
      cards[index].isOpen == false &&
      selected_pair.indexOf(cards[index].name) === -1
    ) {
      cards[index].isOpen = true;
      current_selection.push({
        index: index,
        name: cards[index].name,
      });

      if (current_selection.length == 2) {
        if (current_selection[0].name == current_selection[1].name) {
          score++;
          selected_pair.push(cards[index].name);
        } else {
          cards[current_selection[0].index].isOpen = false;
          setTimeout(() => {
            cards[index].isOpen = false;
            this.setState({
              cards: cards,
            });
          }, 500);
        }

        current_selection = [];
        
      }

      this.setState({
        score: score,
        cards: cards,
        current_selection: current_selection,
      });

      console.log(this.state.selected_pair);

      let indexOpenCard = this.cards.findIndex((card)=>{
        return (card.isOpen == false);
      });

      if(indexOpenCard === -1){
        alert('ok. you done !!!');
      }

    }
   
  };

  handleReset = () => {
    let cards = this.cards.map((card) => {
      card.isOpen = false;
      return card;
    });
    
    //cards = cards.suffle();

    this.setState({
      cards: cards,
      current_selection: [],
      selected_pair: [],
      score: 0,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>{this.renderRows()}</View>
        <Score score={this.state.score} />
        <Button title="Reset" color="#008cFA" onPress={this.handleReset} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  body: {
    flex: 10,
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
  },
});
