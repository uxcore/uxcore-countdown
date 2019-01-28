/**
 * Countdown Component for uxcore
 * @author qihan.lqh
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactCountdown from 'react-countdown-now';
import rendererMapping from './renderer';

class Countdown extends React.Component {
  static defaultProps = {
    prefixCls: 'uxcore-countdown',
    className: undefined,
    daysInHours: false,
    renderer: undefined,
    zeroPadDays: 1,
    locale: 'zh_CN',
    type: 'normal',
  };

  static propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    daysInHours: PropTypes.bool,
    zeroPadDays: PropTypes.number,
    renderer: PropTypes.func,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.number])
      .isRequired,
    type: PropTypes.oneOf(['normal', 'seconds', 'days']),
    locale: PropTypes.oneOf(['zh_CN', 'en_US']),
  };

  static displayName = 'Countdown';

  getRenderProps = () => {
    const {
      type, daysInHours, renderer, className, prefixCls, ...others
    } = this.props;
    return {
      ...others,
      renderer: renderer || this.getRendererByType(type),
      daysInHours: (type !== 'seconds' && type !== 'days') || daysInHours,
    };
  }

  getRendererByType = (type) => {
    const { locale } = this.props;
    let renderer = rendererMapping[type];
    if (!renderer) {
      renderer = rendererMapping.normal;
    }
    return (args) => {
      const { completed } = args;
      const { children } = this.props;
      if (completed && children) {
        return React.cloneElement(children);
      }
      return renderer(args, locale);
    };
  }

  render() {
    const {
      className, prefixCls,
    } = this.props;
    return (
      <span className={classnames({
        [`${prefixCls}`]: true,
        [`${className}`]: !!className,
      })}
      >
        <ReactCountdown {...this.getRenderProps()} />
      </span>
    );
  }
}

export default Countdown;
