import React from 'react';
import {studySetQuery} from './queries';
import API, {graphqlOperation} from '@aws-amplify/api';
import {Alert} from 'react-native';

const QueryContainer = () => {
  React.useEffect(() => {
    API.graphql(
      graphqlOperation(studySetQuery, {id: 763, publishMode: 'PUBLISHED'}),
    )
      .then(res => {
        console.log('.....res', res);
        Alert.alert(JSON.stringify(res));
      })
      .catch(err => {
        console.log('......er', err);
        Alert.alert(JSON.stringify(err));
      });
  }, []);

  return null;
};

export default QueryContainer;
