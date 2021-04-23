import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';


import { Header } from '../components/Header';
import { PlantProps, loadPlant } from '../libs/storage';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { Load } from '../components/Load';

import waterDropImg from'../assets/waterdrop.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatering, setNextWatering] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStored = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStored[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatering(
        `Regue sua ${plantsStored[0].name} daqui a ${nextTime}`
      )

      setMyPlants(plantsStored);
      setLoading(false);
    }
    loadStorageData();
  }, []);

  if (loading)
    return <Load />

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterDropImg} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>
          {nextWatering}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item}/>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    // paddingTop: 50,
    backgroundColor: colors.background
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  spotlightImage: {
    width: 60,
    height: 60
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
    lineHeight: 25
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  }

})
