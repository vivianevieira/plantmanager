import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import waterDropImg from'../assets/waterdrop.png'
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri=""
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          Nome da planta
        </Text>
        <Text style={styles.plantAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur esse explicabo nemo nesciunt quis provident.
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image
            source={waterDropImg}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Ecolha o melhor horário para ser lembrado:
        </Text>

        <Button
          title="Cadastrar planta"
          onPress={() => {}}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape

  },
  plantInfo: {

  },
  plantName: {

  },
  plantAbout: {

  },
  controller: {

  }

});
