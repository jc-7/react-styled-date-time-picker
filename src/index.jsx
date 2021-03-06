// @flow
/* eslint-disable import/no-unresolved, import/extensions */
import React, { PureComponent } from 'react';
import { type DateTime } from 'luxon';
/** eslint-enable */

import Modal from './Modal';
import DateTimePicker from './DateTimePicker';

type Props = {
  open: boolean,
  label: string,
  value: DateTime,
  returnValue: DateTime,
  returnState: boolean,
  language: Language,
  onChange: Function,
  onClose: Function,
  labelStyle: Object,
};

class Picker extends PureComponent<Props> {
  handleChange = (date: Date) => {
    this.props.onChange(date);
  }

  render() {
    const {
      open, onClose, value, label, labelStyle, returnValue, returnState,
    } = this.props;
    return open ?
      <Modal onClose={onClose}>
        <DateTimePicker
          language={this.props.language}
          value={value}
          onChange={this.handleChange}
          onClose={onClose}
          label={label}
          labelStyle={labelStyle}
          returnValue={returnValue}
          returnState={returnState}
        />
      </Modal>
      :
      null;
  }
}

export default Picker;
