// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import axios from 'axios';
// import Geolocation from 'react-native-geolocation-service';

// const LandingScreen = () => {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [selectedCityData, setSelectedCityData] = useState(null);
//   const [aqiData, setAqiData] = useState(null);
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   useEffect(() => {
//     fetchUserLocation();
//   }, []);

//   const fetchUserLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLatitude(latitude);
//         setLongitude(longitude);
//         fetchAQIDataByLocation(latitude, longitude);
//       },
//       (error) => {
//         console.error('Error getting user location:', error);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const fetchAQIDataByLocation = async (latitude, longitude) => {
//     try {
//       setLoading(true);
//       setError('');
//       const response = await axios.get(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=67ffea6955169a51ab80551f124d39991b64926c`);
//       const { data } = response;
//       console.log('AQI data by location:', data);
//       setAqiData(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching AQI data by location:', error);
//       setError('Error fetching AQI data. Please try again.');
//       setLoading(false);
//     }
//   };

//   const searchCities = async () => {
//     try {
//       setLoading(true);
//       setError('');
//       const response = await axios.post(`https://search.waqi.info/nsearch/world/${query}`);
//       const { results } = response.data;
//       setSearchResults(results);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error searching cities:', error);
//       setError('Error searching cities. Please try again.');
//       setLoading(false);
//     }
//   };

//   const fetchNearestAQI = async (xNumber) => {
//     try {
//       setLoading(true);
//       setError('');
//       const response = await axios.post(`https://mapq.waqi.info/mapq/nearest?from=${xNumber}`);
//       const { data } = response;
//       console.log('data---->', data);
//       setSelectedCityData(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching nearest AQI:', error);
//       setError('Error fetching nearest AQI. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>City Search</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter City Name"
//         value={query}
//         onChangeText={setQuery}
//       />
//       <Button title="Search" onPress={searchCities} />
//       {loading && <Text>Loading...</Text>}
//       {error !== '' && <Text style={styles.error}>{error}</Text>}
//       <ScrollView style={styles.scrollView}>
//         {searchResults.length > 0 && (
//           <View style={styles.resultsContainer}>
//             <Text style={styles.resultsHeading}>Search Results:</Text>
//             {searchResults.map((result, index) => (
//               <TouchableOpacity key={index} onPress={() => { setSelectedCity(result.n[0]); fetchNearestAQI(result.x); }}>
//                 <Text style={styles.city}>{result.n[0]}, {result.n[1]}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}
//       </ScrollView>
//       {selectedCity && selectedCityData && (
//         <View style={styles.aqiContainer}>
//           <Text style={styles.aqiHeading}>AQI for {selectedCity}:</Text>
//           <Text>AQI: {selectedCityData.d[0].v}</Text>
//           <Text>Last Updated: {new Date(selectedCityData.d[0].t * 1000).toLocaleString()}</Text>
//         </View>
//       )}
//       {aqiData && !selectedCity && (
//         <View style={styles.aqiContainer}>
//           <Text style={styles.aqiHeading}>AQI for Your Location:</Text>
//           <Text>AQI: {aqiData.data.aqi}</Text>
//           <Text>Last Updated: {aqiData.data.time.s}</Text>
//           <Text>Latitude: {latitude}</Text>
//           <Text>Longitude: {longitude}</Text>
//           <Text>City Name: {aqiData.data.city?.name}</Text>
//           <Text>Weather Station: {aqiData.data.city?.station?.name}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//     width: '100%',
//   },
//   error: {
//     color: 'red',
//     marginTop: 10,
//   },
//   scrollView: {
//     maxHeight: 200,
//   },
//   resultsContainer: {
//     marginBottom: 20,
//   },
//   resultsHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   city: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: 'blue',
//   },
//   aqiContainer: {
//     marginTop: 20,
//   },
//   aqiHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default LandingScreen;
import React from 'react';
import LandingScreen from './src/screens/LandingScreen';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LandingScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
