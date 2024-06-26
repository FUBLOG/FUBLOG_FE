import styled from "styled-components";

export const NotificationContainer = styled.div`
  padding: 0px;

  .custom-tabs .ant-tabs-nav .ant-tabs-tab {
    color: #352f44;
    font-size: 20px;
    font-weight: bold;
  }

  .custom-tabs .ant-tabs-nav .ant-tabs-tab-active {
    color: #352f44 !important;
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

  .notification-item:hover,
  .friend-item:hover {
    background-color: #fff;
    opacity: 0.7;
  }

  .friend-item .ant-list-item-meta-title {
    display: flex;
    align-items: center;
  }

  .friend-item .ant-list-item-meta-title span {
    display: inline;
    white-space: nowrap;
    font-weight: normal;
  }

  .friend-item .ant-list-item-meta-description {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 8px;
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
  .ant-list .ant-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 15px;
    color: rgba(0, 0, 0, 0.88);
    margin: 0px;
  }
  .ant-modal .ant-modal-content {
    position: relative;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    pointer-events: auto;
    padding: 4px;
  }
  .ant-btn-default {
    background: #b9b4c7;
    border-color: #4c3bcf;
    color: rgba(0, 0, 0, 0.88);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
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
