import React from 'react';
import i18n from './i18n';

const rendererMapping = {
  normal: ({ formatted }) => {
    const {
      hours, minutes, seconds,
    } = formatted;
    return (
      <span className="renderer-normal">
        {`${hours}:`}
        {`${minutes}:`}
        {seconds}
      </span>
    );
  },
  seconds: ({ total }) => {
    const seconds = Math.floor(total / 1000);
    return <span className="renderer-second">{`${seconds}s`}</span>;
  },
  days: ({ formatted }, locale) => {
    const {
      days, hours, minutes, seconds,
    } = formatted;
    return (
      <span className="renderer-days">
        {days}
        <span className="renderer-unit">{i18n[locale].days}</span>
        {hours}
        <span className="renderer-unit">{i18n[locale].hours}</span>
        {minutes}
        <span className="renderer-unit">{i18n[locale].minutes}</span>
        {seconds}
        <span className="renderer-unit">{i18n[locale].seconds}</span>
      </span>
    );
  },
};
export default rendererMapping;
