import React, {useState} from 'react'
import Todo from './Todo'
import Modal from 'react-responsive-modal'
import DeleteListModal from './Modals/DeleteListModal'

export default function List({list, setLists}) {
    const [openModal, setOpenModal] = useState(false);

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
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
       
            <div className="rounded bg-gray-400  flex-no-shrink p-2 mr-3">
            <div className="flex justify-between py-1">
                <h3 className="text-sm">{list.name}</h3>
                <svg className="h-4 fill-current text-gray-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/></svg>
            </div>
            <div className="text-sm mt-2">
                {list.Todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
                <p 
                className="mt-3 text-red-600 cursor-pointer"
                onClick={onOpenModal}
                >Delete list</p>
            </div>
            <Modal open={openModal} onClose={onCloseModal} center classNames={modalWidth}>
                <DeleteListModal onCloseModal={onCloseModal} setLists={setLists} list={list} />
            </Modal>
        </div>
        </div>
       
    )
}
