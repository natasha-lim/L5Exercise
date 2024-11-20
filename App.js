// //=======================Exercise 1=========================
// import React from 'react';
// import {View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
//
// const datasource = [
//   {key:'a'},
//   {key:'b'},
//   {key:'c'},
//   {key:'d'},
//   {key:'e'},
//   {key:'f'},
//   {key:'g'},
//   {key:'h'},
//   {key:'i'},
//   {key:'j'},
//   {key:'k'},
//   {key:'l'},
//   {key:'m'},
//   {key:'n'},
//   {key:'o'},
//   {key:'p'},
//   {key:'q'},
//   {key:'r'},
//   {key:'s'},
//   {key:'t'},
//   {key:'u'},
//   {key:'v'},
//   {key:'w'},
//   {key:'x'},
//   {key:'y'},
//   {key:'z'}
// ];
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth:1
//   },
//
//   textStyle: {
//     fontSize:15,
//     margin:10,
//     textAlign:"left"
//   }
//
// })
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   )
// }
//
// const App = () => {
//   return (
//       <View style={{marginBottom: 20}}>
//         <StatusBar hidden={true} />
//         <FlatList data={datasource} renderItem={renderItem} />
//       </View>
//   );
// };
//
// export default App;

//==========================Exercise 2=====================
import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar, SectionList} from 'react-native';

const datasource = [
  {data: [
      {key:'a'},
      {key:'e'},
      {key:'i'},
      {key:'o'},
      {key:'u'},
    ],
  title:"Vowels", bgColour: 'yellow'},

  {data: [
      {key:'b'},
      {key:'c'},
      {key:'d'},
      {key:'f'},
      {key:'g'},
      {key:'h'},
      {key:'j'},
      {key:'k'},
      {key:'l'},
      {key:'m'},
      {key:'n'},
      {key:'p'},
      {key:'q'},
      {key:'r'},
      {key:'s'},
      {key:'t'},
      {key:'v'},
      {key:'w'},
      {key:'x'},
      {key:'y'},
      {key:'z'},
    ],
    title:"Consonants", bgColour: 'lightblue'},
];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth:1
  },

  textStyle: {
    fontSize:15,
    margin:10,
    textAlign:"left"
  },

  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
    fontWeight: 'bold'
  }

})

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  )
}

const App = () => {
  return (
      <View style={{marginBottom: 20}}>
        <StatusBar hidden={true} />
        <SectionList sections={datasource} renderItem={renderItem}
        renderSectionHeader={({section:{title, bgColour}}) => (
            <Text style={[styles.headerText, {backgroundColor: bgColour}]}>{title}</Text>
            )}
            />
      </View>
  );
};

export default App;


