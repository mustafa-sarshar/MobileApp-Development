import React from "react";
import { View, FlatList } from "react-native";
import GoalItem from "../goal-item";

import styles from "./styles";

const GoalsList = (props) => {
  const { goals, onDeleteGoal } = props;

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        alwayBounceVertical={false}
        keyExtractor={(item, idx) => item._id}
        renderItem={(itemData) => (
          <GoalItem itemData={itemData} onDeleteGoal={onDeleteGoal} />
        )}
      />
    </View>
  );
};

export default GoalsList;
