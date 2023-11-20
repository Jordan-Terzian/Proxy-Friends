import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, TextInput, ScrollView } from 'react-native';


function MessageHomeScreen() {
  const status = [<Ionicons name="checkmark" size={25} color="black" />, 
    <MaterialCommunityIcons name="numeric-1-circle" size={25} />, 
    <MaterialCommunityIcons name="numeric-2-circle" size={25} />,];

  const [MessageArrayElement, UpdateMessageArrayElement] = useState('');
  const [BoolMenu, UpdBoolMenu] = useState(false);
  
  const [MessageArrayThread, UpdateMessageArrayThread] = useState([]);

  const [ChosenLatestMessage, UpdateChosenLatestMessage] = useState(null);
  const displayMenu = () => {UpdBoolMenu(!BoolMenu);};
  
  const [messageChatsInfo] = useState([
    { threadId: 0, EventBool: false, threadName: 'Andrew', MostCurrMessage: "See you Tomorrow 4pm" },
    { threadId: 3, EventBool: true, threadName: 'IMAX MOVIE EVENT', MostCurrMessage: "Looking Forward to meeting you Tomorrow 11am" },
    { threadId: 1, EventBool: false, threadName: 'Fred ', MostCurrMessage: 'I am excited to watch a soccer game' },
    { threadId: 2, EventBool: false, threadName: 'Phil', MostCurrMessage: 'Hi, are you interested in Climbing!' },
  ]);

  
  const DisplayThreadMessage = () => {
    const SelMessage = MessageArrayThread.filter((elem) => elem.MessageChatIdx === ChosenLatestMessage.threadId);
    const SelMessageArray = [{ text: ChosenLatestMessage.MostCurrMessage, mainUser: ChosenLatestMessage.threadName, 
      MessageChatIdx: ChosenLatestMessage.threadId }, ...SelMessage,];

    return SelMessageArray.map((elem, index) => {
      const bool1 = elem.mainUser === 'You';
      return (
        <View key={index} style={{ alignSelf: bool1 ? 'flex-end' : 'flex-start', padding:5, maxWidth:250, backgroundColor: !bool1 ? '#fff' : '#DDE2F5',}} >
          <Text>{elem.mainUser + `: ` + elem.text}</Text> 
          <Text style={{ fontWeight: 'bold' }}>3:17pm</Text>
        </View>
      );
    });
  };

  const SendChatMessage = () => {
    if (!(MessageArrayElement === '')) {
      UpdateMessageArrayThread([...MessageArrayThread, { text: MessageArrayElement, mainUser: 'You', MessageChatIdx: ChosenLatestMessage.threadId }]);
      UpdateMessageArrayElement('');
    }
    return;
  };

  return (
    <View style={{ flex: 1.5}}>
      {/* Inbox page */}
      {!ChosenLatestMessage ? (
        <ScrollView style={{ flex: 1 }}>
          <View><Text></Text></View>
          <View><Text></Text></View>

          <TouchableOpacity style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: '#acbdfb', borderRadius: 5, padding: 5, width: 250 }}>
              <Text> <MaterialCommunityIcons name="magnify" size={12}/> Search Chats </Text>
            </View>
          </TouchableOpacity>

          {messageChatsInfo.map((threads) => (
            <TouchableOpacity key={threads.threadId} style={{ padding: 30, borderColor:'black' }} onPress={() => UpdateChosenLatestMessage(threads)} >
              <View style={{ justifyContent: 'space-between'  ,flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', justifyContent: 'space-evenly' }}> {threads.threadName} </Text>
                <Text style={{fontWeight: 'bold', justifyContent: 'space-evenly' }}>{Math.floor(Math.random() * 20) + 1}m</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{threads.MostCurrMessage} </Text>
                <Text style={{fontWeight: 'bold' }}>{status[Math.floor(Math.random() * 9 - 1)]}</Text>
              </View>
            </TouchableOpacity>

          ))}
        </ScrollView>
      ) :  (
        <View style={{ flex:1, flexDirection: 'column', marginHorizontal: 8, justifyContent: 'flex-start' }}>
          <View><Text></Text></View>
          <View style={{ backgroundColor: '#acbdfb', paddingVertical: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => UpdateChosenLatestMessage('')}>
              <Text style={{ marginLeft: 6, fontSize: 16, color: 'white' }}>⬅ Back</Text>
            </TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight:'800', fontSize: 18, color: 'white' }}> {ChosenLatestMessage.threadName} </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons name="video" size={28} color="white" />
              <MaterialCommunityIcons style={{ marginLeft: 10 }} name="phone" size={22} color="white" />
              <TouchableOpacity onPress={displayMenu}>
                <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={{ padding: 16 }}>
            <View style={{ height: 30, padding: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#acbdfb' }}><Text style={{color:'white'}}> TODAY </Text></View>
            <View style={{ padding: 10 }}>
              {DisplayThreadMessage(ChosenLatestMessage.threadId)}
              <Text></Text> 
            </View>


          </ScrollView>

          <View style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor: 'white'}}>
            <MaterialCommunityIcons name="camera-enhance-outline" size={24}/>
            <TextInput
              style={{ flexDirection: 'row', minHeight: 24, backgroundColor: '#acbdfb', width:200, columnGap: 10 }}
              placeholder={"Enter Here"}
              value={MessageArrayElement}
              onChangeText={(text) => UpdateMessageArrayElement(text)}
            />
            <MaterialCommunityIcons name="microphone" size={22} />
            <Text> </Text>
            <MaterialCommunityIcons name="image" size={22} />
            <Text> </Text>
            <MaterialCommunityIcons name="plus-circle" size={22} />
            <Text> </Text>

            <TouchableOpacity onPress={SendChatMessage}>
                <MaterialCommunityIcons name="send" size={25}/>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {BoolMenu && ChosenLatestMessage && ChosenLatestMessage.EventBool && (
            <View style={{ position: 'absolute', top: 85, backgroundColor: 'grey', zIndex: 2, right:0 }}>
              <TouchableOpacity style={{borderBottomWidth: 1, width: 58, zIndex: 10  }} onPress={displayMenu}>
                <Text>Leave event</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderBottomWidth: 1, width: 58, zIndex: 10  }} onPress={displayMenu}>
                <Text>View Event Attendees</Text>
              </TouchableOpacity>
            </View>
      )}
     

      {BoolMenu && !ChosenLatestMessage.EventBool && ( <View style={{ position: 'absolute', top: 95, right: 0, backgroundColor: 'grey', zIndex: 2 }}>
              <TouchableOpacity style={{borderBottomWidth: 1, width: 58, zIndex: 10  }} onPress={displayMenu}>
                <Text>Report</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{borderBottomWidth: 1, width: 58, zIndex: 10  }}  onPress={displayMenu}>
                <Text>Block</Text>
              </TouchableOpacity>
            </View>
         
      )}
    </View>
  );
}

export default MessageHomeScreen;