import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './style';
import strings from '../strings/fgtsCalculate';

class FgtsCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '0,00',
      grossSalary: '0,00',
      valueFgts: 0,
      valueWithdraw: '0,00',
      currentValue: [],
    };
  }
  saveValue = (percent, toWithdraw, number) => {
    this.setState({
      valueFgts: percent,
      valueWithdraw: toWithdraw.toString().replace('.', ','),
      number: number.toString().replace('.', ','),
      grossSalary: number.toString().replace('.', ','),
      currentValue: parseFloat(number),
    });
  };
  changeValue = number => {
    var txt = number.replace(/\D/g, '');
    txt = (txt / 100).toFixed(2);
    number = txt;
    let percent = 0;
    let toWithdraw = 0;

    switch (true) {
      case number == 0:
        percent = 0;
        toWithdraw = 0;
        this.saveValue(percent, toWithdraw, number);
        break;
      case number <= 500 && number > 0:
        percent = 50;
        toWithdraw = number * 0.5;
        this.saveValue(percent, toWithdraw, number);
        break;
      case number <= 1000 && number > 500.01:
        percent = 40;
        toWithdraw = number * 0.4 + 50;
        this.saveValue(percent, toWithdraw, number);
        break;
      case number <= 5000 && number > 1000.01:
        percent = 30;
        toWithdraw = number * 0.3 + 150;
        this.saveValue(percent, toWithdraw, number);
        break;
      case number <= 10000 && number > 5000.01:
        percent = 20;
        toWithdraw = number * 0.2 + 650;
        this.saveValue(percent, toWithdraw, number);
        break;
      case number <= 15000 && number > 10000.01:
        percent = 15;
        toWithdraw = number * 0.15 + 1150;
        this.saveValue(percent, toWithdraw, number);
        break;
      case number <= 20000 && number > 15000.01:
        percent = 10;
        toWithdraw = number * 0.1 + 1900;
        this.saveValue(percent, toWithdraw, number);
        break;
      case number > 20000.01:
        percent = 5;
        toWithdraw = number * 0.5 + 2900;
        this.saveValue(percent, toWithdraw, number);
        break;
      default:
        this.saveValue(percent, toWithdraw, number);
        break;
    }
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.header}> {strings.header}</Text>
          <Text style={styles.instruction}>{strings.tapYourMoney}</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.changeValue.bind(this)}
            value={`  R$ ${this.state.number}`}
            keyboardType="numeric"
            autoCapitalize="none"
          />
          <Text style={styles.salary}>{strings.salary}</Text>
          <Text style={styles.grossSalary}>
            {`${strings.real} ${this.state.grossSalary}`}
          </Text>
          <Text style={styles.fgtsPercent}>{strings.fgtsValue}</Text>
          <Text style={styles.valuePercent}>
            {`${this.state.valueFgts}${strings.percent}`}
          </Text>
        </View>
        <Text style={styles.withdrawTitle}> {strings.cashoutAvailable} </Text>
        <Text style={styles.withdrawValue}>
          {`${strings.real} ${this.state.valueWithdraw}`}
        </Text>
      </View>
    );
  }
}

export default FgtsCalculator;
