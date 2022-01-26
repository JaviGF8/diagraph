import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Hint, LineMarkSeries, XAxis, XYPlot, YAxis } from 'react-vis';

import styles from './styles';

const TimeSeries = ({ data, height, width }) => {
  const theme = useTheme();
  const [hoveredNode, setHoveredNode] = useState();

  return (
    <div css={styles.timeseries(theme)}>
      <XYPlot
        height={height}
        margin={{ left: 100, bottom: 100 }}
        onMouseLeave={() => setHoveredNode()}
        width={width - 80}
        xType="ordinal"
      >
        <XAxis tickLabelAngle={-90} style={{ fontSize: theme.fonts.sm }} />
        <YAxis style={{ fontSize: theme.fonts.sm }} />
        <LineMarkSeries
          data={data || []}
          onNearestXY={(el) => {
            setHoveredNode(el);
          }}
          onValueClick={(el) => {
            setHoveredNode(el);
          }}
          stroke={theme.colors.primary}
          strokeWidth={2}
          style={{
            fill: 'transparent',
            strokeLinejoin: 'round',
          }}
        />
        {hoveredNode && (
          <Hint
            getX={(d) => d.x}
            getY={(d) => d.y}
            value={{
              date: hoveredNode.x,
              total: hoveredNode.y,
            }}
          />
        )}
      </XYPlot>
    </div>
  );
};

TimeSeries.defaultProps = {
  data: undefined,
  height: undefined,
  width: undefined,
};

TimeSeries.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  width: PropTypes.number,
};

export default TimeSeries;
