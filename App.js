import { StyleSheet } from 'react-native';
import Navigation from './components/Navigation';
import { ContextAPI, APIProvider} from  './context/ContextAPI'

export default function App() {
  return (
    <APIProvider>
        <Navigation /> 
    </APIProvider>
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
