import styled from "styled-components";

export const NotificationContainer = styled.div`
  padding: 5px;

  .custom-tabs .ant-tabs-nav .ant-tabs-tab {
    color: #352f44;
    font-size: 20px;
    font-weight: bold;
  }

  .custom-tabs .ant-tabs-nav .ant-tabs-tab-active {
    color: #352f44 !important;
  }

  .notification-item:hover,
  .friend-item:hover {
    background-color: #b9b4c7;
    cursor: pointer;
  }
  .notification-item,
  .friend-item {
    padding: 8px 16px;
    border-radius: 6px;
    margin-bottom: 10px;
    transition: background-color 0.3s, box-shadow 0.3s;
    background-color: transparent;
  }

  .notification-unread .ant-list-item-meta span {
    font-weight: bold;
  }

  .notification-read .ant-list-item-meta span {
    font-weight: normal;
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

  .ant-list-item-meta-description span {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    color: #a0a0a0;
  }

  button {
    background-color: #5c5470;
    border: none;
    color: #faf0e6;
    padding: 8px 16px; /* Tăng kích thước của nút */
    cursor: pointer;
    border-radius: 4px;
    margin-right: 8px;

    &:hover {
      background-color: #352f44;
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
  padding-top: 10px;
  margin-top: 16px;
`;
export const MarkButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 16px;
  margin-bottom: 10px;
`;
