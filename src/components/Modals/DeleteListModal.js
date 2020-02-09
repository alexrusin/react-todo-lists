import React from 'react'

export default function DeleteListModal({setLists, list, onCloseModal}) {

    const handleDeleteList = () => {
        window.axios.delete(process.env.REACT_APP_API_URL + '/api/lists/' + list.id)
        .then((response) => {
            setLists(response.data.lists);
            onCloseModal();
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div className="mb-4">
                <div className="text-xl">Delete</div>
            </div>
            <div className="mb-8">
                <div>Are you sure you want to delete <span className="font-semibold">{list.name}</span>? This will delete all tasks in that list</div>
            </div>
            <div className="flex justify-center">
                <button 
                type="button"
                className="bg-red-400 rounded p-2 font-bold text-white text-sm mr-2"
                onClick={handleDeleteList}
                >Delete</button>
            </div>
        </>
    )
}
