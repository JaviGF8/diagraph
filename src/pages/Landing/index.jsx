import { useTheme } from '@emotion/react';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import Tabs from 'components/base/Tabs';

import NewTabModal from 'components/NewTabModal';
import TabContent from 'components/TabContent';

import useAppContext from 'hooks/useAppContext';

import styles from './styles';

const addTab = { className: 'new-tab', color: 'secondary', label: 'Add Tab', value: 'add' };

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const { tabs, setTabs } = useAppContext();
  const theme = useTheme();

  const onChangeTab = (value) => {
    if (value === 'add') {
      setShowModal(true);
    } else {
      setActiveTab(value);
    }
  };

  const onAddTab = (label, metrics) => {
    const newTabs = [...tabs];
    newTabs.push({ label, value: tabs.length, metrics });

    setActiveTab(newTabs.length - 1);
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

  useEffect(() => {
    setActiveTab(tabs?.length ? 0 : -1);
  }, [tabs]);

  return (
    <div css={styles.landing(theme)}>
      <NewTabModal onAccept={onAddTab} onHide={() => setShowModal(false)} show={showModal} />
      <Tabs activeTab={activeTab} clearable onChange={onChangeTab} onClose={onCloseTab} tabs={[...tabs, addTab]} />
      <div className="tabs-content">
        {activeTab < 0 && <div>NO TABS</div>}
        {activeTab > -1 &&
          tabs.map((tab, idx) => (
            <div key={tab.value} className={classNames('tab-content', { active: idx === activeTab })}>
              <TabContent name={tab.label} metrics={tab.metrics} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LandingPage;
