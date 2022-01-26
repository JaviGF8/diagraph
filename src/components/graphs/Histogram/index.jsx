import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Hint, VerticalBarSeries, XAxis, XYPlot, YAxis } from 'react-vis';

import styles from './styles';

const Histogram = ({ data, height, width }) => {
  const theme = useTheme();
  const [hoveredNode, setHoveredNode] = useState();

  return (
    <div css={styles.histogram(theme)}>
      <XYPlot
        height={height}
        margin={{ left: 80, bottom: 100 }}
        onMouseLeave={() => setHoveredNode()}
        stackBy="y"
        width={width - 80}
        xType="ordinal"
      >
        <XAxis tickLabelAngle={-45} style={{ fontSize: theme.fonts.sm }} />
        <YAxis style={{ fontSize: theme.fonts.sm }} />
        {data.map((dat, idx) => (
          <VerticalBarSeries
            color={Object.values(theme.colors)[idx]}
            key={dat.x}
            data={dat}
            onValueClick={(el) => {
              setHoveredNode(el);
            }}
            onValueMouseOver={(el) => {
              setHoveredNode(el);
            }}
          />
        ))}
        {hoveredNode && (
          <Hint
            getX={(d) => d.x}
            getY={(d) => d.y}
            value={{
              repository: hoveredNode.x,
              total: hoveredNode.y,
            }}
          />
        )}
      </XYPlot>
    </div>
  );
};

Histogram.defaultProps = {
  data: undefined,
  height: undefined,
  width: undefined,
};

Histogram.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Histogram;
