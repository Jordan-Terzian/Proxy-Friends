import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Swiper from "react-native-deck-swiper";
import Details from "./details";
import defaultProfile from "../../assets/images/defaultProfile.png";
import ActionsRow from "./actionsRow";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../../context/userContext";
import { addMatchUser, getUnmatchedUsers } from "../../storage/profileStore";

const SwiperDeck = ({ cards, renderCard, onAcceptAction }) => {
  const swiperRef = useRef(null);
  const [cardIndex, setCardIndex] = useState(0);

  if (cardIndex === cards.length) {
    return (
      <View>
        <Text>No users left</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Swiper
          containerStyle={{
            backgroundColor: "transparent",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            zIndex: 0,
            top: -60,
          }}
          cards={cards}
          renderCard={renderCard}
          cardIndex={cardIndex}
          backgroundColor="#fff"
          verticalSwipe={false}
          onSwiped={(cardIndex) => setCardIndex(cardIndex + 1)}
          onSwipedRight={async (cardIndex) => {
            if (cardIndex < cards.length) {
              await onAcceptAction(cardIndex);
            }
          }}
          ref={(ref) => (this.swiperRef = ref)}
        />
      </View>
      <View style={styles.actionsRowContainer}>
        <ActionsRow
          rejectLabel="Discard"
          onRejectPress={() => {
            this.swiperRef.swipeLeft();
          }}
          acceptLabel="Seek Match"
          onAcceptPress={async () => {
            if (cardIndex < cards.length) {
              await onAcceptAction(cardIndex);
            }
            this.swiperRef.swipeRight();
          }}
        />
      </View>
    </>
  );
};

export default SwiperDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actionsRowContainer: {
    justifyContent: "flex-start",
  },
});
