import { useTheme } from '@emotion/react';
import React from 'react';
import { useState } from 'react/cjs/react.development';

import Tabs from 'components/base/Tabs';

import NewTabModal from 'components/NewTabModal';

import styles from './styles';

const initialTabs = [{ className: 'new-tab', color: 'secondary', label: 'New Tab', value: 'add' }];

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [tabs, setTabs] = useState(initialTabs);
  const theme = useTheme();

  const onChangeTab = (value) => {
    if (value === 'add') {
      setShowModal(true);
    } else {
      setActiveTab(value);
    }
  };

  const onAddTab = (label) => {
    const newTabs = [...tabs].splice(0, tabs.length - 1);
    newTabs.push({ label, value: tabs.length - 1 });
    newTabs.push(tabs[tabs.length - 1]);

    setActiveTab(newTabs.length - 2);
    setTabs(newTabs);
  };

  const onCloseTab = (value) => {
    const idx = tabs.findIndex((tab) => tab.value === value);

    if (idx > -1) {
      tabs.splice(idx, 1);
    }
    if (idx <= activeTab) {
      setActiveTab(activeTab - 1);
    }
    const newTabs = tabs.map((tab, idx) => ({ ...tab, value: tab.value === 'add' ? tab.value : idx }));

    setTabs(newTabs);
  };

  return (
    <div css={styles.landing(theme)}>
      <NewTabModal onAccept={onAddTab} onHide={() => setShowModal(false)} show={showModal} />
      <Tabs activeTab={activeTab} clearable onChange={onChangeTab} onClose={onCloseTab} tabs={tabs} />
      <div className="tab-content">{activeTab < 0 ? <div>NO TABS</div> : <div>TAB {activeTab}</div>}</div>
    </div>
  );
};

export default LandingPage;
