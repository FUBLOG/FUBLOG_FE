import styled from 'styled-components';

export const NotificationContainer = styled.div`
  padding: 8px;

  .custom-tabs .ant-tabs-nav .ant-tabs-tab {
    color: #352F44;
    font-size: 20px;
    font-weight: bold;
  }

  .custom-tabs .ant-tabs-nav .ant-tabs-tab-active {
    color: #352F44 !important;
  }

  .notification-item, .friend-item {
    padding: 12px;
  }

  .notification-item:hover {
    background-color: #B9B4C7;
    cursor: pointer;
  }

  .friend-item .ant-list-item-meta-title {
    font-weight: normal;
  }

  .friend-item span {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const TabContent = styled.div`
  height: 420px;
  overflow-y: auto;
  padding: 5px;

  .ant-list-item-meta-title {
    font-size: 16px;
  }

  .ant-list-item-meta-description {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }

  button {
    background-color: #5C5470;
    border: none;
    color: #FAF0E6;
    padding: 6px 16px;
    cursor: pointer;
    border-radius: 2px;
    margin-right: 8px;

    &:hover {
      background-color: #352F44;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;
