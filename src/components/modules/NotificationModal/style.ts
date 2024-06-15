import styled from 'styled-components';

export const NotificationContainer = styled.div`
  padding: 5px;

  .custom-tabs .ant-tabs-nav .ant-tabs-tab {
    color: #352F44;
    font-size: 20px;
    font-weight: bold;
  }

  .custom-tabs .ant-tabs-nav .ant-tabs-tab-active {
    color: #352F44 !important; 
  }

  .notification-item:hover {
    background-color: #B9B4C7; 
    cursor: pointer;
    back-ground:
  }
`;

export const TabContent = styled.div`
  height: 420px;
  overflow-y: auto;
  padding: 5px;

  .ant-list-item-meta-title {
    font-size: 16px;
    font-weight: bold;
  }

  .ant-list-item-meta-description {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: #5C5470;
    border: none;
    color: #FAF0E6;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
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
`;
