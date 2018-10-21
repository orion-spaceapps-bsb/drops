import { createStackNavigator } from 'react-navigation';
import Boarding from './components/boarding';
import Dashboard from './components/dashboard';
import Impact from './components/impact';
import Report from './components/report';
import HospitalSuggestion from './components/suggestion/hospital/index';
import EducationSuggestion from './components/suggestion/education/index';
import SaneamentSuggestion from './components/suggestion/saneament/index';

const Root = createStackNavigator({
  Boarding: { screen: Boarding },
  Dashboard: { screen: Dashboard },
  Impact: { screen: Impact },
  Report: { screen: Report },
  HospitalSuggestion: { screen: HospitalSuggestion },
  EducationSuggestion: { screen: EducationSuggestion },
  SaneamentSuggestion: { screen: SaneamentSuggestion },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default Root;
