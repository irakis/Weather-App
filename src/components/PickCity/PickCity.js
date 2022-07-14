import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';
import { useState } from 'react';

const PickCity = ({action}) => {
  const [city, setCity] = useState('');
    console.log('city in PickCity= ',city);
    console.log('action in PickCity=', action);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('fired', action)
    action(city);
  }

  return (
    <form className={styles.pickCityForm} onSubmit={handleSubmit}> 
      <label>
        <TextInput placeholder="Enter city name...." value={city} onChange={e => setCity(e.target.value)} />
      </label>
      <Button>Search</Button>
    </form>
  );
};

export default PickCity;