import styled from 'styled-components';

export const NotificationContainer = styled.div`
  padding: 40px 0px;

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

  .notification-item:hover, .friend-item:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  .friend-item .ant-list-item-meta-title {
    display: flex;
    align-items: center;
  }

  .friend-item .ant-list-item-meta-title span {
    display: inline;
    white-space: nowrap;
  }

  .friend-item .ant-list-item-meta-description {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const TabContent = styled.div`
  height: 420px;
  overflow-y: auto;
  padding: 5px;

  .ant-list-item-meta-title {
    font-size: 14px;
  }

  .ant-list-item-meta-description {
    font-size: 10px;
    display: flex;
    justify-content: space-between;
   
  }

  button {
    background-color: #5C5470;
    border: none;
    color: #FAF0E6;
    padding: 6px 14px;
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
  justify-content: flex-end;
  padding: 10px 0;
  margin-top:40px;
`;
