// import React, {useState} from 'react';
// import {ChatState} from "../../../../context/ChatProvider";
// import {useHistory} from "react-router-dom";
//
//
// function SideDrawer() {
//     const [search, setSearch] = useState("");
//     const [searchResult, setSearchResult] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [loadingChat, setLoadingChat] = useState(false);
//
//     const {
//         setSelectedChat,
//         user,
//         notification,
//         setNotification,
//         chats,
//         setChats,
//     } = ChatState();
//
//     // const toast = useToast();
//     // const { isOpen, onOpen, onClose } = useDisclosure();
//     // const history = useHistory();
//
//
//
//     const accessChat = async (userId) => {
//         console.log(userId);
//
//         try {
//             setLoadingChat(true);
//             const config = {
//                 headers: {
//                     "Content-type": "application/json",
//                     Authorization: `Bearer ${user.token}`,
//                 },
//             };
//             const { data } = await axios.post(`/api/chat`, { userId }, config);
//
//             if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
//             setSelectedChat(data);
//             setLoadingChat(false);
//             onClose();
//         } catch (error) {
//             toast({
//                 title: "Error fetching the chat",
//                 description: error.message,
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//                 position: "bottom-left",
//             });
//         }
//     };
//
//     return (
//         <>
//            hi
//
//         </>
//     );
// }
//
// export default SideDrawer;
