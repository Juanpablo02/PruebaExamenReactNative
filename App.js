import { Text,Button,View,TextInput } from 'react-native';
import { Touchable, TouchableOpacity } from 'react-native-web';
import { styles,viewChilds } from './assets/styles/styles';

export default function App() {
  return (
    <View style={[styles.container,styles.alignViews]}>
      <Text style={[styles.textTitle]}>Simulador de Credito</Text>
          <View style={[viewChilds.directionContainer]}>
            <View style={[viewChilds.container]}>
              <Text>Nombre: </Text>
              <TextInput></TextInput>
              <Text>Monto Préstamo: </Text>
              <TextInput></TextInput>
              <Text>Número de Cuotas: </Text>
              <TextInput></TextInput>
              
            </View>
            <View style={[viewChilds.container]}>
              <Text>Fecha: </Text>
              <TextInput></TextInput>
              <Text>Tipo Préstamo: </Text>
              <TextInput></TextInput>
              <Text>Total Deuda: </Text>
              <TextInput></TextInput>
            </View>
          </View>
          <View style={[viewChilds.directionContainer]}>
          <View style={[viewChilds.container]}>
          <Text>Total Deuda: </Text>
              <TextInput></TextInput>
            </View>
            <View style={[viewChilds.container]}>
            <Text>Valor de Cuota: </Text>
              <TextInput></TextInput>
            </View>
          </View>
      <View style={[viewChilds.directionContainer,viewChilds.containerButton,styles.alignViews]}>
        <TouchableOpacity style={[viewChilds.button]}>
          <Text style={[viewChilds.textButton]}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[viewChilds.button]}>
          <Text style={[viewChilds.textButton]}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[viewChilds.button]}>
          <Text style={[viewChilds.textButton]}>Limpiar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}