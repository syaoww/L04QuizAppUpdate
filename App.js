import  React, {useState} from 'react';
import { StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  Alert, } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    title: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    image: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 0.8,
        borderColor: 'sienna'
    },
    questionDiv: {
        borderWidth: 1,
        borderColor: '#91754a',
        margin: 10,
        paddingBottom: 10,
        backgroundColor: 'whitesmoke'
    },
    background: {
      backgroundColor: 'wheat',
    },
    margin: {
        marginLeft: 5
    },
});

const PickerQn = ({picture})=> {
  return (
      <View>
        <Image source={picture} style={[styles.image, {width: 370, height:300}]}/>
        <Text style={styles.margin}>
          What is the location in the above photo?
        </Text>
      </View>
  );
};

const InputQn = ({image, label, onChangeText})=> {
  return (
      <View>
        <Image source={image} style={[styles.image, {width: 320, height:350}]}/>
        <Text styles={styles.margin}>{label}</Text>
        <TextInput style={{borderWidth: 1, margin:10, paddingLeft: 10}} onChangeText={onChangeText} />
      </View>
  );
};


const QuizApp = ()=> {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  return (
      <ScrollView style={styles.background}>
        <View style={styles.title}>
          <Icon name={"gamepad"} size={26} color={"#91754a"}/>
          <Text style={styles.titleText}>
            mini quiz
          </Text>
        </View>
        <View style={styles.questionDiv}>
          <PickerQn picture={require('./img/sakura.jpg')}></PickerQn>
          <RNPickerSelect
              onValueChange={(value) => setAnswer1((value))}
              items={[
                { label: 'Fravashi Tree', value: 'Fravashi' },
                { label: 'Sacred Sakura Tree', value: 'Sakura' },
                { label: 'Irminsul Tree', value: 'Irminsul' }
              ]}
          />
        </View>
        <View style={styles.questionDiv}>
          <PickerQn picture={require('./img/dragonspine.jpg')}></PickerQn>
          <RNPickerSelect
              onValueChange={(value) => setAnswer2((value))}
              items={[
                { label: 'Tree of Dreams', value: 'DreamTree' },
                { label: 'Frostbearing Tree', value: 'FrostTree' },
                { label: 'Windrise Tree', value: 'Windrise' }
              ]}
          />
        </View>
        <View style={styles.questionDiv}>
          <PickerQn picture={require('./img/akademiya.jpg')}></PickerQn>
          <RNPickerSelect
              onValueChange={(value) => setAnswer3((value))}
              items={[
                { label: 'Sumeru Akademiya', value: 'Akademiya' },
                { label: 'Knights of Favonius Headquarters', value: 'HQ' },
                { label: 'Fontaine Research Center', value: 'ResearchCenter' }
              ]}
          />
        </View>
        <View style={styles.questionDiv}>
          <InputQn image={require('./img/Paimon.jpg')} label="Who is the character in the above image?" onChangeText={(text) => setAnswer4(text)}/>
        </View>
        <Button onPress={() => {
          const correctAnswer1 = 'Sakura'
          const correctAnswer2 = 'FrostTree'
          const correctAnswer3 = 'Akademiya'
          const correctAnswer4 = 'Paimon'
            let mymessage = ''
            let correctCount = 0;
            if (answer1 == correctAnswer1) {
                correctCount += 1;
            }
            if (answer2 == correctAnswer2) {
                correctCount += 1;
            }
            if (answer3 == correctAnswer3) {
                correctCount += 1;
            }
            if (answer4 == correctAnswer4) {
                correctCount += 1;
            }
            if (correctCount > 1) {
                mymessage = `Well Done! You got ${correctCount} correct!`;
            } else {
                mymessage = `You got ${correctCount} correct. Do better next time :)`;
            }

            Alert.alert(mymessage);}
        }
                title="Submit Answers" color="#91754a">
        </Button>
      </ScrollView>
  );
}

export default QuizApp;