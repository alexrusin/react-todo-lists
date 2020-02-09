import React, { useState, useEffect } from 'react'
import Modal from 'react-responsive-modal'
import List from './List'
import CreateListModal from './Modals/CreateListModal'


const Lists = (props) => {
    const router = props.history;
    const [userName, setUserName] = useState('');
    const [lists, setLists] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        window.axios.get(process.env.REACT_APP_API_URL + '/api/lists')
        .then((response) => {
            setUserName(response.data.userName);
            setLists(response.data.lists);
        }).catch((error) => {
            if (error.response.status && error.response.status === 401) {
                router.push('/login');
            } else {
                console.log(error);
            }
            
        });
    }, [router]);

    const handleLogout = () => {
        window.axios.post(process.env.REACT_APP_API_URL + '/api/users/logout').then((response) => {
            localStorage.removeItem('token');
            router.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    const onOpenModal = () => {
        setOpenModal(true);
    };
 
    const onCloseModal = () => {
        setOpenModal(false)
    };

    const modalWidth = {
       modal: "w-full md:w-1/2 lg:w-1/3"
    };

    return (
    <>
    <div className="bg-blue w-full h-screen font-sans">
    <div className="flex p-2 bg-blue-600 items-center">
        <div className="mx-0 md:mx-12 flex">
            <h1 className="text-blue-100 text-xl flex items-center font-sans italic">
                <svg className="fill-current h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z"/></svg>
                To Do Lists
            </h1>
            <button 
            className="bg-blue-400 rounded h-8 w-8 font-bold text-white text-sm ml-2"
            onClick={onOpenModal}>+</button>
        </div>
        <div className="flex items-center ml-auto">
            <div className="text-lg mr-4 text-blue-100">Welcome {userName}</div>
            <button 
            className="bg-blue-400 rounded p-2 font-bold text-white text-sm mr-2"
            onClick={handleLogout}
            >Log Out</button>
        </div>
    </div>
    <div className="flex-grow container mx-auto px-4 pt-6 pb-8">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {lists.map((list) => <List list={list} key={list.id} setLists={setLists}/>)}
        </div>       
    </div>
</div>
    <Modal open={openModal} onClose={onCloseModal} center classNames={modalWidth}>
        <CreateListModal setLists={setLists} />
    </Modal>
    </>
    )
}

export default Lists;