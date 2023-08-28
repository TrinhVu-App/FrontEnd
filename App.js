import { StyleSheet } from 'react-native';
import Navigation from './components/Navigation';
import {AuthProvider} from  './context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
        <Navigation /> 
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
