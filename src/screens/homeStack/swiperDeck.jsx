import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import ActionsRow from "./actionsRow";
import { useRef, useState } from "react";
import Metrics from "../../constants/metrics";

const SwiperDeck = ({ cards, renderCard, onAcceptAction }) => {
  const swiperRef = useRef(null);
  const [cardIndex, setCardIndex] = useState(0);

  if (cardIndex === cards.length) {
    return (
      <View style={styles.noCardsLeftContainer}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            textAlignVertical: "center",
          }}
        >
          No more cards left to swipe {"\uD83D\uDE14"}
        </Text>
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
          ref={swiperRef}
        />
      </View>
      <View style={styles.actionsRowContainer}>
        <ActionsRow
          rejectLabel="Discard"
          swiperRef={swiperRef}
          onAcceptAction={onAcceptAction}
          onRejectPress={() => {
            swiperRef.current?.swipeLeft();
          }}
          cardIndex={cardIndex}
          acceptLabel="Seek Match"
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
  noCardsLeftContainer: {
    alignItems: "center",
    justifyContent: "center",
    height:
      Metrics.screenHeight > 900
        ? Metrics.screenHeight * 0.74
        : Metrics.screenHeight > 800
        ? Metrics.screenHeight * 0.72
        : Metrics.screenHeight > 600
        ? Metrics.screenHeight * 0.72
        : Metrics.screenHeight * 0.69,
    width: Metrics.screenWidth * 0.9,
    borderRadius: 10,
    left: (Metrics.screenWidth * 0.9) / 19,
  },
});
