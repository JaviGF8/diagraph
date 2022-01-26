const LOCAL_STORAGE_VALUES = {
  DATES: 'diagraph:dates',
  TABS: 'diagraph:tabs',
};

const getDates = () => {
  const dates = localStorage.getItem(LOCAL_STORAGE_VALUES.DATES);
  if (dates) {
    return JSON.parse(dates).map((date) => new Date(date));
  }
  return [];
};

const setDates = (dates) => localStorage.setItem(LOCAL_STORAGE_VALUES.DATES, JSON.stringify(dates));

const getTabs = () => {
  const tabs = localStorage.getItem(LOCAL_STORAGE_VALUES.TABS);
  if (tabs) {
    return JSON.parse(tabs);
  }
  return [];
};

const setTabs = (tabs) => localStorage.setItem(LOCAL_STORAGE_VALUES.TABS, JSON.stringify(tabs));

export default { getDates, getTabs, setDates, setTabs };
