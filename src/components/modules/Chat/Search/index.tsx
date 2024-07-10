import { getFriendList } from "@/services/api/friend";
import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { getConversation } from "@/services/api/chat";
import useConversation from "@/hooks/useConversation";
const SearchChat = () => {
    const [search, setSearch] = useState("");
    const [options, setOptions] = useState([]) as any[];
    const { setSelectedConversation } = useConversation();
    const renderData = (dataList: any) => {
        return dataList?.map((item: any) => {
            return {
                value: item.displayName,
                label: (
                    <div>
                        <img src={item?.userInfo?.avatar} alt="" style={{ width: 24, height: 24, borderRadius: 12 }} />
                        <span style={{ marginLeft: 10 }}>{item.displayName}</span>
                    </div>
                ),
                key: item._id,
                item: item
            }
        });
    }
    const handleClick = async (value: any, option: any) => {
        setSearch("");
        const conversation = await getConversation(option?.key).then(
            (res: any) => res?.metadata
        );
        if (conversation !== null) {
            setSelectedConversation(conversation);
        } else {
            setSelectedConversation({
                participants: [
                    {
                        _id: option?.key,
                        displayName: option?.item?.displayName,
                        avatar: option?.item?.userInfo?.avatar,
                    },
                ],
                messages: [],
                unReadCount: 0,
                lastMessage: {},
                _id: 404,
            });
        }
    }
    const fiterData = (option: any, search: string) => {
        const value = option.value.trim().toLowerCase();
        if (!value) return false;
        const regex = new RegExp(search.toLowerCase(), "g");
        return value.match(regex);

    }
    const fetchFriendList = async () => {
        // Fetch friend list
        const res = await getFriendList();
        if (res) {
            const data = renderData(res?.metadata?.friendList)
            setOptions(data);
        }
    }
    useEffect(() => {
        setOptions([]);
        fetchFriendList();
    }, []);

    return (
        <AutoComplete
            popupMatchSelectWidth={200}
            // hide scrollbar
            style={{ width: 200}}
            options={options}
            filterOption={(inputValue, option) => fiterData(option, inputValue)}
            onSearch={(value: string) => setSearch(value)}
            onSelect={handleClick}
            value={search}
            notFoundContent={<NotFound />}
        >
            <Input.Search
                size="large"
                placeholder="Tìm kiếm bạn bè..."
                style={{ backgroundColor: "#FAF0E6", borderColor: "#5C5470" }}

            />
        </AutoComplete>
    );
}

const NotFound = () => {
    return (<span style={{
        display: "block",
        textAlign: "center",
        color: "#5C5470"
    
    }}>Không tìm thấy kết quả</span>)
}
export default SearchChat;