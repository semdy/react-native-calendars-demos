import React, {PureComponent} from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {Button} from '../../components/Button';

export class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.onPressDemo1 = this.onPressDemo1.bind(this);
    this.onPressDemo2 = this.onPressDemo2.bind(this);
    this.onPressDemo3 = this.onPressDemo3.bind(this);
    this.onPressDemo4 = this.onPressDemo4.bind(this);
    this.onPressDemo5 = this.onPressDemo5.bind(this);
    this.onPressDemo6 = this.onPressDemo6.bind(this);
    this.onPressDemo7 = this.onPressDemo7.bind(this);
  }

  _onPressDemo(pageName) {
    const {navigation} = this.props;
    navigation.navigate(pageName);
  }

  onPressDemo1() {
    this._onPressDemo('Demo1');
  }

  onPressDemo2() {
    this._onPressDemo('Demo2');
  }

  onPressDemo3() {
    this._onPressDemo('Demo3');
  }
  onPressDemo4() {
    this._onPressDemo('Demo4');
  }
  onPressDemo5() {
    this._onPressDemo('Demo5');
  }
  onPressDemo6() {
    this._onPressDemo('Demo6');
  }
  onPressDemo7() {
    this._onPressDemo('Demo7');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text={'Demo1'} onPress={this.onPressDemo1}/>
        <Button text={'Demo2'} style={styles.demoMargin} onPress={this.onPressDemo2}/>
        <Button text={'Demo3'} style={styles.demoMargin} onPress={this.onPressDemo3}/>
        <Button text={'Demo4'} style={styles.demoMargin} onPress={this.onPressDemo4}/>
        <Button text={'Demo5'} style={styles.demoMargin} onPress={this.onPressDemo5}/>
        <Button text={'Demo6'} style={styles.demoMargin} onPress={this.onPressDemo6}/>
        <Button text={'Demo7'} style={styles.demoMargin} onPress={this.onPressDemo7}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  demoMargin: {
    marginTop: 20
  }
});
