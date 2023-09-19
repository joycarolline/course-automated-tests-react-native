import React from 'react';
import {Modal, Text, View, StyleSheet, Pressable, Image} from 'react-native';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const About = ({visible, onClose}: IProps) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View style={styles.overlay} />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.title}>Sobre</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onClose}>
                <Text>
                  <Image source={require('../../assets/Close.png')} />
                </Text>
              </Pressable>
            </View>
            <Text style={styles.modalText}>
              Este aplicativo foi desenvolvido pela turma do curso de
              capacitação em teste unitários da Taking Education em 2023.2.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  centeredView: {
    height: '100%',
    width: '100%',
    display: 'flex',
    marginTop: 22,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F6F5F5',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 13,
  },
  title: {
    fontSize: 20,
  },
  buttonClose: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 14,
    textAlign: 'left',
  },
});
