import axiosInstance from './axios';

const metricsBody = (metrics, startDate, endDate) => ({
  for: [
    {
      repositories: [
        'github.com/athenianco/athenian-api',
        'github.com/athenianco/athenian-webapp',
        'github.com/athenianco/infrastructure',
        'github.com/athenianco/metadata',
      ],
    },
    {
      repositories: ['github.com/athenianco/athenian-api'],
    },
    {
      repositories: ['github.com/athenianco/athenian-webapp'],
    },
    {
      repositories: ['github.com/athenianco/infrastructure'],
    },
    {
      repositories: ['github.com/athenianco/metadata'],
    },
  ],
  metrics: [metrics],
  date_from: startDate,
  date_to: endDate,
  granularities: ['day'],
  account: 1,
  exclude_inactive: true,
});

const calculatePRMetrics = (metrics, startDate, endDate) =>
  axiosInstance.post('/metrics/pull_requests', metricsBody(metrics, startDate, endDate));

export default {
  calculatePRMetrics,
};
