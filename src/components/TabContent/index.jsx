import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';

import config from 'config';

import KpiBox from 'components/base/KpiBox';
import Loader from 'components/base/Loader';

import Histogram from 'components/graphs/Histogram';
import TimeSeries from 'components/graphs/TimeSeries';

import useAppContext from 'hooks/useAppContext';
import useWindowSize from 'hooks/useWindowSize';

import styles from './styles';

const TabContent = ({ metrics, name }) => {
  const theme = useTheme();
  const [histogramAvg, setHistogramAvg] = useState(0);
  const [histogramData, setHistogramData] = useState([]);
  const [timeSeriesAvg, setTimeSeriesAvg] = useState(0);
  const [timeSeriesData, setTimeSeriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [error, setError] = useState();
  const { dates } = useAppContext();
  const { width, lgOrSmaller, mdOrSmaller } = useWindowSize();

  const reduceValues = (part, res) => {
    const { values } = res;
    if (!values[0]) {
      return part;
    }
    if (typeof values[0] === 'string') {
      return part + Number.parseInt(values[0].substring(0, values[0].length - 1), 10);
    }
    return part + values[0];
  };

  const calculateDatas = (data) => {
    const newHistogram = [];
    let newTimeseries = [];
    let sumHistogram = 0;
    let sumTimeseries = 0;
    data.forEach(({ for: forVal, values }) => {
      if (forVal.repositories?.length === 1) {
        const y = values.reduce(reduceValues, 0);
        sumHistogram += y;
        newHistogram.push([
          {
            x: forVal.repositories[0].replace('github.com/athenianco/', ''),
            y,
          },
        ]);
      } else {
        newTimeseries = values.map((val) => {
          let y = val.values?.[0] || 0;
          if (typeof y === 'string') {
            y = Number.parseInt(y.substring(0, y.length - 1), 10);
          }
          sumTimeseries += y;
          return {
            x: val.date,
            y,
          };
        });
      }
    });
    setHistogramData(newHistogram);
    setTimeSeriesData(newTimeseries);
    setHistogramAvg((sumHistogram / newHistogram.length).toFixed(2));
    setTimeSeriesAvg((sumTimeseries / newTimeseries.length).toFixed(2));
  };

  useEffect(() => {
    if (
      metrics &&
      dates?.length === 2 &&
      dates[0] &&
      dates[1] &&
      dates[0] !== dates[1] &&
      (dates[0] !== dateFrom || dates[1] !== dateTo)
    ) {
      setLoading(true);
      config.api
        .calculatePRMetrics(metrics, dates[0], dates[1])
        .then((res) => {
          setDateFrom(dates[0]);
          setDateTo(dates[1]);
          calculateDatas(res.data.calculated);
          setLoading(false);
        })
        .catch((err) => {
          setHistogramData([]);
          setTimeSeriesData([]);
          setError(err);
          setLoading(false);
        });
    }
  }, [metrics, dates]);

  const graphWidth = lgOrSmaller ? width : width / 2;
  const graphHeight = mdOrSmaller ? 300 : 500;

  return (
    <div css={styles.metrics(theme)}>
      <h3>{name}</h3>
      {loading && <Loader />}
      {!loading && !error && (
        <Fragment>
          <div className="tab-graphics">
            <TimeSeries data={timeSeriesData} height={graphHeight} width={graphWidth} />
            <Histogram data={histogramData} height={graphHeight} width={graphWidth} />
          </div>
          <div className="tab-kpi">
            <KpiBox text="Average" value={timeSeriesAvg} />
            <KpiBox text="Avg per repo" value={histogramAvg} />
          </div>
        </Fragment>
      )}
      {error && !loading && <div className="error">{error?.message}</div>}
    </div>
  );
};

TabContent.propTypes = {
  metrics: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TabContent;
